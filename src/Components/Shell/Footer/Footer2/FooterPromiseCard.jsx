import React from 'react'
import './FooterPromiseCard.css';

const FooterPromiseCard = ({icon,heading,description}) => {
  return (
    <div className="Footer-Promise-Card">
        <div className="Footer-Promise-Icon">
            <img src={icon} alt="icon"/>
        </div>
        <div className='Footer-Promise-Text'>
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      
    </div>
  )
}

export default FooterPromiseCard
