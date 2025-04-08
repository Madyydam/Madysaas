const { Heart, Shield, Clock, Users, Star, Check } = LucideReact.icons;

const App = () => {
  const features = [
    { icon: <Shield className="h-6 w-6 text-blue-600" />, title: "Secure", desc: "Bank-level encryption" },
    { icon: <Clock className="h-6 w-6 text-blue-600" />, title: "24/7 Support", desc: "Always available" },
    { icon: <Users className="h-6 w-6 text-blue-600" />, title: "Collaboration", desc: "Real-time teamwork" }
  ];

  const testimonials = [
    { name: "Alex Johnson", quote: "This product doubled our revenue!" },
    { name: "Sam Wilson", quote: "The best SaaS platform we've used." }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <span className="font-bold">SaaSPro</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4">Launch Your Dream SaaS</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Everything you need to start, grow, and scale your business.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg">
          Start Free Trial
        </button>
      </section>

{/* Features */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                <span className="font-medium">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold">
          Join Now - 14-Day Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8 text-center">
        <p>© 2023 SaaSPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
