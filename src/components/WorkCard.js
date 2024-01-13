import "./WorkCardStyles.css"

import React from 'react'
import pro1 from "../assets/project1.png"
import { NavLink } from "react-router-dom"

function WorkCard() {
  return (
    <div className="project-card">
            <img src={pro1} alt="project"/>
            <h2 className="project-title"> Project Title</h2>
            <div className="pro-details">
                <p> This is a paragraph </p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn"> View </NavLink>
                    <NavLink to="url.com" className="btn"> Source </NavLink>

                </div>

            </div>

        </div>
  )
}

export default WorkCard