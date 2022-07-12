import React from "react"
import { Link } from "react-router-dom"
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
