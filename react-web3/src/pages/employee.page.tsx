import React, { useCallback, useEffect, useState } from 'react';

import {employeeWeb3} from '../web3/index.web3';
import EmployeeCard from '../components/employee.card';
import { web3Helper } from '../web3/web3.helper';
import Web3Wrapper from '../components/web3.wrapper';
import { message, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EmployeeAdd from '../components/employee.add';

function EmployeePage() {
  const [employees, setEmployees] = useState([] as any);
  const [isAddModalOpen, setIsModalOpen] = useState(false);

  const loadWeb3 = useCallback(async() => {
    await employeeWeb3.load();
    const list: any[] = await employeeWeb3.getEmployees();
    setEmployees(list);
  }, []);

  useEffect(() => {
    if(web3Helper.isReady()) {
      loadWeb3();
    }
  }, [loadWeb3]);

  return (
    <div>
      <Web3Wrapper>
        <div>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} size={"middle"}
            onClick={async() => {
              setIsModalOpen(true);
          }}>Add employee</Button>
          <EmployeeAdd
            isVisible={isAddModalOpen}
            onSubmit={async (data:any) => { 
               try {
                console.log('started');
                await employeeWeb3.addEmployee({
                  id: 0,
                  index: 0,
                  age: data.age,
                  city: data.city,
                  name: data.name,
                  note: data.note,
                });
                message.success('This is a success message');
                setIsModalOpen(false);


                // after succes we have to reload employee
              } catch(error) {
                console.log(error);
                message.error('This is an error message');
              }
            }}
            onCancel={() => { setIsModalOpen(false); }}
          />
        </div>
        <div>
          {employees.map((e: any) =>{
            return (
              <EmployeeCard
                key={e.id}
                name={`${e.name} (${e.city})`}
                description={e.note}
              />
            );
          })}
        </div>

      </Web3Wrapper>
    </div>
  );
}

export default EmployeePage;
