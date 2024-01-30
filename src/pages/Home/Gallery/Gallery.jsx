import { useEffect, useState } from "react";
import GalleryData from "./GalleryData/GalleryData";

const Gallery = () => {
   const [datas , setDatas] = useState()
   console.log(datas)
    useEffect(()=>{
        fetch('../../../../public/gallery.json')
        .then(res=> res.json())
        .then(data => setDatas(data) )
    },[])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-[1%] my-5 rounded-lg mb-16">
            {
                datas?.map(items=> <GalleryData key={items.id} items={items}></GalleryData>)
            }
        </div>
    );
};

export default Gallery;