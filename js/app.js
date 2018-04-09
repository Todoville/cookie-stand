'use strict';

var pikePlaceMarket = {
  hours : [],
  minCustHour : 23,
  maxCustHour : 65,
  avgCookie : 6.3,
};

function renderCookies() {
  var ulEl = document.getElementById('pike');
  var liEl = document.createElement('li');
  liEl.textContent = pikePlaceMarket.minCustHour;
  ulEl.appendChild(liEl);
}

renderCookies();
