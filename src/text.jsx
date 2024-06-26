import { useEffect, useState } from "react"




const Text = () => {
    const [text , setText] = useState("")

    // mounting stage
    useEffect(()=>{
        console.log("component did mount");

        // unmounting stage
        return ()=> {
        console.log("component unmount");
        }
    },[])


    // update stage
    useEffect(()=>{
        console.log("component update");
    },[text])




    return(
        <div>
            <input onChange={(e) => setText(e.target.value)} />
            <h1>{text}</h1>
        </div>
    )
}


export default Text