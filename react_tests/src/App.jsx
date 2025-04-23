import React, {useEffect} from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
import Home from "./page/Home/home.jsx"; // или путь к твоему компоненту
import {ROUTERS} from "./utils/consts";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({once: false});
        AOS.refresh();
    }, [location.pathname]); // Har safar sahifa o'zgarganda AOS qayta yuklanadi

    return (
        <Routes>
            {ROUTERS.map((route, index) => (
                <Route
                    key={index}
                    path={route.Path}
                    element={
                        <>
                            <Home/>

                        </>
                    }
                />
            ))}
        </Routes>

    );
}

export default App;