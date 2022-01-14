const amount = document.querySelector('#bill-amount');
const people = document.querySelector('#people');
const service = document.getElementById('service');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const res = document.getElementById('tip-amount');

submit.addEventListener('click', function (e) {
  e.preventDefault();

  const money = amount.value;
  if (money === '') {
    result.style.display = 'none';
    alert('Enter bill amount');
  }
  const numPeople = people.value;
  if (numPeople === '') {
    result.style.display = 'none';
    alert('Please Enter number of People');
  }
  if (money === '' || numPeople === '') return;
  const per = service.options[service.selectedIndex].value;
  // console.log(money,numPeople,per);

  let mult = money * per;
  let div = 100 * numPeople;

  let tip = mult / div;
  tip = tip.toFixed(2);
  // console.log(tip);
  res.innerText = tip;

  result.style.display = 'block';

  amount.value = '';
  people.value = '';
});
