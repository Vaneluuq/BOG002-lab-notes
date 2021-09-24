import React from 'react'
import NotesCSS from '../CSS/MainNotes.module.css'


function SearchBar(props) {
  const {
      searchNote,
      setSearchNote,
      setOptionSearchNote,
      optionSearchNote, 
      getNotesToScreen
    
  } = props


  const inputChange = (e) => setSearchNote(e.target.value);
  const selectChange =(e) => setOptionSearchNote(e.target.value)


    return (
     <div className={NotesCSS.search}>
        <select id="optionSearch" name="options" value={optionSearchNote} onChange={selectChange}>
          <option value="titleOption">Titulo de la nota</option>
          <option value="bodyOption">Cuerpo de la nota</option>
          <option value="timeOption">Fecha de la nota</option>
        </select>
        <input type="text" placeholder="Buscar mi nota"  
            value={searchNote} onChange={inputChange} onKeyUp={getNotesToScreen}/>    
        <button type="button"><i className="fas fa-search"></i></button>
      </div>

    );
  }

  export default SearchBar
