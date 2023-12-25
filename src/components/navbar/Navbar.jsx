import { Link } from "react-router-dom"
import './Navbar.css'
export default function Navbar({userData ,logout}) {
  return (
    <>
 <div className="Navbar">
  <div className="containerNav">
    <div className="search">
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className="name">
      <h1 className="h3">Plantes</h1>
    </div>
    <div className="bars">
      <span></span><span></span><span></span>
    </div>
  </div>
 </div>
    </>
  )
}
