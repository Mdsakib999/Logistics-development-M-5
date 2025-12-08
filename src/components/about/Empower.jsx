import empowerImg from "../../assets/empower.jpg";
import Overlay from "../../utils/Overlay";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Empower() {
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between  gap-4 sm:gap-24">
          {/*content section */}
          <div className="flex flex-col w-full sm:w-1/2 pb-8 pl-2">
            <div className="space-y-4">
              <Heading lineHeight="tight">
                Stärken Sie Ihr Unternehmen mit maßgeschneiderten Logistiklösungen
              </Heading>
              <Paragraph className="lg:mb-16">
                Wir bei FastGo sind überzeugt, dass wir unseren Kunden individuelle und effiziente Logistiklösungen bieten müssen, die ihren spezifischen Bedürfnissen gerecht werden. Dank unserer langjährigen Erfahrung und unseres Expertenteams unterstützen wir Sie dabei, reibungslose Versandprozesse für Ihr Unternehmen zu realisieren.
              </Paragraph>
              <Button to="/service">Mehr Erfahren</Button>
            </div>
          </div>
          {/* image section */}
          <div className="w-full sm:w-1/2">
          <div className="relative group h-full">
            <img
              className="w-full mr-2 h-full lg:h-full object-cover rounded-lg"
              src={empowerImg}
              alt="empower image"
            />
          <Overlay heading="Expresslieferung" paragraph="Schneller Lieferservice direkt zu Ihnen nach Hause." />
          </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
