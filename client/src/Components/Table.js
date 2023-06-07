const add = document.querySelector("#add");
const course = document.querySelector("#Course");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");

let gpArry = [];

add.addEventListener("onClick", () => {
  const tr = document.createElement("tr");
  const tdCourse = document.createElement("td");
  tdCourse.innerHTML = course.innerHTML;
  const tdGrade = document.createElement("td");
  tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
  tr.appendChild(tdCourse);
  tr.appendChild(tdGrade);
  console.log("hi");
});
