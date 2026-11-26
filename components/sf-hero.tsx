import Image from "next/image";
import { Actions, Anchor, ButtonLink, Container, Heading, Section, SplitWords, Text } from "@tum.ai/ui-kit";
import type { LogoItem } from "@tum.ai/ui-kit";
import { asset } from "@/lib/asset";

type SfHeroProps = {
  eyebrow?: string;
  title: string;
  tagline: string;
  lead: string;
  cta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  partners: LogoItem[];
};

// Home-page hero as on tum-ai.com: the photo sits inside the logomark
// (an inline mask, since the CSS pipeline drops url() rules), the partner
// row closes the band. Placement lives in globals.css.
export function SfHero({ eyebrow, title, tagline, lead, cta, secondaryCta, partners }: SfHeroProps) {
  return (
    <Section
      tone="night"
      spacing="none"
      aria-labelledby="hero-title"
      className="flex min-h-[100svh] flex-col overflow-clip pt-[calc(var(--header-height)+clamp(2rem,6vh,4rem))] md:pt-[calc(var(--header-height)+clamp(2rem,6vh,5rem))] md:[@media(max-height:700px)]:pt-[calc(var(--header-height)+1rem)]"
    >
      <div aria-hidden className="sf-aperture-frame pointer-events-none absolute -z-10 aspect-[477/406] select-none">
        <div
          className="absolute inset-0 bg-violet-950"
          style={{ mask: `url(${asset("/mark-mask.svg")}) center / 100% 100% no-repeat` }}
        >
          <Image
            src={asset("/sf-bridge.jpg")}
            alt=""
            fill
            priority
            sizes="(min-width: 64rem) 58vw, 118vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-violet-950/20" />
        </div>
      </div>

      <Container className="flex flex-1 flex-col">
        <div>
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-fg/70 motion-safe:animate-fade md:mb-6">
              {eyebrow}
            </p>
          ) : null}
          <h1 id="hero-title" className="text-display-xl text-highlight">
            <SplitWords delay={160}>{title}</SplitWords>
          </h1>
          <Heading as="p" size="lg" className="mt-6 [animation-delay:420ms] motion-safe:animate-rise-sm">
            {tagline}
          </Heading>
          <Text
            size="lead"
            emphasis="muted"
            className="mt-6 max-w-[34rem] [animation-delay:620ms] motion-safe:animate-rise-sm md:mt-8"
          >
            {lead}
          </Text>
          <Actions className="mt-8 [animation-delay:760ms] motion-safe:animate-rise-sm md:mt-10 md:[@media(max-height:700px)]:mt-6">
            <ButtonLink href={cta.href} size="lg" arrow="right">
              {cta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} size="lg" variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </Actions>
        </div>

        {/* Short screens: tighter, so both logo rows stay above the fold. */}
        <div className="mt-auto pt-12 pb-8 [animation-delay:1000ms] motion-safe:animate-fade md:pt-14 md:pb-8 sm:[@media(max-height:820px)]:pt-8 sm:[@media(max-height:820px)]:pb-5">
          <div className="flex flex-col gap-6 border-fg/15 md:border-t md:pt-8 md:[@media(max-height:700px)]:pt-4 lg:flex-row lg:items-center lg:gap-12">
            {/* The kit's LogoWall multiplies logos into light bands; on this dark
                band they are set white instead, as on tum-ai.com. */}
            <ul
              aria-label="Partners"
              className="[--logo-scale:0.6] sm:[--logo-scale:0.7] lg:[--logo-scale:0.85] sm:[@media(max-height:820px)]:[--logo-scale:0.6] grid flex-1 grid-cols-2 items-center gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-5 lg:gap-x-14 lg:gap-y-6"
            >
              {partners.map((logo) => (
                <li key={logo.name} className="flex h-[calc(4.5rem*var(--logo-scale))] items-center opacity-90 transition-opacity hover:opacity-100">
                  <PartnerLogo logo={logo} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PartnerLogo({ logo }: { logo: LogoItem }) {
  const ratio = logo.aspectRatio ?? 3;
  // Marks get the full row height; wide wordmarks are shortened so they
  // carry the same visual weight.
  // Very wide lockups (e.g. Attention Engineering) get a floor so their type isn't tiny.
  const height = logo.wordmark ? 64 : Math.round(Math.max(38, Math.min(64, 50 * Math.sqrt(3.2 / ratio))));
  const art = (
    <span className="inline-flex items-center gap-2 text-fg">
      <Image
        src={logo.src!}
        alt={logo.wordmark ? "" : (logo.alt ?? logo.name)}
        width={Math.round(height * ratio)}
        height={height}
        unoptimized
        className="w-auto brightness-0 invert"
        style={{ height: `calc(${height}px * var(--logo-scale, 1))` }}
      />
      {logo.wordmark ? <span className="font-semibold leading-none tracking-[-0.02em]" style={{ fontSize: "calc(2.5rem * var(--logo-scale, 1))" }}>{logo.wordmark}</span> : null}
    </span>
  );
  return logo.href ? (
    <Anchor href={logo.href} className="inline-flex">
      {art}
    </Anchor>
  ) : (
    art
  );
}
