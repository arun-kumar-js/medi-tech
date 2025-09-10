import React from "react";
import { Microscope, Activity, Package, Truck, Rocket } from "lucide-react";

function Industries() {
  const industries = [
    {
      icon: Microscope,
      title: "Medical Device Manufacturers",
      description:
        "Comprehensive QA & RA support for device manufacturers of all sizes",
      color: "text-blue-600",
    },
    {
      icon: Rocket,
      title: "Start-ups entering the Medical Device Market",
      description:
        "Guidance and support for new entrants in the medical device industry",
      color: "text-green-600",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Service
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide specialized consulting services across the entire
              medical device and healthcare ecosystem
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <industry.icon className={`w-8 h-8 text-white`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
            
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">17+</div>
                <div className="text-gray-600">Years of QA & RA Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Audit Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  Global
                </div>
                <div className="text-gray-600">Regulatory Knowledge</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  Custom
                </div>
                <div className="text-gray-600">Tailored Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
