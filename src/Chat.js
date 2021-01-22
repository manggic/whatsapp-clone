import React, {useState, useEffect, useDebugValue} from "react";
import { useParams } from 'react-router-dom'

import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { InsertEmoticon } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import db from "./firebase";
import firebase from 'firebase'
import {useStateValue} from './StateProvider'

function Chat() {

   const [value, setValue] = useState('')
   const { roomid } = useParams()
   const [ roomName, setRoomName]  = useState('')
   const [ messages, setMessages ] = useState([])
   const [{user}, dispatch] = useStateValue()  

   console.log('roomId ' , roomid)


   useEffect( () => {
     if(roomid){
      db.collection('room')
         .doc(roomid)
         .onSnapshot( snap =>  setRoomName(snap.data().name)  )


      db.collection('room')
         .doc(roomid)
         .collection('messages')
         .orderBy( 'timestamp', 'asc' )
         .onSnapshot( snap => {
             setMessages( snap.docs.map( doc => doc.data() ) )
         } )
     }
        console.log('messages--->', messages)
         console.log('roomname  -----> ', roomName) 

   }, [ roomid ])



    const handleSubmit = (e) =>{
            e.preventDefault()
            console.log('value', value);

            db.collection('room')
               .doc(roomid)
               .collection( 'messages')
               .add( {
                 message : value,
                 name: user.displayName,
                 timestamp : firebase.firestore.FieldValue.serverTimestamp()
               })
            
               setValue('')

    }


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen
             {  new Date( messages[messages.length -1]?.timestamp?.toDate()).toUTCString() }   
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {  messages.map( (message)  => (
               <p className={ `chat__message ${ message.name==user.displayName && 'chat_receiver'}` }>
               <span className='chat__name'>{message.name}</span>
                   {message.message}
               <span className='chat__time'>{new Date( message?.timestamp?.toDate()).toUTCString()}</span>
               </p>
        )) }
          
      </div>

      <div className="chat__footer">
         <InsertEmoticon />
         <form onSubmit= { handleSubmit }>
            <input type='text' value={ value } onChange={ e => setValue(e.target.value) } placeholder ='Type a Message' />
            {/* <button type='submit' onClick = { sendMessage }>Send Message</button> */}
         </form>
         <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
