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
      var randomNumber = ranNo(this.minCustHour, this.maxCustHour);
      liEl.textContent = hours[i] + ' ' + randomNumber;
      total += randomNumber;
      ulEl.appendChild(liEl);
    }
    //Displays total customers and total cookies sold
    var totalLi = document.createElement('li');
    totalLi.textContent = ' Total Customers ' + total;
    ulEl.appendChild(totalLi);
  }


};

var 

pikePlaceMarket.renderCookies();




