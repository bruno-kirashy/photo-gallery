import { galleryTypes } from "../data/imagesGallery"

export type GalleryProp = {
    gallery: galleryTypes[];
    handleClickPhoto: (imgNumber:number)=> void;
    darkMode: boolean;
}


export const Gallery = ({gallery, handleClickPhoto, darkMode}:GalleryProp) => {
    return(
        <ul className="flex items-center justify-center flex-wrap ">
            {gallery.map((item) => (
            <li className="flex items-center justify-center flex-col cursor-pointer mx-2" key={item.img}>
                <div className="w-full max-h-max aspect-video mx-2 md:mx-0 mb-2">
                    <img
                    loading="lazy"
                    onClick={() => handleClickPhoto(item.img)}
                    src={`/Images/${item.img}.jpg`} 
                    alt={item.description} 
                    className={`w-full h-full md:w-90 md:h-50 border-1 transition-all duration-500 rounded-md hover:opacity-100 hover:shadow-2xl shadow-blue-500/10 hover:scale-103 ${darkMode ? 'border-gray-600/20 opacity-90' : 'border-gray-900/50 shadow-md shadow-black/20'}`}
                    />
                </div>
                <h1 className={`w-auto mx-2 md:h-20 h-8 font-mono md:text-[14px] text-[13px] text-gray-400 text-center transition-all duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>{item.description}</h1>
            </li>
            ))}
        </ul>
    )
}