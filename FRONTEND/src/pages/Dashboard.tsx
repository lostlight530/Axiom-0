import React, { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Activity,
  AlertTriangle,
  BookOpen,
  Calculator,
  CalendarDays,
  Clock3,
  Copy,
  Database,
  Eye,
  Globe,
  Scale,
  Users,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ReferenceLine,
} from "recharts";

const translations = {
  en: {
    trafficTab: "Historical traffic",
    methodTab: "Method & evidence",
    pageEyebrow: "GITHUB REPOSITORY TRAFFIC · FROZEN RECORD",
    pageTitle: "Five-repository historical traffic",
    pageDesc: "A retained record of repository clones, views and interval-level unique counts.",
    frozenStatus: "FROZEN THROUGH 31 AUG 2026",
    windowSummary: "12 Feb — 31 Aug 2026 · 200 elapsed days · 201 inclusive calendar days",
    trafficIntro: "Five repositories · retained reporting intervals · no post-freeze updates.",
    snapshotScope: "FIXED HISTORICAL OBSERVATION · NOT LIVE",
    scopeTitle: "One bounded observation window",
    scopeBody: "Five separately retained repository series, ending on 31 Aug 2026. Each repository starts at its first available retained interval.",
    metricBoundary: "Repository views are not Pages visits. Summed interval-level unique counts are not globally distinct visitors.",
    methodToggle: "How the historical counts were normalized",
    chartCompareNote: "Clones and views have separate quantitative axes. Both panels retain the same repository order; totals reflect unequal retained coverage.",
    clonePanelTitle: "Repository clones",
    viewPanelTitle: "Repository views (not Pages)",
    methodSourcesTitle: "Inspect the method and underlying source",
    methodSourceLink: "Source definitions",
    reproducibilityLink: "Reproducibility record",
    dedupLogicTitle: "Interval normalization",
    dedupLogicDesc: "Sum each reporting interval (up to two weeks) per repository before rounding: floor counts ≥ 10 to tens and preserve single digits. Do not round daily values or the five-repository aggregate. Historical rows through 08/21 are unchanged.",
    finalInterval: "Final retained interval: 08/22–08/31. The same rounding rule applies to clones, unique counts and views.",
    exampleTitle: "Rounding example",
    exampleDesc: "13 → 10 · 19 → 10 · 27 → 20",
    allRepositories: "All repositories",
    repoZero: "Zero Entropy Lab",
    repoWelcome: "Welcome to GitHub",
    repoAxiom: "Axiom-0",
    repoReflective: "Reflective Continuum",
    repoAgent: "Agent Foundations",
    clones: "Clones",
    clonesSubtitle: "Normalized repository clone count",
    views: "Repository views",
    viewsSubtitle: "GitHub repository views, not Pages visits",
    uniqueCounts: "Accumulated unique-count sum",
    uniqueCountsSubtitle: "Interval-level counts summed; not globally distinct people",
    ratio: "Clones / views",
    ratioSubtitle: "Combined clones ÷ combined repository views",
    finalUniqueLabel: "Final interval unique-count sum",
    finalUniqueNote: "Included above; cross-day and cross-repository overlap is retained.",
    comparisonTitle: "Five-repository comparison",
    comparisonSubtitle: "Accumulated retained counts by repository; totals are not daily rates.",
    intervalTitle: "Retained interval history",
    intervalSubtitle: "Each point represents a reporting interval; 08/31 covers 08/22–08/31.",
    ratioTitle: "Clone-to-view ratio by interval",
    ratioChartSubtitle: "Descriptive ratio only; zero-view intervals have no finite value.",
    methodTitle: "Statistical method & evidence limits",
    methodIntro: "Definitions, aggregation rules and evidence boundaries for interpreting this frozen display.",
    windowHeading: "Observation window",
    windowText: "The shared project observation window is 2026-02-12 through 2026-08-31: 200 elapsed days and 201 inclusive calendar days. Each repository begins at its first retained snapshot; missing earlier periods are not zero.",
    intervalHeading: "Reporting intervals & timestamps",
    intervalText: "Dates are UTC. Chart labels show interval end dates, not single-day totals. Reporting intervals vary in length and are up to two weeks; the final 08/31 point covers 08/22–08/31.",
    normalizationHeading: "Normalization & rounding",
    normalizationText: "For each repository, sum the reporting interval first, then floor counts ≥ 10 to the nearest lower ten while preserving single-digit counts. Apply the same rule to clones, unique counts and views. Do not round daily values or the combined five-repository totals. Historical rows through 08/21 remain unchanged.",
    aggregationHeading: "Aggregation & derived metrics",
    aggregationText: "The accumulated unique-count sum adds interval-level unique counts; it is not a globally deduplicated count of distinct people. The final interval contributes its normalized interval sum. C/V is combined clones divided by combined repository views, not an average of repository ratios. When views = 0, C/V is undefined.",
    snapshotHeading: "Snapshot status",
    snapshotText: "This page presents the final retained traffic snapshot through 2026-08-31. It does not poll GitHub or append later traffic. Earlier operational snapshots are not included in this final display.",
    evidenceHeading: "Evidence limits",
    evidenceText: "Repository clones and repository views are separate GitHub traffic metrics. Repository views are not GitHub Pages visits. Neither metric nor their ratio identifies humans, bots, downstream use, intent, adoption or the cause of traffic changes. A high C/V ratio is not evidence of protocol validation, entropy change or causal impact.",
  },
  zh: {
    trafficTab: "五仓历史流量",
    methodTab: "统计方法与证据限制",
    pageEyebrow: "GITHUB REPOSITORY TRAFFIC · FROZEN RECORD",
    pageTitle: "五仓历史流量",
    pageDesc: "五个 GitHub 仓库的 clones、views 与区间 unique 计数留存记录",
    frozenStatus: "封存至 2026-08-31",
    windowSummary: "2026-02-12 — 2026-08-31 · 经过 200 天 · 首尾均计 201 个自然日",
    trafficIntro: "五个仓库 · 留存统计区间 · 封存后不再追加数据",
    snapshotScope: "固定历史观察 · 非实时数据",
    scopeTitle: "有明确边界的观察窗口",
    scopeBody: "五仓分别保留的区间序列，截至 2026-08-31。每仓从首个可用的留存区间开始，不把缺失区间当成零",
    metricBoundary: "Repository views 不是 Pages 浏览量，区间 unique 累加不是全局去重人数",
    methodToggle: "查看历史数据的归一化与取整方法",
    chartCompareNote: "Clones 和 Views 分别使用独立的数值轴，两图仓库顺序相同，累计区间覆盖长度可能不同",
    clonePanelTitle: "各仓 Clones 克隆次数",
    viewPanelTitle: "各仓 Repository Views",
    methodSourcesTitle: "查看方法与来源依据",
    methodSourceLink: "原始定义与数据",
    reproducibilityLink: "可复核性说明",
    dedupLogicTitle: "区间归一化与取整规则",
    dedupLogicDesc: "各仓先汇总不超过两周的统计区间，再将 ≥10 的计数向下取整到十位，个位数保留；不逐日取整，也不对五仓合计再取整；截至 08/21 的历史记录保持不变",
    finalInterval: "最后一个留存区间：08/22–08/31；clones、unique 计数和 views 使用同一规则",
    exampleTitle: "取整示例",
    exampleDesc: "13 → 10 · 19 → 10 · 27 → 20",
    allRepositories: "全部仓库",
    repoZero: "Zero Entropy Lab",
    repoWelcome: "Welcome to GitHub",
    repoAxiom: "Axiom-0",
    repoReflective: "Reflective Continuum",
    repoAgent: "Agent Foundations",
    clones: "Clones 克隆次数",
    clonesSubtitle: "仓库克隆计数，经区间归一化",
    views: "Repository views 仓库浏览量",
    viewsSubtitle: "GitHub 仓库浏览量，不是 Pages 访问量",
    uniqueCounts: "累计 unique 计数",
    uniqueCountsSubtitle: "各区间 unique 计数之和，不是全局独立人数",
    ratio: "Clones / Views",
    ratioSubtitle: "五仓 clones 合计 ÷ 五仓 repository views 合计",
    finalUniqueLabel: "末段区间 unique 计数合计",
    finalUniqueNote: "已计入上方累计值；跨日、跨仓重叠保留",
    comparisonTitle: "五仓对比",
    comparisonSubtitle: "按仓库汇总的留存计数，不代表每日速率",
    intervalTitle: "单仓区间记录",
    intervalSubtitle: "每个点代表一个统计区间；08/31 对应 08/22–08/31",
    ratioTitle: "各区间 Clones / Views 比值",
    ratioChartSubtitle: "仅为描述性比值；views 为零时不定义有限值",
    methodTitle: "统计方法与证据限制",
    methodIntro: "以下定义、聚合规则与证据边界用于解释本页封存数据",
    windowHeading: "观察时间窗口",
    windowText: "共同项目观察窗口为 2026-02-12 至 2026-08-31，经过 200 天，首尾均计 201 个自然日。各仓从首个留存快照开始统计；缺失的更早区间不视为零",
    intervalHeading: "统计区间与时间戳",
    intervalText: "日期使用 UTC。图表标签表示统计区间结束日期，不是单日总量。统计区间长度不固定，最长不超过两周；最后一个 08/31 数据点覆盖 08/22–08/31",
    normalizationHeading: "归一化与取整",
    normalizationText: "每个仓库先汇总统计区间，再将 ≥10 的计数向下取整到十位，个位数保留。clones、unique 计数和 views 使用相同规则。不逐日取整，也不对五仓合计再次取整；截至 08/21 的历史记录保持不变",
    aggregationHeading: "聚合指标与派生比值",
    aggregationText: "累计 unique 计数是各统计区间 unique 计数的累加，不是跨区间全局去重后的独立人数；最后一个区间贡献其归一化计数。C/V 为五仓 clones 合计除以五仓 repository views 合计，不是各仓比值的平均。views = 0 时，C/V 未定义",
    snapshotHeading: "快照状态",
    snapshotText: "本页展示截至 2026-08-31 的最终留存流量快照，不轮询 GitHub，也不追加此后的流量。更早的运行快照不属于本页最终展示",
    evidenceHeading: "证据限制",
    evidenceText: "Repository clones 与 repository views 是两种不同的 GitHub 流量指标。Repository views 不等于 GitHub Pages 访问量。两者及其比值均不能识别访问者是人还是 Bot，不能证明下游使用、访问意图、采用情况或流量变化原因。较高的 C/V 不能证明协议验证、熵变化或因果影响",
  },
};

