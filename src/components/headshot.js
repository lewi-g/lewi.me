import React from 'react'
import headshotStyles from './headshot.module.scss'

function Headshot(){
  return (
    <div role="img" aria-label="Lewi headshot" className={headshotStyles.headshot}>
    </div>
  )
}

export default Headshot