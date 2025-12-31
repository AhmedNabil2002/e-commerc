import React from 'react'
import "./newcollections.css"
import Item from '../item/Item'
import new_collection from "../Assets/new_collections"
function Newcollections() {
  return (
      <div className='new_collections'>
          <h1>  new collections</h1>
          <hr />
          <div className="collections">
              {new_collection.map((item,i) => {
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              })}
          </div>
      </div>
  )
}

export default Newcollections