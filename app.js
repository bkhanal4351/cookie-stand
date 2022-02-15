'use strict';

let custHourly = ['6', '7', '8'];


let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: [],
  averageCookieHour: [],
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(this.customer[j] * this.avgCookieSale);
    }
  }
};

let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: [],
  averageCookieHour: [],
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(this.customer[j] * this.avgCookieSale);
    }
  }
};

let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: [],
  averageCookieHour: [],
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(this.customer[j] * this.avgCookieSale);
    }
  }
};


let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: [],
  averageCookieHour: [],
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(this.customer[j] * this.avgCookieSale);
    }
  }
};


let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: [],
  averageCookieHour: [],
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(this.customer[j] * this.avgCookieSale);
    }
  }
};

// let city = [Seattle, Tokyo, Dubai, Paris, Lima];
// for (let i = 0; i < city.length; i++) {
//   city[i].customerGenerator();
// }

function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Seattle.customerGenerator();
Seattle.avgCookie();





