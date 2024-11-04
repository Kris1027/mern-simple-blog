import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default RootLayout;
