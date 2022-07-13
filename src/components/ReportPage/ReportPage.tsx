import React from 'react';
import { Link } from 'react-router-dom';
import './ReportPage.css';

export default function ReportPage() {
  return (
    <div className='ReportPage'>
      <div className='HeaderReportPage'>
        <h1 className='ReportPageName'>Report</h1>
      </div>

          <div className='Clue'>
            <h2 className='ClueName'>Name</h2>
            <div className='UnrealImages'>
              <div className='UnrealImagesItem'></div>
              <div className='UnrealImagesItem'></div>
              <div className='UnrealImagesItem'></div>
              <div className='UnrealImagesItem'></div>
            </div>
          </div>

          <div className='Clue'>
            <h2 className='ClueName'>Name</h2>
            <div className='UnrealImages'>
              <div className='UnrealImagesItem'></div>
              <div className='UnrealImagesItem'></div>
            </div>
          </div>

          <div className='Clue'>
            <h2 className='ClueName'>Name</h2>
            <div className='UnrealImages'>
              <div className='UnrealImagesItem'></div>
              <div className='UnrealImagesItem'></div>
              <div className='UnrealImagesItem'></div>
            </div>
          </div>

        <div className='FooterReportPage'>
          <Link to='/'>
            <button className='AddMoreButton'>Add More</button>
          </Link>
        </div>
    </div>
  )
}
