import React, { useCallback, useEffect, useState } from 'react';

import {employeeWeb3} from '../web3/index.web3';
import EmployeeCard from '../components/employee.card';

function EmployeePage() {
  const [employees, setEmployees] = useState([] as any);

  const loadWeb3 = useCallback(async() => {
    await employeeWeb3.load();
    const list: any[] = await employeeWeb3.getEmployees();
    setEmployees(list);
  }, []);
  

  useEffect(() => {
    if(employeeWeb3.isReady()) {
      loadWeb3();
    }
  }, [loadWeb3]);

  return (
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
  );
}

export default EmployeePage;
