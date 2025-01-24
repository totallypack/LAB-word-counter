const textInput = document.querySelector("#textInput");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {
  const inputValue = textInput.value;
  wordCounter(inputValue);
});

const wordCounter = (value) => {
  console.log(value);

  if (value.trim()) {
    const wordArray = value.trim().split(/\s+/);
    const count = wordArray.length;
    wordCount.innerHTML = `Word Count: ${count}`;
    error.innerHTML = "";
  }
};

const drkBtn = document.querySelector("#bg-switch")
const bod = document.querySelector("body")

// OPTIONAL CHALLENGE

drkBtn.addEventListener("click", () => {
  bod.classList.toggle("dark");
});

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
