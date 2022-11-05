// 浅拷贝
let user = {
    name: "John"
  };
  
  let admin1 = user;
  console.log(user);
  admin1.name="hhh"
  console.log(user);
//  深拷贝
let admin2=JSON.parse(JSON.stringify( user))
admin2.name="hehehe"
console.log(user)
console.log(admin2)