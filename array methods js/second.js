const company = {
    Sales: [
    { name: 'John', age: 28, salary: 50000 },
    { name: 'Doe', age: 35, salary: 60000 }
    ],
    HR: [
    { name: 'Jane', age: 30, salary: 55000 },
    { name: 'Alice', age: 25, salary: 45000 }
    ],
    IT: [
    { name: 'Bob', age: 40, salary: 70000 },
    { name: 'Eve', age: 32, salary: 65000 }
    ]
    };

    // Tasks:
    // Calculate the total salary for all employees in the company.

    let totalSalary = Object.values(company).flat().reduce((sum, employee) => sum + employee.salary, 0);
    console.log(totalSalary);

    // Create a list of all employees older than 30.
    // Return the department with the highest average salary.
    // Find and return the name of the youngest employee in the company.
    // Transform the company object into an array of employee records, where each record includes the department name