import React from 'react';
import { Link } from 'react-router-dom';
import './ReportPage.css';

export default function ReportPage() {
  return (
    <div className='report-page'>
      <div className='rp__header'>
        <h1 className='titles'>Report</h1>
      </div>

      <div className='rp__detected-unreal'>

          <div className='rp__clue'>
            <h2 id='titles'>Name</h2>
            <div className='rp__imgs'>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
            </div>
          </div>

          <div className='rp__clue'>
            <h2  id='titles'>Name</h2>
            <div className='rp__imgs'>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
            </div>
          </div>

          <div className='rp__clue'>
            <h2 id='titles'>Name</h2>
            <div className='rp__imgs'>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
            </div>
          </div>

      </div>

        <div className='rp__footer'>
          <Link to='/'>
            <button className='rp__add-more'>Add More</button>
          </Link>
        </div>
    </div>
  )
}
