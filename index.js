const inputDay = document.querySelector('#day')
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year')
const textDay = document.querySelector('.day')
const textMonth = document.querySelector('.month')
const textYear = document.querySelector('.year')
const btn = document.querySelector('.btn')

function AgeCalculator(day, month, year) {
    this.day = day
    this.month = month
    this.year = year
}

AgeCalculator.prototype.calculateAge = function () {
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - this.year;
    let ageMonths = currentDate.getMonth() + 1 - this.month;
    let ageDays = currentDate.getDate() - this.day;


    return {
        years: ageYears,
        months: ageMonths,
        days: ageDays
    };

};


btn.addEventListener('click', () => {
    const ageCalculator = new AgeCalculator(inputDay.value,inputMonth.value, inputYear.value);
    const age = ageCalculator.calculateAge( );
    
    textYear.innerText = age.years
    textMonth.innerText = age.months
    textDay.innerText = age.days
});



