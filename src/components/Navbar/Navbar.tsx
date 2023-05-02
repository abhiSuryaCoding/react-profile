import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark px-5">
                <a className="navbar-brand mx-5 py-4" href="#">
                    <img src="main-logo-white.png" alt="Bootstrap" width="100" />
                </a>

                {/* Responsive */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Responsive END */}

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#exp-sec">Experience</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/react-profile/cover-letter">Cover Letter</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;