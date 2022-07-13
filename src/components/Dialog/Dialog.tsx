import { MouseEventHandler, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import "./Dialog.css"

const Dialog = (props: { handleClose: MouseEventHandler<HTMLSpanElement> | undefined; }) => {
    const features = ["Background", "Eyes", "Nose", "Hair", "Mouth", "Ears", "Jewellery"]
    return (
        <div className="wholeContent popup-box" style={{ border:"black solid "}}>
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <h3 style={{display:"flex", justifyContent:"center", marginBottom:"68px"}}>Why</h3>
            <label>Choose features
                <ul className="featuresContainer">
                    {
                        features.map((feature) => <li style={{listStyleType:"none"}}><label style={{display:"flex", alignItems:"center"}}><input type="checkbox" style={{height:"25px", width:"25px"}}/>{feature}</label></li>)
                    }
                </ul>
            </label>
            <p style={{margin:"0 20px"}}>Other</p>
            <div style={{display:"flex",  justifyContent:"center"}}><input type="text" className="inputStyle" placeholder="Enter your own feature"/>
            </div>
            <div style={{marginTop:"120px", display:"flex", justifyContent:"space-evenly"}}>
                <button className="buttonStyle"  onClick={props.handleClose}>
                    Cancel
                </button>
                <button className="buttonStyle">
                    Ok
                </button>
            </div>
        </div>
    )
}
export default Dialog
