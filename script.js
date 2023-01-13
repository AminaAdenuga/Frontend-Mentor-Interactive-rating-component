"use strict";

//selected just the first maincontainer class.
const mainContainer = document.querySelector(".maincontainer");

const container = document.querySelector(".container");


//JS CODE FOR SUBMIT BUTTON

// desctructuring logic into a separate function so that eventlistener can take in simple parameter in its place


const mybtne = () => {
  mainContainer.style.display = "none";
  container.classList.remove("container");
};
const btne = document.querySelector(".btne");

btne.addEventListener("click", mybtne);


//JS CODE FOR 1-5 BUTTONS 

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
     const mybutton = button.textContent;

    document.querySelector(
      ".para"
    ).textContent = `You selected ${mybutton} out of 5`;
  });
});
