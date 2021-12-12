// QUESTION 01
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var item1 = itemsArray[0].price * itemsArray[0].quantity
var item2 = itemsArray[1].price * itemsArray[1].quantity
var item3 = itemsArray[2].price * itemsArray[2].quantity
var item4 = itemsArray[3].price * itemsArray[3].quantity

document.write(`Total Price Of Item 1: ${item1} <br />
                Total Price Of Item 2: ${item2} <br />
                Total Price Of Item 3: ${item3} <br />
                Total Price Of Item 4: ${item4} <br />`)

var totalAmnt = 0
for (var i = 0; i < itemsArray.length; i++) {

    totalAmnt += itemsArray[i].price * itemsArray[i].quantity

}
document.write(`Total Amount:  ${totalAmnt}`)


// QUESTION 02
var obj = {
    name: "Khalil",
    email: "khalil.haider2109@gmail.com",
    password: "main nhi bataunga",
    age: 17,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}

var ageCheck = "age" in obj
var countryCheck = "country" in obj
if (ageCheck) {
    alert("Yes age is included Obj")
}
if (countryCheck) {
    alert("Yes country is included in Obj")

}

var fNameCheck = "firstName" in obj;
var lNameCheck = "lastName" in obj;
if (fNameCheck) {
    alert("yes firstName is included in obj")
}
else {
    alert("firstName is not included in obj")
}
if (lNameCheck) {
    alert("yes lastName is included in obj")
}
else {
    alert("lastName is not included in obj")
}


// QUESTION 03
function Std(name, school, age, gender) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.gender = gender;
}
var std1 = new Std("Khalil", "BMJ", 17, "Male");
var std2 = new Std("Haider", "BMJ", 19, "Male");
var std3 = new Std("Bilal", "BMJ", 22, "Male");
console.log(std1)
console.log(std2)
console.log(std3)


// QUESTION 04
function Records(name, gender, address, education, profession) {
    this.Name = name;
    this.Gender = gender;
    this.Address = address;
    this.Education = education;
    this.Profession = profession;
}
var person1 = new Records("Khalil", "Male", "Jamshed Road", "HSC", "student")
var person2 = new Records("Areeba", "Female", "clifton", "HSC", "Student")
var person3 = new Records("Bilal", "Male", "Graduate", "Ebgineer")

document.getElementById("myselectbox")
Select = "<select>" +
    "<option>" + "HSC" + "</option>" +
    "<option>" + "Under Graduate" + "</option>" +
    "<option>" + "Matric" + "</option>" +
    "<select>"

myselectbox.innerHTML = Select

document.getElementById("myselectbox2")
Select2 = "<select>" +
    "<option >" + "Profession" + "</option>" +
    "<option>" + "student" + "</option>" +
    "<option>" + "Bussinessman" + "</option>" +
    "<option>" + "Physiologist" + "</option>" +
    "<select>"

myselectbox2.innerHTML = Select2