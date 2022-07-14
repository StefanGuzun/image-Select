import { useState } from "react"
import { Link } from "react-router-dom"
import "./MainPage.css"
import Dialog from "../Dialog/Dialog";
import APIComponent from "../../API";

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="MainContainer">{isOpen && <Dialog handleClose={togglePopup}/>}
      <div className="UpperContainer">
        <div className="PhotosContainer">
        <img className="Photos" src={APIComponent()} alt=""></img>
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
            <Link to='/ReportPage'>
              <div className="GenerateReport">Generate report</div>
            </Link>
          </div>
          <div className="NotRealPhotoStorage">

          </div>
      </div>
    </div>
  )
}

export default MainPage
