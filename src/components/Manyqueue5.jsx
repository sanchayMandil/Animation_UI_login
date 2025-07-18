import { motion } from "motion/react"

function Manyqueue(){
    const array=[ 
        'https://mrwallpaper.com/images/hd/one-piece-phone-luffy-blowing-gum-jxwp3t8igmie33uu.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9UyuCmFZiTf33XweZFI2BHiyEorFhUPF4ZE77Wk36QLiPUd3dwVBlMNkvLZ3qSgR7P4&usqp=CAU',
        'https://i.pinimg.com/736x/b2/43/3d/b2433d0a7e2d371adf7a7a4f23443d21.jpg',
        'https://w0.peakpx.com/wallpaper/225/863/HD-wallpaper-portgas-d-ace-one-piece-whitebeard-pirate.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23X1Wp3undbbICwqnIW6ApA_FNAV3NptkrfhSJi1uhpoTyoS_zzgfGc-LWN-u6llzeZg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4i8A2Pibj7f6UbLWXUrLHJV4maM3Tm6nP-g&s'
    ]
 return (
    <>
    <div className="lex flex-col max-md:hidden lg:w-[20%]">
        {/* items */}
        <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:21.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] w-full p-[0.5vw] rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
         <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:21.5,repeat:Infinity,ease:'linear'}}
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