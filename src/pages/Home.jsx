function Home() {
    return (
        <div className="flex flex-col gap-16 pb-16 min-h-screen">
            {/* Hero Section */}
            <section className="bg-teal-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Empowering Medical Representatives
                        </h1>
                        <p className="text-xl mb-8">
                            Achieve 10x prescriptions with MedPad&apos;s innovative tools and seamless communication.
                        </p>
                        <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
                        <p className="text-gray-600">
                            Utilize machine learning to identify prime areas for product outreach based on sales data.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Marketing Hub</h3>
                        <p className="text-gray-600">
                            Access and store all marketing materials digitally, eliminating the need for physical copies.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Review & Sentiment Analysis</h3>
                        <p className="text-gray-600">
                            Collect reviews from doctors and analyze sentiments to improve product strategies.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Video Conferencing</h3>
                        <p className="text-gray-600">
                            Connect with doctors in remote locations through integrated video calls to expand your reach.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Knowledge Monitoring</h3>
                        <p className="text-gray-600">
                            Regular assessments to ensure MRs are well-informed about the products they represent.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Secure Access</h3>
                        <p className="text-gray-600">
                            Protect your data with fingerprint authentication and robust security measures.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <p className="text-gray-700 mb-4">
                                &quot;MedPad has transformed the way I manage my daily tasks. The recommendation system is a game-changer!&quot;
                            </p>
                            <h4 className="text-lg font-semibold">- Aisha Khan, MR</h4>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <p className="text-gray-700 mb-4">
                                &quot;The video conferencing feature allowed me to connect with doctors in remote areas effortlessly.&quot;
                            </p>
                            <h4 className="text-lg font-semibold">- Raj Mehta, MR</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-teal-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Sales?</h2>
                    <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                        Sign Up Now
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;

