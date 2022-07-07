import React from 'react'
import Menu from './MenuApi'
import { useState } from 'react'
import MenuCard from './MenuCard'

const Restuarent = () => {
  const [menuData,setMenuData]=useState(Menu)
  return (
    <>
    <MenuCard menuData={menuData}/>
    
    </>
  )
}

export default Restuarent