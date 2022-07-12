import React from "react"
import "./MainPage.css"

const MainPage = () => {
  return (
    <div className="MainContainer">
      <div className="UpperContainer">
        <div className="PhotosContainer">
        <img className="Photos" src="" alt="" />
        </div>
        <div className="Buttons">
        <div className="Real">
          Real
        </div>
        <div className="NotReal">
          Not Real
        </div>
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
  )
}

export default MainPage
