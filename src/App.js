import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2"; // <-- Import Home2 here
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";

const trackVisitors = async () => {
  try {
    // Fetch the visitor's IP address
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    const userIP = data.ip;

    // Reference to views count document
    const viewsRef = doc(db, "siteStats", "views");
    const viewsSnap = await getDoc(viewsRef);

    if (viewsSnap.exists()) {
      await updateDoc(viewsRef, { count: viewsSnap.data().count + 1 });
    } else {
      await setDoc(viewsRef, { count: 1 });
    }

    // Store the visitor's IP address in a new collection
    const ipCollectionRef = collection(db, "visitorIPs");
    await addDoc(ipCollectionRef, {
      ip: userIP,
      timestamp: new Date(),
    });

    console.log("Visitor IP logged:", userIP);
  } catch (error) {
    console.error("Error tracking visitor:", error);
  }
};


function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    trackVisitors();
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Existing routes */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          {/* NEW route for Home2 */}
          <Route path="/home2" element={<Home2 />} />

          {/* Fallback for unknown routes */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
