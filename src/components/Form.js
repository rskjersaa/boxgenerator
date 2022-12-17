import { useState } from 'react'

const Form = (props) => {

    const{ boxColorArray, setBoxColorArray } = props;
    const [color, setColor] =useState("")
    const submitHandler = (e) => {
        e.preventDefault();

        setBoxColorArray([...boxColorArray,color]);
        
    }
    return (
    <div>
        <form onSubmit = {submitHandler} style = {{margin:"60px"}}>
            <div>
                <label htmlFor="color">Color</label>
                <input
                    type="text"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}/>
            </div>
            <button style = {{color:"red", backgroundColor: "black", margin:"25px"}}>Add</button>
        </form>
    </div>
  )
}

export default Form