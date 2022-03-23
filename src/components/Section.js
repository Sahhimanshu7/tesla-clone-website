import React from 'react'
import './Section.css'
import  DownArrow from '../images/down-arrow.svg'
import Fade from 'react-reveal/Fade';


function Section({title,description,leftBtnDes,rightBtnDes,classname}) {
  return (
    <div className={`Section ${classname}`}>
        <Fade bottom>
            <div className='textItem'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Fade>
        
            <div className='buttons'>
            <Fade bottom>
            <div className='buttonGroup'>
                <div className='leftButton'>
                    {leftBtnDes}
                </div>
                {rightBtnDes && 
                <div className='rightButton'>
                {rightBtnDes}
            </div>
       
        }
            
        </div>
        </Fade>
        <img className='downImg' src={DownArrow} />  
        </div>
         
     </div>
  )
}

export default Section