import React from "react";
import {
  Shield,
  FileText,
  Search,
  AlertTriangle,
  GraduationCap,
  Users,
  Globe,
  Settings,
  CheckCircle,
  BookOpen,
  Target,
  BarChart3,
  Check,
} from "lucide-react";

function Services() {
  const serviceCategories = [
    {
      id: 1,
      title: "Quality Assurance (QA) Services",
      icon: Shield,
      color: "from-blue-600 to-blue-700",
      services: [
        {
          name: "ISO 13485 QMS Implementation & Maintenance",
          description:
            "Designing, documenting, and improving Quality Management Systems for medical devices.",
        },
        {
          name: "Internal Quality Audits",
          description:
            "Conducting internal audits to ensure ongoing compliance.",
        },
        {
          name: "Supplier Quality Audits",
          description:
            "Evaluating and approving suppliers to meet quality requirements.",
        },
        {
          name: "CAPA Management",
          description:
            "Identifying, documenting, and closing corrective & preventive actions.",
        },
        {
          name: "Risk Management (ISO 14971)",
          description:
            "Risk analysis, evaluation, and control measures for devices.",
        },
        {
          name: "Complaint Handling & Investigation",
          description:
            "Root cause analysis and corrective actions for product complaints.",
        },
        {
          name: "Document & Record Control",
          description:
            "SOP creation, document approval processes, and archival management.",
        },
      ],
    },
    {
      id: 2,
      title: "Regulatory Affairs (RA) Services",
      icon: FileText,
      color: "from-green-600 to-green-700",
      services: [
        {
          name: "CE Marking Support",
          description:
            "Technical File preparation & submission for European compliance.",
        },
        {
          name: "MDR Compliance",
          description:
            "Guidance and documentation as per EU Medical Device Regulation.",
        },
        {
          name: "FDA 21 CFR 820 Compliance",
          description:
            "Support in meeting U.S. FDA Quality System Regulations.",
        },
        {
          name: "Product Registration (India & Overseas)",
          description: "Guidance for CDSCO and international registrations.",
        },
        {
          name: "Device Master File (DMF) / Design History File (DHF)",
          description:
            "Complete preparation & review for regulatory submission.",
        },
        {
          name: "Regulatory Gap Assessment",
          description:
            "Identifying compliance gaps before audits or product launches.",
        },
      ],
    },
    {
      id: 3,
      title: "Training & Capacity Building",
      icon: GraduationCap,
      color: "from-purple-600 to-purple-700",
      services: [
        {
          name: "ISO 13485 Awareness & Implementation Training",
          description: "For QA teams, engineers, and managers.",
        },
        {
          name: "Internal Auditor Training",
          description: "Developing in-house audit capabilities.",
        },
        {
          name: "CAPA & Risk Management Workshops",
          description: "Hands-on training for effective CAPA handling.",
        },
        {
          name: "Audit Preparedness Training",
          description:
            "Preparing teams for client, regulatory, and certification audits.",
        },
      ],
    },
    {
      id: 4,
      title: "Advisory & Support Services",
      icon: Users,
      color: "from-orange-600 to-orange-700",
      services: [
        {
          name: "Audit Readiness & Mock Audits",
          description: "Pre-certification audit simulation.",
        },
        {
          name: "Regulatory Strategy Planning",
          description:
            "Choosing the best compliance pathway for product launches.",
        },
        {
          name: "Post-Market Surveillance (PMS) Support",
          description: "Maintaining compliance after product launch.",
        },
        {
          name: "Change Management Support",
          description: "Handling QMS and regulatory changes efficiently.",
        },
        {
          name: "Quality Culture Development",
          description:
            "Building an organization-wide mindset towards compliance.",
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Quality Assurance and Regulatory Affairs solutions
              tailored to your specific needs
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              >
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${category.color} text-white p-6`}
                >
                  <div className="flex items-center gap-4">
                    <category.icon className="w-8 h-8" />
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Services List */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.services.map((service, index) => (
                      <li key={index} className="cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center mt-1 flex-shrink-0 ${
                              category.id === 1
                                ? "bg-blue-600"
                                : category.id === 2
                                ? "bg-green-600"
                                : category.id === 3
                                ? "bg-purple-600"
                                : "bg-orange-600"
                            }`}
                          >
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`font-semibold transition-all duration-300 ${
                                category.id === 1
                                  ? "text-blue-600"
                                  : category.id === 2
                                  ? "text-green-600"
                                  : category.id === 3
                                  ? "text-purple-600"
                                  : "text-orange-600"
                              }`}
                            >
                              {service.name}
                            </h4>
                            <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2">
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Global Compliance
              </h4>
              <p className="text-gray-600">
                Expertise in international standards and regulations
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Tailored Solutions
              </h4>
              <p className="text-gray-600">
                Customized approaches for your specific requirements
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Proven Results
              </h4>
              <p className="text-gray-600">
                Track record of successful audits and compliance
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let us help you achieve seamless compliance and build a robust
                quality management system for your medical device business.
              </p>
              <button className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
