import React, { useEffect } from 'react';
import Header from './assets/components/Header';
import PreOrder from './assets/components/PreOrder';
import Features from './assets/components/Features';
import Tabs from './assets/components/Tabs';
import Nothing from './assets/components/Nothing';
import Dual from './assets/components/Dual';
import EarBlack from './assets/components/EarBlack';
import Designed from './assets/components/Designed';
import Beta from './assets/components/Beta';
import News from './assets/components/News';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './assets/components/Footer';
// import { useLayoutEffect } from 'react';
import Preload from './assets/components/Preload';





function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    });
    // AOS.refresh();
  }, []);


  return (
    <>
      <Header />
      <Features />
      <Preload />
      <PreOrder />
      <Tabs />
      <Nothing />
      <Dual />
      <EarBlack />
      <Designed />
      <Beta />
      <News />
      <Footer />
    </>

  )
}

export default App