import { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa';

const Content = () => {
    const  [items,SetItems] = useState([
        {
            id:1,
            checked:false,
            item:"one half pound bag of cocoa covered Almonds"
        },
        {
            id:2,
            checked:false,
            item:"item  2"
        },
        {
            id:3,
            checked:false,
            item:"item 3"
        },
    ]);
   
  return(<main>
   <ul>
    {items.map((item)=>(
        <li className="item" key={item.id}>
          <input 
          type="checkbox"
           checked={item.checked}/>
          <label>{item.item}</label>
          <FaTrashAlt 
             role="button"
             tabIndex="0"
             />
        </li>
    ))}
   </ul>
 </main>
  )
}

export default Content