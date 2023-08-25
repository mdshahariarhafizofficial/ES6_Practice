let student = {
    id: 4589,
    shift: 1+"st",
    dep: "Cst",
    phone: 4564654,
}

let student2 = {
    id: 7895,
    shift: 2+"nd",
    dep: "Ct",
    phone: 1234585,
}

console.log(student);
console.log(student2);

// Access Object Key

let depart = student.dep;
console.log(depart);

let shift = student2["shift"];
console.log(shift);

let phone = 'phone';
let phoneNo = student[phone];
console.log(phoneNo);

// Update

student.phone = 89562;
student2[phone] = 474747;
student2["shift"] = 1+"st"

console.log(student);
console.log(student2);

// Add

student.pass = 7378525;
student2.pass = 654234;

console.log(student);
console.log(student2);