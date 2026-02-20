const facts = [
  "I enjoy making Chinese food for friends on weekends.",
  "Crochet helps me slow down and focus after classes.",
  "Gaming inspires ideas for building better online communities.",
  "Our Senior Design goal is easy and friendly teammate matching on campus."
];

const factButton = document.getElementById("factButton");
const factOutput = document.getElementById("factOutput");
const year = document.getElementById("year");

let factIndex = 0;

if (factButton && factOutput) {
  factButton.addEventListener("click", () => {
    factOutput.textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
  });
}

if (year) {
  year.textContent = new Date().getFullYear().toString();
}
