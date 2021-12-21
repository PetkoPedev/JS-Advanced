import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.js';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import MyPets from './components/MyPets/MyPets';
import CreatePage from './components/CreatePage/CreatePage';
import EditPage from './components/EditPage/EditPage.js';
import Details from './components/Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {

    return (
        <AuthProvider>
            <div id="container">
                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-pets" element={<MyPets />} />
                        <Route path="/create" element={<CreatePage />} />
                        <Route path="/edit/:petId" element={<EditPage />} />
                        <Route path="/details/:petId" element={<Details />} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>

            </div>
        </AuthProvider>
    );
}

export default App;