interface TrafficData {
  repo: string;
  period: string;
  clones: number;
  uniqueCloners: number | null;
  views: number;
  uniqueVisitors: number | null;
  dailyUniqueCloners?: number;
}

interface ProcessedData extends TrafficData {
  cloneViewRatio: number | null;
}

const rawData: TrafficData[] = [
  // welcome-to-github
  { repo: "welcome-to-github", period: "02/24", clones: 1470, uniqueCloners: 530, views: 2100, uniqueVisitors: 30 },
  { repo: "welcome-to-github", period: "03/07", clones: 1540, uniqueCloners: 370, views: 2050, uniqueVisitors: 20 },
  { repo: "welcome-to-github", period: "03/21", clones: 1500, uniqueCloners: 350, views: 1500, uniqueVisitors: 60 },
  { repo: "welcome-to-github", period: "04/02", clones: 910, uniqueCloners: 290, views: 800, uniqueVisitors: 110 },
  { repo: "welcome-to-github", period: "04/18", clones: 1050, uniqueCloners: 300, views: 960, uniqueVisitors: 70 },
  { repo: "welcome-to-github", period: "04/29", clones: 1900, uniqueCloners: 610, views: 620, uniqueVisitors: 20 },
  { repo: "welcome-to-github", period: "05/14", clones: 1630, uniqueCloners: 350, views: 80, uniqueVisitors: 20 },
  { repo: "welcome-to-github", period: "05/28", clones: 2010, uniqueCloners: 60, views: 10, uniqueVisitors: 6 },
  { repo: "welcome-to-github", period: "06/12", clones: 2440, uniqueCloners: 550, views: 70, uniqueVisitors: 10 },
  { repo: "welcome-to-github", period: "06/26", clones: 3340, uniqueCloners: 660, views: 30, uniqueVisitors: 20 },
  { repo: "welcome-to-github", period: "07/10", clones: 1840, uniqueCloners: 360, views: 10, uniqueVisitors: 8 },
  { repo: "welcome-to-github", period: "07/24", clones: 1200, uniqueCloners: 170, views: 90, uniqueVisitors: 30 },
  { repo: "welcome-to-github", period: "08/07", clones: 1120, uniqueCloners: 300, views: 10, uniqueVisitors: 10 },
  { repo: "welcome-to-github", period: "08/21", clones: 1470, uniqueCloners: 470, views: 10, uniqueVisitors: 10 },

  // zero-entropy-lab
  { repo: "zero-entropy-lab", period: "03/21", clones: 760, uniqueCloners: 270, views: 520, uniqueVisitors: 20 },
  { repo: "zero-entropy-lab", period: "04/02", clones: 720, uniqueCloners: 300, views: 690, uniqueVisitors: 80 },
  { repo: "zero-entropy-lab", period: "04/12", clones: 580, uniqueCloners: 230, views: 870, uniqueVisitors: 100 },
  { repo: "zero-entropy-lab", period: "04/29", clones: 1010, uniqueCloners: 350, views: 540, uniqueVisitors: 20 },
  { repo: "zero-entropy-lab", period: "05/14", clones: 1200, uniqueCloners: 300, views: 30, uniqueVisitors: 20 },
  { repo: "zero-entropy-lab", period: "05/28", clones: 950, uniqueCloners: 300, views: 10, uniqueVisitors: 10 },
  { repo: "zero-entropy-lab", period: "06/12", clones: 1400, uniqueCloners: 310, views: 20, uniqueVisitors: 7 },
  { repo: "zero-entropy-lab", period: "06/26", clones: 1720, uniqueCloners: 390, views: 30, uniqueVisitors: 10 },
  { repo: "zero-entropy-lab", period: "07/10", clones: 1230, uniqueCloners: 230, views: 10, uniqueVisitors: 4 },
  { repo: "zero-entropy-lab", period: "07/24", clones: 960, uniqueCloners: 140, views: 40, uniqueVisitors: 10 },
  { repo: "zero-entropy-lab", period: "08/07", clones: 1060, uniqueCloners: 250, views: 10, uniqueVisitors: 10 },
  { repo: "zero-entropy-lab", period: "08/21", clones: 820, uniqueCloners: 190, views: 10, uniqueVisitors: 10 },

  // Axiom-0
  { repo: "Axiom-0", period: "04/29", clones: 370, uniqueCloners: 170, views: 100, uniqueVisitors: 10 },
  { repo: "Axiom-0", period: "05/14", clones: 900, uniqueCloners: 320, views: 40, uniqueVisitors: 30 },
  { repo: "Axiom-0", period: "05/28", clones: 590, uniqueCloners: 40, views: 10, uniqueVisitors: 6 },
  { repo: "Axiom-0", period: "06/12", clones: 540, uniqueCloners: 210, views: 7, uniqueVisitors: 7 },
  { repo: "Axiom-0", period: "06/26", clones: 700, uniqueCloners: 230, views: 20, uniqueVisitors: 20 },
  { repo: "Axiom-0", period: "07/10", clones: 590, uniqueCloners: 180, views: 8, uniqueVisitors: 6 },
  { repo: "Axiom-0", period: "07/24", clones: 360, uniqueCloners: 110, views: 20, uniqueVisitors: 10 },
  { repo: "Axiom-0", period: "08/07", clones: 560, uniqueCloners: 220, views: 20, uniqueVisitors: 10 },
  { repo: "Axiom-0", period: "08/21", clones: 710, uniqueCloners: 200, views: 10, uniqueVisitors: 10 },

  // reflective-continuum
  { repo: "reflective-continuum", period: "05/28", clones: 450, uniqueCloners: 40, views: 7, uniqueVisitors: 5 },
  { repo: "reflective-continuum", period: "06/12", clones: 700, uniqueCloners: 270, views: 5, uniqueVisitors: 4 },
  { repo: "reflective-continuum", period: "06/26", clones: 1070, uniqueCloners: 290, views: 10, uniqueVisitors: 10 },
  { repo: "reflective-continuum", period: "07/10", clones: 800, uniqueCloners: 270, views: 8, uniqueVisitors: 5 },
  { repo: "reflective-continuum", period: "07/24", clones: 480, uniqueCloners: 170, views: 10, uniqueVisitors: 10 },
  { repo: "reflective-continuum", period: "08/07", clones: 590, uniqueCloners: 300, views: 10, uniqueVisitors: 10 },
  { repo: "reflective-continuum", period: "08/21", clones: 640, uniqueCloners: 200, views: 8, uniqueVisitors: 8 },

  // agent-foundations
  { repo: "agent-foundations", period: "05/28", clones: 80, uniqueCloners: 30, views: 1, uniqueVisitors: 1 },
  { repo: "agent-foundations", period: "06/12", clones: 280, uniqueCloners: 150, views: 4, uniqueVisitors: 4 },
  { repo: "agent-foundations", period: "06/26", clones: 350, uniqueCloners: 170, views: 7, uniqueVisitors: 7 },
  { repo: "agent-foundations", period: "07/10", clones: 450, uniqueCloners: 190, views: 6, uniqueVisitors: 3 },
  { repo: "agent-foundations", period: "07/24", clones: 210, uniqueCloners: 100, views: 10, uniqueVisitors: 10 },
  { repo: "agent-foundations", period: "08/07", clones: 360, uniqueCloners: 230, views: 10, uniqueVisitors: 10 },
  { repo: "agent-foundations", period: "08/21", clones: 270, uniqueCloners: 120, views: 10, uniqueVisitors: 10 },

  // Final non-overlapping interval: 2026-08-22 through 2026-08-31, within two weeks.
  // Sum per repository before flooring; daily uniques are not interval uniques.
  { repo: "welcome-to-github", period: "08/31", clones: 730, uniqueCloners: null, views: 3, uniqueVisitors: null, dailyUniqueCloners: 170 },
  { repo: "zero-entropy-lab", period: "08/31", clones: 610, uniqueCloners: null, views: 0, uniqueVisitors: null, dailyUniqueCloners: 160 },
  { repo: "Axiom-0", period: "08/31", clones: 620, uniqueCloners: null, views: 5, uniqueVisitors: null, dailyUniqueCloners: 210 },
  { repo: "reflective-continuum", period: "08/31", clones: 590, uniqueCloners: null, views: 2, uniqueVisitors: null, dailyUniqueCloners: 240 },
  { repo: "agent-foundations", period: "08/31", clones: 320, uniqueCloners: null, views: 10, uniqueVisitors: null, dailyUniqueCloners: 190 },
];

