import React, { useContext } from 'react'
import Intro from "./components/intro/Intro";
import About from './components/about/About';
import ProductList from './components/product/product-list/ProductList';
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "#ffffff", color: darkMode && "white"}}>
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Toggle />
    </div>
  )
}

export default App;
