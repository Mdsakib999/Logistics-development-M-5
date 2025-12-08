import Countup from "../../utils/Countup";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Success() {
  return (
    <section className="py-20 bg-gray-300 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-12">
          <Heading align="center" className="my-4 mx-auto" lineHeight="tight">
            Von Branchenführern geschätzt
          </Heading>
          <Paragraph align="center">
           Erfahren Sie, wie wir Unternehmen bei der Transformation ihrer Logistikprozesse unterstützt haben.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-3 px-8 gap-8">
          <div className="bg-white rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              <Countup>40</Countup>%
            </div>
            <div className="text-black mb-4">Erzielte Kosteneinsparungen</div>
            <p className="text-black opacity-50 text-sm">
              „Die umgesetzten Optimierungsstrategien haben unsere Logistikkosten deutlich gesenkt und gleichzeitig die Servicequalität verbessert.“
            </p>
            <div className="mt-4 text-black opacity-75 text-xs">
              - Fertigungskunde
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 backdrop-blur-sm ">
            <div className="text-3xl font-bold text-green-400 mb-2">
              <Countup>99.5</Countup>%
            </div>
            <div className="text-black mb-4">Pünktlichkeitsrate</div>
            <p className="text-black opacity-50 text-sm">
              „Die Zuverlässigkeit hat sich deutlich verbessert. Unsere Kunden sind zufriedener und unsere Abläufe laufen reibungslos.“
            </p>
            <div className="mt-4 text-black opacity-75 text-xs">
              - E-Commerce-Kunde
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              <Countup>60</Countup>%
            </div>
            <div className="text-black mb-4">Schnellere Verarbeitungszeit</div>
            <p className="text-black opacity-50 text-sm">
              „Automatisierung und intelligente Routenplanung haben unsere Auftragsabwicklungsgeschwindigkeit und -genauigkeit grundlegend verändert.“
            </p>
            <div className="mt-4 text-black opacity-75 text-xs">
              - Einzelhandelskunde
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
