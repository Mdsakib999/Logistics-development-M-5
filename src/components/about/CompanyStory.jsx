import { Award, Globe,Rocket,Trophy, TrendingUp, Users } from "lucide-react";
import Heading from '../../components/ui/Heading';
import Paragraph from '../../components/ui/Paragraph';
import aboutImage from "../../assets/about.jpg";
import Countup from "../../utils/Countup";
import Overlay from "../../utils/Overlay";
// ===== SECTION 1: COMPANY STORY & JOURNEY =====
export const CompanyStory = () => {
  const milestones = [
    {
      title: "First Launch",
      description: "Successfully launched our platform with 500+ early adopters in the first week.",
      achievement: "March 2024",
      icon: Rocket,
      color: "emerald"
    },
    {
      title: "10K Users",
      description: "Reached our first major milestone with 10,000 active users across 25 countries.",
      achievement: "June 2024",
      icon: Users,
      color: "blue"
    },
    {
      title: "Series A Funding",
      description: "Secured $5M in Series A funding to accelerate growth and expand our team.",
      achievement: "August 2024",
      icon: Award,
      color: "violet"
    },
    {
      title: "Industry Award",
      description: "Recognized as the Best Innovation in Tech by the Digital Excellence Awards.",
      achievement: "October 2024",
      icon: Trophy,
      color: "amber"
    }
  ];

  const colorMap = {
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      icon: 'bg-emerald-500'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      icon: 'bg-blue-500'
    },
    violet: {
      bg: 'bg-violet-50',
      text: 'text-violet-600',
      border: 'border-violet-200',
      icon: 'bg-violet-500'
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200',
      icon: 'bg-amber-500'
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
    <Heading align="center" className="mx-auto">
      Our Journey
    </Heading>
          <Paragraph align="center"  className="w-2/3 mx-auto">
            From a small startup to a global logistics leader, discover how
            we've grown while maintaining our commitment to excellence and
            customer satisfaction.
          </Paragraph>
        </div>

        {/* Story Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="">
            <Heading fontWeight="semibold">
              Building the Future of Logistics
            </Heading>
            <Paragraph>
              Our company emerged from a simple observation:
              businesses needed a logistics partner that combined reliability,
              technology, and genuine care for their success.
            </Paragraph>
            <Paragraph>
              What started as a small team with two trucks has grown into a
              comprehensive logistics network serving thousands of businesses
              worldwide. Our growth isn't just measured in numbers—it's
              reflected in the trust our clients place in us every day.
            </Paragraph>
            <div className="grid mt-4 grid-cols-2 gap-6">
              <div className="bg-green-300 hover:bg-secondary p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary"><Countup>500</Countup>+</span>
                </div>
                <p className="text-gray-600 text-sm">Team Members</p>
              </div>
              <div className="bg-green-300 hover:bg-secondary p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary"><Countup>25</Countup>+</span>
                </div>
                <p className="text-gray-600 text-sm">Countries Served</p>
              </div>
              <div className="bg-green-300 hover:bg-secondary p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary"><Countup>1</Countup>M+</span>
                </div>
                <p className="text-gray-600 text-sm">Deliveries Made</p>
              </div>
              <div className="bg-green-300 hover:bg-secondary p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary"><Countup>99.8</Countup>%</span>
                </div>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="h-full relative group">
            <img
              className="w-full h-full rounded-xl"
              src={aboutImage}
              alt="about us image"
            />
                {/* Overlay only on image */}
                <Overlay heading="Logistics Partnar" paragraph="Fast & Reliable Transport" />
          </div>
        </div>

        {/* Timeline - Milestones */}
        <div>
          <Heading align="center" className="mx-auto">
            Key Milestones in Our Growth
          </Heading>

    <div className="bg-transparent p-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const colors = colorMap[milestone.color];
            
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-gray-800 rounded-xl p-6 h-full border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${colors.icon} p-3 rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {milestone.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-10 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-12 text-center">
          <Heading align="center" className="mx-auto" color="white">
            Our Vision for Tomorrow
          </Heading>
          <Paragraph align="center" className="text-white w-2/3 mx-auto">
            To be the most trusted and innovative logistics partner globally,
            transforming how goods move around the world through sustainable
            practices, cutting-edge technology, and unwavering commitment to
            excellence.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
