import { useState, MouseEventHandler } from "react";
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
        <div className="wholeContent popup-box" style={{ border:"1.5px solid #cfd3d6"}}>
            <h3 style={{display:"flex", justifyContent:"center", marginTop:"0", color:"#e3e1e2"}}>Why</h3>
                <div style={{color:"#e3e1e2"}}>Choose features
                    <ul className="featuresContainer">
                        {
                            features.map((feature) => <li style={{listStyleType:"none"}}><div style={{display:"flex", alignItems:"center"}}><input type="checkbox" style={{height:"25px", width:"25px",color:"black"}}/>{feature}</div></li>)
                        }
                    </ul>
                </div>
            <p style={{margin:"0 20px", color:"#e3e1e2"}}>Other</p>
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
