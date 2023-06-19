// import Tax from "./index"
import Tax from './index.js';
// const $ = require("jquery");


if (typeof document !== 'undefined') {
    $(document).ready(function () {
        // POS_LOAD scripts. Can use $
        $("#btn").click((e) => {

        e.preventDefault()
        let username = $("#name").val()
        $(".name").text(username)
        
        let company = $("#company").val()
        $(".company").text(company)
        
        let wagePerHour = $("#wagePerHour").val()
        $(".wagePHr").text('$' + wagePerHour)
        
        let workHours = $("#workHours").val()
        $(".workHr").text(workHours)
        
        const user = new Tax(username, company, wagePerHour, workHours, 1)
        
        $(".years").text('1')
        $(".annualIncome").text('$' + user.getYearlyIncome())
        $(".taxRate").text(user.getTaxRate())
        $(".totalTax").text(user.getTax())
        $(".summary").text(`${username.toUpperCase()} is expected to pay ${user.getTax()}, which is ${user.getTaxRate()} of his Total Annual Income: $${user.getYearlyIncome()}`)
        
        
        $("#name").val("")
        $("#company").val("")
        $("#wagePerHour").val("")
        $("#workHours").val("")
    });
})}