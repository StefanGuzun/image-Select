import React from 'react';
import './ReportPage.css';

export default function ReportPage() {
  return (
    <div className='report-page'>
      <div className='rp__header'>
        <h1>Report</h1>
      </div>

      <div className='rp__detected-unreal'>

          <div className='rp__clue'>
            <h2>Name</h2>
            <div className='rp__imgs'>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
            </div>
          </div>

          <div className='rp__clue'>
            <h2>Name</h2>
            <div className='rp__imgs'>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
            </div>
          </div>

          <div className='rp__clue'>
            <h2>Name</h2>
            <div className='rp__imgs'>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
              <div className='rp__imgs__item'></div>
            </div>
          </div>

      </div>

        <div className='rp__footer'>
          <button className='rp__add-more'>Add More</button>
        </div>
    </div>
  )
}
