import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Eye, Copy, Users, AlertTriangle, Scale, Activity, Globe, Server, BookOpen, Info } from "lucide-react";

const translations = {
  en: {
    trafficTab: "Traffic",
    operationsTab: "Operations",
    methodTab: "Method",
    dashboardTitle: "Analytics Dashboard",
    dashboardDesc: "Viewing telemetry and traffic metrics",
    overviewTab: "Overview",
    analyticsTab: "Analytics",
    dedupLogicTitle: "Strict Deduplication Logic Active",
    dedupLogicDesc: "Data ingested into this system is strictly deduplicated using a SHA-256 cryptographic payload fingerprinting mechanism. Duplicate payload hashes are rejected. Values >= 10 are floored to the nearest decile. Single-digit values are preserved unless explicitly normalized.",
    exampleTitle: "Example",
    exampleDesc: "Example: 13 → 10, 19 → 10, 27 → 20.",
    clones: "Total Clones",
    uniqueCloners: "Unique Cloners",
    views: "Total Views",
    uniqueVisitors: "Unique Visitors",
    opsWelcome: "welcome-to-github",
    opsZero: "zero-entropy-lab",
    opsMinutes: "total minutes",
    opsRuns: "job runs",
    opsAvgRun: "avg run",
    opsFailRate: "fail rate",
    opsCombined: "Combined · 两仓合计",
    opsNotMeasured: "Not measured in this snapshot",
    opsSource: "Source: GitHub Actions · Last year · 2026-02-12 → 2026-08-07",
    opsSnapshot: "Static snapshot as of 2026-08-07",
    methodTitle: "Data Methodology",
    methodLastYear: "GitHub 'Last year' is a rolling 12-month window, not aligned with project inception",
    methodWindow: "Effective observation window: 2026-02-12 → 2026-08-07 (177 days)",
    methodUTC: "All timestamps in UTC. GitHub Traffic API provides 14-day unique counts.",
    methodUsage: "Usage metrics: total minutes, job runs (from Actions). Performance metrics: avg run time, queue time, fail rate (from workflow logs).",
    methodSnapshot: "This is a static snapshot, not a live dashboard. Data is manually ingested and rendered.",
    methodDedup: "Traffic data is SHA-256 deduplicated. Values ≥ 10 floored to nearest decile. Cross-period unique cloner sums are not true long-term uniques.",
  },
  zh: {
    trafficTab: "流量",
    operationsTab: "运行",
    methodTab: "方法",
    dashboardTitle: "分析仪表盘",
    dashboardDesc: "查看遥测与流量指标",
    overviewTab: "概览",
    analyticsTab: "分析",
    dedupLogicTitle: "严格数据去重逻辑已启用",
    dedupLogicDesc: "本系统摄入的数据使用 SHA-256 密码学负载指纹机制进行严格去重。重复的负载哈希将被拒绝。大于等于10的值将向下取整到最接近的十位数。个位数值将予以保留，除非被显式要求规范化。",
    exampleTitle: "示例",
    exampleDesc: "例如: 13 → 10, 19 → 10, 27 → 20。",
    clones: "总克隆数",
    uniqueCloners: "唯一克隆者",
    views: "总浏览量",
    uniqueVisitors: "唯一访客",
    opsWelcome: "welcome-to-github",
    opsZero: "zero-entropy-lab",
    opsMinutes: "总分钟数",
    opsRuns: "任务运行次数",
    opsAvgRun: "平均运行",
    opsFailRate: "失败率",
    opsCombined: "Combined · 两仓合计",
    opsNotMeasured: "快照中未测量",
    opsSource: "数据源: GitHub Actions · Last year · 2026-02-12 → 2026-08-07",
    opsSnapshot: "2026-08-07 静态快照",
    methodTitle: "数据方法论",
    methodLastYear: "GitHub 'Last year' 是滚动 12 个月窗口，不等于项目实际运行期",
    methodWindow: "有效观测窗口: 2026-02-12 → 2026-08-07 (177天)",
    methodUTC: "所有时间戳使用 UTC。GitHub Traffic API 只提供最近 14 天的独立用户计数。",
    methodUsage: "用量指标: total minutes、job runs（源自 Actions）。性能指标: avg run time、queue time、fail rate（源自 workflow 日志）。",
    methodSnapshot: "这是静态快照，不是实时仪表盘。数据手动摄入并渲染。",
    methodDedup: "流量数据经 SHA-256 去重。≥10 的值向下 floor 到最近的十位数。跨周期 unique cloner 累加不代表真实的长期唯一用户总数。",
  }
};

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

