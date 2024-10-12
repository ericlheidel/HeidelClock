function startClock() {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let ampm = ""

  let clock = document.getElementById("clock")

  if (h < 12) {
    ampm = "AM"
  } else {
    ampm = "PM"
  }

  if (h == 0) {
    h = 12
  }

  if (h > 12) {
    h = h - 12
    ampm = "PM"
  }

  h = h < 10 ? "0" + h : h
  // if (h < 10){
  //     h = "0" + h;
  // } else {
  //     h = h;
  // }

  m = m < 10 ? "0" + m : m
  // if (m < 10){
  //     m = "0" + m;
  // } else {
  //     m = m;
  // }

  s = s < 10 ? "0" + s : s
  // if (s < 10){
  //     s = "0" + s;
  // } else {
  //     s = s;
  // }

  let time = h + " : " + m + " : " + s + " : " + ampm

  clock.innerHTML = time
  clock.textContent = time

  setTimeout(startClock, 1000)
}

startClock()

function getDate() {
  let date = new Date()

  let year = date.getFullYear()
  let month = date.getMonth()
  let number = date.getDate()
  let day = date.getDay()
  // let ending = "st";  <---"st", "nd", "rd", or "th"

  let today = document.getElementById("today")

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  let ending = ""
  if (number === 1 || number === 21 || number === 31) {
    ending = "st"
  } else if (number === 2 || number === 22) {
    ending = "nd"
  } else if (number === 3 || number === 23) {
    ending = "rd"
  } else if ((number >= 4 && number <= 20) || (number >= 24 && number <= 30)) {
    ending = "th"
  }

  // THIS IS ME TRYING TO FIGURE OUT THE ending VARIABLE
  // number = (number % 10 == 1) ? ending = number + "st" : ending = "";
  // number = (number % 10 == 2) ? ending = number + "nd" : ending = "";
  // number = (number % 10 == 3) ? ending = number + "rd" : ending = "";
  // number = (number % 10 == 4) ? ending = number + "th" : ending = "";
  // number = (number % 10 == 5) ? ending = number + "th" : ending = "";
  // number = (number % 10 == 6) ? ending = number + "th" : ending = "";
  // number = (number % 10 == 7) ? ending = number + "th" : ending = "";
  // number = (number % 10 == 8) ? ending = number + "th" : ending = "";
  // number = (number % 10 == 9) ? ending = number + "th" : ending = "";
  // number = (number % 10 == 0) ? ending = number + "th" : ending = "";

  // endingArray[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // for (i = 0; i < endingArray; i++){
  //     if (10 % i)
  // }

  let todayIs =
    dayNames[day] +
    " " +
    monthNames[month] +
    ", " +
    number +
    ending +
    " " +
    year

  today.innerHTML = todayIs
}

getDate()