const data: ProcessedData[] = rawData.map((d) => ({
  ...d,
  cloneViewRatio: d.views === 0 ? null : Number((d.clones / d.views).toFixed(2)),
}));

const formatNumber = (value: number | null | undefined): string => {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat("en-US").format(value);
};

interface ChartTooltipEntry {
  color?: string;
  name?: string;
  value?: number | null;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: ChartTooltipEntry[];
  label?: string;
}

const CustomChartTooltip: React.FC<ChartTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/95 p-4 font-mono text-cyan-50 shadow-xl backdrop-blur-md">
      <p className="mb-2 border-b border-slate-800 pb-2 text-sm font-bold text-slate-300">
        {label}
      </p>
      {payload.map((entry, index: number) => (
        <p key={index} className="flex items-center justify-between gap-4 py-1 text-xs">
          <span className="flex items-center gap-2 text-slate-400">
            <span
              className="inline-block h-2 w-2 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}
          </span>
          <span className="font-bold tracking-wider text-white">
            {formatNumber(entry.value as number)}
          </span>
        </p>
      ))}
    </div>
  );
};

const MetricCard: React.FC<{
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
}> = React.memo(({ title, value, subtitle, icon: Icon }) => (
  <Card className="metric-card group rounded-2xl border-slate-800 bg-slate-950/55 shadow-none backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-slate-900/80">
    <CardContent className="p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400">{title}</p>
          <p className="font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">{value}</p>
          <p className="font-mono text-[11px] leading-relaxed text-slate-500">{subtitle}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
          <Icon className="h-5 w-5 text-cyan-500" aria-hidden="true" />
        </div>
      </div>
    </CardContent>
  </Card>
));

