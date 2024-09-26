import React,{useRef} from 'react'
import Card from './Card'


const ForeGround = () => {
    const ref = useRef(null)
    const data=[
        {
            desc:"Drag and Throw these Cards.",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"DownloadNow",
                tagColor:"green",
            },
        },
        {
            desc:"This is Just React.",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"DownloadNow",
                tagColor:"blue",
            },
        },
        {
            desc:"Design using Framer Motion.",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Hiii",
                tagColor:"green",
            },
        }
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap p-5 gap-10'>
        {data.map((items,index)=>(
            <Card data={items} reference={ref}/>
        ))}
    </div>
  )
}

export default ForeGround