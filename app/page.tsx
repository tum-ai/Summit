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

export default function Page() {
  return (
    <>
      <Header
        logo={logo}
        homeHref="#main-content"
        navigation={[
          { href: "#about", label: "About" },
          { href: "#speakers", label: "Speakers" },
          { href: "#challenges", label: "Challenges" },
          { href: "#agenda", label: "Agenda" },
          { href: "#people", label: "People" },
        ]}
        cta={{ href: SIGNUP_URL, label: "Sign up" }}
      />

      <main id="main-content" tabIndex={-1}>
        <SfHero
          eyebrow={hero.eyebrow}
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

        <Section id="speakers" tone="lavender">
          <Container>
            <SectionHeader eyebrow="Speakers" title="On stage" />
            <SpeakerGrid speakers={speakers} more={MORE_SPEAKERS_TBA} />
          </Container>
        </Section>

        <Challenges items={challenges} logos={partners} />

        <Section id="agenda" tone="night">
          <Container>
            <SectionHeader
              eyebrow="Agenda"
              title="Friday 4 to Tuesday 8."
              lead="The hackathon runs from Saturday 13:00 to Sunday 17:00. Before and after: office visits, workshops and a VC dinner."
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
                  { href: "#speakers", label: "Speakers" },
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
