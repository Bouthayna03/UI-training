import React, { useState } from "react";
import logo1 from '../assets/images/logo1.png';
import{FaSignOutAlt, FaRegChartBar, FaChalkboardTeacher, FaUsers, FaClipboardList , FaUserTie   ,FaBars,}from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar= ({children}) =>{
    const[isOpen,setIsOpen]=useState(false);
    const toggle= ()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path: "/profil",
            name:"Profil",
            icon:<FaUserTie  />
        },
        {
            path: "/gestionStagiaires",
            name:"Gestion stagiaires",
            icon: <FaUsers/>
        },
        {
            path: "/gestionEncadrants",
            name:"Gestion encadrants",
            icon:<FaChalkboardTeacher />
        },
        {
            path: "/gestionAbsences",
            name:"Gestion absences",
            icon:<FaClipboardList/>
        },
        {
            path: "/deconnexion",
            name:"Déconnexion",
            icon:<FaSignOutAlt/>
        },
       
        
    ]
    return(
       <div className="container">
        <div style={{width: isOpen? "300px":"50px" }} className="sidebar">
            <div className="topsection">
                {/*<h1 style={{display: isOpen? "block":"none" }} className="logo">Logo</h1>*/}
                <img src={logo1} alt="Logo" style={{ display: isOpen ? 'block' : 'none' }} className="logo"/>
                <div style={{marginLeft: isOpen? "50px":"0px" }} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen? "block":"none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}
        <h2>Bienvenue dans l'espace StageMaster</h2>
        <p>Collaborons pour une meilleure éxperience d'apprentissage</p>
        </main>
       </div>
    )
}
export default Sidebar;