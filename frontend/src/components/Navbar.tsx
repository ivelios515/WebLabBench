import { useState } from "react"
import { IconContext } from "react-icons"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu';
// import "../index.css";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        // <div style={{ width: "100%", textAlign: "left" }}>
        // </div>
        <>    
            <nav className="nav" style={{ display: "flex", alignItems: "left", justifyContent: "", background: "black" }}>
                <div style={{ textAlign: "center", marginLeft: "20px"}}>
                    <div className="nav-icon" style={{ color: "white" }}>
                        <FaIcons.FaBars size={45}/>
                    </div>
                </div>
            </nav>


                     <div className="nav-icon">
                         <FaIcons.FaBars onClick={showSidebar} />
                         </div>
                         <FaIcons.FaBars/>

                 {/* <nav className={`sidebar-nav ${sidebar ? "open" : ""}`}>
                     <nav className="sidebar-wrap">
                         <nav className="nav-icon">
                             <AiIcons.AiOutlineClose onClick={showSidebar} />
                         </nav>
                         {SidebarData.map((item, index) => {
                             return <SubMenu item={item} key={index}/>
                         })}
                     </nav>
                 </nav> */}
        </>
    )

}
export default Navbar;