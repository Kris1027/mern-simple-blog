import { Link } from 'react-router-dom';
import Logo from './logo';

function Navbar() {
    return (
        <header className='flex justify-between p-4'>
            <Logo />
            <nav>
                <Link to={'/create'}>Create Article</Link>
            </nav>
        </header>
    );
}

export default Navbar;
