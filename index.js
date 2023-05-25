/* Your Code Here */
function createEmployeeRecord(employeeInfo){
    const employeeObj = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObj
}
function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map((item) => {
        return createEmployeeRecord(item)
    })
}


function createTimeInEvent(date){
    const timeStamp = date.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(timeStamp[1], 10),
        date: timeStamp[0]
    })
    return this
}

function createTimeOutEvent(date){
    const timeStamp = date.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(timeStamp[1], 10),
        date: timeStamp[0]
    })
    return this
}
function hoursWorkedOnDate(date){
    const clockIn = this.timeInEvents.find(obj => obj.date === date)
    const clockOut = this.timeOutEvents.find(obj => obj.date === date)
    const hours = clockOut.hour - clockIn.hour
    return hours / 100
    
}
function wagesEarnedOnDate(date){
    const payRate = this.payPerHour
    const hours = hoursWorkedOnDate.call(this, date) 
    return payRate * hours
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(src, firstName){
    return src.find((obj) => obj.firstName === firstName)
}

function calculatePayroll(employee){
    return employee.reduce((acc, obj) =>{
        return acc + allWagesFor.call(obj)
    }, 0)
}