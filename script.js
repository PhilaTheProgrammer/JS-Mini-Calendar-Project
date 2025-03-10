//Javascript Code

//Identify and Connect ELEMENT with Variable
const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

//has current date
const today = new Date();


//Arrays
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//DO Model
date.innerHTML = (today.getDate() < 10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()]; 
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();