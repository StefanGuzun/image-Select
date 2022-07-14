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

  const realImg = () => {
      window.location.reload()
  }
    return (
      <div className="MainContainer">{isOpen && <Dialog handleClose={togglePopup}/>}
      <div className="UpperContainer">
        <div className="PhotosContainer">
        <img className="Photos" src={APIComponent()} alt=""/>
        </div>
        <div className="ButtonPosition">
            <input type="button" className="ButtonStyle" value="Real" onClick={realImg}/>
            <input type="button" className="ButtonStyle" value="Not Real" onClick={togglePopup}/>
        </div>
      </div>
      <div style={{height: "50%", width: "100%"}}>
          <div className="GenerateReportContainer">
            <Link to='/ReportPage'>
              <div className="GenerateReport">Generate report</div>
            </Link>
          </div>
          <div className="NotRealPhotoStorage">
            #############
          </div>
      </div>
    </div>
  )
}

export default MainPage
