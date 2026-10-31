const balanceText = document.getElementById("balance-text")
const name = document.getElementById("name");
const amount = document.getElementById("amount");
const addButton = document.getElementById("add-button");
const transactionList = document.getElementById("transaction-list");

addButton.addEventListener("click",function(){
console.log(name.value)
console.log(amount.value)

// creating list so that whatever you type saves here
const listItem = document.createElement("li");
listItem.textContent = name.value + ": $" + amount.value;
transactionList.appendChild(listItem); // so that it saves in the list in html
name.value = "";
amount.value = "";
})