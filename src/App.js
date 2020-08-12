import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { useRoutes } from 'hookrouter';
import { NotFound } from './pages/NotFound';

const routes = {
  '/': () => <Home />,
  '/contact': () => <Contact />,
  '/about*': () => <About />
}

function App() {
  const match = useRoutes(routes)
  return (
  <Wrapper>
    <Navbar />
    {match || <NotFound />}
  </Wrapper>
    );
}

export default App;
