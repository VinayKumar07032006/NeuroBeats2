import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CreateLyrics } from './pages/CreateLyrics';
import { Remix } from './pages/Remix';
import { Edit } from './pages/Edit';
import { Singer } from './pages/Singer';
import { Auth } from './pages/Auth';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateLyrics />} />
          <Route path="remix" element={<Remix />} />
          <Route path="edit" element={<Edit />} />
          <Route path="singer" element={<Singer />} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
