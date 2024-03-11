import React from "react";

interface BottomNavItemProps {
    icon: any;
    name: string;
}

const BottomNavItem = ({ icon, name }: BottomNavItemProps) => {

    return (
        <button type="button" className="bottom-nav-content-button">
            <img src={icon}/>
            <span className="bottom-nav-content-button-span">{name}</span>
        </button>
    ); 
};

export default BottomNavItem;