import { useState } from "react";

const Bill = ()=>{
    const [add,setAdd]=useState(0)
    const [add1,setAdd1]=useState(0)
    const [add2,setAdd2]=useState(0)

   
    const Additm =()=>{

        setAdd(add +1)
    }
    const subitm =()=>{
        if(add>0)
        setAdd(add -1 )
    }

    const Additm1 =()=>{
        setAdd1(add1 +1)
    }
    const subitm1 =()=>{
        if(add1>0)
        setAdd1(add1 -1 )
    }

    const Additm2=()=>{
        setAdd2(add2 +1)
    }
    const subitm2 =()=>{
        if(add2>0)
        setAdd2(add2 -1 )
    }
    const Sabji=70;
    const pavbhaji = 100;
    const pizz = 450;

    return(
        <>
            <h1>2. Assigment on billing</h1>
            <h3>J.P Catters Cart</h3>
            <h5>Sabji-Roti</h5><span>70 Rs </span>
            <button onClick={Additm}>+ </button><span>{add}</span><button onClick={subitm}>-</button> <span>Sub total ={Sabji * add} </span>
           
            <h5>Pav-Bhaji</h5><span>100 Rs </span>
            <button onClick={Additm1}>+ </button><span>{add1}</span><button onClick={subitm1}>-</button> <span>Sub total ={pavbhaji *  add1} </span>
           
            <h5>Pizza</h5><span>450 Rs </span>
            <button onClick={Additm2}>+ </button><span>{add2}</span><button onClick={subitm2}>-</button> <span>Sub total ={pizz * add2} </span>

            <h3>Grand Total = {(Sabji * add)+(pavbhaji * add1)+ (pizz * add2)}</h3>
           
        </>
    )
}

export default Bill