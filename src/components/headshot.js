import React from 'react'
import headshotStyles from './headshot.module.scss'

function Headshot() {
  return (
    <div className={headshotStyles.headshotContainer}>
      <div
        role="img"
        aria-label="Lewi headshot"
        className={headshotStyles.headshot}
      ></div>
    </div>
  )
}

export default Headshot
