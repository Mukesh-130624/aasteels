import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Package,
  Users,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [startIdx, setStartIdx] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(4);
  const navigate = useNavigate();

  React.useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else if (window.innerWidth < 1280) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleNext = () => {
    setStartIdx((prev) =>
      prev + visibleCount >= clients.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setStartIdx((prev) =>
      prev === 0 ? clients.length - visibleCount : prev - 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) =>
        prev + visibleCount >= clients.length ? 0 : prev + 1
      );
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [visibleCount]);

  const products = [
    { name: "Tor Steel", image: "/products/torsteel.jpg" },
    { name: "Angles", image: "/products/angles.jpg" },
    { name: "Patti", image: "/products/patti.jpg" },
    { name: "Channel", image: "/products/channel.jpg" },
    { name: "Beam", image: "/products/beam.jpg" },
    { name: "Bars", image: "/products/bars.jpg" },
    { name: "MS & GI Pipe/Sheets", image: "/products/pipesheets.jpg" },
    { name: "JSW/Tata Profile Sheets", image: "/products/profilesheets.jpg" },
    { name: "Water Tanks", image: "/products/watertank.jpg" },
    { name: "Cement - Ultratech, Ambuja, ACC", image: "/products/cement.jpg" },
    { name: "Corrugated Cement Sheets", image: "/products/corrugated.jpg" },
  ];

  const dealers = [
    { name: "Durashine", brand: "Tata BlueScope Steel" },
    { name: "Ultratech", brand: "The Engineer's Choice" },
    { name: "JSW", brand: "JSW Steel" },
    { name: "Tata Tiscon", brand: "Joy of Building" },
  ];

  const clients = [
    { name: "Dattatray Constructions", logo: "/clients/dattatray.jpg" },
    { name: "RC Construction", logo: "/clients/rc.png" },
    { name: "Becon Associates", logo: "/clients/becon.jpg" },
    { name: "Jem Developers", logo: "/clients/jem1.jpg" },
    { name: "Imperial Developers", logo: "/clients/imperial.png" },
    { name: "Raj & Raj Karjat, Neral", logo: "/clients/rajandraj.jpg" },
    { name: "Mahavir Associates", logo: "/clients/mahavir.png" },
    {
      name: "Inteligent Lifespaces",
      logo: "/clients/inteligentlifespaces.png",
    },
    { name: "Inteligent Landmark", logo: "/clients/inteligentlandmark.png" },
    { name: "Smart Infraprojects", logo: "/clients/smartinfra.png" },
  ];

  // ⬇️ Paste all your <section> code below here (Home, About, Products, Clients, Contact)
  return (
    <div>
      <section
        id="home"
        className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-yellow-500">
                Steel & Construction Materials
              </span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Over 20 years of excellence in delivering quality building
              materials across Maharashtra
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition border-t-4 border-yellow-600">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                20+ Years
              </h3>
              <p className="text-gray-600">Of Industry Experience</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition border-t-4 border-yellow-600">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Trusted Partner
              </h3>
              <p className="text-gray-600">Authorized Dealer of Top Brands</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition border-t-4 border-yellow-600">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Quality Products
              </h3>
              <p className="text-gray-600">Wide Range of Building Materials</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Authorized Dealers
            </h2>
            <p className="text-xl text-gray-600">
              Partnered with India's leading construction material brands
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {dealers.map((dealer, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-xl transition border-l-4 border-yellow-600"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {dealer.name}
                </h3>
                <p className="text-sm text-gray-600">{dealer.brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧱 Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">
              Our Products
            </h2>
            <p className="text-xl text-gray-300">
              Explore our wide range of quality building materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg shadow-lg hover:shadow-2xl transition border border-yellow-600/30 hover:border-yellow-600 cursor-pointer"
                onClick={() =>
                  navigate(
                    `/product/${product.name
                      .toLowerCase()
                      .replace(/[&/]+/g, "and") // replace & and / with "and"
                      .replace(/\s+/g, "-")}` // replace spaces with -
                  )
                }
              >
                <div className="w-64 h-64 mb-4 rounded-lg overflow-hidden border-2 border-yellow-600 shadow-md flex justify-center items-center bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-64 h-64 object-contain"
                  />
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-100 font-medium">
                    {product.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="clients"
        className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500">
              Our Clients
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We are proud to serve these esteemed companies and organizations
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto flex items-center justify-center">
            {/* Left Button */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-600 text-black p-2 sm:p-3 rounded-full shadow hover:bg-yellow-500 z-10"
              onClick={handlePrev}
              aria-label="Previous"
            >
              &#8592;
            </button>

            {/* Slider View */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${startIdx * (100 / visibleCount)}%)`,
                }}
              >
                {clients.map((client, index) => (
                  <div
                    key={client.name + index}
                    className="flex flex-col items-center justify-center flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-6"
                  >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-lg overflow-hidden bg-white border border-yellow-600/40 shadow-lg flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-100 text-center mt-3 text-sm sm:text-base md:text-lg">
                      {client.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-600 text-black p-2 sm:p-3 rounded-full shadow hover:bg-yellow-500 z-10"
              onClick={handleNext}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">
                Contact Us
              </h2>
              <p className="text-xl text-gray-300">
                Get in touch with us for all your construction material needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-yellow-600/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg text-yellow-500">
                      Phone
                    </h3>
                    <p className="text-gray-300">9226378669</p>
                    <p className="text-gray-300">9422473482</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-yellow-600/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg text-yellow-500">
                      Email
                    </h3>
                    <p className="text-gray-300">kamdararif@yahoo.com</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-yellow-600/30">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg text-yellow-500">
                    Address
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Panchmarg Kurgaon, Boisar
                    <br />
                    Tarapur-Road Boisar
                    <br />
                    Dist. Palghar 401502
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12 p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-yellow-600/50">
              <h3 className="font-bold text-2xl mb-4 text-yellow-500">
                Arif Kamdar
              </h3>
              <p className="text-gray-300 text-lg">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
