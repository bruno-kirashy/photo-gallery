import { galleryTypes } from "../data/imagesGallery";

export type ModalProps = {
    handleToggleModal: () => void;
    handleNextPhoto: (side:string) => void;
    selectedImg: number;
    gallery:galleryTypes[];
};


export const ModalSection = ({handleToggleModal, handleNextPhoto, selectedImg, gallery}:ModalProps) => {
    return(
        <div className="w-full h-full p-5 flex justify-center items-center bg-black/95 top-0 fixed md:p-">
       
            <div onClick={handleToggleModal} className="cursor-pointer">
            <div className="w-10 h-1 bg-gray-300 absolute top-0 right-0 m-10 rotate-45 rounded-2xl md:w-10 md:h-2 "></div>
            <div className="w-10 h-1 bg-gray-300 absolute top-0 right-0 m-10 rotate-135 rounded-2xl md:w-10 md:h-2 "></div>
            </div>

            <div className="max-w-svw max-h-svw">

                <div 
                onClick={()=> handleNextPhoto('left')}
                className="cursor-pointer">
                <div className="w-10 h-2 bg-gray-300 rotate-135 rounded-2xl md:w-10 md:h-2 absolute top-[50%] left-0 ml-5"></div>
                <div className="w-10 h-2 bg-gray-300 rotate-45 rounded-2xl md:w-10 md:h-2 absolute top-[50%] mt-6 left-0 ml-5"></div>
                </div>

            <img
                className="rounded-md  md:rounded-4xl w-full h-full object-content pointer-events-none" 
                src={`/Images/${selectedImg}.jpg`} alt={gallery[selectedImg -1].description} 
            />

                <div 
                onClick={()=> handleNextPhoto('right')}
                className="cursor-pointer">
                    <div className="w-10 h-2 bg-gray-300 rotate-45  rounded-2xl md:w-10 md:h-2 absolute top-[50%] right-0 mr-5"></div>
                    <div className="w-10 h-2 bg-gray-300 rotate-135  rounded-2xl md:w-10 md:h-2 absolute top-[50%] mt-6 right-0 mr-5"></div>
                </div>
            </div>
        </div>
    )
} 