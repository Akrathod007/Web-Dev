const countValue = document.querySelector("#counter");

const increment = () => {
  //Get value in form of integer from UI
  let value = parseInt(countValue.innerText);
  //increment the value
  value = value + 1;
  //assign the incremented value into original value
  countValue.innerText = value;
};

const decrement = () => {
  //Get value in form of integer from UI
  let value = parseInt(countValue.innerText);
  //decrement the value
  value = value - 1;
  //assign the decremented value into original value
  countValue.innerText = value;
};
