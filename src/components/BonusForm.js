import React, {useState} from 'react'

const BonusForm = (props) => {

    const{bonusBoxColorArray, setBonusBoxColorArray}=props;

    const [color,setColor] = useState("");
    const [size, setSize] = useState (50);

    const submitHandler = (e) => {
        e.preventDefault();

        setBonusBoxColorArray ([...bonusBoxColorArray, {color:color,size: size +"px"}]);

        setColor("");
        setSize (50);
    }
return (
    <div>
        <form onSubmit = {submitHandler} style = {{margin:"20px"}}>

            <div>
                <label htmlFor="color">
                    Color
                </label>
                <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="size">Width and Height in Pixels</label>
                <input type="text" name="size" value = {size} onChange = {(e) => setSize(e.target.value)}/>
            </div>
            <button style={{color:"red"}}>Add</button>
        </form>
    </div>
    )
}

export default BonusForm