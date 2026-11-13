/**
 * Deterministic frozen-data visuals, 2026-11-13.
 *
 * All geometry is derived from the existing processed interval values. No
 * ResizeObserver, third-party chart renderer, polling, animation-dependent
 * visibility or data re-normalization is required.
 */
type Metric = "totalClones" | "totalViews";

export interface RepositoryTotal {
  name: string;
  totalClones: number;
  totalViews: number;
}
export interface IntervalDatum {
  period: string;
  clones: number;
  views: number;
  cloneViewRatio: number | null;
}

const number = (value: number) => new Intl.NumberFormat("en-US").format(value);
const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function RepositoryBars({
  data,
  metric,
  ariaLabel,
}: {
  data: RepositoryTotal[];
  metric: Metric;
  ariaLabel: string;
}) {
  const max = Math.max(1, ...data.map((row) => row[metric]));
  return (
    <div role="list" aria-label={ariaLabel} className="space-y-4 px-4 py-6 md:px-6">
      {data.map((row) => {
        const value = row[metric];
        return (
          <div role="listitem" key={row.name} className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="break-words text-xs font-semibold text-slate-200">{row.name}</span>
              <strong className="font-mono text-sm tabular-nums text-white">{number(value)}</strong>
            </div>
            <div className="h-4 overflow-hidden rounded-md border border-slate-700/70 bg-slate-950/90">
              <div
                role="meter"
                aria-label={row.name}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={value}
                className={`h-full rounded-[5px] ${metric === "totalClones" ? "bg-cyan-400" : "bg-violet-400"}`}
                style={{ width: `${clamp(value / max) * 100}%` }}
              />
            </div>
          </div>
        );
      })}
      <p className="pt-1 font-mono text-[11px] leading-5 text-slate-400">
        0 — {number(max)} · {ariaLabel}
      </p>
    </div>
  );
}

const WIDTH = 920;
const HEIGHT = 290;
const LEFT = 68;
const RIGHT = 24;
const TOP = 22;
const BOTTOM = 45;
const INNER_W = WIDTH - LEFT - RIGHT;
const INNER_H = HEIGHT - TOP - BOTTOM;

function xAt(index: number, count: number) {
  return LEFT + (count <= 1 ? INNER_W / 2 : (index / (count - 1)) * INNER_W);
}
function yAt(value: number, max: number) {
  return TOP + INNER_H * (1 - clamp(value / Math.max(max, 1)));
}
function coords(data: IntervalDatum[], key: "clones" | "views", max: number) {
  return data.map((row, i) => `${xAt(i, data.length)},${yAt(row[key], max)}`).join(" ");
}

function Axis({
  max,
  data,
}: {
  max: number;
  data: IntervalDatum[];
}) {
  const step = Math.max(1, Math.ceil(data.length / 6));
  return (
    <g aria-hidden="true" fill="#a0afc5" fontFamily="monospace" fontSize="13">
      {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
        const y = yAt(max * fraction, max);
        return (
          <g key={fraction}>
            <line x1={LEFT} y1={y} x2={WIDTH - RIGHT} y2={y} stroke="#25334b" strokeDasharray="4 6" />
            <text x={LEFT - 10} y={y + 4} textAnchor="end">{number(Math.round(max * fraction))}</text>
          </g>
        );
      })}
      {data.map((row, i) => (i % step === 0 || i === data.length - 1) && (
        <text key={i} x={xAt(i, data.length)} y={HEIGHT - 13} textAnchor="middle">{row.period}</text>
      ))}
    </g>
  );
}

export function IntervalLines({
  data,
  cloneLabel,
  viewLabel,
}: {
  data: IntervalDatum[];
  cloneLabel: string;
  viewLabel: string;
}) {
  const max = Math.max(1, ...data.flatMap((row) => [row.clones, row.views]));
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-5 px-4 pt-4 font-mono text-xs text-slate-200">
        <span><span aria-hidden="true" className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />{cloneLabel}</span>
        <span><span aria-hidden="true" className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-slate-400" />{viewLabel}</span>
      </div>
      <div className="overflow-x-auto px-3 pb-4">
        <svg className="block h-auto min-w-[580px] w-full" width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`${cloneLabel} / ${viewLabel}: ${data.length} retained intervals, no daily interpolation`}>
          <title>{`${cloneLabel} / ${viewLabel} — retained reporting intervals`}</title>
          <Axis max={max} data={data} />
          <polyline fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" points={coords(data, "views", max)} />
          <polyline fill="none" stroke="#22d3ee" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" points={coords(data, "clones", max)} />
          {data.map((row, i) => (
            <g key={i}>
              <circle cx={xAt(i, data.length)} cy={yAt(row.clones, max)} r="4" fill="#22d3ee">
                <title>{`${row.period}: ${cloneLabel} ${number(row.clones)}`}</title>
              </circle>
              <circle cx={xAt(i, data.length)} cy={yAt(row.views, max)} r="3.5" fill="#94a3b8">
                <title>{`${row.period}: ${viewLabel} ${number(row.views)}`}</title>
              </circle>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function RatioLines({
  data,
  ariaLabel,
}: {
  data: IntervalDatum[];
  ariaLabel: string;
}) {
  const valid = data.map((row) => row.cloneViewRatio).filter((value): value is number => value !== null && Number.isFinite(value));
  const max = Math.max(1, ...valid);
  // Make separate segments so a zero-view interval is always a true gap.
  const segments: string[][] = [];
  let current: string[] = [];
  data.forEach((row, i) => {
    const value = row.cloneViewRatio;
    if (value === null || !Number.isFinite(value)) {
      if (current.length) segments.push(current);
      current = [];
      return;
    }
    current.push(`${xAt(i, data.length)},${yAt(value, max)}`);
  });
  if (current.length) segments.push(current);
  return (
    <div className="overflow-x-auto px-3 py-3">
      <svg className="block h-auto min-w-[580px] w-full" width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={ariaLabel}>
        <title>{`${ariaLabel} — zero views produce a gap, not an inferred ratio`}</title>
        <Axis max={max} data={data} />
        <line x1={LEFT} x2={WIDTH - RIGHT} y1={yAt(1, max)} y2={yAt(1, max)} stroke="#fb7185" strokeDasharray="6 7" />
        {segments.map((points, i) =>
          points.length > 1 ? <polyline key={i} points={points.join(" ")} fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" /> :
          <circle key={i} cx={Number(points[0].split(",")[0])} cy={Number(points[0].split(",")[1])} r="4" fill="#a78bfa" />
        )}
        {data.map((row, i) => row.cloneViewRatio === null ? null : (
          <circle key={i} cx={xAt(i, data.length)} cy={yAt(row.cloneViewRatio, max)} r="3.8" fill="#c4b5fd">
            <title>{`${row.period}: C/V ${row.cloneViewRatio.toFixed(2)} : 1`}</title>
          </circle>
        ))}
      </svg>
      <p className="mt-2 pl-3 font-mono text-[11px] leading-5 text-slate-400">C/V · 1:1 reference line · null when views = 0</p>
    </div>
  );
}
