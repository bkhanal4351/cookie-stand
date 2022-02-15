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
  customerGenerator: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }

  },
  avgCookie: function () {
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
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
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
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
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
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
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
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
    this.customerGenerator();
    for (let j = 0; j < custHourly.length; j++) {
      this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
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

};





function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let city = [Seattle, Tokyo, Dubai, Paris, Lima]
// function city(){
//   for (let i = 0; i < city.length; i++) {
//     city[i]();
//   };



Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();






