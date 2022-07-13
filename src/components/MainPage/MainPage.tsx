import React, {useState} from "react"
import "../MainPage/MainPage.css"
import Dialog from "../Dialog/Dialog";

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>{isOpen && <Dialog handleClose={togglePopup}/>}
            <div className="MainContainer" >
                <div className="UpperContainer">
                    <div className="PhotosContainer">
                        <img className="Photos" src="" alt="" />
                    </div>
                    <div className="Buttons">
                        <input type="button" className="Real"
                               value="Real">
                        </input>
                        <input type="button" className="NotReal"
                               value="Not Real"
                               onClick={togglePopup}>
                        </input>

                    </div>
                </div>
                <div className="LowerContainer">
                    <div className="GenerateReportContainer">
                        <div className="GenerateReport">Generate report</div>
                    </div>
                    <div className="NotRealPhotoStorage">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainPage
