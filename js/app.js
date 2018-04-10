'use strict';

var hours = [6 + ':00 AM', + 7 + ':00 AM', + 8 + ':00 AM', + 9 + ':00 AM', + 10 + ':00 AM', + 11 + ':00 AM', + 12 + ':00 PM', + 1 + ':00 PM', + 2 + ':00 PM', + 3 + ':00 PM', + 4 + ':00 PM', + 5 + ':00 PM', + 6 + ':00 PM', + 7 + ':00 PM', + 8 + ':00 PM'];

function ranNo(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

//creating the Pike Place Object
var pikePlaceMarket = {
  minCustHour : 23,
  maxCustHour : 65,
  avgCookie : 6.3,

  //function to randomize customers given Pat's estimates
  renderCookies: function() {
    var ulEl = document.getElementById('pike');
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var randomCust = ranNo(this.minCustHour, this.maxCustHour);
      var hourCookies = Math.floor(randomCust * this.avgCookie);
      liEl.textContent = hours[i] + ' ' + hourCookies;
      total += hourCookies;
      ulEl.appendChild(liEl);
    }
    //Displays total customers and total cookies sold
    var totalLi = document.createElement('li');
    totalLi.textContent = ' Total Cookies Sold: ' + total;
    ulEl.appendChild(totalLi);
  }


};

var seaTac = {
  minCustHour: 3,
  maxCustHour: 24,
  avgCookie: 1.2,

  renderCookies: function() {
    var ulEl = document.getElementById('seaTac');
    var total = 0;
    for( var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var randomCust = ranNo(this.minCustHour, this.maxCustHour);
      var hourCookies = Math.floor(randomCust * this.avgCookie);
      liEl.textContent = hours[i] + ' ' + hourCookies;
      total += hourCookies;
      ulEl.appendChild(liEl);
    }

    var totalLi = document.createElement('li');
    totalLi.textContent = ' Total Cookies Sold: ' + total;
    ulEl.appendChild(totalLi);
  }
};

var seaCenter = {
  minCustHour: 11,
  maxCustHour: 38,
  avgCookie: 3.7,

  renderCookies: function() {
    var ulEl = document.getElementById('seaCenter');
    var total = 0;
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var randomCust = ranNo(this.minCustHour, this.maxCustHour);
      var hourCookies = Math.floor(randomCust * this.avgCookie);
      liEl.textContent = hours[i] + ' ' + hourCookies;
      total += hourCookies;
      ulEl.appendChild(liEl);
    }

    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total Cookies Sold: ' + total;
    ulEl.appendChild(totalLi);
  }
};

var capHill = {
  minCustHour: 20,
  maxCustHour: 38,
  avgCookie: 2.3,

  renderCookies: function() {
    var ulEl = document.getElementById('capHill');
    var total = 0;
    for(var i = 0; i < hours.length; i ++) {
      var liEl = document.createElement('li');
      var randomCust = ranNo(this.minCustHour, this.maxCustHour);
      var hourCookies = Math.floor(randomCust * this.avgCookie);
      liEl.textContent = hours[i] + ' ' + hourCookies;
      total += hourCookies;
      ulEl.appendChild(liEl);
    }

    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total Cookies Sold: ' + total;
    ulEl.appendChild(totalLi);
  }
};

var alki = {
  minCustHour: 2,
  maxCustHour: 16,
  avgCookie: 4.6,

  renderCookies: function() {
    var ulEl = document.getElementById('alki');
    var total = 0;
    for(var i = 0; i < hours.length; i ++) {
      var liEl = document.createElement('li');
      var randomCust = ranNo(this.minCustHour, this.maxCustHour);
      var hourCookies = Math.floor(randomCust * this.avgCookie);
      liEl.textContent = hours[i] + ' ' + hourCookies;
      total += hourCookies;
      ulEl.appendChild(liEl);
    }

    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total Cookies Sold: ' + total;
    ulEl.appendChild(totalLi);
  }
};

pikePlaceMarket.renderCookies();
seaTac.renderCookies();
seaCenter.renderCookies();
capHill.renderCookies();
alki.renderCookies();


