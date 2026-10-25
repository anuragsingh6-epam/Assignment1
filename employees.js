const employees = [
  { id: 1, name: "Amit", department: "IT", salary: 60000, age: 28 },
  { id: 2, name: "Priya", department: "HR", salary: 45000, age: 25 },
  { id: 3, name: "Rahul", department: "IT", salary: 75000, age: 32 },
  { id: 4, name: "Sneha", department: "Finance", salary: 55000, age: 29 },
  { id: 5, name: "Vikas", department: "IT", salary: 80000, age: 35 },
  { id: 6, name: "Neha", department: "HR", salary: 50000, age: 27 },
  { id: 7, name: "Rohit", department: "Finance", salary: 65000, age: 31 },
  { id: 8, name: "Anjali", department: "IT", salary: 70000, age: 26 },
  { id: 9, name: "Karan", department: "Sales", salary: 40000, age: 24 },
  { id: 10, name: "Pooja", department: "Sales", salary: 48000, age: 30 },
];

function displayEmployees(data) {
  data.forEach((emp) => {
    console.log(`${emp.name} - ${emp.department}`);
  });
}

function getEmployeeNames(data) {
  return data.map((emp) => emp.name);
}

function getHighSalaryEmployees(data) {
  return data.filter((emp) => emp.salary > 60000);
}

function getTotalSalary(data) {
  return data.reduce((total, emp) => total + emp.salary, 0);
}

function findEmployeeById(data, id) {
  return data.find((emp) => emp.id === id);
}

function sortEmployeesBySalary(data) {
  return [...data].sort((a, b) => b.salary - a.salary);
}

function getFirstThreeEmployees(data) {
  return data.slice(0, 3);
}

function removeEmployee(data, index) {
  const copiedData = [...data];
  copiedData.splice(index, 1);
  return copiedData;
}

function getEmployeeDetails(data) {
  const { name, salary, department } = data[0];
  return { name, salary, department };
}

function addEmployee(data, newEmployee) {
  return [...data, { ...newEmployee }];
}

console.log("1. Employee Details:");

displayEmployees(employees);

console.log("2. Employee Names:");

console.log(getEmployeeNames(employees));

console.log("3. High Salary Employees:");

console.log(getHighSalaryEmployees(employees));

console.log("4. Total Salary:");

console.log(getTotalSalary(employees));

console.log("5. Find Employee by ID:");

console.log(findEmployeeById(employees, 5));

console.log("6. Sorted Employees:");

console.log(sortEmployeesBySalary(employees));

console.log("7. First Three Employees:");

console.log(getFirstThreeEmployees(employees));

console.log("8. Remove Employee at Index 2:");

console.log(removeEmployee(employees, 2));

console.log("9. Destructured Employee Details:");

console.log(getEmployeeDetails(employees));

const newEmployee = {
  id: 11,
  name: "Arjun",
  department: "IT",
  salary: 72000,
  age: 29,
};

console.log("10. Add New Employee:");

console.log(addEmployee(employees, newEmployee));

console.log("Original Employee Count:", employees.length);
