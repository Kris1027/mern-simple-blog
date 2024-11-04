import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to={'/'} className='uppercase'>
            mern simple blog
        </Link>
    );
}

export default Logo;
