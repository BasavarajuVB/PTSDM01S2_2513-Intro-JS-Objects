let obj = {
    firstName: "John",
    lastName: "Wilson",
    phone : 1234567890,
    subject : "Maths",
    hobby : "Reading",
    
}
for (let key in obj){
    console.log(key + " : " + obj[key]);
}   
for(let key in obj){
    console.log(obj[key])
}
