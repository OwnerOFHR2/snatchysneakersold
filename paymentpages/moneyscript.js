let money = "money"; 

 if(!localStorage.getItem(money)) {
    localStorage.setItem(money, 60000); 
 }

const orderaf = document.querySelector('.orderaf');
const ordercement3 = document.querySelector('.ordercement3');
const orderpd = document.querySelector('.orderpd');
const orderj5br = document.querySelector('.orderj5br');
const orderj5b = document.querySelector('.orderj5b');
const orderj5bv = document.querySelector('.orderj5bv');
const orderj5bb = document.querySelector('.orderj5bb');
const orderfr = document.querySelector('.orderfr');
const ordergi2 = document.querySelector('.ordergi2');
const ordersp = document.querySelector('.ordersp');
const orderjc = document.querySelector('.orderjc');
const orderof = document.querySelector('.orderof');
const orderag = document.querySelector('.orderag');
const ordersply = document.querySelector('.ordersply');
const orderslides = document.querySelector('.orderslides');

orderaf.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 110);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

ordercement3.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 320);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderpd.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 120);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderj5br.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 150);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderj5b.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 120);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderj5bv.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 150);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderj5bb.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 110);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderfr.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 235);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

ordergi2.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 80);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});
ordersp.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 430);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderjc.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 380);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderof.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 1500);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderag.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 55000);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

ordersply.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 360);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

orderslides.addEventListener('click', () => {
  let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have not enough money.")
  } else {
    localStorage.setItem(money, currentMoney - 250);
    document.getElementById("money-counter").innerHTML = localStorage.getItem(money);
    alert('Order Confirmed.');
  }
});

document.getElementById("money-counter").innerHTML = localStorage.getItem(money);