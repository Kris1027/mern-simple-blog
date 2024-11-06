function Footer() {
    return (
        <footer className='bg-white/80 backdrop-blur-md shadow-sm p-4 mx-auto flex items-center justify-between'>
            <p className='text-sm text-gray-600 text-center'>
                &copy; {new Date().getFullYear()} MERN Simple Blog. All rights reserved. Designed &
                crafted with love by{' '}
                <a
                    href='https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[var(--primary)] hover:underline font-bold'
                >
                    Kris1027
                </a>
            </p>
        </footer>
    );
}

export default Footer;
