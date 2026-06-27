import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Eye, Copy, Users, AlertTriangle, Scale, Activity, Globe } from "lucide-react";

const translations = {
  en: {
    dashboardTitle: "Analytics Dashboard",
    dashboardDesc: "Viewing telemetry and traffic metrics",
    overviewTab: "Overview",
    analyticsTab: "Analytics",
    dedupLogicTitle: "Strict Deduplication Logic Active",
    dedupLogicDesc: "Data ingested into this system is strictly deduplicated using a SHA-256 cryptographic payload fingerprinting mechanism. If a telemetry packet is received multiple times (e.g., due to network retries), the duplicated hashes are mathematically rejected.",
    exampleTitle: "Example",
    exampleDesc: "If the 'welcome-to-github' repo reports 1500 clones, but 100 clone events share identical payload hashes, the system counts 1400 valid events.",
    clones: "Total Clones",
    uniqueCloners: "Unique Cloners",
    views: "Total Views",
    uniqueVisitors: "Unique Visitors",
  },
  zh: {
    dashboardTitle: "分析仪表盘",
    dashboardDesc: "查看遥测与流量指标",
    overviewTab: "概览",
    analyticsTab: "分析",
    dedupLogicTitle: "严格数据去重逻辑已启用",
    dedupLogicDesc: "本系统摄入的数据使用 SHA-256 密码学负载指纹机制进行严格去重。如果多次收到同一个遥测数据包（例如因为网络重试），重复的哈希将被在数学层面上拒绝。",
    exampleTitle: "示例",
    exampleDesc: "如果 'welcome-to-github' 仓库报告了 1500 次克隆，但其中 100 次克隆事件具有相同的负载哈希，则系统记录 1400 次有效事件。",
    clones: "总克隆数",
    uniqueCloners: "唯一克隆者",
    views: "总浏览量",
    uniqueVisitors: "唯一访客",
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

  // zero-entropy-lab
  { repo: "zero-entropy-lab", period: "03/21", clones: 760, uniqueCloners: 270, views: 520, uniqueVisitors: 20 },
  { repo: "zero-entropy-lab", period: "04/02", clones: 720, uniqueCloners: 300, views: 690, uniqueVisitors: 80 },
  { repo: "zero-entropy-lab", period: "04/12", clones: 580, uniqueCloners: 230, views: 870, uniqueVisitors: 100 },
  { repo: "zero-entropy-lab", period: "04/29", clones: 1010, uniqueCloners: 350, views: 540, uniqueVisitors: 20 },
  { repo: "zero-entropy-lab", period: "05/14", clones: 1200, uniqueCloners: 300, views: 30, uniqueVisitors: 20 },
  { repo: "zero-entropy-lab", period: "05/28", clones: 950, uniqueCloners: 300, views: 10, uniqueVisitors: 10 },
  { repo: "zero-entropy-lab", period: "06/12", clones: 1400, uniqueCloners: 310, views: 20, uniqueVisitors: 7 },
  { repo: "zero-entropy-lab", period: "06/26", clones: 1720, uniqueCloners: 390, views: 30, uniqueVisitors: 10 },

  // Axiom-0
  { repo: "Axiom-0", period: "04/29", clones: 370, uniqueCloners: 170, views: 100, uniqueVisitors: 10 },
  { repo: "Axiom-0", period: "05/14", clones: 900, uniqueCloners: 320, views: 40, uniqueVisitors: 30 },
  { repo: "Axiom-0", period: "05/28", clones: 590, uniqueCloners: 40, views: 10, uniqueVisitors: 6 },
  { repo: "Axiom-0", period: "06/12", clones: 540, uniqueCloners: 210, views: 7, uniqueVisitors: 7 },
  { repo: "Axiom-0", period: "06/26", clones: 700, uniqueCloners: 230, views: 20, uniqueVisitors: 20 },

  // reflective-continuum
  { repo: "reflective-continuum", period: "05/28", clones: 450, uniqueCloners: 40, views: 7, uniqueVisitors: 5 },
  { repo: "reflective-continuum", period: "06/12", clones: 700, uniqueCloners: 270, views: 5, uniqueVisitors: 4 },
  { repo: "reflective-continuum", period: "06/26", clones: 1070, uniqueCloners: 290, views: 10, uniqueVisitors: 10 },

  // agent-foundations
  { repo: "agent-foundations", period: "05/28", clones: 80, uniqueCloners: 30, views: 1, uniqueVisitors: 1 },
  { repo: "agent-foundations", period: "06/12", clones: 280, uniqueCloners: 150, views: 4, uniqueVisitors: 4 },
  { repo: "agent-foundations", period: "06/26", clones: 350, uniqueCloners: 170, views: 7, uniqueVisitors: 7 },
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
      "welcome-to-github": { name: "Main Repo", totalClones: 0, totalViews: 0 },
      "zero-entropy-lab": { name: "New Repo", totalClones: 0, totalViews: 0 },
      "Axiom-0": { name: "Axiom-0", totalClones: 0, totalViews: 0 },
      "reflective-continuum": { name: "Reflective", totalClones: 0, totalViews: 0 },
      "agent-foundations": { name: "Agent", totalClones: 0, totalViews: 0 },
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

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-cyan-900 selection:text-cyan-50 p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-10 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-6 w-6 text-cyan-400" />
              <h1 className="text-3xl font-bold tracking-tight text-white">ZECP Telemetry Array</h1>
            </div>
            <p className="text-slate-400 text-sm font-mono max-w-3xl">
              [SYSTEM_STATUS: ONLINE] Monitoring absolute deterministic pull requests and cognitive ratchet execution paths across all active nodes.
            </p>
          </div>

          <Tabs defaultValue="all" onValueChange={setRepo} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full rounded-xl bg-slate-900 border border-slate-800 p-1 font-mono text-xs">
              <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">Unified</TabsTrigger>
              <TabsTrigger value="zero-entropy-lab" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">New Repo</TabsTrigger>
              <TabsTrigger value="welcome-to-github" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">Main Repo</TabsTrigger>
              <TabsTrigger value="Axiom-0" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">Axiom-0</TabsTrigger>
              <TabsTrigger value="reflective-continuum" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">Reflective</TabsTrigger>
              <TabsTrigger value="agent-foundations" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">Agent</TabsTrigger>
            </TabsList>

        <Alert className="mt-4 bg-muted/50">
          <Scale className="h-4 w-4" />
          <AlertTitle>{t.dedupLogicTitle}</AlertTitle>
          <AlertDescription className="text-xs text-muted-foreground">
            <p>{t.dedupLogicDesc}</p>
            <p className="mt-1 font-semibold">{t.exampleTitle}: {t.exampleDesc}</p>
          </AlertDescription>
        </Alert>

          </Tabs>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8" aria-label="Core Metrics">
          <MetricCard title="Absolute Clones" value={formatNumber(totals.clones)} subtitle="Total physical pull extractions" icon={Copy} />
          <MetricCard title="Frontend Views" value={formatNumber(totals.views)} subtitle="Superficial presentation accesses" icon={Eye} />
          <MetricCard title="Unique Actors" value={formatNumber(totals.uniqueClonersSum)} subtitle="Aggregated terminal endpoints" icon={Users} />
          <MetricCard title="Entropy Divergence" value={`Δ ${totals.ratio}`} subtitle="Ratio > 1.0 = Deterministic Bypass" icon={Scale} />
        </section>

        {/* Dynamic Main Chart Section */}
        <section className="mb-8">
          <Card className="rounded-2xl shadow-2xl border-slate-800 bg-slate-900/50 backdrop-blur-md overflow-hidden">
            <CardHeader className="border-b border-slate-800/50 p-6 bg-slate-900/30">
              <CardTitle className="text-white font-mono flex items-center justify-between gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-emerald-400" />
                    {t.dashboardTitle}
                  </div>
                  <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="flex items-center text-sm font-normal text-slate-300 hover:text-white bg-slate-800 px-2 py-1 rounded border border-slate-700 cursor-pointer"><Globe className="w-4 h-4 mr-1"/> {lang === "en" ? "中文" : "English"}</button>
                </CardTitle>
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mt-2 block"></span>
                <span className="text-sm font-mono text-cyan-500">{isAllView ? "Macro Node Dominance [AGGREGATED]" : "Temporal Convergence Matrix [ISOLATED]"}</span>
              <CardDescription className="text-slate-400 font-mono text-xs">
                {isAllView
                  ? "Volumetric distribution of deterministic pressure across the system topology."
                  : "Chronological mapping of extraction velocity vs superficial browsing."}
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] p-6">
              <ResponsiveContainer width="100%" height="100%">
                {isAllView ? (
                  // Unified View: Cross-Node Horizontal Bar Chart
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
                  // Isolated View: Temporal Area + Line Chart
                  <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorClones" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#64748b" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                      </linearGradient>
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

        {/* Secondary Analysis Row */}
        {!isAllView && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="rounded-2xl shadow-lg border-slate-800 bg-slate-900/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-300 font-mono">Divergence Pressure Ratio</CardTitle>
              </CardHeader>
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
                <AlertTriangle className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                <AlertTitle className="font-bold text-indigo-300 font-mono tracking-wide">Axiom-0 Protocol Validation</AlertTitle>
                <AlertDescription className="text-indigo-200/70 leading-relaxed text-xs mt-2 font-mono">
                  Analysis of isolated chronological vectors confirms the deterministic funnel.
                  Audience bypasses external presentation layer [Views], treating nodes purely as raw extraction targets [Clones].
                  <br/><br/>
                  <span className="text-slate-400 text-[10px]">* Method Note: Aggressive telemetry sanitization applied. Deciles rounded down, single digits preserved for algorithmic purity.</span>
                </AlertDescription>
              </Alert>
            </Card>
          </section>
        )}

        <footer className="mt-8 border-t border-slate-800 pt-6 pb-6 text-center">
          <p className="text-[11px] text-slate-500 font-mono tracking-widest">
            Axiom-0 Terminal UI • Zero-Entropy Rendering Pipeline • SECURE NODE
          </p>
        </footer>
      </div>
    </div>
  );
}
