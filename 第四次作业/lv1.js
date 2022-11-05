
 function sumTo1(n){
    let sum=0;
    for(let i=1;i<n+1;i++){
        sum=sum+i;
    }
    return sum
}
sumTo1(10);

function sumTo2(n){
    let sum=0;
    if(n===0){return sum}else{return  sum=n+sumTo2(n-1)}
}

sumTo2(100);