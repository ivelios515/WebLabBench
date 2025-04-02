import { useState } from "react"
import { Link } from 'react-router-dom';

interface SubMenuItem {
    title: string;
    path: string;
    icon: React.ReactNode;
    subNav?: { path: string; icon: React.ReactNode; title: string }[];
    iconOpened?: React.ReactNode;
    iconClosed?: React.ReactNode;
}

interface SubMenuProps {
    item: SubMenuItem;
}

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
          <Link to={item.path} onClick={item.subNav ? showSubnav : undefined}>
            <div>
                {item.icon}
                <span  className="sidebar-label">{item.title}</span>
            </div>
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                :item.subNav
                ? item.iconClosed
                : null}
            </div>
          </Link>
          {subnav &&
            item.subNav?.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                    {item.icon}
                    <span  className="sidebar-label">{item.title}</span>
                </Link>
              );
            })}
        </>
    )
}
export default SubMenu