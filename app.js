const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">SaaSPro</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Launch Your SaaS Business</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Everything you need to start selling online today.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
          Start Free Trial
        </button>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Easy Setup', '24/7 Support', 'Secure Payments'].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">{feature}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 p-8 text-center">
        <p>© 2023 SaaSPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
