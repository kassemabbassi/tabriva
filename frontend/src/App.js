// src/App.jsx
import React, { useState } from "react";

import SignUp from "./component/SignUp";

import SignIn from "./component/SignIn";

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {isSignUp ? (
        <SignUp switchToSignIn={switchToSignIn} />
      ) : (
        <SignIn switchToSignUp={switchToSignUp} />
      )}
    </div>
  );
};

export default App;
