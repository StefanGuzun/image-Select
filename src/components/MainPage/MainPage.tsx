import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./MainPage.css"
import Dialog from "../Dialog/Dialog";
import { getImages, getReports } from "../../API";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { AddImage } from "../AddImage/AddImage";
import { report } from "process";

export let img: string

export let id: number

const MainPage: React.FC = () => {
  const [image, setImage] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reports, setReports] = useState([])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const realImg = () => {
      window.location.reload()
  }

  useEffect(() => {
      getImages().then(item => setImage(item))
    getReports()
        .then((report: React.SetStateAction<never[]>)=>setReports(report))
    }, [])

    img = image

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
            {reports.map((img: any) => {
              return(<AddImage image={img.src} id={img.id}/>)
            })}
          </div>
      </div>
    </div>
  )
}

export default MainPage
