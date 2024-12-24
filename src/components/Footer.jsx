import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-between">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">MedPad</h3>
                        <p className="text-sm text-gray-200">
                            Empowering Medical Representatives with innovative tools for enhanced performance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-teal-200 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="hover:text-teal-200 transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="hover:text-teal-200 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="hover:text-teal-200 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="hover:text-teal-200 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-teal-200 transition-colors">Our Services</a>
                            </li>
                            <li>
                                <a href="/doctors" className="hover:text-teal-200 transition-colors">Find a Doctor</a>
                            </li>
                            <li>
                                <a href="/appointments" className="hover:text-teal-200 transition-colors">Book Appointment</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <p className="text-sm text-center md:text-left">
                            © 2024 MedPad. All rights reserved.
                        </p>
                        <div className="flex justify-center md:justify-end space-x-4 text-sm">
                            <a href="/privacy" className="hover:text-teal-200 transition-colors">Privacy Policy</a>
                            <a href="/terms" className="hover:text-teal-200 transition-colors">Terms of Service</a>
                            <a href="/support" className="hover:text-teal-200 transition-colors">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

