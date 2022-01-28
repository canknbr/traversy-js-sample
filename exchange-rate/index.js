const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch('https://v6.exchangerate-api.com/v6/fa1d146939d20f1b99c78d77/latest')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
calculate();
