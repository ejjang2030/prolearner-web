import React from 'react';

interface BottomNavItemProps {
  iconUrl: string;
  name: string;
}

const BottomNavItem = ({ iconUrl, name }: BottomNavItemProps) => {
  const buttonStyleClasses = `inline-flex 
                                flex-col 
                                items-center 
                                justify-center 
                                px-5 
                                hover:bg-gray-50 
                                dark:hover:bg-gray-800 
                                group`;
  const nameStyleClasses = `text-sm 
                                text-gray-500 
                                dark:text-gray-400 
                                group-hover:text-blue-600 
                                dark:group-hover:text-blue-500`;
  return (
    <>
      <button type='button' className={buttonStyleClasses}>
        <img width={20} height={20} src={iconUrl} />
        <span className={nameStyleClasses}>{name}</span>
      </button>
    </>
  );
};

export default BottomNavItem;
