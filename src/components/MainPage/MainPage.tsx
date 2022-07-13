import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import "./MainPage.css"
import Dialog from "../Dialog/Dialog";
import axios from "axios";

const MainPage = () => {
    const [images, setImages] = useState <any>([])
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
      axios.get("http://localhost:3000/api/v1/image")
      .then(res => setImages(res.config.url))
    }, [])
    console.log(images)
  return (
    <div className="MainContainer">{isOpen && <Dialog handleClose={togglePopup}/>}
      <div className="UpperContainer">
        <div className="PhotosContainer">
        <img className="Photos" src={images} alt=""></img>
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
