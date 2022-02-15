'use strict';

let custHourly = ['6', '7', '8','9','10','11','12','1','2','3','4','5','6','7'];


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

let Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
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

let Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
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


let Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
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


let Lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
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

let city = [Seattle, Tokyo, Dubai, Paris, Lima];
for (let i = 0; i < city.length; i++) {
  city[i].customerGenerator();
}

function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Seattle.customerGenerator();
Seattle.avgCookie();
Tokyo.customerGenerator();
Tokyo.avgCookie();
Dubai.customerGenerator();
Dubai.avgCookie();
Paris.customerGenerator();
Paris.avgCookie();
Lima.customerGenerator();
Lima.avgCookie();

//console.log(Seattle);





