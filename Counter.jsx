import { useState } from "react"

const Dem = ()=>{
    let [con,setCon]=useState(0 )

    const addVal= ()=>
    {
        if(con<20)
        setCon(con+1)
    }
    const subVal= ()=>
        {
            if(con>0)
            setCon(con-1)
        }
    return(
        <>
        <h1> 1. Assigment on react counter</h1>
       <div> <button onClick={addVal}>+</button>
        <br /><span>{con}</span><br />
        <button onClick={subVal}>-</button>
        </div>
        </>
    )
}

export default Dem