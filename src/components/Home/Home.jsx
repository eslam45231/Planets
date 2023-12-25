import React from 'react'
import './Home.css'
import planet from './OIP (1).jpeg'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='Home'>
        <div id='conhome' className="containerHome">
        
          <motion.div  
           transition={{duration:.5}}
           whileInView={{opacity:[0,1],y:[50,0]}}
           
          
          className="titleHome">
            <h1>metaverse madness</h1>
          </motion.div>



          <motion.div className="imageHome"
           transition={{duration:.5}}
           whileInView={{opacity:[0,1],x:[50,0]}}
           initial={{opacity:0,translateX:-200}}
           animate={{opacity:1,translateX:0}}
          >
           <img src={planet} alt="" /> 

          </motion.div>

          <motion.div transition={{duration:.7}} whileInView={{opacity:[0,1],y:[50,0]}} className="paraHome">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda totam ex voluptates, veritatis inventore saepe necessitatibus quidem quam laboriosam provident quasi temporibus placeat amet velit illo eos esse incidunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde soluta quidem. Illum delectus, et ut temporibus optio asperiores iure blanditiis deleniti molestias quas ipsam consequatur reprehenderit rerum nulla sunt.
            </p>
          </motion.div>
        
       
          </div>

        
    </div>
  )
}
