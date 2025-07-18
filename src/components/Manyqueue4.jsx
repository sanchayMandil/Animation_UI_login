import { motion } from "motion/react"

function Manyqueue(){
    const array=[ 
        'https://i.pinimg.com/474x/b8/af/da/b8afdad6ce060c62f92076424ed5fab7.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczja28h_KwjEouOAo8qD6zWSYDS0Wil7YOw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgD7mhyXnuI0PPw9SVS9wBEzktAHF1JUsIA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnIa4Mj8n7rTpiUbKtqNoQ1Nnd_Dv7poWLQ4c3wnTP8TKdhT02HhxP62znd0tnkntc-c&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjOP61sd3rLaxhwb-PdLxVq1gM_aC-YwqPVB-VVmk7gE7Z3p0hxqs6-Ax3suErXGUS90&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjva04fvTKBLfkwtIDaxibOuJGeUd-hKPdmKInNPMSPqsl4NMo6KX1nEvh9yyjgwy9S_8&usqp=CAU'
    ]
 return (
    <>
    <div className="flex flex-col max-md:w-[50%] lg:w-[20%]">
        {/* items */}
        <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:25.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] max-md:h-[70vw] w-full p-[0.5vw] object-cover rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
         <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:25.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] max-md:h-[70vw] w-full p-[0.5vw] rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
    </div>

    </>
 )
}
export default Manyqueue;