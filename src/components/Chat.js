import React, {useState} from 'react'
import { auth } from '../index';
import { firestore } from '../index';
import { collection,query, orderBy, addDoc } from "firebase/firestore";
import { useAuthState  } from 'react-firebase-hooks/auth';
import { useCollectionData  } from 'react-firebase-hooks/firestore';
import { serverTimestamp } from "firebase/firestore";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Loader from './Loader';

function Chat() {
  const [user]= useAuthState(auth);
  const [value, setValue]=useState();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createAt'));
  const [messages, loading] = useCollectionData(q);
  const sendMessage  =async()=>{
    addDoc(collection(firestore, 'messages'),{
      uid:user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text:value,
      createAt: serverTimestamp()
    });
    setValue('');
  }
  if(loading){
    return <Loader></Loader>
  }
  return (
    <Container>
      <Grid container
      style ={{height:window.innerHeight -50, marginTop:20}}
            justify={'center'}>
              <div style ={{width:'80%', height:'50vh', border:'1px solid grey', overflowY:'auto'}}>
              {messages.map(message=>
                <div style={{
                  margin:10,
                  border:user.uid ===message.uid? '2px solid green': '2px solid red',
                  marginLeft:user.uid ===message.uid? 'auto': '10px',
                  width: 'fit-content',
                  padding:5
                }}>
                  <Grid container >
                    <Avatar src={message.photoURL}></Avatar>
                    <div>{message.displayName}</div>
                  </Grid>
                  <div>{message.text}</div>
                </div>
              )}
              </div>
              <Grid container
                direction={'columns'}
                alignItems={'flex-end'}
                style ={{width:'80%'}}>
                  <TextField fullWidth maxRows={2}  variant="outlined" 
                  value ={value}
                  onChange={e => setValue(e.target.value)}/>
                  <Button onClick={sendMessage} variant="outlined">Send</Button>
                </Grid>
            </Grid>
    </Container>
  )
}

export default Chat