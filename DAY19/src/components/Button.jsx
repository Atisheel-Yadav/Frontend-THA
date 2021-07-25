import React, { useState } from "react"
function Button() {
    // array destructure

    // const array=['a','b','c']
    // const [a,b,c]=array;
    // console.log(a,b,c)
    const [count, setCount] = useState(0)

    return (

        <button onClick={() => {
            let newCount = count + 1
            setCount(newCount)

        }}>{count} </button>

    )
}
export default Button;