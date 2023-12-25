import React, { useState } from 'react'
import   './ChooseTheWorld.css'
import { planets } from '../../Data/Planets'

export default function ChooseTheWorld() {
    const [selected, setselected] = useState(0)
    function handle(i){
        setselected(i)
    }
  return (
    <div className='ChooseTheWorld'>
<div className="cotnainerPlanets">
{planets.map((x,i)=>(
<div className={selected===i?"cardplanet original ":"cardplanet"} onClick={()=>handle(i)}>
<img src={x.img} alt="" />
<div className="layoutTextplanet">
<h1>{x.title}</h1>

</div>
</div>
))}
</div>
    </div>
  )
}
