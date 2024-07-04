import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <span>Marco Dev | Todos los derechos reservados &copy; {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}

export default FooterComponent;
