import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { authState } from '../store/atoms/auth';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [auth, setAuth] = useRecoilState(authState);
    const { isAuthenticated } = auth;
    const navigate = useNavigate();
    const handleLogout = () => {
        setAuth({
            isAuthenticated: false,
            user: null,
            token: null,
            role: null,
        });
        navigate('/signin');
    };


    return (
        <header className="bg-teal-600 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="font-bold text-xl">MedPad</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="/upload-brouchers" className="hover:text-teal-200 transition-colors">
                            Upload Brouchers
                        </a>
                        <a href="/materials" className="hover:text-teal-200 transition-colors">
                            Materials
                        </a>
                        <a href="/doctors" className="hover:text-teal-200 transition-colors">
                            Doctors
                        </a>
                        <a href="/survey" className="hover:text-teal-200 transition-colors">
                            Survey
                        </a>
                        <a href="/video-conference" className="hover:text-teal-200 transition-colors">
                            Video Conference
                        </a>
                        <a href="/create-product" className="hover:text-teal-200 transition-colors">
                            Create Product
                        </a>
                        <a href="/products" className="hover:text-teal-200 transition-colors">
                            Products
                        </a>
                        <a href="/contact" className="hover:text-teal-200 transition-colors">
                            Contact
                        </a>
                    </nav>

                    {/* User Profile/Login Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 rounded-lg border border-white hover:bg-teal-700 transition-colors"
                                >
                                    Logout
                                </button>

                            </>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <a
                                    href="/signin"
                                    className="px-4 py-2 rounded-lg border border-white hover:bg-teal-700 transition-colors"
                                >
                                    Sign In
                                </a>
                                <a
                                    href="/signup"
                                    className="bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-100 transition-colors"
                                >
                                    Sign Up
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <nav className="flex flex-col space-y-4">
                            <a href="/upload-brouchers" className="hover:text-teal-200 transition-colors">
                                Upload Brouchers
                            </a>
                            <a href="/materials" className="hover:text-teal-200 transition-colors">
                                Materials
                            </a>
                            <a href="/doctors" className="hover:text-teal-200 transition-colors">
                                Doctors
                            </a>
                            <a href="/survey" className="hover:text-teal-200 transition-colors">
                                Survey
                            </a>
                            <a href="/video-conference" className="hover:text-teal-200 transition-colors">
                                Video Conference
                            </a>
                            <a href="/create-product" className="hover:text-teal-200 transition-colors">
                                Create Product
                            </a>
                            <a href="/products" className="hover:text-teal-200 transition-colors">
                                Products
                            </a>
                            <a href="/contact" className="hover:text-teal-200 transition-colors">
                                Contact
                            </a>
                            {isAuthenticated ? (
                                <>
                                    <button
                                        onClick={handleLogout}
                                        className="border border-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a
                                        href="/signin"
                                        className="border border-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                                    >
                                        Sign In
                                    </a>
                                    <a
                                        href="/signup"
                                        className="bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-100 transition-colors"
                                    >
                                        Sign Up
                                    </a>
                                </>
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </header >
    );
};

Header.propTypes = {
    userLoggedIn: PropTypes.bool,
    UserButton: PropTypes.elementType
};

Header.defaultProps = {
    userLoggedIn: false,
    UserButton: () => (
        <div className="flex items-center space-x-4">
            <button className="hover:text-teal-200 transition-colors">My Profile</button>
            <button className="bg-teal-700 px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors">
                Logout
            </button>
        </div>
    )
};

export default Header;
