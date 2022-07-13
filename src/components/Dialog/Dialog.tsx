import { useState, useEffect, MouseEventHandler } from "react";
import "./Dialog.css"

const Dialog = (props: { handleClose: MouseEventHandler<HTMLSpanElement> | undefined; }) => {

    const features = ["Background", "Eyes", "Nose", "Hair", "Mouth", "Ears", "Jewellery"];

    const [reason, setReason] = useState(features);
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
        <div className="wholeContent popup-box" style={{ border:"black solid "}}>
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <h3 style={{display:"flex", justifyContent:"center", marginBottom:"68px"}}>Why</h3>
                <div>Choose features
                    <ul className="featuresContainer">
                        {
                            features.map((feature) => <li style={{listStyleType:"none"}}><div style={{display:"flex", alignItems:"center"}}><input type="checkbox" style={{height:"25px", width:"25px"}}/>{feature}</div></li>)
                        }
                    </ul>
                </div>
            <p style={{margin:"0 20px"}}>Other</p>
            <div style={{display:"flex",  justifyContent:"center"}}>
                <input id="other" className="inputStyle" onChange={inputHandler} placeholder="Enter your own feature"/>
            </div>
            <div style={{marginTop:"120px", display:"flex", justifyContent:"space-evenly"}}>
                <button className="buttonStyle"  onClick={props.handleClose}>
                    Cancel
                </button>
                <button onClick={handleSubmit} className="buttonStyle">
                    Ok
                </button>
            </div>
        </div>
    )
}
export default Dialog
