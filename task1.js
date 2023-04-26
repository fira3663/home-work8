
let user1={
    name:"firuz",
    age:27,
    "likes bird":true
    
}
user1.admin=true;
delete user1.age
// это вызовет синтаксическую ошибку
user1["likes bird"]=undefined
let key = "likes birds";

console.log(Object.values(user1))