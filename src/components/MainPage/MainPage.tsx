import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./MainPage.css"
import Dialog from "../Dialog/Dialog";
import getImage from "../../API";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [image, setImage] = useState<any>()
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  const PhotoRemove = (e: any) => {
    const deleteButton = e.target.parentNode
    deleteButton.remove(deleteButton)
  }

  const realImg = () => {
      window.location.reload()
  }
  console.log(image);
  
  const state = useSelector((state: any) => state);
  console.log("state: ", state.image.images);

  useEffect(() => {
    getImage().then(item => setImage(item))
    }, [])
    return (
      <div className="MainContainer">{isOpen && <Dialog handleClose={togglePopup}/>}
      <div className="UpperContainer">
        <div className="PhotosContainer">
        <TransformWrapper
          initialScale={1}
        >
          <TransformComponent>
            <img className="Photos" src={image} alt=""></img>
          </TransformComponent>
          </TransformWrapper>
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
            <div className="NotRealPhotosContainer">
              <span className="photosCloseIcon" onClick={PhotoRemove}>x</span>
              <img className="Photos" src={image} alt=""></img>
            </div>
            <div className="NotRealPhotosContainer">
              <span className="photosCloseIcon" onClick={PhotoRemove}>x</span>
              <img className="Photos" src={image} alt=""></img>
            </div>
            <div className="NotRealPhotosContainer">
              <span className="photosCloseIcon" onClick={PhotoRemove}>x</span>
              <img className="Photos" src={image}  alt=""></img>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainPage
