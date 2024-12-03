// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom';
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import MainMenu from "./component/MainMenu";
import ProtectedPage from "./component/ProtectedPage"
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const {user}=useAuthContext()
  console.log((user))


  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
       <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/signup" element={! user ? <SignUp  />: <Navigate to="/t5azwi9a"/>} />
        <Route path="/signin" element={! user ? <SignIn />: <Navigate to="/t5azwi9a"/>} />
        <Route path="/t5azwi9a" element={ user ? <ProtectedPage/>: <Navigate to="/signin"/>} />
       </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
      {/*isSignUp ? (
        <SignUp switchToSignIn={switchToSignIn} />
      ) : (
        <SignIn switchToSignUp={switchToSignUp} />
      )*/}