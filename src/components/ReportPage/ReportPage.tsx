import { Link } from 'react-router-dom';
import './ReportPage.css';
import { getReason } from '../../API';
import { useState, useEffect } from 'react';

const ReportPage = () => {
  const [reasons, setReasons] = useState<any>([]);

  useEffect(() => {
    getReason()
    .then(item => setReasons(item))
    .catch(err => console.log(err))
}, [])


  return (
      <div className='ReportPage'>
        <div style={{width: "650px", height: "70px", backgroundColor: "white"}}>
        <div className="Header">
          <h1 style={{width: "100px", marginLeft: "35px", marginBottom: "20px"}}>Report</h1>
        </div>
        </div>
        <div style={{width: "100%", height: "660px", paddingBottom: "15px", overflowY: "scroll"}}>
        {reasons.map((item:any) => {
          return (
            <>
              <h2 style={{marginLeft: "35px"}}>{item.reason}</h2>
              <div className='UnrealImages'>
                <div className='UnrealImagesItem'/>
              </div>
            </>
          )
        })}
        </div>
        <div style={{width: "650px", height: "80px", backgroundColor: "black"}}>
          <div className='FooterReportPage'>
            <Link to='/'>
              <button className='AddMoreButton'>Add More</button>
            </Link>
          </div>
      </div>
    </div> 
  )
}

export default ReportPage