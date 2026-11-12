import { gdpGrowth, toIndex } from "@/content/data";
import { copy } from "@/content/copy";

const W = 1000;
const H = 360;
const de = toIndex(gdpGrowth.germany);
const years = [gdpGrowth.years[0] - 1, ...gdpGrowth.years];
const [min, max] = [94, 106];
const x = (i: number) => (i / (years.length - 1)) * W;
const y = (v: number) => H - ((v - min) / (max - min)) * H;
const path = de.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join("");
const pct = Math.round(de[de.length - 1] - 100);
const span = years.length - 1;

/** Germany only. The line draws (class "draw") and the number counts (data-count) under the parent scene's scrub. */
export default function GdpChart() {
  return (
    <figure className="w-[min(92vw,1100px)] text-paper">
      <div className="mb-10 text-center tabular-nums">
        <p className="text-[clamp(3.5rem,10vw,9rem)] font-light leading-none text-ember">
          +<span data-count={pct}>{pct}</span>%
        </p>
        <p className="mt-5 text-[clamp(1.4rem,3vw,3rem)] leading-[1.12] tracking-[-0.02em]">{copy.crisis.gdp.line}</p>
        <p className="mt-3 text-[clamp(1rem,1.5vw,1.35rem)] text-paper/70">{copy.crisis.gdp.sub}</p>
      </div>
      <svg viewBox={`0 -10 ${W} ${H + 50}`} className="w-full overflow-visible" role="img"
        aria-label={`Germany's real GDP grew ${pct}% from ${years[0]} to ${years[span]}.`}>
        <line x1="0" x2={W} y1={y(100)} y2={y(100)} stroke="currentColor" strokeOpacity=".2" strokeDasharray="2 6" />
        <path className="draw" d={path} fill="none" stroke="var(--color-ember)" strokeWidth="2.5" pathLength={1} />
        {years.map((yr, i) => (
          <text key={yr} x={x(i)} y={H + 36} textAnchor={i ? (i === span ? "end" : "middle") : "start"}
            className="fill-current text-[13px] tabular-nums" fillOpacity=".5">
            {yr}
          </text>
        ))}
      </svg>
      <figcaption className="caps mt-6 !text-[10px] text-paper/50">— {gdpGrowth.source}</figcaption>
    </figure>
  );
}
