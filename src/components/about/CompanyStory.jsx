import { Award, Globe, TrendingUp, Users } from "lucide-react";
import aboutImage from '../../assets/about.jpg';
// ===== SECTION 1: COMPANY STORY & JOURNEY =====
export const CompanyStory = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started with a vision to revolutionize logistics and delivery services.",
      achievement: "First 100 deliveries",
    },
    {
      year: "2019",
      title: "Regional Expansion",
      description:
        "Expanded operations to 5 major cities with a fleet of 50 vehicles.",
      achievement: "5,000+ deliveries",
    },
    {
      year: "2021",
      title: "Technology Integration",
      description:
        "Launched our advanced tracking platform and mobile application.",
      achievement: "Real-time tracking",
    },
    {
      year: "2023",
      title: "International Presence",
      description:
        "Expanded services to 25+ countries with strategic global partnerships.",
      achievement: "1M+ deliveries",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            OUR JOURNEY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a global logistics leader, discover how
            we've grown while maintaining our commitment to excellence and
            customer satisfaction.
          </p>
        </div>

        {/* Story Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Building the Future of Logistics
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded in 2018, our company emerged from a simple observation:
              businesses needed a logistics partner that combined reliability,
              technology, and genuine care for their success.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              What started as a small team with two trucks has grown into a
              comprehensive logistics network serving thousands of businesses
              worldwide. Our growth isn't just measured in numbers—it's
              reflected in the trust our clients place in us every day.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <p className="text-gray-600 text-sm">Team Members</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">25+</span>
                </div>
                <p className="text-gray-600 text-sm">Countries Served</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">1M+</span>
                </div>
                <p className="text-gray-600 text-sm">Deliveries Made</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">99.8%</span>
                </div>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
            <div className="h-full">
                <img className="w-full h-full rounded-xl"  src={aboutImage} alt="about us image" />
            </div>
        </div>

        {/* Timeline - Milestones */}
        <div>
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Key Milestones in Our Growth
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-accent">
                    {milestone.year}
                  </span>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-primary mb-3">
                  {milestone.title}
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {milestone.description}
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <span className="text-sm font-semibold text-accent">
                    {milestone.achievement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Vision for Tomorrow
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To be the most trusted and innovative logistics partner globally,
            transforming how goods move around the world through sustainable
            practices, cutting-edge technology, and unwavering commitment to
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
