import { CldImage } from "next-cloudinary"
import Image from "next/image"


export const Card = ({producto}) => {
    return(
        <>
            <div className="w-1/2">
                <CldImage 
                    src={`/${producto.img}`}
                    alt={producto.name}
                    width={600}
                    height={600}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                />
                <h3>{producto.name}</h3>
            </div>
        </>
    )
}