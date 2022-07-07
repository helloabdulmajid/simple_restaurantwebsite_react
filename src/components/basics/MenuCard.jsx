import React from 'react'
import "./Style.css"


const MenuCard = ({menuData}) => {
    console.log(menuData);
  return (
   <>
   {/* <section className='main-card--container'> */}
   {menuData.map((CurElem)=>{
    return(
        <>
        <div className="card-container" key={CurElem.id}>
         <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">{CurElem.id}</span>
          <span className="card-author subtle">{CurElem.category}</span>
          <h2 className='card-title'>{CurElem.name}</h2>
          <span className='card-description'>
          {CurElem.description}
          </span>
          <div className='card-read'>Read</div>

        </div>
        <img src={CurElem.image}alt="image" className='card-media'/>
        <span className='card-tag subtle'>order Now</span>

      </div>
    </div>
    </>
    );
   })}
    {/* </section> */}
   
   </>
  );
};

export default MenuCard