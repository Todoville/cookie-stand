'use strict';

function ranNo(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max-min)) + min;


}

var pikePlaceMarket = {
  hours : [],
  minCustHour : 23,
  maxCustHour : 65,
  avgCookie : 6.3,



  renderCookies: function() {
    var ulEl = document.getElementById('pike');
    var liEl = document.createElement('li');
    liEl.textContent = ranNo(this.minCustHour, this.maxCustHour);
    ulEl.appendChild(liEl);
  }



};

pikePlaceMarket.renderCookies();




