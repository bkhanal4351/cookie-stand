'use strict';

let SalmonCookie = document.getElementById('salmon-cookies');

let custHourly = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7'];


let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: [],
  averageCookieHour: [],
  totalCookies: 0,
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
      this.totalCookies += (this.averageCookieHour[j]);
    }
  }
};

Seattle.render = function () {
  this.avgCookie();
  let h3Elem = document.createElement('h3');
  h3Elem.textContent = this.location;
  SalmonCookie.appendChild(h3Elem);

  let ulElem = document.createElement('ul');
  SalmonCookie.appendChild(ulElem);

  for (let i = 0; i < custHourly.length; i++) {
    let currentValue = custHourly[i];
    let liElm = document.createElement('li');
    liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
    ulElem.appendChild(liElm);
  }

  let liTl = document.createElement('li');
  liTl.textContent = `Total: ${this.totalCookies}`;
  ulElem.appendChild(liTl);


};

let Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  customer: [],
  averageCookieHour: [],
  totalCookies: 0,
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
      this.totalCookies += (this.averageCookieHour[j]);

    }
  }
};

Tokyo.render = function () {
  this.avgCookie();

  let h3Elem = document.createElement('h3');
  h3Elem.textContent = this.location;
  SalmonCookie.appendChild(h3Elem);


  let ulElem = document.createElement('ul');
  SalmonCookie.appendChild(ulElem);

  for (let i = 0; i < custHourly.length; i++) {
    let currentValue = custHourly[i];
    let liElm = document.createElement('li');
    liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
    ulElem.appendChild(liElm);
  }
  let liTl = document.createElement('li');
  liTl.textContent = `Total: ${this.totalCookies}`;
  ulElem.appendChild(liTl);
};


let Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  customer: [],
  averageCookieHour: [],
  totalCookies: 0,
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
      this.totalCookies += (this.averageCookieHour[j]);
    }
  }
};

Dubai.render = function () {
  this.avgCookie();

  let h3Elem = document.createElement('h3');
  h3Elem.textContent = this.location;
  SalmonCookie.appendChild(h3Elem);


  let ulElem = document.createElement('ul');
  SalmonCookie.appendChild(ulElem);

  for (let i = 0; i < custHourly.length; i++) {
    let currentValue = custHourly[i];
    let liElm = document.createElement('li');
    liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
    ulElem.appendChild(liElm);
  }
  let liTl = document.createElement('li');
  liTl.textContent = `Total: ${this.totalCookies}`;
  ulElem.appendChild(liTl);
};


let Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  customer: [],
  averageCookieHour: [],
  totalCookies: 0,
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
      this.totalCookies += (this.averageCookieHour[j]);
    }
  }
};

Paris.render = function () {
  this.avgCookie();

  let h3Elem = document.createElement('h3');
  h3Elem.textContent = this.location;
  SalmonCookie.appendChild(h3Elem);


  let ulElem = document.createElement('ul');
  SalmonCookie.appendChild(ulElem);

  for (let i = 0; i < custHourly.length; i++) {
    let currentValue = custHourly[i];
    let liElm = document.createElement('li');
    liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
    ulElem.appendChild(liElm);
  }
  let liTl = document.createElement('li');
  liTl.textContent = `Total: ${this.totalCookies}`;
  ulElem.appendChild(liTl);
};


let Lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  customer: [],
  averageCookieHour: [],
  totalCookies: 0,
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
      this.totalCookies += (this.averageCookieHour[j]);
    }
  }
};

Lima.render = function () {
  this.avgCookie();

  let h3Elem = document.createElement('h3');
  h3Elem.textContent = this.location;
  SalmonCookie.appendChild(h3Elem);

  let ulElem = document.createElement('ul');
  SalmonCookie.appendChild(ulElem);

  for (let i = 0; i < custHourly.length; i++) {
    let currentValue = custHourly[i];
    let liElm = document.createElement('li');
    liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
    ulElem.appendChild(liElm);
  }
  let liTl = document.createElement('li');
  liTl.textContent = `Total: ${this.totalCookies}`;
  ulElem.appendChild(liTl);
};





function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const city = [Seattle, Tokyo, Dubai, Paris, Lima];
function cityRender() {
  for (let i = 0; i < city.length; i++) {
    let eachCity = city[i];
    eachCity.render();
  }
}



// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render()

cityRender();
