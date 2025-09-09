import React from "react";
import { Target, Eye, Heart, TrendingUp, Award, Users } from "lucide-react";
import Logo from "./Logo";

function About() {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We work with complete transparency and ethical standards.",
      color: "text-blue-600",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-quality solutions for lasting compliance.",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We tailor our services to your unique needs.",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We keep evolving with regulatory updates.",
      color: "text-orange-600",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
             
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About MediQARA Tech
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Welcome to MediQARA Tech
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MediQARA Tech is a professional consulting firm specializing in
                Medical Device Quality Assurance and Regulatory Affairs. We are
                committed to helping manufacturers, distributors, and healthcare
                organizations meet national and international quality standards,
                including ISO 13485, ISO 14971, CDSCO, MDR, and FDA 21 CFR 820.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 17 years of hands-on experience in the medical device
                and pharmaceutical industries, we understand the complexities of
                regulatory compliance and quality management systems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  17+ Years of Experience
                </h4>
                <p className="text-gray-600">
                  Proven track record in audit success and regulatory compliance
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
              <Target className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To empower medical device companies with robust quality systems
                and regulatory compliance strategies, ensuring safe, effective,
                and globally approved products.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-8 rounded-2xl">
              <Eye className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-cyan-100 leading-relaxed">
                To be recognized as the most trusted QA & RA consultancy in the
                medical device industry, driving quality excellence and
                regulatory readiness across the globe.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <value.icon
                    className={`w-12 h-12 mx-auto mb-4 ${value.color}`}
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Quote */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Founder's Note
            </h3>
            <blockquote className="text-xl italic text-gray-700 mb-4 max-w-3xl mx-auto">
              "After 17+ years in Medical Devices & Pharmaceuticals, I founded
              MediQARA Tech with one goal—to make compliance simpler, audits
              smoother, and quality culture stronger for companies of all
              sizes."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Selvaraj Kumar</p>
                <p className="text-gray-600">
                  Medical Devices QA & RA Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
