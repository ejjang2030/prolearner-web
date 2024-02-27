import BottomNavConfig from './BottomNavConfig';
import BottomNavItem from './BottomNavItem';

import React from 'react';

const BottomNav: React.FC = () => {
  return (
    <>
      <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
        <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
          {Object.keys(BottomNavConfig).map((key: string) => {
            return (
              <BottomNavItem
                name={BottomNavConfig[key].name}
                iconUrl={BottomNavConfig[key].iconUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BottomNav;
