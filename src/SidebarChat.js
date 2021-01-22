import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
 import db from "./firebase";


function SidebarChat({ room, addNewChat }) {

   const [seed, setSeed] = useState();
   const [messages , setMessages] =useState([])

     useEffect( ()=>{
            if(room?.id){
                db.collection('room')
                     .doc(room.id)
                     .collection('messages')
                     .orderBy('timestamp', 'desc')
                     .onSnapshot( snap => (
                       setMessages(snap.docs.map( doc => doc.data()))
                     ))
            }
     }, [])


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 3000));
  }, []);

  const createChat = () => {
    const roomName = prompt("enter name");
     if(roomName){
             db.collection('room').add({
                 name: roomName,
             })
     }
  };

  
  return !addNewChat ? (
    <Link to={`/room/${room.id}`}  > 
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h4>{ room.data.name }</h4>
        <p>{messages[0]?.message}</p>
      </div>
    </div></Link>
    
  ) : (
    <div className="sidebarChat">
      <div onClick={createChat}>Add new Chat</div>
    </div>
  );
}

export default SidebarChat;
