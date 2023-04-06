document.getElementById("btn").addEventListener("click", btnClicked);

// Score Variable Set to Zero

function btnClicked() {
  // Score Variable
  let score = 0;

  // Input Variables (Readability)
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value.toLowerCase();
  let input4 = document.getElementById("input4").value.toLowerCase();

  //  No Output Variables for better Troubleshooting

  // Variables for score output to organise code
  let scoreOutput = document.getElementById("score-output");

  // If statement for Question 1
  if (input1 == 5) {
    document.getElementById("output1").innerHTML = "one";
    score++;
  } else {
    document.getElementById("output1").innerHTML = "one wrong";
  }
  // If statement for Question 2
  if (input2 == 18) {
    document.getElementById("output2").innerHTML = "two";
    score++;
  } else {
    document.getElementById("output2").innerHTML = "two wrong";
  }
  // If statement for Question 3
  if (input3 === "5") {
    document.getElementById("output3").innerHTML = "three";
    score++;
  } else {
    document.getElementById("output3").innerHTML = "three wrong";
  }
  // If statement for Question 4
  if (input4 === "5") {
    document.getElementById("output4").innerHTML = "four";
    score++;
  } else {
    document.getElementById("output4").innerHTML = "four wrong";
  }

  // If else statement for score output and feedback
  if (score == 0) {
    scoreOutput.innerHTML = "Zero is impressive";
  } else if (score == 1) {
    scoreOutput.innerHTML = "U have skill issue";
  } else if (score == 2) {
    scoreOutput.innerHTML = "Halfway";
  } else if (score == 3) {
    scoreOutput.innerHTML = "Not Bad";
  } else {
    scoreOutput.innerHTML = "Wow";
  }
}
