
//call(简单版)
Function.prototype.myCall = function(obj,...args){
    let fn = this
    obj.fn=fn;
    let res=obj.fn(...args);//...args 传参相当于将可变参数传入args数组里，之后...args再输出时将其展开
    return res;
}
const stu={
    name:"h0"
}
const stu1={
    name:"h1"
}
function test(a,b){
    console.log(this);
} 
test.call(stu,{},[1,2],85);
test.myCall(stu,{},[1,2],85);
//apply
Function.prototype.myApply = function(obj,arrs){
    obj=obj??window;
    const fn = Symbol();//防止其他属性覆写
    obj[fn]=this;
    const res=!arrs? obj[fn](): obj[fn](...arrs);//不传参转化为false
    return res;
    
}
const stu2={
    name:"h2"
}
function test1(a){
    console.log(this);
    console.log(a);
} 
test1.myApply(stu2,[1]);
test1.apply(stu2,[2])