import React from 'react'

function MenuItem(props) {
  return (
    <div className="menu-item">
        <img src={"https://react-projects-5-menu.netlify.app" + props.img} alt={props.title} />
        <div className="menu-item-text">
            <div className="menu-item-name-price">
            <h4>{props.title}</h4>
            <p>{"$" + props.price}</p>
            </div>
            <div className="menu-item-text-desc">
            <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default MenuItem