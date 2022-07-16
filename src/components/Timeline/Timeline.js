import React from 'react'
import './Timeline.css'

const Timeline = () => {
  return (
    <div className="timeline section">
      <div className="container--sm">
        <div className="timeline__cards">
          <div className="timeline__line"></div>

          <div className="timeline__card">
            <h4>COLLEGE</h4>
            <p className="">City College of Angeles</p>
            <p className="">
              <i>Bachelor of Science in Information Systems</i>
            </p>
            <p>2018 - 2022</p>
          </div>

          <div className="timeline__card">
            <h4>COLLEGE</h4>
            <p className="">City College of Angeles</p>
            <p className="">
              <i>Bachelor of Science in Information Systems</i>
            </p>
            <p>2018 - 2022</p>
          </div>

          <div className="timeline__card">
            <h4>COLLEGE</h4>
            <p className="">City College of Angeles</p>
            <p className="">
              <i>Bachelor of Science in Information Systems</i>
            </p>
            <p>2018 - 2022</p>
          </div>
        </div>

        <div className="timeline__texts">
          <h2>TIMELINE</h2>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
        </div>
      </div>
    </div>
  )
}

export default Timeline
