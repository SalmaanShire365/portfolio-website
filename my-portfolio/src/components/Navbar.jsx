import topnavStyles from '../modules/topnav.module.css';
function Navbar() {
    return (
        <nav className={topnavStyles.topnav}>
        <div className={topnavStyles.navbarLogo}>Salmaan Shire's Portfolio</div>
        <ul className={topnavStyles.navbarLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
    );
    }
    
export default Navbar;