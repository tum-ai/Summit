import type { ReactNode } from "react";
import { Text, TextLink } from "@tum.ai/ui-kit";
import { EHL_URL } from "@/content/event";

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <TextLink href={href} emphasis="accent">
    {children}
  </TextLink>
);

// Inline emphasis: full-strength text inside the muted lead paragraphs.
const Em = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-fg">{children}</strong>;

/** Who TUM.ai is. Shown under the universities in "Who's coming". */
export function AboutText() {
  return (
    <div className="space-y-6">
      <Text size="lead" emphasis="muted">
        <Link href="https://www.tum-ai.com">TUM.ai</Link> is Europe&apos;s leading student AI initiative, based at the{" "}
        <Link href="https://www.tum.de/en">Technical University of Munich</Link>. We run hackathons across Europe through
        the <Link href={EHL_URL}>European Hackathon League</Link>, back Munich&apos;s most ambitious builders in{" "}
        <Link href="https://www.tum-ai.com/e-lab">our own incubator</Link>, and{" "}
        <Link href="https://www.tum-ai.com/research">publish research</Link> at ICLR and ICML with MIT, Cambridge and
        IBM. Our alumni go on to top companies and research labs, and some have founded breakout YC companies.
      </Text>
      <Text size="lead">
        momenTUM brings that network to San Francisco: <Em>Munich&apos;s best students in one room with the Bay&apos;s
        best builders</Em>, and the founders and investors who want to meet them early.
      </Text>
    </div>
  );
}
