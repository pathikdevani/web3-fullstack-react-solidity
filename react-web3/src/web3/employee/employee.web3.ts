import {Web3Handler} from '../web3.handler';
import ABI from './employee.abi';

const ADDRESS = "0x7Ac9E23B7b00cC3BF2BacC780C0E7152FA02b97e";


type EmployeeModel = {
  name: string;
  id: number;
  age: number;
  city: string;
  note?: string;
  index: number;
};


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
}
export default new EmployeeWeb3Handler(ABI, ADDRESS);;