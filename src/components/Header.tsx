import './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
    return (
        <header>
            <img src={logo} alt="TODO logo" />
        </header>
    )
}