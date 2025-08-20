import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
// import User from '../pages/User';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
// import ProtectedRoute from '../components/ProtectedRoute';
// import ErrorPage from '../pages/ErrorPage';
import '../styles/App.scss';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/sign-in'
                    element={<SignIn />}
                />
                {/* <Route element={<ProtectedRoute />}>
                    <Route
                        path='/user'
                        element={<User />}
                    /> */}
                {/* </Route> */}
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
            <Footer />
        </Router >
    )
}

export default App;