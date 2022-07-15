import React, { useState, MouseEventHandler, MouseEvent } from "react"
import { Link } from "react-router-dom"
import "./MainPage.css"
import Dialog from "../Dialog/Dialog";
import APIComponent from "../../API";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const MainPage = (props: { handleClose: MouseEventHandler<HTMLSpanElement> | undefined; }) => {
  const [removePhotoCard, setRemovePhotoCard] = useState(false)
  // const [tag, setTags] = useState()
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
//   const handleRemoveClick = (event: MouseEvent<HTMLButtonElement>) => {
//     const target = event.target as SVGPathElement
//     const removingText = target.parentElement!.parentElement!.parentElement!.children.item(0)!.innerHTML
//     setTags((prev: any[]) => (prev?.filter(tag => tag !== removingText)))
// }

  const realImg = () => {
      window.location.reload()
  }
    return (
      <div className="MainContainer">{isOpen && <Dialog handleClose={togglePopup}/>}
      <div className="UpperContainer">
        <div className="PhotosContainer">
            <img className="Photos" src={APIComponent()} alt=""></img>
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
          {removePhotoCard ? null : (
            <div className="NotRealPhotosContainer">
              <span className="photosCloseIcon" onClick={() => setRemovePhotoCard(true)} >x</span>
              <img className="NotRealPhotos" src={APIComponent()} alt="" />
              </div>
          )}
            <div className="NotRealPhotosContainer">
              <span className="photosCloseIcon" onClick={props.handleClose}>x</span>
              </div>
            <div className="NotRealPhotosContainer">
              <span className="photosCloseIcon" onClick={props.handleClose}>x</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default MainPage
