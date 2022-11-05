function strictEqual(x,y){
    if(Object.is(typeof(x),typeof(y))){
        if(Object.is(typeof(x),"undefined")){
            return true;
        }else if(Object.is(x,null)){
            return true;
        }else if(Object.is(typeof(x),"string")){
            if(Object.is(x,y)){
                return true;
            }else{  return false;}
        }else if(Object.is(typeof(x),"boolean")){
            if(Object.is(x,y)){
                return true;
            }else{
                return false;
            }
        }else if(Object.is(typeof(x),typeof(Symbol()))){
            if(Object.is(x,y)){
                return true;
            }else{
                return false;}
        }else if(Object.is(typeof(x),"number")){
            if (Object.is(x,NaN)){
                return false;
            }else if(Object.is(y,NaN)){
                return false;
            }else if(Object.is(x,y)){
                return true;
            }else if(Object.is(x,-0)&&Object.is(y,0)){
                return true;
            }else if(Object.is(x,0)&&Object.is(y,-0)){
                 return true;
             }else{return false;}
        }
        
    }else{return false;}
    }
//    TEST
    // strictEqual(1,[1])
    // strictEqual("1",[1])
    // strictEqual(2,1)
    // strictEqual(1,1)
    // strictEqual(undefined,undefined)
    // strictEqual(null,null)
    // strictEqual("null","nu ll")
    // strictEqual("NU","NU")
    // strictEqual(false,false)
    // strictEqual(Symbol(),Symbol())
    // strictEqual(Symbol.for("a"),Symbol.for("a"))
    // strictEqual(NaN,1)
    // strictEqual(1,NaN)
    // strictEqual(0,-0)
