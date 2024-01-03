import React, { useState ,useRef } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import './styles/Auth.css';

const cookies =new Cookies();

function App() {
  const [isAuth ,setIsAuth] =useState(cookies.get("auth-token"));
  const [room,setroom] =useState(null);

  const roomInputRef =useRef(null);
   

  const signUserOut =async () =>{
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setroom(null);

  };

  if(!isAuth){

 

  return (
    <div className="App">
    <Auth  setIsAuth={setIsAuth}/>
      
    </div>
  );
  }

  return (
  <>
    {room ? (<Chat room={room} />) : (<div className='room'>
    <label>enter roomname</label>
    <input ref={roomInputRef} />
    <button onClick={() => setroom(roomInputRef.current.value)}>Enter chat</button>
    </div>
   ) }

   <div className='sign-out'>
    <button onClick={signUserOut}>Sign Out</button>
   </div>
  </>
  );
}

export default App;
