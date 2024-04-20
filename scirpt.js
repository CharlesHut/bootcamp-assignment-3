// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
} 
const employees = ["josh", "mike", "matt"];

  for (let i = 0; i < numEmployees; i++) {
    const name = prompt(`Enter name for employee ${i + 1}:`);
    const age = parseInt(prompt(`Enter age for employee ${i + 1}:`));
    const jobTitle = prompt(`Enter job title for employee ${i + 1}:`);
    const employee = {
      name: name,
      age: age,
      salary,
    };

    employees.push(employee);
  }
  return {
    employees: employees,
    averageSalary: averageSalary
};

  const employeeArray = collectEmployeeInfo();

  console.log(employeeArray);

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
}
const averageSalary = totalSalary / numEmployees;
console.log("Average Salary: $" + result.averageSalary.toFixed(2));
return averageSalary;

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}
const randomIndex = Math.floor(Math.random() * result.employees.length);
const randomEmployee = result.employees[randomIndex];
console.log("Random Employee:");
console.log(randomEmployee);


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
