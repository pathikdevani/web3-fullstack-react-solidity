//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Employees {
    struct Employee {
        uint id;
        string name;
        uint age;
        string city;
        string note;
    }

    Employee[] employees;
    event Created(uint id);

    constructor() {
        add(32, "Ranchi", "Vijay Philip", "Some of Vijay's notes");
        add(22, "Surat", "Amolika Mody", "Some of Amolika's notes");
        add(44, "Jodhpur", "Nikita Sethi", "Some of Nikita's notes");
        add(41, "Indore", "Suraj Mittal", "Some of Suraj's notes");
        add(18, "Hyderabad", "Shashank Prasad Mitter", "Some of Shashank's notes");
        add(18, "Udaipur", "Gowri Sirish Sule", "Some of Gowri's notes");
        add(33, "Surat", "Gajendra Rao Puri", "Some of Gajendra's notes");
        add(42, "Lucknow", "Mitesh Doshi", "Some of Mitesh's notes");
        add(20, "Bhopal", "Kusum Dar", "Some of Kusum's notes");
    }

    function add(
        uint age,
        string memory city,
        string memory name,
        string memory note
    ) public {
        uint id = employees.length + 1;
        Employee memory employee = Employee(id, name,  age, city, note);
        employees.push(employee);

        emit Created(id);
    }

    function getCount() public view returns (uint count) {
        return uint(employees.length);
    }
    
    function getEmployees() public view returns (Employee[] memory values) {
        return(employees);
    }
}
