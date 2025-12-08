import {
  Award,
  Globe,
  Rocket,
  Ship,
  TrendingUp,
  Trophy,
  Truck,
  Users,
} from "lucide-react";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Countup from "../../utils/Countup";
// ===== SECTION 1: COMPANY STORY & JOURNEY =====
export const CompanyStory = () => {
  const milestones = [
    {
      title: "First Launch",
      description:
        "Successfully launched our platform with 500+ early adopters in the first week.",
      achievement: "March 2024",
      icon: Rocket,
      color: "emerald",
    },
    {
      title: "10K Users",
      description:
        "Reached our first major milestone with 10,000 active users across 25 countries.",
      achievement: "June 2024",
      icon: Users,
      color: "blue",
    },
    {
      title: "Series A Funding",
      description:
        "Secured $5M in Series A funding to accelerate growth and expand our team.",
      achievement: "August 2024",
      icon: Award,
      color: "violet",
    },
    {
      title: "Industry Award",
      description:
        "Recognized as the Best Innovation in Tech by the Digital Excellence Awards.",
      achievement: "October 2024",
      icon: Trophy,
      color: "amber",
    },
  ];

  const colorMap = {
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      icon: "bg-emerald-500",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      icon: "bg-blue-500",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
      icon: "bg-violet-500",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      icon: "bg-amber-500",
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading align="center" className="mx-auto">
            Unsere Reise
          </Heading>
          <Paragraph align="center" className="w-full sm:w-2/3 mx-auto">

Vom kleinen Start-up zum globalen Logistikunternehmen – entdecken Sie, wie wir gewachsen sind und dabei unser Engagement für Exzellenz und Kundenzufriedenheit beibehalten haben.
          </Paragraph>
        </div>

        {/* Story Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="">
            <Heading fontWeight="semibold">
              Die Zukunft der Logistik gestalten
            </Heading>
            <Paragraph>
              
Unser Unternehmen entstand aus einer einfachen Erkenntnis: Unternehmen brauchten einen Logistikpartner, der Zuverlässigkeit, Technologie und echtes Interesse an ihrem Erfolg vereint.


            </Paragraph>
            <Paragraph>
             Was mit einem kleinen Team und zwei Lkw begann, ist zu einem umfassenden Logistiknetzwerk gewachsen, das Tausende von Unternehmen weltweit betreut. Unser Wachstum misst sich nicht nur in Zahlen – es spiegelt sich im Vertrauen wider, das unsere Kunden uns täglich entgegenbringen.
            </Paragraph>
            <div className="grid mt-4 grid-cols-2 gap-6">
              <div className="bg-white hover:scale-105 hover:bg-emerald-200 transition-all duration-300 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">
                    <Countup>300</Countup>+
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Teammitglieder</p>
              </div>
              <div className="bg-white hover:scale-105 hover:bg-emerald-200 transition-all duration-300 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">
                    <Countup>25</Countup>+
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Bediente Länder</p>
              </div>
              <div className="bg-white hover:scale-105 hover:bg-emerald-200 transition-all duration-300 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">
                    <Countup>1</Countup>M+
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Lieferungen Durchgeführt</p>
              </div>
              <div className="bg-white hover:scale-105 hover:bg-emerald-200 transition-all duration-300 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-primary">
                    <Countup>99.8</Countup>%
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Erfolgsquote</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-8">
            <div className="max-w-7xl w-full">
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 gap-8 items-center">
                {/* Left Side - Images */}
                <div className="relative">
                  {/* Container Ship Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div 
                            style={{
          backgroundImage:
            "url('https://i.ibb.co.com/S7DZwr0m/scene-with-photorealistic-logistics-operations-proceedings.jpg?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize:"contain",
        }}
                    className="aspect-[4/5]  relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Ship className="w-32 h-32 text-white opacity-20" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-secondary px-3 py-1 rounded-full text-white text-sm font-bold">
                        Seefracht
                      </div>
                    </div>
                  </div>

                  {/* Truck Image - Overlapping */}
                  <div className="absolute top-1/3 -right-8 lg:right-0 w-2/3 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div
                            style={{
          backgroundImage:
            "url('https://i.ibb.co.com/7J6jH41w/truck-vehicle-with-trailers-background.jpg?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize:'cover',
        }}
                    className="aspect-[4/3] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-blue-400 px-3 py-1 rounded-full text-white text-xs font-semibold">
                        Straßenverkehr
                      </div>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 flex items-center gap-4 min-w-[250px] hover:scale-105 transition-transform duration-300">
                    <div className="bg-secondary rounded-full p-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">
                        350+
                      </div>
                      <div className="text-gray-600 font-medium">
                        Geschultes Personal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Vision Statement */}
        <div className="mt-10 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-12 text-center">
          <Heading align="center" className="mx-auto" color="white">
            Unsere Vision für morgen
          </Heading>
          <Paragraph
            align="center"
            className="text-white w-full sm:w-2/3 mx-auto"
          >
            Unser Ziel ist es, der weltweit vertrauenswürdigste und innovativste Logistikpartner zu sein und die Art und Weise, wie Waren weltweit transportiert werden, durch nachhaltige Praktiken, Spitzentechnologie und ein unerschütterliches Engagement für Exzellenz zu verändern.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
