import React from "react";
import { Award, Globe, Users, Target, CheckCircle, Clock } from "lucide-react";

function WhyChoose() {
  const advantages = [
    {
      icon: Award,
      title: "17+ Years of QA & RA Experience",
      description:
        "Deep expertise in medical device quality assurance and regulatory affairs",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record in Audit Success",
      description:
        "Consistent success in helping clients pass regulatory audits",
      color: "text-green-600",
    },
    {
      icon: Globe,
      title: "Global Regulatory Knowledge",
      description:
        "Expertise in EU MDR, US FDA, WHO GMP, and other international standards",
      color: "text-purple-600",
    },
    {
      icon: Target,
      title: "Tailored Consultancy",
      description:
        "No one-size-fits-all approach - customized solutions for your specific needs",
      color: "text-orange-600",
    },
    {
      icon: Users,
      title: "Hands-on Expertise",
      description:
        "Practical experience with ISO 13485, ISO 14971 and other standards",
      color: "text-red-600",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Why Choose MediQARA Tech
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the trusted partner for medical device
              quality and regulatory excellence
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-blue-200"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">SK</span>
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-6 max-w-4xl mx-auto">
                "Our commitment to excellence and deep understanding of medical
                device regulations has helped hundreds of companies achieve
                compliance success. We don't just consult – we partner for your
                success."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
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
      </div>
    </section>
  );
}

export default WhyChoose;
