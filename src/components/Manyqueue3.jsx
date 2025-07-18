import { motion } from "motion/react"

function Manyqueue(){
    const array=[ 
        'https://www.pixelstalk.net/wp-content/uploads/images6/Naruto-Phone-HD-Wallpaper-Free-download.png',
        'https://wallpapers.com/images/featured/naruto-aesthetic-phone-y0typupd1nuug0cl.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWC2gbnMXHjnEmyz-BUP6eG9LQ21rqZktd7bRKIim6_U9ksFtMs7BZdsszqblZBbSOWKY&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXMwG7YBHK7Krj-THxfOy3ursnjwx5BPhkpSU51iJteYosJBDu9sSUpULbvlB88ba84I&usqp=CAU',
        'https://dev-content.dashtoon.ai/stability-images/ff60fa11-9a72-4bf2-b794-733eb8693bb7.png',
        'https://i.pinimg.com/736x/22/f2/32/22f232baffef986eb2f0faec15b07d45.jpg'
    ]
 return (
    <>
    <div className="lex flex-col max-md:hidden lg:w-[20%]]">
        {/* items */}
        <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:27.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] w-full p-[0.5vw] rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
         <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:27.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] w-full p-[0.5vw] rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
    </div>

    </>
 )
}
export default Manyqueue;