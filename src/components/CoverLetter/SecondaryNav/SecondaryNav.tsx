import { Link } from "react-router-dom";

function SecondaryNav() {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark px-5">
                <a className="navbar-brand mx-5 py-4" href="/">
                    <img src="main-logo-white.png" alt="Bootstrap" width="100" />
                </a>

                {/* Responsive */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Responsive END */}

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
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

export default SecondaryNav;