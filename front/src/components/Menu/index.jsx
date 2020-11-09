import { useState } from 'react';

import arrow from '../assets/keyboard_arrow_down.svg'

import './styles.css';


function Menu() {
  const [visible, setVisible] = useState(true);


  return (
    <div className="Menu">
      <button className={"drop"} onClick={() => setVisible(!visible)}>
        <img className={visible ? undefined : "imageRotate"} src={arrow} alt="dropDownArrow" />
      </button>
      <p className={visible ? "optionsT" : "optionsF"} >Home</p>
      <p className={visible ? "optionsT" : "optionsF"} >Friends</p>
      <p className={visible ? "optionsT" : "optionsF"} >Posts</p>
      <p className={visible ? "optionsT" : "optionsF"} >Likes</p>
      <p className={visible ? "optionsT" : "optionsF"} >Dislikes</p>
      <p className={visible ? "optionsT" : "optionsF"} >Comments</p>
    </div>


  );
}

export default Menu;
