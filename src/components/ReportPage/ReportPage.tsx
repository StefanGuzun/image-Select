import { Link } from 'react-router-dom';
import './ReportPage.css';

const ReportPage = () => {
  return (
    <div className='ReportPage'>
      <div style={{width: "100%", height: "70px", borderBottom: "1.5px solid #cfd3d6"}}>
        <h1 style={{marginLeft: "35px"}}>Report</h1>
      </div>
          <div style={{width: "100%", height: "auto", marginTop: "50px"}}>
            <h2 style={{marginLeft: "35px"}}>Name</h2>
            <div className='UnrealImages'>
              <div className='UnrealImagesItem'/>
              <div className='UnrealImagesItem'/>
              <div className='UnrealImagesItem'/>
              <div className='UnrealImagesItem'/>
            </div>
          </div>
          <div>
            <h2 style={{marginLeft: "35px"}}>Name</h2>
            <div className='UnrealImages'>
              <div className='UnrealImagesItem'/>
              <div className='UnrealImagesItem'/>
            </div>
          </div>
          <div>
            <h2 style={{marginLeft: "35px"}}>Name</h2>
            <div className='UnrealImages'>
              <div className='UnrealImagesItem'/>
              <div className='UnrealImagesItem'/>
              <div className='UnrealImagesItem'/>
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

export default ReportPage