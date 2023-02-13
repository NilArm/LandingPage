import React,{useState} from "react";
import "../css/Home.css";
import {MdOutgoingMail} from 'react-icons/md';
import {TbPhoneCall} from 'react-icons/tb';

function Home() {
  const face = require('../assets/face.png');
  const [lobClass,setLobClass] = useState("lob rubberBand animated");
  const [textClass,setTextClass] = useState("text__Container rubberBand animated")
  const [textHello,setTextHello] = useState("text__hello");
  const [textName,setTextName] = useState("text__name");
  const [textRole,setTextRole] = useState("text__fsd");
  const [address,setAddress] =useState("Email : nilesharmal24899@gmail.com");

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleBlobMouseOver =async() =>{
    setLobClass("lob rubberBand animated");
    await delay(1000);
    setLobClass("lob");
  }

  const handleTextMouseOver =async() =>{
    setTextClass("text__Container rubberBand animated");
    await delay(1000);
    setTextClass("text__Container");
  }

  const handleInputChange = (e) =>{
    if(e.target.value.toLowerCase().includes("nilesh")){
      setTextHello("text__hello hinge hingeAnimated");
      setTextName("text__name hinge hingeAnimated")
      setTextRole("text__fsd hinge hingeAnimated")
      setLobClass("lob hinge hingeAnimated")
      e.target.value="";
    }
    else{
      setTextHello("text__hello");
      setTextName("text__name");
      setTextRole("text__fsd");
      setLobClass("lob");
    }
  }

  const handleAddresClick=async()=>{
    navigator.clipboard.writeText(address);
    setAddress("Email ID copied to clipboard.");
    await delay(2500);
    setAddress("Email : nilesharmal24899@gmail.com");
  }

  return (
    <div className="home__body">
      <div className="cool_trick">
        {window.innerWidth>500?"Hey! Wanna see a cool trick. Just type my first name":"Hey! Wanna see a cool trick. Just click anywhere and type my first name"}
      </div>
      <div className="lob__container">
        <div className={lobClass} onClick={handleBlobMouseOver} onMouseLeave={handleBlobMouseOver}>
          <img className="side__face" alt="Nilesh" src={face}/>
        </div>
        <div className={textClass} onClick={handleTextMouseOver} onMouseLeave={handleTextMouseOver}>
            <div className={textHello}>
                HELLO!
            </div>
            <div className={textName}>
                I am Nilesh Armal,
            </div>
            <div className={textRole}>
                a Full Stack Developer.
            </div>
            <div className="contact">
                <div className="contact__div__Container" onClick={handleAddresClick}>
                  <a className="contact__anchor1" target="_blank" rel="noreferrer" href="mailto:nilesharmal24899@gmail.com" >{address}</a>
                  <a className="contact__anchor2" target="_blank" rel="noreferrer" href="mailto:nilesharmal24899@gmail.com"><MdOutgoingMail/></a>
                </div>
                <div className="contact__div__Container">
                  <a className="contact__anchor3" target="_blank" rel="noreferrer" href="tel:+919689989399">Contact No. : 9689989399</a>
                  <a className="contact__anchor4" target="_blank" rel="noreferrer" href="tel:+919689989399"><TbPhoneCall/></a>
                </div>
            </div>
            <input type="text" className="textInput" onChange={handleInputChange} autoFocus={true} onBlur={({ target }) => target.focus()}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
