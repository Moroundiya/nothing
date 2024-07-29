import React, { createContext, useEffect, useState } from 'react';
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
import { Tab } from './assets/components/Tab';
// import { useLayoutEffect } from 'react';

export const TabContext = createContext();

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    });
    // AOS.refresh();
  }, []);

  const [content, setContent] = useState('enhance');

  return (
    <TabContext.Provider value={{ content, setContent }}>
      <Header />
      <Features />
      <PreOrder />
      <Tab />
      <Nothing />
      <Dual />
      <EarBlack />
      <Designed />
      <Beta />
      <News />
      <Footer />

      {/* <Tab /> */}
    </TabContext.Provider>

  )
}

export default App