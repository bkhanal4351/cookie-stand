'use strict';

let SalmonCookie = document.getElementById('salmon-cookies');
let table = document.getElementById('table');
let cookieForm = document.getElementById('sales-form');
let footer = document.createElement('tfoot');


let custHourly = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7'];

let myLocation = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let stores = [];

function Store(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.totalCookies = 0;
  this.customer = [];
  this.averageCookieHour = [];


  stores.push(this);

}

Store.prototype.avgCookie = function () {

  for (let i = 0; i < custHourly.length; i++) {

    this.customer.push(randCust(this.minCust, this.maxCust));

    this.averageCookieHour.push(Math.ceil(this.customer[i] * this.avgCookieSale));

    this.totalCookies += (this.averageCookieHour[i]);

  }

};
function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.avgCookie();
tokyo.avgCookie();
dubai.avgCookie();
paris.avgCookie();
lima.avgCookie();

function createTableHeads() {
  let row1 = document.createElement('tr');
  let th1Elem = document.createElement('th');
  th1Elem.textContent = ('City');
  row1.appendChild(th1Elem);
  table.appendChild(row1);



  for (let i = 0; i < custHourly.length; i++) {

    let th1Elem = document.createElement('th');
    th1Elem.textContent = custHourly[i];
    row1.appendChild(th1Elem);
  }
  let tlElem = document.createElement('th');
  tlElem.textContent = 'Daily Location Total';
  row1.appendChild(tlElem);


}



Store.prototype.render = function () {
  let row2 = document.createElement('tr');
  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.location;
  row2.appendChild(td1Elem);
  table.appendChild(row2);

  for (let i = 0; i < this.averageCookieHour.length; i++) {
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.averageCookieHour[i];
    row2.appendChild(td1Elem);

  }
  // let row3 = document.createElement('tr');
  // let totalElem = document.createElement('td');
  // totalElem.textContent = 'Totals';
  // row3.appendChild(totalElem);




  let thElem = document.createElement('td');
  thElem.textContent = this.totalCookies;
  row2.appendChild(thElem);
  // for(let i=0; i < this.totalCookies.length; i++){
  //   let tlElem = document.createElement('td');
  //   tlElem.textContent = this.totalCookies[i];
  //   row2.appendChild(tlElem);
  // }



};

function createFooter() {
  //let footer = document.createElement('tfoot');
  table.appendChild(footer);

  let footerRow = document.createElement('tr');
  footer.appendChild(footerRow);

  let hourlyTotaltb = document.createElement('th');
  hourlyTotaltb.textContent = 'Hourly Totals';
  footerRow.appendChild(hourlyTotaltb);


  let dailyTotal = 0;
  for (let i = 0; i < custHourly.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < stores.length; j++) {
      hourTotal += (stores[j].averageCookieHour[i]);
    }
    let tdhourlyTotal = document.createElement('td');
    tdhourlyTotal.textContent = `${hourTotal}`;
    footerRow.appendChild(tdhourlyTotal);
    dailyTotal += hourTotal;

  }

  let tdDailyTotal = document.createElement('td');
  tdDailyTotal.textContent = `${dailyTotal}`;
  footerRow.appendChild(tdDailyTotal);

}



function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  let location = event.target.location.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookieSale = parseInt(event.target.avgCookieSale.value);
console.log(avgCookieSale);

  let newCity = new Store(location, minCust, maxCust, avgCookieSale);

  newCity.avgCookie();
  newCity.render();
  console.log(newCity);



  footer.innerHTML = '';
  createFooter();

  


}

cookieForm.addEventListener('submit', handleSubmit);


createTableHeads();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
createFooter();

// let Seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   customer: [],
//   averageCookieHour: [],
//   totalCookies: 0,
//   customerGenerator: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }

//   },
//   avgCookie: function () {
//     this.customerGenerator();
//     for (let j = 0; j < custHourly.length; j++) {
//       this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
//       this.totalCookies += (this.averageCookieHour[j]);
//     }
//   }
// };

// Seattle.render = function () {
//   this.avgCookie();
//   let h3Elem = document.createElement('h3');
//   h3Elem.textContent = this.location;
//   SalmonCookie.appendChild(h3Elem);

//   let ulElem = document.createElement('ul');
//   SalmonCookie.appendChild(ulElem);

//   for (let i = 0; i < custHourly.length; i++) {
//     let currentValue = custHourly[i];
//     let liElm = document.createElement('li');
//     liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
//     ulElem.appendChild(liElm);
//   }

//   let liTl = document.createElement('li');
//   liTl.textContent = `Total: ${this.totalCookies}`;
//   ulElem.appendChild(liTl);


