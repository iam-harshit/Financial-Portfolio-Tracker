import LoginPage from "@/app/login/LoginPage";
import Home from "@/components/Home";
import { useEffect } from "react";
import { auth } from "@/config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { setupSessionTimeout } from "@/services/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setupSessionTimeout();
      }
    });
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
