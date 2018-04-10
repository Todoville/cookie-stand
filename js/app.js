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

CookieLocation.prototype.hoursHeader = function() {
  for(var i=0; i < hours.length; i++) {
    var hourHead = document.createElement('th');
    hourHead.textContent = hours[i];
    tableEl.appendChild(hourHead);

  }

};


//function to randomize customers and average cookies sold per hour, given Pat's estimates
CookieLocation.prototype.renderCookies = function() {
  var total = 0;
  var newRow = document.createElement('tr');
  tableEl.appendChild(newRow);
  for (var i = 0; i < hours.length; i++) {
    var dataEl = document.createElement('td');
    var randomCust = ranNo(this.minCustHour, this.maxCustHour);
    var hourCookies = Math.floor(randomCust * this.avgCookie);
    dataEl.textContent = hourCookies;
    total += hourCookies;
    tableEl.appendChild(dataEl);
  }
  //Displays total customers and total cookies sold
  var totalTd = document.createElement('td');
  totalTd.textContent = ' Total Cookies Sold: ' + total;
  tableEl.appendChild(totalTd);
};

//creating the instances
var pikePlaceMarket =  new CookieLocation('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieLocation('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieLocation('Seattle Center', 11, 38, 3.7);
var capHill = new CookieLocation('Capitol Hill', 20, 38, 2.3);
var alki = new CookieLocation('Alki Beach', 2, 16, 4.6);

//call the instances
alki.hoursHeader();
pikePlaceMarket.renderCookies();
seaTac.renderCookies();
seaCenter.renderCookies();
capHill.renderCookies();
alki.renderCookies();
