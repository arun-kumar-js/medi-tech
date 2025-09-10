import React from "react";
import {
  Shield,
  FileText,
  Search,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Logo from "./Logo";

function Hero() {
  const highlights = [
    {
      icon: Shield,
      text: "ISO 13485 & MDR Compliance Support",
      color: "text-blue-600",
    },
    {
      icon: FileText,
      text: "Regulatory Documentation & Submissions",
      color: "text-green-600",
    },
    {
      icon: Search,
      text: "Internal & Supplier Audits",
      color: "text-purple-600",
    },
    {
      icon: AlertTriangle,
      text: "Risk Management & CAPA Implementation",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="flex flex-col items-center mb-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                MediQARA Tech
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-100">
            Your Trusted Partner in Medical Device Quality & Regulatory
            Excellence
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-50">
            At MediQARA Tech, we help medical device and healthcare companies
            achieve seamless Quality Assurance (QA) and Regulatory Affairs (RA)
            compliance. we deliver solutions that keep your business
            audit-ready, globally compliant, and quality-driven.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <highlight.icon
                    className={`w-8 h-8 mb-3 ${highlight.color}`}
                  />
                  <p className="text-sm font-medium text-blue-50">
                    {highlight.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@mediqaratech.com?subject=Get Started with MediQARA Tech&body=Hello,%0D%0A%0D%0AI would like to get started with your services.%0D%0A%0D%0APlease provide more information about:%0D%0A- Your services%0D%0A- Pricing%0D%0A- Next steps%0D%0A%0D%0AThank you,%0D%0A[Your Name]"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm mb-4">
              Trusted by Medical Device Companies Worldwide
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-sm font-medium">ISO 13485</span>
              <span className="text-sm font-medium">FDA 21 CFR 820</span>
              <span className="text-sm font-medium">EU MDR</span>
              <span className="text-sm font-medium">CDSCO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
