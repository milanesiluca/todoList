import { ReactElement } from "react";
import "../CSS/Footer.css"
import { Link } from "react-router-dom";

export function Footer() : ReactElement {
  
    return <footer className="footer-container">
        <p className="">Copyright 2024 Luca Milanesi</p>
        <div className="links">
            <Link to="/">Add Task</Link>
            <Link to="/task-list">Task List</Link>
            
        </div>
    </footer>
    
}