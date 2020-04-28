import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark topbar mb-4 static-top shadow">
            <div className="d-sm-flex align-items-center justify-content-between">
                <h1 className="h3 mb-0 text-white">App Dashboard</h1>
            </div>
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-white small">Santiago Fernández</span>
                        <img className="img-profile" src="/images/logo2.png" width="60" />
                    </a>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;