interface TrafficData {
  repo: string;
  period: string;
  clones: number;
  uniqueCloners: number | null;
  views: number;
  uniqueVisitors: number;
}

interface ProcessedData extends TrafficData {
  cloneViewRatio: number;
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

  // Axiom-0
  { repo: "Axiom-0", period: "04/29", clones: 370, uniqueCloners: 170, views: 100, uniqueVisitors: 10 },
  { repo: "Axiom-0", period: "05/14", clones: 900, uniqueCloners: 320, views: 40, uniqueVisitors: 30 },
  { repo: "Axiom-0", period: "05/28", clones: 590, uniqueCloners: 40, views: 10, uniqueVisitors: 6 },
  { repo: "Axiom-0", period: "06/12", clones: 540, uniqueCloners: 210, views: 7, uniqueVisitors: 7 },
  { repo: "Axiom-0", period: "06/26", clones: 700, uniqueCloners: 230, views: 20, uniqueVisitors: 20 },
  { repo: "Axiom-0", period: "07/10", clones: 590, uniqueCloners: 180, views: 8, uniqueVisitors: 6 },
  { repo: "Axiom-0", period: "07/24", clones: 360, uniqueCloners: 110, views: 20, uniqueVisitors: 10 },
  { repo: "Axiom-0", period: "08/07", clones: 560, uniqueCloners: 220, views: 20, uniqueVisitors: 10 },

  // reflective-continuum
  { repo: "reflective-continuum", period: "05/28", clones: 450, uniqueCloners: 40, views: 7, uniqueVisitors: 5 },
  { repo: "reflective-continuum", period: "06/12", clones: 700, uniqueCloners: 270, views: 5, uniqueVisitors: 4 },
  { repo: "reflective-continuum", period: "06/26", clones: 1070, uniqueCloners: 290, views: 10, uniqueVisitors: 10 },
  { repo: "reflective-continuum", period: "07/10", clones: 800, uniqueCloners: 270, views: 8, uniqueVisitors: 5 },
  { repo: "reflective-continuum", period: "07/24", clones: 480, uniqueCloners: 170, views: 10, uniqueVisitors: 10 },
  { repo: "reflective-continuum", period: "08/07", clones: 590, uniqueCloners: 300, views: 10, uniqueVisitors: 10 },

  // agent-foundations
  { repo: "agent-foundations", period: "05/28", clones: 80, uniqueCloners: 30, views: 1, uniqueVisitors: 1 },
  { repo: "agent-foundations", period: "06/12", clones: 280, uniqueCloners: 150, views: 4, uniqueVisitors: 4 },
  { repo: "agent-foundations", period: "06/26", clones: 350, uniqueCloners: 170, views: 7, uniqueVisitors: 7 },
  { repo: "agent-foundations", period: "07/10", clones: 450, uniqueCloners: 190, views: 6, uniqueVisitors: 3 },
  { repo: "agent-foundations", period: "07/24", clones: 210, uniqueCloners: 100, views: 10, uniqueVisitors: 10 },
  { repo: "agent-foundations", period: "08/07", clones: 360, uniqueCloners: 230, views: 10, uniqueVisitors: 10 },
];

const data: ProcessedData[] = rawData.map((d) => ({
  ...d,
  cloneViewRatio: Number((d.clones / d.views).toFixed(2)),
}));

const formatNumber = (value: number | null | undefined): string => {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat("en-US").format(value);
};

