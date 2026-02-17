
// map



const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

console.log(persons.map(item=>{ const fullName = [item.firstname,item.lastname].join(" "); return fullName; }));

// console.log(
//     persons.map(getFullName)
// );

function getFullName(item) {
  
  return [item.firstname,item.lastname].join(" ");
}
