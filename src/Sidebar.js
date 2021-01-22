import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from './StateProvider'


function Sidebar() {

  const [rooms , setRooms ] =useState([])
  const [ {user}, dispatch] = useStateValue(); 

  useEffect( () => {
        const unsubscribe =   db.collection('room').onSnapshot( snapshot =>{
                console.log('snapshot', snapshot.docs)
                setRooms( snapshot.docs.map( doc => ({
                   id: doc.id,
                   data: doc.data(),
                }) ))
              }
          )

          return () => {
            unsubscribe();
        }
      
  },[] )

  console.log(rooms)
 
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder='enter search' />
        </div>
      </div>

      <div className="sidebar__chats">
      <SidebarChat addNewChat />
      { 
         rooms.map( room => (
            <SidebarChat key={ room.id} room ={room}  />
         ) )
      }
          
      </div>
     </div>
  );
}

export default Sidebar;
