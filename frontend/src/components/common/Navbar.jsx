import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';
import '../../styles/custom.css';

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();



    const handleLogout = () => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres cerrar sesión este usuario?');
        if (confirmDelete) {
            UserService.logout();
        }
    };


    return (
       

<nav className="navbar navbar-expand-lg navbar-light bg-black">
<div className="container-fluid">
    <a className="navbar-brand nav-link" href="/">Mi Aplicación</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            {!isAuthenticated && (
                <li className="nav-item">
                    <Link className="nav-link" to="/">Marco Dev</Link>
                </li>
            )}
            {isAuthenticated && (
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Perfil</Link>
                </li>
            )}
            {isAdmin && (
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/user-management">Gestión de usuarios</Link>
                </li>
            )}
            {isAuthenticated && (
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleLogout}>Cerrar sesión</Link>
                </li>
            )}
        </ul>
    </div>
</div>
</nav>



    );
}

export default Navbar;
