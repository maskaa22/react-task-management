import React from 'react';
import c from './TaskDetails.module.css';

const TaskDetails = () => {
  return (
    <div className='container'>
        <div className={c.headerDetail}>
            <h3 className={c.title}>Detail Task</h3>
            <p className={c.text}>UI / UX Designer</p>
        </div>
        <ol className={c.list}>
            <li className={c.item}>Understanding the tools in Figma</li>
            <li className={c.item}>Understand the basics designs</li>
            <li className={c.item}>Design a mobile apps with figma</li>
        </ol>
      <button className={c.btn}>Go To Detail</button>
    </div>
  )
}

export default TaskDetails
