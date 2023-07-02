import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

function Footer() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return <footer>Tema Atual: {theme.color}</footer>;
}

export default Footer;