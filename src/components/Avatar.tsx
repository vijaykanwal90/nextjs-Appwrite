// import {type } from "os"
import React from "react"
 type Props = {
    
    img:string ,
     alt?:string,


 }

 const Avatar: React.FC<Props> = ({img,alt}:Props) =>{

    return (

        <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
            <div className="absolute inset-0">
                <img src={img} alt={alt || img} />
            </div>

        </div>
    )

 }

 export default Avatar