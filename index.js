// Your code here
// 1. Create a single employee record from an array
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// 2. Create multiple employee records from nested arrays
function createEmployeeRecords(data) {
  return data.map(createEmployeeRecord);
}

// 3. Add a time-in event to an employee's record
function createTimeInEvent(employee, dateTime) {
  const [date, hour] = dateTime.split(' ');
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  });
  return employee;
}

// 4. Add a time-out event to an employee's record
function createTimeOutEvent(employee, dateTime) {
  const [date, hour] = dateTime.split(' ');
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  });
  return employee;
}

// 5. Calculate hours worked on a specific date
function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(e => e.date === date);
  const timeOut = employee.timeOutEvents.find(e => e.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

// 6. Calculate wages earned on a specific date
function wagesEarnedOnDate(employee, date) {
  const hours = hoursWorkedOnDate(employee, date);
  return hours * employee.payPerHour;
}

// 7. Calculate total wages for all worked dates
function allWagesFor(employee) {
  return employee.timeInEvents.reduce((total, e) => {
    return total + wagesEarnedOnDate(employee, e.date);
  }, 0);
}

// 8. Calculate total payroll for all employees
function calculatePayroll(employees) {
  return employees.reduce((total, emp) => {
    return total + allWagesFor(emp);
  }, 0);
}

// Export all functions for testing
module.exports = {
  createEmployeeRecord,
  createEmployeeRecords,
  createTimeInEvent,
  createTimeOutEvent,
  hoursWorkedOnDate,
  wagesEarnedOnDate,
  allWagesFor,
  calculatePayroll
};
