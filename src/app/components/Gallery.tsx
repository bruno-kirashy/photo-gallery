import { galleryTypes } from "../data/imagesGallery"

export type GalleryProp = {
    gallery: galleryTypes[];
    handleClickPhoto: (imgNumber:number)=> void;
    darkMode: boolean;
}


export const Gallery = ({gallery, handleClickPhoto, darkMode}:GalleryProp) => {
    return(
        <ul className="flex items-center justify-center flex-wrap ">
            {gallery.map((item, index) => (
            <li className="flex items-center justify-center flex-col cursor-pointer" key={index}>
                <img 
                onClick={() => handleClickPhoto(item.img)}
                src={`/Images/${item.img}.jpg`} 
                alt={item.description} 
                className={`w-70 h-40 m-3 md:w-90 md:h-50 border-1 transition-all duration-500 rounded-md hover:scale-103 ${darkMode ? 'border-gray-600/20' : 'border-gray-900/50 shadow-md shadow-black/20'}`}
                />
                <h1 className={`w-80 md:h-20 h-8 font-mono md:text-[14px] text-[10px] text-gray-400 text-center transition-all duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>{item.description}</h1>
            </li>
            ))}
        </ul>
    )
}