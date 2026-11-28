import {
  Container,
  Section,
  SectionHeader,
  TextLink,
} from "@tum.ai/ui-kit";
import { Footer, Header } from "@tum.ai/ui-kit/shell";
import { Agenda } from "@/components/agenda";
import { Challenges } from "@/components/challenges";
import { PeopleGrid, SpeakerGrid } from "@/components/people-grid";
import { SfHero } from "@/components/sf-hero";
import { Universities } from "@/components/universities";
import { asset } from "@/lib/asset";
import {
  agenda,
  challenges,
  people,
  speakers,
  universities,
  MORE_SPEAKERS_TBA,
  SHOW_SPEAKERS,
  CONTACT_EMAIL,
  EVENT_NAME,
  SIGNUP_URL,
  hero,
  mailto,
  partners,
} from "@/content/event";

const logo = {
  src: asset("/tum_ai_logo_new.svg"),
  width: 1640,
  height: 406,
  alt: "TUM.ai",
  unoptimized: true,
};

const partnerMail = mailto(`Partnering with the ${EVENT_NAME}`);

// Nav entry for the speakers section, left out while it's hidden.
const speakersLink = SHOW_SPEAKERS ? [{ href: "#speakers", label: "Speakers" }] : [];

export default function Page() {
  return (
    <>
      <Header
        logo={logo}
        homeHref="#main-content"
        navigation={[
          { href: "#about", label: "About" },
          ...speakersLink,
          { href: "#challenges", label: "Challenges" },
          { href: "#agenda", label: "Agenda" },
          { href: "#people", label: "People" },
        ]}
        cta={{ href: SIGNUP_URL, label: "Sign up" }}
      />

      <main id="main-content" tabIndex={-1}>
        <SfHero
          title={hero.title}
          tagline={hero.tagline}
          lead={hero.lead}
          cta={{ href: SIGNUP_URL, label: "Become a participant" }}
          secondaryCta={{ href: partnerMail, label: "Become a partner" }}
          partners={partners}
        />

        {/* Flow: claim (hero) → who's coming → on stage → challenges →
            agenda → the team → contact. Neighbouring bands never share a tone. */}
        <Universities items={universities} />

        {SHOW_SPEAKERS && (
          <Section id="speakers" tone="lavender">
            <Container>
              <SectionHeader eyebrow="Speakers" title="On stage" />
              <SpeakerGrid speakers={speakers} more={MORE_SPEAKERS_TBA} />
            </Container>
          </Section>
        )}

        {/* Without the speakers, Challenges takes their tone so it doesn't match About. */}
        <Challenges items={challenges} logos={partners} tone={SHOW_SPEAKERS ? "paper" : "lavender"} />

        <Section id="agenda" tone="night">
          <Container>
            <SectionHeader
              eyebrow="Agenda"
              title="Friday 4 to Tuesday 8."
              lead="It starts Friday with a welcome party at Headline HQ in the Presidio. The hackathon runs at Antler HQ from Saturday 13:00 to Sunday 17:00. After that: office visits, workshops and a VC dinner."
            />
            <Agenda days={agenda} />
          </Container>
        </Section>

        <Section id="people" tone="mist">
          <Container>
            <SectionHeader eyebrow="People" title="Built by people who made the move" />
            <PeopleGrid people={people} />
          </Container>
        </Section>
      </main>

      <Footer
        logo={logo}
        tagline="See you in SF."
        columns={[
          {
            id: "event",
            title: "Event",
            links: [
              { href: SIGNUP_URL, label: "Sign up", external: true },
              ...speakersLink,
              { href: "#challenges", label: "Challenges" },
              { href: "#agenda", label: "Agenda" },
              { href: "#people", label: "People" },
            ],
          },
          {
            id: "contact",
            title: "Contact",
            links: [
              { href: partnerMail, label: CONTACT_EMAIL },
              { href: "https://www.tum-ai.com", label: "tum-ai.com", external: true },
            ],
          },
        ]}
        bottomLine={
          <>
            <span>© TUM.ai</span>
            <TextLink href="https://www.tum-ai.com/imprint" emphasis="muted">
              Imprint
            </TextLink>
          </>
        }
      />
    </>
  );
}
