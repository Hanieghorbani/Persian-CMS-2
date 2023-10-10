import React from 'react'
import './CardProfile.css'
export default function CardProfile(props) {
  return (
        <div className="bgMain my-4 rounded p-4 text-white">
          <h5 className="mb-5">{props.title}</h5>
          <div className="d-flex">
            <div className="d-flex flex-column border-start border-success ps-3 text-secondary">
              <p>4 مهر 1394</p>
              <p>25 تیر 1395</p>
              <p>13 بهمن 1395</p>
            </div>

            <div className="d-flex flex-column valueinLeft">
              <p>
                <span>●</span>
                کالج سلطنتی هنر
              </p>
              <p>
                <span>●</span>
                موسسه فناوری ماساچوست (MIT)
              </p>
              <p>
                <span>●</span>
                دانشکده هنر موسسه شیکاگو (SAIC)
              </p>
            </div>
          </div>
        </div>
  )
}
