import { ButtonLink, Container } from "../ui";
import FunctionSheet from "./FunctionSheet";

function Statement() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-20">
        <div className="max-w-2xl">
          <p className="text-sm text-fg-2">For hotels and restaurants</p>
          <p className="mt-4 font-display font-medium text-[28px] leading-[1.25] tracking-[-0.02em] text-fg md:text-[40px] md:leading-[1.2]">
            Staff for banquets and food and beverage operations, on the
            floor, at the bar and behind the scenes
          </p>
          <ButtonLink href="/contact" className="mt-10">
            Request staff
          </ButtonLink>
        </div>
        <FunctionSheet />
      </Container>
    </section>
  );
}

export default Statement;
