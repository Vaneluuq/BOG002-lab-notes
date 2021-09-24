import React from 'react'
import SideBarCSS from '../CSS/Sidebar.module.css'
import { handleLogout} from './firebaseAuth'
import { Link } from 'react-router-dom';


const Sidebar = (props) => {
    const {
      openModal
    } = props
    
    return ( 
        <div className={SideBarCSS.containerSidebar}>
          <div className={SideBarCSS.headerSidebar}>
             <h1>NoteWithMe</h1>
          </div>
          <div className={SideBarCSS.createNote}>
              <h3>Nueva nota</h3>
              <button onClick={ openModal}> + </button>
          </div>
          <div className={SideBarCSS.albumes}>
            <div className={SideBarCSS.titleAlbumes}>
                <h3>Albumes</h3>
            </div>
            <div className={SideBarCSS.createAlbumes}>
                <h3>Crear album</h3>
                <button> + </button>
            </div>
          </div>
          <Link to="/">
            <button className={SideBarCSS.logout} onClick= {handleLogout}>Logout</button>
          </Link>
         </div>
     );
}
 
export default Sidebar;