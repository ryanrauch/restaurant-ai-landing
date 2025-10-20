import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./LandingPage";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "VTable.ai | Smart Reservations";
  }, []);

  return <LandingPage />;
}
