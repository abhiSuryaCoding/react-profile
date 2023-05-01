function Navbar() {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark px-5">
                
                    <a className="navbar-brand mx-5 py-4" href="#">
                        <img src="main-logo-white.png" alt="Bootstrap" width="100" />
                    </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#exp-sec">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;