import { ReactElement } from "react";
import "../CSS/Footer.css"

export function Footer() : ReactElement {
  
    return <footer className="footer-container">
        <p className="">Copyright 2024 Luca Milanesi</p>
        <div className="links">
            <a href="#">Add Task</a>
            <a href="#">Task List</a>
            <a href="#">About</a>
        </div>
    </footer>
    
}