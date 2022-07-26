import { useState, MouseEventHandler, useEffect } from "react";
import { getReason, postReason } from "../../API";
import "./Dialog.css"
import { postReports } from "../../API";
import { img, list } from "../MainPage/MainPage";

const Dialog = (props: { handleClose: MouseEventHandler<HTMLSpanElement> | undefined; }) => {
    const [reasons, setReasons] = useState<any>([]);
    const [inputValue, setInputValue] = useState("");


    const inputHandler = (e:any) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        getReason()
        .then(item => setReasons(item))
        .catch(err => console.log(err))
    }, [])

    const sendImage = () => {
        postReports({"src": img})
        window.location.reload() 
    }
    
    let sendOther = () => {
        if(inputValue.trim() == "") {
            return
        } else {
            postReason({"reason": inputValue})
        }
    }

    return (
        <div className="pop-Up">
            <h3 className="Why">Why</h3>
                <div style={{color:"#e3e1e2"}}>Choose features
                    <ul className="featuresContainer">
                        {
                            reasons.map((item: any) => <li style={{listStyleType:"none"}}><div style={{display:"flex", alignItems:"center"}}><input type="checkbox" style={{height:"25px",width:"25px"}}/>{item.reason}</div></li>)
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
                <div className="divButtonStyle" onClick={() => {sendOther()}}>
                <div onClick={props.handleClose} className="divButtonStyle">
                <button className="buttonStyle" onClick={() => {sendImage()}}>
                    Ok
                </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog
