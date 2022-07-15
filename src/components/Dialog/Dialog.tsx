import React, { useState, MouseEventHandler } from "react";
import "./Dialog.css"

const Dialog = (props: { handleClose: MouseEventHandler<HTMLSpanElement> | undefined; }) => {
    const features = ["Background", "Eyes", "Nose", "Hair", "Mouth", "Ears", "Jewellery"];
    const [reason] = useState(features);
    const [inputValue, setInputValue] = useState("");
    const inputHandler = (e:any) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = () => {
        reason.push(inputValue)
        console.log(reason);
        console.log('inputValue :>> ', inputValue);
    }

    console.log('inputValue :>> ', inputValue);
    console.log('reason :>> ', reason);

    return (
        <div className="pop-Up">
            <h3 className="Why">Why</h3>
                <div style={{color:"#e3e1e2"}}>Choose features
                    <ul className="featuresContainer">
                        {
                            features.map((feature) => <li style={{listStyleType:"none"}}><div style={{display:"flex", alignItems:"center"}}><input type="checkbox" style={{height:"25px", width:"25px"}}/>{feature}</div></li>)
                        }
                    </ul>
                </div>
            <p style={{margin:"0 20px", color:"#e3e1e2"}}>Other</p>
            <div style={{display:"flex",  justifyContent:"center"}}>
                <input className="inputStyle" onChange={inputHandler} placeholder="Enter your own feature"/>
            </div>
            <div style={{marginTop:"120px", display:"flex", justifyContent:"space-evenly"}}>
                <button className="buttonStyle" onClick={props.handleClose}>
                    Cancel
                </button>
                <button className="buttonStyle" onClick={handleSubmit}>
                    Ok
                </button>
            </div>
        </div>
    )
}
export default Dialog
