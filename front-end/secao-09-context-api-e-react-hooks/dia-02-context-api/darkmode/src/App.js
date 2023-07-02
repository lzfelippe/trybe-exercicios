import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';
import './style.css';

export default function App() {

  return (
    <ThemeProvider>
        <Header />
        <Image />
        <Footer />
    </ThemeProvider>
  );
}
