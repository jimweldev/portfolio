import React from 'react'

import Fancybox from './../Fancybox'
import './Certificate.css'

const Certificate = ({ image }) => {
  return (
    <Fancybox
      options={{
        Thumbs: {
          autoStart: false,
        },
        Toolbar: {
          display: [
            { id: 'counter', position: 'center' },
            { id: 'close', position: 'left' },
            { id: 'slideshow', position: 'right' },
          ],
        },
        infinite: true,
      }}
    >
      <a data-fancybox="certificate" data-src={image}>
        <div className="certificate">
          <img src={image} alt="" />
        </div>
      </a>
    </Fancybox>
  )
}

export default Certificate
