import { motion } from "motion/react"

function Manyqueue(){
    const array=[ 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KMIqMeGnnaDSnvSrHABErAkpBU3WogRJ_A&s',
        'https://i.pinimg.com/236x/ea/f8/7f/eaf87feef07872a37fac64a6093fdb48.jpg',
        'https://i.pinimg.com/736x/12/7b/3e/127b3e8a3cb99a59a1c2868095efebfe.jpg',
        'https://i.pinimg.com/236x/35/b2/1f/35b21f2893b1074cfa4d34c0c25e58b9.jpg',
        'https://i.pinimg.com/736x/fc/93/cd/fc93cd076c3bf9bb5d51388b82ad2e3e.jpg',
        'https://i.pinimg.com/736x/26/c9/65/26c965062a3d4884769bd7991b7973f4.jpg'
    ]
 return (
    <>
    <div className="flex flex-col max-md:w-[50%] lg:w-[20%]">
        {/* items */}
        <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:23.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] max-md:h-[70vw] w-full p-[0.5vw] rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
         <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:23.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] max-md:h-[70vw]  w-full p-[0.5vw] rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
    </div>

    </>
 )
}
export default Manyqueue;