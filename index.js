function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
alert(calculateBMI = (weight / ((height/100)^2)));

if (calculateBMI <= 18.5) {
alert("Underweight")
}
else if (calculateBMI >= 18.6 && calculateBMI <= 24.9) {
  alert("Healthy Weight") 
  }
else if (calculateBMI >= 25 && calculateBMI <=29.9) {
alert("Overweight")
}
else if(calculateBMI >= 30) {
alert("Above Obesity") 
}
}