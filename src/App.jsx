import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CarouselHomepage from './Components/CarouselHomepage';
import NavBarTop from './Components/NavBarTop';
import Review from './Components/Review';
import WelcomeHomePage from './Components/WelcomeHomePage';
import JoinUs from './Components/JoinUs';
import MenuPage from './Components/MenuPage';
import Hours_and_Location from './Components/Hours_and_Location';
import AboutUs from './Components/AboutUS';
import Reservations from './Components/Reservations';


function App() {

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
              <CarouselHomepage />
              <WelcomeHomePage />
              <Review />
              <JoinUs />
            </>}
          />

          <Route path="/menus" element={
            <>
              <NavBarTop />
              <MenuPage />
            </>}
          />

          <Route path="/hours-and-location" element={
            <>
              <NavBarTop />
              <Hours_and_Location />
              <JoinUs />
            </>}
          />

          <Route path="/about" element={
            <>
              <NavBarTop />
              <AboutUs />

            </>}
          />

          <Route path="/reservations" element={
            <>
              <NavBarTop />
              <Reservations />

            </>}
          />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
