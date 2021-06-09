import React, {useState} from 'react';
import './App.css';
import fire from './auth/fire';
import Login from './auth/Login';

const App = () =>{
   const [user, setUser] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [PasswordError, setPasswordError] = useState('');
   const [hasAccount, setHasAccount] = useState(false);

const handleLoginIn = () =>{
       fire
           .auth()
           .signInWithEmailAndPassword(email, password)
           .catch((err) =>{
             switch (err.code){
               case "auth/email-already-in-use":
               case "auth/invalid-email":
               case "auth/user-not-found":
                 setEmailError(err.message);
                    break;
               case "auth/wrong-password":
                   setPassword(err.message);
                    break;
             }
           })
}

  const handleLogOut = () =>{
    fire.auth().signOut();
  }

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
