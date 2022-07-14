import { useState } from "react"
import { Link } from "react-router-dom"
import "./MainPage.css"
import Dialog from "../Dialog/Dialog";
import APIComponent from "../../API";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function realImg() {

    }

    return (
    <div className="MainContainer">{isOpen && <Dialog handleClose={togglePopup}/>}
      <div className="UpperContainer">
        <div className="PhotosContainer">
        <TransformWrapper
          initialScale={1}
        >
          <TransformComponent>
            <img className="Photos" src={APIComponent()} alt=""></img>
          </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="ButtonPosition">
            <input type="button" className="ButtonStyle"
                   value="Real" onClick={realImg}>
            </input>
            <input type="button" className="ButtonStyle"
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
