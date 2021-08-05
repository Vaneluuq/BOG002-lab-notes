import React from 'react'
import SideBarCSS from '../CSS/Sidebar.module.css'

const Sidebar = (props) => {
    const {
      addNote, 
      openModal
    } = props
    
    return ( 
        <div className={SideBarCSS.containerSidebar}>
          <div className={SideBarCSS.headerSidebar}>
             <h1>NoteWithMe</h1>
         </div>
            <div className={SideBarCSS.createNote}>
               <h3>Nueva nota</h3>
               {/* <button onClick={addNote}> + </button> */}
               <button onClick={openModal}> + </button>
            </div>
            <div className={SideBarCSS.albumes}>
             <div className={SideBarCSS.titleAlbumes}>
                 <h1>Albumes</h1>
             </div>
             <div className={SideBarCSS.createAlbumes}>
                 <h3>Crear album</h3>
                 <button> + </button>
             </div>
            </div>
         </div>
     );
}
 
export default Sidebar;