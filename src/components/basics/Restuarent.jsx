import React from 'react'
import Menu from './MenuApi'
import { useState } from 'react'
import MenuCard from './MenuCard'

const Restuarent = () => {
  const [menuData,setMenuData]=useState(Menu);
  const filterItem=(category)=>{
    const updatedList= Menu.filter((curElem)=>{
      return curElem.category===category;
    });
    setMenuData(updatedList)
  };

  return (
    <>
    <nav className='navbar' >
      <div className='btn-group'>
        <button className='btn-group__item' onChange={() =>filterItem("breakfast")}>BreakFast</button>
        <button className='btn-group__item'>Lunch</button>
        <button className='btn-group__item'>Evening</button>
        <button className='btn-group__item'>Dinner</button>
        <button className='btn-group__item'>All</button>



      </div>
    </nav>
    <MenuCard menuData={menuData}/>
    
    </>
  )
}

export default Restuarent