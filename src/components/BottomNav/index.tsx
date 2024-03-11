import React from 'react';
import BottomNavList from '@/components/BottomNav/config';
import BottomNavItem from '@/components/BottomNav/BottomNavItem';
interface BottomNavProps {
}

const BottomNav = ({}: BottomNavProps) => {
    return (
        <>
            <div className="bottom-nav">
                <div className="bottom-nav-content">
                    {
                        BottomNavList.map(item => {
                            return (
                                <BottomNavItem icon={item.icon} name={item.name} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BottomNav;