// };

// let Tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   customer: [],
//   averageCookieHour: [],
//   totalCookies: 0,
//   customerGenerator: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }

//   },
//   avgCookie: function () {
//     this.customerGenerator();
//     for (let j = 0; j < custHourly.length; j++) {
//       this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
//       this.totalCookies += (this.averageCookieHour[j]);

//     }
//   }
// };

// Tokyo.render = function () {
//   this.avgCookie();

//   let h3Elem = document.createElement('h3');
//   h3Elem.textContent = this.location;
//   SalmonCookie.appendChild(h3Elem);


//   let ulElem = document.createElement('ul');
//   SalmonCookie.appendChild(ulElem);

//   for (let i = 0; i < custHourly.length; i++) {
//     let currentValue = custHourly[i];
//     let liElm = document.createElement('li');
//     liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
//     ulElem.appendChild(liElm);
//   }
//   let liTl = document.createElement('li');
//   liTl.textContent = `Total: ${this.totalCookies}`;
//   ulElem.appendChild(liTl);
// };


// let Dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   customer: [],
//   averageCookieHour: [],
//   totalCookies: 0,
//   customerGenerator: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }

//   },
//   avgCookie: function () {
//     this.customerGenerator();
//     for (let j = 0; j < custHourly.length; j++) {
//       this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
//       this.totalCookies += (this.averageCookieHour[j]);
//     }
//   }
// };

// Dubai.render = function () {
//   this.avgCookie();

//   let h3Elem = document.createElement('h3');
//   h3Elem.textContent = this.location;
//   SalmonCookie.appendChild(h3Elem);


//   let ulElem = document.createElement('ul');
//   SalmonCookie.appendChild(ulElem);

//   for (let i = 0; i < custHourly.length; i++) {
//     let currentValue = custHourly[i];
//     let liElm = document.createElement('li');
//     liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
//     ulElem.appendChild(liElm);
//   }
//   let liTl = document.createElement('li');
//   liTl.textContent = `Total: ${this.totalCookies}`;
//   ulElem.appendChild(liTl);
// };


// let Paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   customer: [],
//   averageCookieHour: [],
//   totalCookies: 0,
//   customerGenerator: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }

//   },
//   avgCookie: function () {
//     this.customerGenerator();
//     for (let j = 0; j < custHourly.length; j++) {
//       this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
//       this.totalCookies += (this.averageCookieHour[j]);
//     }
//   }
// };

// Paris.render = function () {
//   this.avgCookie();

//   let h3Elem = document.createElement('h3');
//   h3Elem.textContent = this.location;
//   SalmonCookie.appendChild(h3Elem);


//   let ulElem = document.createElement('ul');
//   SalmonCookie.appendChild(ulElem);

//   for (let i = 0; i < custHourly.length; i++) {
//     let currentValue = custHourly[i];
//     let liElm = document.createElement('li');
//     liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
//     ulElem.appendChild(liElm);
//   }
//   let liTl = document.createElement('li');
//   liTl.textContent = `Total: ${this.totalCookies}`;
//   ulElem.appendChild(liTl);
// };


// let Lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   customer: [],
//   averageCookieHour: [],
//   totalCookies: 0,
//   customerGenerator: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }

//   },
//   avgCookie: function () {
//     this.customerGenerator();
//     for (let j = 0; j < custHourly.length; j++) {
//       this.averageCookieHour.push(Math.ceil(this.customer[j] * this.avgCookieSale));
//       this.totalCookies += (this.averageCookieHour[j]);
//     }
//   }
// };

// Lima.render = function () {
//   this.avgCookie();

//   let h3Elem = document.createElement('h3');
//   h3Elem.textContent = this.location;
//   SalmonCookie.appendChild(h3Elem);

//   let ulElem = document.createElement('ul');
//   SalmonCookie.appendChild(ulElem);

//   for (let i = 0; i < custHourly.length; i++) {
//     let currentValue = custHourly[i];
//     let liElm = document.createElement('li');
//     liElm.textContent = `${currentValue} : ${this.averageCookieHour[i]} Cookies`;
//     ulElem.appendChild(liElm);
//   }
//   let liTl = document.createElement('li');
//   liTl.textContent = `Total: ${this.totalCookies}`;
//   ulElem.appendChild(liTl);
// };





// function randCust(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const city = [Seattle, Tokyo, Dubai, Paris, Lima];
// function cityRender() {
//   for (let i = 0; i < city.length; i++) {
//     let eachCity = city[i];
//     eachCity.render();
//   }
// }



// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render()

//cityRender();
