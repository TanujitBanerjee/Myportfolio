const header = document.querySelector("header");
console.log("Welcome to my portfolio website!");

const colorBtn = document.createElement("button");
colorBtn.textContent = "Change Background";
header.appendChild(colorBtn);

colorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
});

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Show More";
header.appendChild(toggleBtn);

const extraText = document.createElement("p");
extraText.textContent = "Thanks for visiting my portfolio!";
extraText.style.display = "none";
header.appendChild(extraText);

toggleBtn.addEventListener("click", function() {
  if (extraText.style.display === "none") {
    extraText.style.display = "block";
    toggleBtn.textContent = "Hide";
  } else {
    extraText.style.display = "none";
    toggleBtn.textContent = "Show More";
  }
});

const date = new Date();
const datePara = document.createElement("p");
datePara.textContent = "Today's date is: " + date.toDateString();
header.appendChild(datePara);

let count = 0;
const counterBtn = document.createElement("button");
counterBtn.textContent = "Click Me";
header.appendChild(counterBtn);

counterBtn.addEventListener("click", function() {
  count++;
  counterBtn.textContent = "Clicked " + count + " times";
});

const textColorBtn = document.createElement("button");
textColorBtn.textContent = "Change Text Color";
header.appendChild(textColorBtn);

textColorBtn.addEventListener("click", function() {
  const colors = ["black", "red", "green", "blue", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.color = randomColor;
});