// Axiom-0 themed custom tooltip

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomChartTooltip: React.FC<any> = ({ active, payload, label }: { active?: boolean, payload?: any[], label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-950/95 text-cyan-50 p-4 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] border border-slate-800 backdrop-blur-md z-50 font-mono">
        <p className="font-bold text-sm border-b border-slate-800 pb-2 mb-2 text-slate-300">
          [SYS.TICK] {label}
        </p>
        {payload?.map((entry, index: number) => (
          <p key={index} className="text-xs flex items-center justify-between gap-4 py-1">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-sm" style={{ backgroundColor: entry.color, boxShadow: `0 0 8px ${entry.color}` }} />
              <span className="text-slate-400">{entry.name}:</span>
            </span>
            <span className="font-bold text-white tracking-wider">
              {formatNumber(entry.value as number)}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const MetricCard: React.FC<{ title: string; value: string; subtitle: string; icon: React.ElementType }> = React.memo(({ title, value, subtitle, icon: Icon }) => (
  <Card className="rounded-2xl shadow-none border-slate-800 bg-slate-950/50 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-slate-900/80 group">
    <CardContent className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase">{title}</p>
          <p className="text-4xl font-bold tracking-tighter text-white font-mono group-hover:text-cyan-400 transition-colors">
            {value}
          </p>
          <p className="text-[11px] text-slate-500 font-mono">{subtitle}</p>
        </div>
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 group-hover:border-cyan-500/50 transition-colors">
          <Icon className="h-5 w-5 text-cyan-500" aria-hidden="true" />
        </div>
      </div>
    </CardContent>
  </Card>
));

export default function RepoTrafficVisualizationDashboard() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const t = translations[lang];

  const [repo, setRepo] = useState<string>("all");
  const isAllView = repo === "all";

  const filteredData = useMemo(() => {
    return isAllView ? data : data.filter((d) => d.repo === repo);
  }, [repo, isAllView]);

  // Unified Macro Data: Aggregating total volume per repo
  const unifiedRepoData = useMemo(() => {
    const agg: Record<string, { name: string; totalClones: number; totalViews: number }> = {
      "welcome-to-github": { name: "welcome-to-github", totalClones: 0, totalViews: 0 },
      "zero-entropy-lab": { name: "zero-entropy-lab", totalClones: 0, totalViews: 0 },
      "Axiom-0": { name: "Axiom-0", totalClones: 0, totalViews: 0 },
      "reflective-continuum": { name: "reflective-continuum", totalClones: 0, totalViews: 0 },
      "agent-foundations": { name: "agent-foundations", totalClones: 0, totalViews: 0 },
    };
    data.forEach(d => {
      if (agg[d.repo]) {
        agg[d.repo].totalClones += d.clones;
        agg[d.repo].totalViews += d.views;
      }
    });
    return Object.values(agg).sort((a, b) => b.totalClones - a.totalClones); // Sort by highest pressure
  }, []);

  const totals = useMemo(() => {
    const clones = filteredData.reduce((sum, d) => sum + d.clones, 0);
    const views = filteredData.reduce((sum, d) => sum + d.views, 0);
    const uniqueClonersSum = filteredData
      .filter((d) => typeof d.uniqueCloners === "number")
      .reduce((sum, d) => sum + (d.uniqueCloners as number), 0);
    const ratio = views ? (clones / views).toFixed(2) : "0.00";
    return { clones, views, uniqueClonersSum, ratio };
  }, [filteredData]);

  const [mainTab, setMainTab] = useState<string>("traffic");

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-cyan-900 selection:text-cyan-50 p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-6 space-y-4">
          {/* Axiom-0 identity */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">
            <span className="text-cyan-500">Axiom-0</span>
            <span className="text-slate-700">·</span>
            <span>Evidence and Telemetry Surface</span>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-cyan-400" />
            <h1 className="text-3xl font-bold tracking-tight text-white">GitHub Traffic Telemetry</h1>
            <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="ml-auto flex items-center text-sm font-normal text-slate-300 hover:text-white bg-slate-800 px-2 py-1 rounded border border-slate-700 cursor-pointer">
              <Globe className="w-4 h-4 mr-1"/> {lang === "en" ? "中文" : "English"}
            </button>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-3xl">
            [SYSTEM_STATUS: ONLINE] Monitoring repository events and operational metrics across all active nodes.
          </p>
          {/* Main tabs */}
          <Tabs defaultValue="traffic" onValueChange={setMainTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md rounded-xl bg-slate-900 border border-slate-800 p-1 font-mono text-xs">
              <TabsTrigger value="traffic" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400"><Eye className="w-3.5 h-3.5 mr-1 inline"/>{t.trafficTab}</TabsTrigger>
              <TabsTrigger value="operations" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-emerald-400"><Server className="w-3.5 h-3.5 mr-1 inline"/>{t.operationsTab}</TabsTrigger>
              <TabsTrigger value="method" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-purple-400"><BookOpen className="w-3.5 h-3.5 mr-1 inline"/>{t.methodTab}</TabsTrigger>
            </TabsList>
          </Tabs>
        </header>

        {/* ===== TRAFFIC ===== */}
        {mainTab === "traffic" && (<>
          <Tabs defaultValue="all" onValueChange={setRepo} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full rounded-xl bg-slate-900 border border-slate-800 p-1 font-mono text-xs mb-4">
              <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400">Unified</TabsTrigger>
              <TabsTrigger value="zero-entropy-lab" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400">zero</TabsTrigger>
              <TabsTrigger value="welcome-to-github" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400">welcome</TabsTrigger>
              <TabsTrigger value="Axiom-0" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400">Axiom-0</TabsTrigger>
              <TabsTrigger value="reflective-continuum" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400">reflective</TabsTrigger>
              <TabsTrigger value="agent-foundations" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400">agent</TabsTrigger>
            </TabsList>
            <Alert className="mt-2 bg-muted/50">
              <Scale className="h-4 w-4" />
              <AlertTitle>{t.dedupLogicTitle}</AlertTitle>
              <AlertDescription className="text-sm text-slate-300 leading-relaxed font-mono mt-2">
                <p>{t.dedupLogicDesc}</p>
                <p className="mt-1 font-semibold">{t.exampleTitle}: {t.exampleDesc}</p>
              </AlertDescription>
            </Alert>
          </Tabs>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 mt-6" aria-label="Core Metrics">
            <MetricCard title="Absolute Clones" value={formatNumber(totals.clones)} subtitle="Total physical pull extractions" icon={Copy} />
            <MetricCard title="Frontend Views" value={formatNumber(totals.views)} subtitle="Superficial presentation accesses" icon={Eye} />
            <MetricCard title="Unique Actors" value={formatNumber(totals.uniqueClonersSum)} subtitle="Aggregated terminal endpoints" icon={Users} />
            <MetricCard title="Entropy Divergence" value={`Δ ${totals.ratio}`} subtitle="Ratio > 1.0 = Deterministic Bypass" icon={Scale} />
          </section>

          <section className="mb-8">
            <Card className="rounded-2xl shadow-2xl border-slate-800 bg-slate-900/50 backdrop-blur-md overflow-hidden">
              <CardHeader className="border-b border-slate-800/50 p-6 bg-slate-900/30">
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Activity className="h-5 w-5 text-emerald-400" />{t.dashboardTitle}
                </CardTitle>
                <span className="text-sm font-mono text-cyan-500 mt-1 block">{isAllView ? "Macro Node Dominance [AGGREGATED]" : "Temporal Convergence Matrix [ISOLATED]"}</span>
                <CardDescription className="text-slate-400 font-mono text-xs">
                  {isAllView ? "Volumetric distribution of deterministic pressure across the system topology." : "Chronological mapping of extraction velocity vs superficial browsing."}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] p-6">
                <ResponsiveContainer width="100%" height="100%">
                  {isAllView ? (
                    <BarChart data={unifiedRepoData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#1e293b" />
                      <XAxis type="number" tick={{ fill: "#64748b", fontFamily: "monospace", fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis dataKey="name" type="category" tick={{ fill: "#94a3b8", fontFamily: "monospace", fontSize: 13 }} width={100} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomChartTooltip />} cursor={{ fill: 'rgba(30, 41, 59, 0.4)' }} />
                      <Legend iconType="rect" wrapperStyle={{ fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }} />
                      <Bar dataKey="totalClones" name="Total Extract Volume" fill="#0ea5e9" radius={[0, 4, 4, 0]} barSize={24} />
                      <Bar dataKey="totalViews" name="Total Surface Views" fill="#334155" radius={[0, 4, 4, 0]} barSize={12} />
                    </BarChart>
                  ) : (
                    <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorClones" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/><stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/></linearGradient>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#64748b" stopOpacity={0.2}/><stop offset="95%" stopColor="#64748b" stopOpacity={0}/></linearGradient>
                      </defs>
                      <XAxis dataKey="period" tick={{ fill: "#64748b", fontFamily: "monospace", fontSize: 12 }} axisLine={{ stroke: '#334155' }} tickLine={false} />
                      <YAxis tick={{ fill: "#64748b", fontFamily: "monospace", fontSize: 12 }} axisLine={false} tickLine={false} />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                      <Tooltip content={<CustomChartTooltip />} />
                      <Legend iconType="circle" wrapperStyle={{ fontFamily: "monospace", fontSize: 12 }} />
                      <Area type="monotone" dataKey="views" name="Superficial Views" stroke="#64748b" fillOpacity={1} fill="url(#colorViews)" strokeWidth={2} />
                      <Area type="monotone" dataKey="clones" name="Absolute Extractions" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorClones)" strokeWidth={3} activeDot={{ r: 6, fill: "#0ea5e9", stroke: "#0f172a", strokeWidth: 2 }} />
                    </AreaChart>
                  )}
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </section>

          {!isAllView && (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="rounded-2xl shadow-lg border-slate-800 bg-slate-900/40">
                <CardHeader className="pb-2"><CardTitle className="text-sm text-slate-300 font-mono">Divergence Pressure Ratio</CardTitle></CardHeader>
                <CardContent className="h-[250px] p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#1e293b" />
                      <XAxis dataKey="period" tick={{ fill: "#475569", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "#475569", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomChartTooltip />} />
                      <ReferenceLine y={1} stroke="#ef4444" strokeDasharray="3 3" strokeWidth={1} label={{ value: "CRITICAL = 1.0", position: "insideTopLeft", fill: "#ef4444", fontSize: 10, fontFamily: "monospace" }} />
                      <Line type="stepAfter" dataKey="cloneViewRatio" name="C/V Ratio" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4, fill: "#8b5cf6", strokeWidth: 0 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-lg border-slate-800 bg-slate-900/40 flex flex-col justify-center p-8">
                <Alert className="rounded-xl bg-slate-950 border border-indigo-500/30 text-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                  <AlertTriangle className="h-5 w-5 text-indigo-400" />
                  <AlertTitle className="font-bold text-indigo-300 font-mono tracking-wide">Axiom-0 Protocol Validation</AlertTitle>
                  <AlertDescription className="text-indigo-200/70 leading-relaxed text-xs mt-2 font-mono">
                    Analysis of isolated chronological vectors confirms the deterministic funnel. Audience bypasses external presentation layer [Views], treating nodes purely as raw extraction targets [Clones].
                    <br/><br/>
                    <span className="text-slate-400 text-[10px]">* Method Note: Aggressive telemetry sanitization applied. Deciles rounded down, single digits preserved for algorithmic purity.</span>
                  </AlertDescription>
                </Alert>
              </Card>
            </section>
          )}
        </>)}

        {/* ===== OPERATIONS ===== */}
        {mainTab === "operations" && (
          <section className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-slate-800 bg-slate-900/50 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                <CardHeader className="border-b border-slate-800/50 pb-4">
                  <div className="flex items-center gap-2"><Server className="h-5 w-5 text-emerald-400" /><CardTitle className="text-white font-mono">{t.opsWelcome}</CardTitle></div>
                  <CardDescription className="text-slate-400 font-mono text-xs">{t.opsSource}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center"><div className="text-4xl font-bold text-white font-mono">7,045</div><div className="text-xs text-slate-400 mt-1 font-mono">{t.opsMinutes}</div></div>
                    <div className="text-center"><div className="text-4xl font-bold text-white font-mono">5,786</div><div className="text-xs text-slate-400 mt-1 font-mono">{t.opsRuns}</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-slate-300 font-mono">42s</div><div className="text-xs text-slate-500 mt-1 font-mono">{t.opsAvgRun}</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-slate-300 font-mono">2%</div><div className="text-xs text-slate-500 mt-1 font-mono">{t.opsFailRate}</div></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-800 bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <CardHeader className="border-b border-slate-800/50 pb-4">
                  <div className="flex items-center gap-2"><Server className="h-5 w-5 text-cyan-400" /><CardTitle className="text-white font-mono">{t.opsZero}</CardTitle></div>
                  <CardDescription className="text-slate-400 font-mono text-xs">{t.opsSource}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center"><div className="text-4xl font-bold text-white font-mono">3,870</div><div className="text-xs text-slate-400 mt-1 font-mono">{t.opsMinutes}</div></div>
                    <div className="text-center"><div className="text-4xl font-bold text-white font-mono">3,172</div><div className="text-xs text-slate-400 mt-1 font-mono">{t.opsRuns}</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-slate-300 font-mono">37s</div><div className="text-xs text-slate-500 mt-1 font-mono">{t.opsAvgRun}</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-slate-300 font-mono">2%</div><div className="text-xs text-slate-500 mt-1 font-mono">{t.opsFailRate}</div></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Combined */}
            <Card className="rounded-2xl border-slate-800 bg-slate-900/30">
              <CardContent className="p-5 text-center">
                <p className="text-xs font-mono text-slate-400 mb-2">{t.opsCombined}</p>
                <p className="text-2xl font-bold text-white font-mono">
                  10,915 <span className="text-slate-500 font-normal text-sm">{t.opsMinutes}</span>
                  <span className="mx-3 text-slate-700">/</span>
                  8,958 <span className="text-slate-500 font-normal text-sm">{t.opsRuns}</span>
                </p>
              </CardContent>
            </Card>

            {/* Not measured */}
            <Card className="rounded-2xl border-slate-800 bg-slate-900/20 border-dashed">
              <CardContent className="p-4 text-center">
                <p className="text-xs font-mono text-slate-500">
                  Axiom-0 · reflective-continuum · agent-foundations — {t.opsNotMeasured}
                </p>
              </CardContent>
            </Card>

            <p className="text-[11px] text-slate-600 font-mono text-center">{t.opsSource}</p>
            <p className="text-[11px] text-slate-600 font-mono text-center -mt-4">{t.opsSnapshot}</p>
          </section>
        )}

        {/* ===== METHOD ===== */}
        {mainTab === "method" && (
          <section className="space-y-4 mt-6">
            <Card className="rounded-2xl border-slate-800 bg-slate-900/50">
              <CardHeader><CardTitle className="text-white font-mono flex items-center gap-2"><Info className="h-5 w-5 text-purple-400" />{t.methodTitle}</CardTitle></CardHeader>
              <CardContent className="space-y-4 font-mono text-sm text-slate-300 leading-relaxed">
                <div className="border-l-2 border-purple-500/30 pl-4 py-1"><p className="text-slate-400 text-xs mb-1">Observation Window</p><p>{t.methodLastYear}</p><p className="text-cyan-400 mt-1">{t.methodWindow}</p></div>
                <div className="border-l-2 border-cyan-500/30 pl-4 py-1"><p className="text-slate-400 text-xs mb-1">Timestamps & Uniques</p><p>{t.methodUTC}</p></div>
                <div className="border-l-2 border-emerald-500/30 pl-4 py-1"><p className="text-slate-400 text-xs mb-1">Metric Classification</p><p>{t.methodUsage}</p></div>
                <div className="border-l-2 border-amber-500/30 pl-4 py-1"><p className="text-slate-400 text-xs mb-1">Snapshot vs Live</p><p>{t.methodSnapshot}</p></div>
                <div className="border-l-2 border-red-500/30 pl-4 py-1"><p className="text-slate-400 text-xs mb-1">Deduplication & Limitations</p><p>{t.methodDedup}</p></div>
              </CardContent>
            </Card>
            <p className="text-[11px] text-slate-600 font-mono text-center">{t.opsSource}</p>
          </section>
        )}

        <footer className="mt-10 border-t border-slate-800 pt-6 pb-6 text-center">
          <p className="text-[11px] text-slate-500 font-mono tracking-widest">
            Axiom-0 Telemetry Terminal • Evidence and Telemetry Surface • BUILD 3
          </p>
        </footer>
      </div>
    </div>
  );
}

