import React from 'react';
import BottomNavConfig from './BottomNavConfig';
import BottomNavItem from './BottomNavItem';
interface BottomNavProps {
}

const BottomNav = ({}: BottomNavProps) => {
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <BottomNavItem name={BottomNavConfig.Home.name} icon={BottomNavConfig.Home.icon} />
                    <BottomNavItem name={BottomNavConfig.Challenge.name} icon={BottomNavConfig.Challenge.icon} />
                    <BottomNavItem name={BottomNavConfig.Search.name} icon={BottomNavConfig.Search.icon} />
                    <BottomNavItem name={BottomNavConfig.Profile.name} icon={BottomNavConfig.Profile.icon} />
                </div>
            </div>
        </>
    )
}

export default BottomNav;