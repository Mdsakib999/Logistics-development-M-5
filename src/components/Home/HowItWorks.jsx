import {
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Package,
  Truck,
} from "lucide-react";
import worksImage from "../../assets/works.png";
import Overlay from "../../utils/Overlay";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import WorkCard from "../ui/WorkCard";
export default function HowItWorks() {
  return (
    <div className="pt-8 md:py-12">
      <Container className="py-4 md:py-12 lg:py-16">
        {/* content section */}
        <div className="flex flex-col gap-4 md:gap-2 lg:gap-0 md:flex-row">
          {/* image content */}
          <div className="flex justify-center mb-8 md:mb-4 md:justify-start items-center w-full mx-auto md:w-1/2">
            <div className="relative group">
              <img
                src={worksImage}
                className="rounded-lg"
                alt="product-shifting image"
              />
              <Overlay heading="Safe Delivery" paragraph="next to your door" />
            </div>
          </div>
          {/* text content */}
          <div className="flex justify-center flex-col px-4 lg:px-1 pb-12 gap-4 w-full md:w-1/2">
            <h6 className="uppercase font-heading tex-sm font-medium">
              So funktioniert es
            </h6>
            <Heading lineHeight="tight">
              Vereinfachen Sie Ihr Versand­erlebnis
            </Heading>
            <Paragraph>
              Wir machen den Versand einfach und stressfrei. Von der Abholung bis zur Lieferung ist jeder Schritt effizient und zuverlässig, sodass Sie sich auf Ihr Geschäft konzentrieren können, während wir Ihre Logistik übernehmen.
            </Paragraph>
          </div>
        </div>
        <hr className="border-1 border-[#5C6C7B] border-dashed my-4 md:my-10" />
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-12">
          <WorkCard
            src={<Package size={40} color="white" />}
            heading="Angebot anfordern"
            step="1"
            paragraph="Teilen Sie uns Ihre Versandanforderungen mit und erhalten Sie ein schnelles, maßgeschneidertes Angebot, um Ihre Waren effizient zu transportieren."
          />
          <WorkCard
            src={<FileText size={40} color="white" />}
            heading="Details angeben"
            step="2"
            paragraph=" Geben Sie die erforderlichen Informationen zu Ihrer Sendung ein, damit wir die beste Lieferlösung für Sie planen können."
          />
          <WorkCard
            src={<Calendar size={40} color="white" />}
            heading="Pünktliche Abholung"
            step="3"
            paragraph="Wir sorgen dafür, dass Ihre Waren jedes Mal pünktlich abgeholt werden, damit Ihr Lieferplan stets eingehalten wird."
          />
          <WorkCard
            src={<Truck size={40} color="white" />}
            heading="Sendung verfolgen"
            step="4"
            paragraph="Verfolgen Sie Ihre Sendung in Echtzeit und bleiben Sie über den gesamten Transportweg von der Abholung bis zur Lieferung informiert."
          />
          <WorkCard
            src={<Home size={40} color="white" />}
            heading="Paket Erhalten"
            step="5"
            paragraph="Erhalten Sie Ihre Waren sicher und pünktlich, und genießen Sie ein reibungsloses und stressfreies Versand­erlebnis."
          />
          <WorkCard
            src={<MessageSquare size={40} color="white" />}
            heading="Feedback geben"
            step="6"
            paragraph="Teilen Sie uns Ihre Erfahrungen mit, damit wir unsere Dienstleistungen weiter verbessern und Sie noch besser betreuen können."
          />
        </div>
      </Container>
    </div>
  );
}
