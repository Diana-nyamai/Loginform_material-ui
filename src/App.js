import React, {useState, useEffect} from 'react';
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

const clearInputs = () =>{
  setEmail('');
  setPassword('');
}

const clearErrors = () =>{
  setEmailError('');
  setPasswordError('');
}

const handleLoginIn = () =>{
    clearErrors();
       fire
           .auth()
           .signInWithEmailAndPassword(email, password)
           .catch((err) =>{
             switch (err.code){
               case "auth/invalid-email":
               case "auth/user-disabled":
               case "auth/user-not-found":
                 setEmailError(err.message);
                    break;
               case "auth/wrong-password":
                   setPassword(err.message);
                    break;
             }
           })
}

  const handleSignUp = () =>{
    clearErrors();
    fire
           .auth()
           .createUserWithEmailAndPassword(email, password)
           .catch((err) =>{
             switch (err.code){
               case "auth/email-already-in-use":
               case "auth/invalid-email":
                 setEmailError(err.message);
                    break;
               case "auth/weak-password":
                   setPassword(err.message);
                    break;
             }
           })
  }

  const handleLogOut = () =>{
    fire.auth().signOut();
  }

 const authListener = () =>{
   fire.auth().onAuthStateChanged((user) =>{
     if (user){
       clearInputs();
       setUser(user);
     }
     else{
       setUser("")
     }
   })
 };

 useEffect(() => {
   authListener();
   
 }, []);

  return (
    <div className="App">
      <Login 
      email={email} 
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      
      
      />
    </div>
  );
}

export default App;
