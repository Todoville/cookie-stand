'use strict';

var tableEl = document.getElementById('hourlyAvgCookieTable');
var allLocations = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function ranNo(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

//creating the constructor function
function CookieLocation(address, minCustHour, maxCustHour, avgCookie) {
  this.address = address;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookie = avgCookie;
  allLocations.push(this);

}

function hoursHeader() {
  var tableHeaderRow = document.createElement('tr');

  //empty space above first location display
  var blankHeader = document.createElement('th');
  tableHeaderRow.appendChild(blankHeader);

  //hours in header
  for(var i=0; i < hours.length; i++) {
    var hourHeadText = document.createElement('th');
    hourHeadText.textContent = hours[i];
    tableHeaderRow.appendChild(hourHeadText);
  }

  tableEl.appendChild(tableHeaderRow);
}


//function to randomize customers and average cookies sold per hour, given Pat's estimates
CookieLocation.prototype.renderCookies = function() {
  var total = 0;
  var newRow = document.createElement('tr');
  var tableName = document.createElement('td');
  tableName.textContent = this.address;
  newRow.appendChild(tableName);

  //does the math for the data in table
  for (var i = 0; i < hours.length; i++) {
   
    var dataEl = document.createElement('td');
    var randomCust = ranNo(this.minCustHour, this.maxCustHour);
    var hourCookies = Math.floor(randomCust * this.avgCookie);
    dataEl.textContent = hourCookies;
    total += hourCookies;
    newRow.appendChild(dataEl);
  }

  //displays the data and row
  tableEl.appendChild(newRow);

  //Displays total customers and total cookies sold
  var totalTd = document.createElement('td');
  totalTd.textContent = ' Total Cookies Sold: ' + total;
  newRow.appendChild(totalTd);
};

//creating the instances
var pikePlaceMarket =  new CookieLocation('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieLocation('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieLocation('Seattle Center', 11, 38, 3.7);
var capHill = new CookieLocation('Capitol Hill', 20, 38, 2.3);
var alki = new CookieLocation('Alki Beach', 2, 16, 4.6);

//call the instances
hoursHeader();

pikePlaceMarket.renderCookies();
seaTac.renderCookies();
seaCenter.renderCookies();
capHill.renderCookies();
alki.renderCookies();

//create the js form events

function cookieFormHandler(e) {
  e.preventDefault();
  console.log('ya shit worked my dude');
  var formElement = event.target;
  var userRow = new CookieLocation(formElement.address.value, formElement.minCust.value, formElement.maxCust.value, formElement.avgCookie.value);
  console.log(userRow);
  userRow.renderCookies();

}

var addressElement = document.getElementById('hourly-sales-table');
addressElement.addEventListener('submit', cookieFormHandler);