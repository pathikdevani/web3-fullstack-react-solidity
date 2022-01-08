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
        add(1, 32, "Abu Dhabi", "John", "Some of John's notes");
        add(2, 22, "Dubai", "Ali", "Some of Ali's notes");
        add(3, 44, "Dubai", "James", "Some of Jessica's notes");
        add(4, 41, "Abu Dhabi", "Alla", "Some of Alla's notes");
        add(5, 18, "Abu Dhabi", "Patrick", "Some of Patrick's notes");
        add(6, 18, "Ajman", "Bob", "Some of Bob's notes");
        add(7, 33, "Ajman", "Alice", "Some of Alice's notes");
        add(8, 42, "Ras Al Khaimah", "Dan", "Some of Dan's notes");
        add(9, 20, "Sharjah", "Tim", "Some of Tim's notes");
    }

    function add(
        uint id,
        uint age,
        string memory city,
        string memory name,
        string memory note
    ) public {
        Employee memory employee = Employee(id, name,  age, city, note);
        employees.push(employee);

        emit Created(id);
    }

    function get(uint id) public view returns (
        string memory,
        uint,
        string memory
    ){
        uint i; 
        for (i = 0; i < employees.length; i++) {
            Employee memory e = employees[i];
            if (e.id == id) {
                return (e.name, e.age, e.city);
            }
        }
        return ("", 0, "");
    }

    function getByIndex(uint index)
        public
        view
        returns (
            uint,
            string memory,
            uint,
            string memory
        )
    {
        if (index > employees.length - 1) {
            return (0, "", 0, "");
        }
        Employee memory employee = employees[index];
        return (employee.id, employee.name, employee.age, employee.city);
    }

    function getNoteByIndex(uint index)
        external
        view
        returns (string memory)
    {
        if (index > employees.length - 1) {
            return ("");
        }
        Employee memory employee = employees[index];
        return (employee.note);
    }

    function getCount() public view returns (uint count) {
        return uint(employees.length);
    }
    
    function getEmployees() public view returns (Employee[] memory values) {
        return(employees);
    }

    function fetch(uint cursor, uint256 howMany)
        public
        view
        returns (Employee[] memory values, uint256 newCursor)
    {
        uint256 length = howMany;
        if (length > employees.length - cursor) {
            length = employees.length - cursor;
        }

        values = new Employee[](length);
        for (uint256 i = 0; i < length; i++) {
            values[i] = employees[cursor + i];
        }

        return (values, cursor + length);
    }
}
