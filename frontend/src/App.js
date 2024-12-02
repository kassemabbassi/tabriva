// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignUp from "./component/SignUp";

import SignIn from "./component/SignIn";
import MainMenu from "./component/MainMenu";
import ProtectedPage from "./component/ProtectedPage"

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
       <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/signup" element={<SignUp switchToSignIn={switchToSignIn} />} />
        <Route path="/signin" element={<SignIn switchToSignUp={switchToSignUp} />} />
        <Route path="/t5azwi9a" element={<ProtectedPage/>} />

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