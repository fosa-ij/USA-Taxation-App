// creating a simple web app that uses the concept of OOP paradigm.
//? This application is a TAX calculator
// For ABSTRACTION: This app abstracts the users HOURLY income from the public.
// For ENCAPSULATION: This app will group related data and functionality of the user such as their hourly income and the method for calculating their yearly income in a single object
// For INHERITANCE: This app will get useful data from parent object constructors for use where needed in child objects
// For POLYMORPHISM: This app will make use of similar functionalities in different constructors, this method will have a default parameter set to a years income.

//? HOW IS YEARLY INCOME CALCULATED?
// hourly income * number of work hours in a week * 52weeks in a year.

//? PARENT CLASS
// I can say that parent class will be composed of hourly income data, work hours data, and a method for calculating the users yearly income.
class Worker {
    constructor(firstName, company, hourlyIncome, workHours) {
        this.firstName = firstName
        this.company = company
        this._hourlyIncome = hourlyIncome,
        this._workHours = workHours
    }
    //* The function below helps retrieve the abstracted property/data
    get workHours() {
        return this._workHours
    }
    //* The function below calculates how much an employee earns per hour based on his or her salary (hourly income).
    getYearlyIncome = (year = 1) => {
        return this._hourlyIncome * this.workHours * 52 * year
    }
}
//// const John = new Worker('John', 'Apple INC', 37, 40)
//// console.log(John);
//// console.log(John.hourlyIncome);
//// console.log(John.workHours);

//? TAX CLASS
// HOW IS TAX CALCULATED ?
// a percentage of the workers monthly income is subtracted to give the tax amount, depending on how much the worker earns per annum.
class Tax extends Worker {
    constructor(firstName, company, hourlyIncome, workHours, years){
        super(firstName, company, hourlyIncome, workHours)
        this.years = years
    }
    // yearlyIncome = () => {
    //     console.log(typeof yearlyIncome === 'function')
    //     return this.getYearlyIncome
    // }

    calculateTaxRate = (percent, income) => {
        return percent/100 * income
    }

    calculateTax = yearlyIncome => {
        if (yearlyIncome <= 10_275) return `$${this.calculateTaxRate(10, yearlyIncome)}`
        if (yearlyIncome <= 41_775) return `$${this.calculateTaxRate(12, yearlyIncome)}`
        if (yearlyIncome <= 89_075) return `$${this.calculateTaxRate(22, yearlyIncome)}`
        if (yearlyIncome <= 170_050) return `$${this.calculateTaxRate(24, yearlyIncome)}`
        if (yearlyIncome <= 215_950) return `$${this.calculateTaxRate(32, yearlyIncome)}`
        if (yearlyIncome <= 539_900) return `$${this.calculateTaxRate(35, yearlyIncome)}`
        if (yearlyIncome >= 539_901) return `$${this.calculateTaxRate(37, yearlyIncome)}`
    }

    getTaxRate = (yearlyIncome = this.getYearlyIncome(this.years)) => {
            if (yearlyIncome <= 10_275) return `10%`
            if (yearlyIncome <= 41_775) return `12%`
            if (yearlyIncome <= 89_075) return `22%`
            if (yearlyIncome <= 170_050) return `24%`
            if (yearlyIncome <= 215_950) return `32%`
            if (yearlyIncome <= 539_900) return `35%`
            if (yearlyIncome >= 539_901) return `37%`
    }

    getTax = (years) => {
        const yearlyIncome = this.getYearlyIncome(years)
        console.log(yearlyIncome);
        // const tax = years > 1 ? yearlyIncome : this.getYearlyIncome()
        const tax = this.getYearlyIncome()
        return this.calculateTax(tax)
    }
}

export default Tax


//! WORKING WITH THE DOM
// So instead of manually inputing all the workers value we're going to have a form for that now 
// that form is going to hold the user details and we'd target those values and input them into the code.