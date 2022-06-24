const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
let myLeads = [];

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);

  myLeads.forEach(function (lead) {
    console.log(lead);
  });
  
  inputEl.value = ' ';
});