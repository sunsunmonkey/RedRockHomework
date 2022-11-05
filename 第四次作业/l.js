function strictEqual(x,y){ 
    if(Object.is(x,true)||Object.is(x,false)){
        if(Object.is(x,y)){
            return true;
        }else{
            return false;
        }

}
}
strictEqual(true,false)

