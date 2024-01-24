import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBarTop from './Components/NavBarTop';
import Review from './Components/Review';
import WelcomeHomePage from './Components/WelcomeHomePage';
import JoinUs from './Components/JoinUs';
import MenuPage from './Components/MenuPage';
import Hours_and_Location from './Components/Hours_and_Location';
import AboutUs from './Components/AboutUS';
import Reservations from './Components/Reservations';
import Footerbottom from './Components/Footerbottom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/*"
            element={<Navigate to="/home" />}
          />

          <Route path="/home" element={
            <>
              <NavBarTop />
              <WelcomeHomePage />
              <Review />
              <JoinUs />
              <Footerbottom />
            </>}
          />

          <Route path="/menus" element={
            <>
              <NavBarTop />
              <MenuPage />
              <JoinUs />
              <Footerbottom />
            </>}
          />

          <Route path="/hours-and-location" element={
            <>
              <NavBarTop />
              <Hours_and_Location />
              <JoinUs />
              <Footerbottom />
            </>}
          />

          <Route path="/about" element={
            <>
              <NavBarTop />
              <AboutUs />
              <JoinUs />
              <Footerbottom />
            </>}
          />

          <Route path="/reservations" element={
            <>
              <NavBarTop />
              <Reservations />
              <Footerbottom />
            </>}
          />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
