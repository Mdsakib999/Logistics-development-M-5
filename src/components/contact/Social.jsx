
import Container from "../layout/Container";
import Heading from "../ui/Heading";
export default function Social() {
  return (
    <div className="pt-12 sm:pt-0">
      <Container className="flex flex-col gap-4 justify-between">
        {/* social content */}
        <div className="w-2/3">
          <h6 className="uppercase font-heading text-sm font-medium mb-2">
            Los geht's
          </h6>
          <Heading lineHeight="tight">
            Nehmen Sie Kontakt mit uns auf. Wir helfen Ihnen gerne weiter.
          </Heading>
        </div>
      </Container>
    </div>
  );
}
