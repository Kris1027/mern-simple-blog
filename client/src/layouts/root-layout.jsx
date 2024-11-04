import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function RootLayout() {
    return (
        <div className='bg-green-950 text-green-100'>
            <div className='max-w-[1280px] mx-auto min-h-screen'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default RootLayout;