const MethodCard: React.FC<{
  index: string;
  title: string;
  text: string;
  icon: React.ElementType;
  className?: string;
}> = ({ index, title, text, icon: Icon, className = "" }) => (
  <Card className={`method-card rounded-2xl border-slate-800 bg-slate-900/45 ${className}`}>
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-cyan-500">{index}</span>
        <Icon className="h-4 w-4 text-slate-500" aria-hidden="true" />
        <CardTitle className="text-sm font-semibold text-slate-100">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm leading-7 text-slate-400">{text}</p>
    </CardContent>
  </Card>
);

export default function HistoricalTrafficPage() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const t = translations[lang];
  const [repo, setRepo] = useState<string>("all");
  const [mainTab, setMainTab] = useState<string>("traffic");
  const isAllView = repo === "all";

  const filteredData = useMemo(
    () => (isAllView ? data : data.filter((d) => d.repo === repo)),
    [repo, isAllView],
  );

  const unifiedRepoData = useMemo(() => {
    const labels: Record<string, string> = {
      "welcome-to-github": t.repoWelcome,
      "zero-entropy-lab": t.repoZero,
      "Axiom-0": t.repoAxiom,
      "reflective-continuum": t.repoReflective,
      "agent-foundations": t.repoAgent,
    };
    const totals: Record<string, { name: string; totalClones: number; totalViews: number }> = {};
    Object.entries(labels).forEach(([key, name]) => {
      totals[key] = { name, totalClones: 0, totalViews: 0 };
    });
    data.forEach((d) => {
      if (totals[d.repo]) {
        totals[d.repo].totalClones += d.clones;
        totals[d.repo].totalViews += d.views;
      }
    });
    return Object.values(totals).sort((a, b) => b.totalClones - a.totalClones);
  }, [t]);

  const totals = useMemo(() => {
    const clones = filteredData.reduce((sum, d) => sum + d.clones, 0);
    const views = filteredData.reduce((sum, d) => sum + d.views, 0);
    const uniqueCounts = filteredData.reduce(
      (sum, d) => sum + (d.uniqueCloners ?? d.dailyUniqueCloners ?? 0),
      0,
    );
    const finalIntervalUniqueCounts = filteredData.reduce(
      (sum, d) => sum + (d.dailyUniqueCloners ?? 0),
      0,
    );
    const ratio = views ? `${(clones / views).toFixed(2)} : 1` : "—";
    return { clones, views, uniqueCounts, finalIntervalUniqueCounts, ratio };
  }, [filteredData]);

  const repositoryOptions = [
    { value: "all", label: t.allRepositories },
    { value: "zero-entropy-lab", label: t.repoZero },
    { value: "welcome-to-github", label: t.repoWelcome },
    { value: "Axiom-0", label: t.repoAxiom },
    { value: "reflective-continuum", label: t.repoReflective },
    { value: "agent-foundations", label: t.repoAgent },
  ];

  return (
    <div className="traffic-shell min-h-screen bg-slate-950 p-4 font-sans text-slate-300 selection:bg-cyan-900 selection:text-cyan-50 md:p-8">
      <div className="mx-auto max-w-[1400px]">
        <header className="traffic-header mb-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
              {t.pageEyebrow}
            </p>
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              aria-label={lang === "en" ? "Switch language to Chinese" : "Switch language to English"}
              className="language-toggle inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-500/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />{lang === "en" ? "中文" : "English"}
            </button>
          </div>
          <div className="mt-6 grid items-start gap-7 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.75fr)] lg:gap-10">
            <div className="min-w-0 space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.05em] text-white sm:text-5xl xl:text-[3.4rem]">
                {t.pageTitle}
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{t.pageDesc}</p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="rounded-lg border border-cyan-500/35 bg-cyan-500/10 px-3 py-2 font-mono text-[11px] font-semibold tracking-wide text-cyan-200">
                  {t.frozenStatus}
                </span>
                <span className="font-mono text-[11px] leading-6 text-slate-400">{t.windowSummary}</span>
              </div>
            </div>
            <aside className="scope-panel" aria-label={t.scopeTitle}>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                {t.snapshotScope}
              </p>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-white">{t.scopeTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{t.scopeBody}</p>
              <div className="mt-5 border-t border-slate-700/70 pt-4 font-mono text-[11px] text-slate-400">
                2026-02-12 <span aria-hidden="true" className="px-2 text-cyan-400">→</span> 2026-08-31
              </div>
            </aside>
          </div>
          <div className="traffic-mode-nav mt-7 border-t border-slate-700/60 pt-5">
            <Tabs value={mainTab} onValueChange={setMainTab}>
              <TabsList role="tablist" aria-label="Traffic and methodology sections" className="grid h-auto w-full max-w-[680px] grid-cols-2 rounded-xl border border-slate-700/75 bg-slate-950/70 p-1 font-mono text-xs">
                <TabsTrigger value="traffic" className="min-h-11 min-w-0 rounded-lg px-2 py-2 text-xs data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-300 sm:px-4">
                  <Activity className="mr-2 inline-block h-4 w-4 shrink-0" aria-hidden="true" />{t.trafficTab}
                </TabsTrigger>
                <TabsTrigger value="method" className="min-h-11 min-w-0 rounded-lg px-2 py-2 text-xs data-[state=active]:bg-slate-800 data-[state=active]:text-purple-300 sm:px-4">
                  <BookOpen className="mr-2 inline-block h-4 w-4 shrink-0" aria-hidden="true" />{t.methodTab}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </header>

        {mainTab === "traffic" && (
          <section aria-label={t.trafficTab} className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  01 / TRAFFIC RECORD
                </p>
                <p className="text-sm text-slate-400">{t.trafficIntro}</p>
              </div>
            </div>

            <div className="repo-switcher" role="region" aria-label={t.allRepositories}>
              <Tabs value={repo} onValueChange={setRepo} className="w-max min-w-full">
                <TabsList role="tablist" aria-label={t.allRepositories} className="flex h-auto min-w-max items-center justify-start gap-1.5 rounded-xl border border-slate-700/70 bg-slate-900/75 p-1.5">
                  {repositoryOptions.map((option) => (
                    <TabsTrigger
                      key={option.value}
                      value={option.value}
                      className="min-h-10 shrink-0 rounded-lg px-3 py-2 text-xs font-medium data-[state=active]:bg-cyan-500/15 data-[state=active]:text-cyan-200 data-[state=active]:shadow-sm sm:px-4"
                    >
                      {option.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>



            <div className="evidence-ribbon flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-950/15 px-4 py-3 text-xs leading-6 text-slate-300">
              <Database className="mt-1 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
              <p>{t.metricBoundary}</p>
            </div>
            <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Historical traffic metrics">
              <MetricCard title={t.clones} value={formatNumber(totals.clones)} subtitle={t.clonesSubtitle} icon={Copy} />
              <MetricCard title={t.views} value={formatNumber(totals.views)} subtitle={t.viewsSubtitle} icon={Eye} />
              <MetricCard title={t.uniqueCounts} value={formatNumber(totals.uniqueCounts)} subtitle={t.uniqueCountsSubtitle} icon={Users} />
              <MetricCard title={t.ratio} value={totals.ratio} subtitle={t.ratioSubtitle} icon={Scale} />
            </section>

            <div className="flex flex-col gap-1 border-l-2 border-cyan-500/40 pl-4 text-xs leading-6 text-slate-400 sm:flex-row sm:items-center sm:gap-2">
              <span className="font-mono text-slate-300">{t.finalUniqueLabel}:</span>
              <strong className="font-mono text-cyan-300">{formatNumber(totals.finalIntervalUniqueCounts)}</strong>
              <span>{t.finalUniqueNote}</span>
            </div>
            <details className="method-disclosure group mt-1 rounded-xl border border-slate-700/70 bg-slate-900/45">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-slate-200 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                <span className="inline-flex items-center gap-2"><Calculator className="h-4 w-4 text-cyan-400" aria-hidden="true" />{t.methodToggle}</span>
                <span aria-hidden="true" className="disclosure-chevron text-cyan-400">⌄</span>
              </summary>
              <div className="border-t border-slate-800/70 p-3 md:p-4">
                <Alert className="border-slate-800 bg-slate-900/65 text-slate-200">
                  <Calculator className="h-4 w-4 text-cyan-400" />
                  <AlertTitle className="font-mono text-sm text-slate-100">{t.dedupLogicTitle}</AlertTitle>
                  <AlertDescription className="mt-2 space-y-2 text-sm leading-6 text-slate-400">
                    <p>{t.dedupLogicDesc}</p>
                    <p className="font-medium text-slate-200">
                      {t.exampleTitle}{lang === "en" ? ": " : "："}{t.exampleDesc}
                    </p>
                    <p>{t.finalInterval}</p>
                  </AlertDescription>
                </Alert>
              </div>
            </details>

            <section aria-label={isAllView ? t.comparisonTitle : t.intervalTitle} className="space-y-4">
              <div className="space-y-1">
                <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
                  <Activity className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  {isAllView ? t.comparisonTitle : t.intervalTitle}
                </h2>
                <p className="text-xs leading-6 text-slate-400">{isAllView ? t.comparisonSubtitle : t.intervalSubtitle}</p>
              </div>
              {isAllView ? (
                <>
                  <div className="grid gap-4 xl:grid-cols-2">
                  <Card className="chart-surface comparison-card overflow-hidden rounded-2xl border-slate-700/60 bg-slate-900/55 shadow-none">
                    <CardHeader className="border-b border-slate-800/75 px-4 pb-3 pt-5 md:px-6">
                      <CardTitle className="flex items-center gap-2 font-mono text-sm text-white">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: "#0ea5e9" }} aria-hidden="true" />
                        {t.clonePanelTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[350px] px-2 pb-4 pt-4 sm:px-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={unifiedRepoData} layout="vertical" margin={{ top: 4, right: 18, left: 0, bottom: 2 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#1e293b" />
                          <XAxis type="number" domain={[0, "auto"]} tick={{ fill: "#91a7bb", fontFamily: "monospace", fontSize: 11 }} axisLine={{ stroke: "#334155" }} tickLine={false} />
                          <YAxis dataKey="name" type="category" tick={{ fill: "#c4d1df", fontFamily: "monospace", fontSize: 10.5 }} width={144} axisLine={false} tickLine={false} />
                          <Tooltip content={<CustomChartTooltip />} cursor={{ fill: "rgba(30, 41, 59, 0.38)" }} />
                          <Bar dataKey="totalClones" name={t.clones} fill="#0ea5e9" radius={[0, 5, 5, 0]} barSize={21} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card className="chart-surface comparison-card overflow-hidden rounded-2xl border-slate-700/60 bg-slate-900/55 shadow-none">
                    <CardHeader className="border-b border-slate-800/75 px-4 pb-3 pt-5 md:px-6">
                      <CardTitle className="flex items-center gap-2 font-mono text-sm text-white">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: "#a78bfa" }} aria-hidden="true" />
                        {t.viewPanelTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[350px] px-2 pb-4 pt-4 sm:px-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={unifiedRepoData} layout="vertical" margin={{ top: 4, right: 18, left: 0, bottom: 2 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#1e293b" />
                          <XAxis type="number" domain={[0, "auto"]} tick={{ fill: "#91a7bb", fontFamily: "monospace", fontSize: 11 }} axisLine={{ stroke: "#334155" }} tickLine={false} />
                          <YAxis dataKey="name" type="category" tick={{ fill: "#c4d1df", fontFamily: "monospace", fontSize: 10.5 }} width={144} axisLine={false} tickLine={false} />
                          <Tooltip content={<CustomChartTooltip />} cursor={{ fill: "rgba(30, 41, 59, 0.38)" }} />
                          <Bar dataKey="totalViews" name={t.views} fill="#a78bfa" radius={[0, 5, 5, 0]} barSize={21} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  </div>
                  <p className="comparison-note text-xs leading-6 text-slate-400">{t.chartCompareNote}</p>
                </>
              ) : (
                <Card className="chart-surface overflow-hidden rounded-2xl border-slate-700/60 bg-slate-900/55 shadow-none">
                  <CardHeader className="border-b border-slate-800/75 p-5">
                    <CardTitle className="font-mono text-sm text-white">{t.intervalTitle}</CardTitle>
                    <CardDescription className="font-mono text-xs leading-6 text-slate-400">{t.intervalSubtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[360px] p-3 sm:h-[390px] sm:p-5">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={filteredData} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="cloneArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="viewArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#64748b" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="period" tick={{ fill: "#64748b", fontFamily: "monospace", fontSize: 11 }} axisLine={{ stroke: "#334155" }} tickLine={false} />
                        <YAxis tick={{ fill: "#64748b", fontFamily: "monospace", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                        <Tooltip content={<CustomChartTooltip />} />
                        <Legend iconType="circle" wrapperStyle={{ fontFamily: "monospace", fontSize: 11 }} />
                        <Area type="monotone" dataKey="views" name={t.views} stroke="#64748b" fillOpacity={1} fill="url(#viewArea)" strokeWidth={2} />
                        <Area type="monotone" dataKey="clones" name={t.clones} stroke="#0ea5e9" fillOpacity={1} fill="url(#cloneArea)" strokeWidth={3} activeDot={{ r: 6, fill: "#0ea5e9", stroke: "#0f172a", strokeWidth: 2 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              )}
            </section>

            {!isAllView && (
              <section aria-label={t.ratioTitle}>
                <Card className="chart-surface rounded-2xl border-slate-800 bg-slate-900/55 shadow-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-mono text-sm text-slate-200">{t.ratioTitle}</CardTitle>
                    <CardDescription className="font-mono text-xs text-slate-500">{t.ratioChartSubtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[250px] p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={filteredData} margin={{ top: 10, right: 16, left: -16, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#1e293b" />
                        <XAxis dataKey="period" tick={{ fill: "#64748b", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "#64748b", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomChartTooltip />} />
                        <ReferenceLine y={1} stroke="#ef4444" strokeDasharray="3 3" strokeWidth={1} label={{ value: "C = V (reference only)", position: "insideTopLeft", fill: "#ef4444", fontSize: 10, fontFamily: "monospace" }} />
                        <Line type="stepAfter" dataKey="cloneViewRatio" name="C/V" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4, fill: "#8b5cf6", strokeWidth: 0 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </section>
            )}
          </section>
        )}

        {mainTab === "method" && (
          <section aria-label={t.methodTab} className="space-y-6">
            <div className="max-w-3xl">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-purple-400">
                02 / METHOD & EVIDENCE
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{t.methodTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{t.methodIntro}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MethodCard index="01" title={t.windowHeading} text={t.windowText} icon={CalendarDays} />
              <MethodCard index="02" title={t.intervalHeading} text={t.intervalText} icon={Clock3} />
              <MethodCard index="03" title={t.normalizationHeading} text={t.normalizationText} icon={Calculator} />
              <MethodCard index="04" title={t.aggregationHeading} text={t.aggregationText} icon={Scale} />
              <MethodCard index="05" title={t.snapshotHeading} text={t.snapshotText} icon={Database} />
              <MethodCard index="06" title={t.evidenceHeading} text={t.evidenceText} icon={AlertTriangle} className="lg:col-span-2" />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-900/35 px-4 py-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">{t.methodSourcesTitle}</span>
              <a className="text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-100" href="https://github.com/lostlight530/Axiom-0/blob/main/FRONTEND/README.md" target="_blank" rel="noopener noreferrer">{t.methodSourceLink}</a>
              <a className="text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-100" href="https://github.com/lostlight530/Axiom-0/blob/main/REPRODUCIBILITY.md" target="_blank" rel="noopener noreferrer">{t.reproducibilityLink}</a>
            </div>
          </section>
        )}

        <footer className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-5 pb-3 font-mono text-[10px] tracking-wide text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>2026-02-12 → 2026-08-31</span>
          <span>HISTORICAL TRAFFIC RECORD · FROZEN</span>
        </footer>
      </div>
    </div>
  );
}
