import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="blue-grey lighten-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    React Shop
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="Contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="About">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
