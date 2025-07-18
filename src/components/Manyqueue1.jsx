import { motion } from "motion/react"

function Manyqueue(){
    const array=[ 
        'https://i.pinimg.com/236x/73/c5/b7/73c5b710b65233ca331dee8bc39928ad.jpg',
        'https://wall2mob.com/cx/m/t2/40762-8.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuJmGWS0tLsdknVWOPNeiX88WG8NcaN7w_oCgSKJIRC5xBpUx0w_JysNJkR7RcGQ3UGo&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnl1E2MA2eXqXvWk0ZHQ6FEtg_5j_n04KQoSo-Qn56vRcCX5X90Sr_PVgBGep38Es8wCM&usqp=CAU',
        'https://i.pinimg.com/736x/a8/2c/7f/a82c7fd62a80b021434ea6199e227591.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXXT_XyrwvWJa1erQ7YJ0MfWXdHIRQuQ7evCx54lWuagdKpHm0kmCpawx1Xgogm6IEOc&usqp=CAU'
    ]
 return (
    <>
    <div className="flex flex-col max-md:hidden lg:w-[20%]">
        {/* items */}
        <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:19.5,repeat:Infinity,ease:'linear'}}
        className="">
            {array.map((image,index)=>{
                return <img className="h-[30vw] w-full p-[0.5vw] rounded-[2vw]"
                 src={image} key={index}/>
            })}
        </motion.div>
         <motion.div 
        initial={{y:0}}
        animate={{y:'-100%'}}
        transition={{duration:19.5,repeat:Infinity,ease:'linear'}}
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