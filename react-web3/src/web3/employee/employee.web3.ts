import {Web3Handler} from '../web3.handler';
import EmployeesSON from '../../abis/Employees.sol/Employees.json';

const ADDRESS = "0x493e7f9f307C9f42F85C5848Cb74bF58E48F15f9";




type EmployeeModel = {
  name: string;
  id: number;
  age: number;
  city: string;
  note?: string;
  index: number;
};

const win = window as any;

class EmployeeWeb3Handler extends Web3Handler { 

  async getCount(): Promise<any> {
    return this.contract.methods.getCount().call();
  }

  async getEmployees(): Promise<EmployeeModel[]> {
    const employees: EmployeeModel[] = [];
    const data = await this.contract.methods.getEmployees().call();
    for(let i = 0; i < data.length; i += 1) {
      employees.push({
        id: data[i].id,
        city: data[i].city,
        age: data[i].age,
        name: data[i].name,
        note: data[i].note,
        index: i,
      })
    }
    return employees;
  }

  async addEmployee(data: EmployeeModel): Promise<any> {
    return this.contract.methods.add(data.age, data.city, data.name, data.note).send({
      from: win.ethereum.selectedAddress,
    });
  }
}
export default new EmployeeWeb3Handler(EmployeesSON.abi, ADDRESS);;