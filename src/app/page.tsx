"use client"

import { useState } from "react";
import { imagesGallery } from "./data/imagesGallery"
import {  Moon, Sun } from "lucide-react";
import {  FooterBar } from "./components/Footer";
import { ModalSection } from "./components/Modal";
import { Gallery } from "./components/Gallery";

const App = () => {
  const gallery =  imagesGallery;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [darkMode, setDarkMode] =useState<boolean>(true);

  const handleClickPhoto = (idImg:number) => {
    setSelectedImg(idImg);
    setOpenModal(true)
  } 

  const handleToggleModal = () => {
    setOpenModal(!openModal)
  }

  const handleNextPhoto = (side:string) => {
      if (side === 'left') {
        setSelectedImg(selectedImg === 1 ? gallery.length : selectedImg -1);
      } else {
        setSelectedImg(selectedImg === gallery.length ? 1 : selectedImg +1);
      }
  }

  const selectDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    
    <div className={`w-full flex items-center justify-center flex-col transition-all duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="w-full h-full border-b-1 flex justify-end items-center border-gray-600 md:px-20 px-7">
        <h1 className={`font-mono text-[8px] mr-2 md:text-[13px] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Modo Escuro</h1>
        {darkMode ? 
          <Sun onClick={selectDarkMode}  className="mr-2 md:w-9 md:h-9 md:border-2  w-7 h-7 cursor-pointer my-2  border-1 rounded-4xl p-1 transition-all duration-300 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/50"/>
           : <Moon  onClick={selectDarkMode} className={`mr-2 md:w-9 md:h-9 md:border-2 w-7 h-7 cursor-pointer my-2 shadow-2xl shadow-black  border-1 rounded-4xl p-1 transition-all duration-300 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/50 ${darkMode ? 'text-white border-black' : 'bg-black'}`} /> }
          
      </div>
      <h1 className={`md:m-8 m-4 text-2xl font-mono md:text-5xl transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
        Galeria De Fotos
      </h1>
      <h6 className={`md:mb-10 mb-3 text-[12px] w-[320px]  md:text-[17px] font-mono text-center md:w-auto transition-all duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
        Capturando momentos inesquecíveis, uma imagem de cada vez.
      </h6>
      
      <Gallery
      handleClickPhoto={handleClickPhoto}
      gallery={gallery}
      darkMode={darkMode}
      />

      { openModal && 
      <ModalSection 
      handleToggleModal={handleToggleModal}
      handleNextPhoto={handleNextPhoto}
      selectedImg={selectedImg}
      gallery={gallery}
      />
      }
    
      <FooterBar
      darkMode={darkMode}
      />

    </div>
  
  )
}
export default App