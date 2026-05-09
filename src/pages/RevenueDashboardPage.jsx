import { useMemo, useState } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  BarChart3,
  LayoutDashboard,
  TrendingUp,
  Users,
  Settings,
  Menu,
  X,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'

const metrics = {
  mrr: 128_400,
  arr: 1_540_800,
  churnRate: 2.1,
  nps: 72,
}

const revenueTrend = [
  { month: 'Jan', revenue: 980 },
  { month: 'Feb', revenue: 1010 },
  { month: 'Mar', revenue: 1050 },
  { month: 'Apr', revenue: 1030 },
  { month: 'May', revenue: 1100 },
  { month: 'Jun', revenue: 1120 },
  { month: 'Jul', revenue: 1155 },
  { month: 'Aug', revenue: 1180 },
  { month: 'Sep', revenue: 1205 },
  { month: 'Oct', revenue: 1230 },
  { month: 'Nov', revenue: 1268 },
  { month: 'Dec', revenue: 1284 },
]

const revenueByChannel = [
  { name: 'Enterprise', value: 42 },
  { name: 'SMB', value: 28 },
  { name: 'Self-serve', value: 18 },
  { name: 'Partners', value: 12 },
]

const CHANNEL_COLORS = ['#0ea5e9', '#6366f1', '#22c55e', '#f59e0b']

const topClients = [
  { client: 'Northwind Logistics', revenue: 420_000, since: '2021-03' },
  { client: 'Apex Manufacturing', revenue: 318_500, since: '2020-11' },
  { client: 'Helio Health Systems', revenue: 289_200, since: '2022-01' },
  { client: 'Brightline Retail', revenue: 256_800, since: '2021-08' },
  { client: 'Cobalt Financial', revenue: 241_000, since: '2023-04' },
  { client: 'Vertex Education', revenue: 198_600, since: '2022-09' },
  { client: 'Pulse Media Group', revenue: 174_300, since: '2023-01' },
  { client: 'Stratus Cloud Co.', revenue: 162_900, since: '2021-12' },
  { client: 'Meridian Energy', revenue: 148_400, since: '2020-06' },
  { client: 'Kite AI Labs', revenue: 132_100, since: '2024-02' },
]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Revenue', icon: TrendingUp, active: false },
  { label: 'Accounts', icon: Users, active: false },
  { label: 'Settings', icon: Settings, active: false },
]

const chartTooltip = {
  contentStyle: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '12px',
    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
  },
}

function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function sortRows(rows, key, direction) {
  return [...rows].sort((a, b) => {
    const av = a[key]
    const bv = b[key]
    let cmp
    if (key === 'since') {
      cmp = String(av).localeCompare(String(bv))
    } else if (key === 'revenue') {
      cmp = av - bv
    } else {
      cmp = String(av).localeCompare(String(bv))
    }
    return direction === 'asc' ? cmp : -cmp
  })
}

export default function RevenueDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortKey, setSortKey] = useState('revenue')
  const [sortDir, setSortDir] = useState('desc')

  const sortedClients = useMemo(() => sortRows(topClients, sortKey, sortDir), [sortKey, sortDir])

  function toggleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir(key === 'revenue' ? 'desc' : 'asc')
    }
  }

  function SortIcon({ column }) {
    if (sortKey !== column) return <ArrowUpDown size={14} className="text-slate-400" />
    return sortDir === 'asc' ? (
      <ChevronUp size={16} className="text-sky-600" />
    ) : (
      <ChevronDown size={16} className="text-sky-600" />
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <BarChart3 size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight">ExecView</p>
            <p className="text-xs text-slate-500">Revenue Ops</p>
          </div>
          <button
            type="button"
            className="ml-auto rounded-lg p-1 text-slate-500 lg:hidden"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      item.active
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">
          <p className="text-xs text-slate-500">Demo data • UI only</p>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">Executive KPIs</h1>
            <p className="hidden text-xs text-slate-500 sm:block">Consolidated revenue &amp; account health</p>
          </div>
        </header>

        <main className="space-y-6 p-4 sm:p-6">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard label="MRR" value={formatCurrency(metrics.mrr)} hint="Monthly recurring" />
            <MetricCard label="ARR" value={formatCurrency(metrics.arr)} hint="Annual run rate" />
            <MetricCard
              label="Churn rate"
              value={`${metrics.churnRate}%`}
              hint="Logo churn (30d rolling)"
              valueClassName="text-amber-700"
            />
            <MetricCard label="NPS" value={String(metrics.nps)} hint="Net Promoter Score" valueClassName="text-emerald-700" />
          </section>

          <section className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-3">
              <div className="mb-4">
                <h2 className="text-base font-semibold text-slate-900">Revenue trend</h2>
                <p className="text-xs text-slate-500">Net revenue retention — last 12 months ($K)</p>
              </div>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueTrend} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.25} />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={{ stroke: '#e2e8f0' }} />
                    <YAxis
                      tick={{ fontSize: 11, fill: '#64748b' }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${v}k`}
                    />
                    <Tooltip formatter={(v) => [`$${v}k`, 'Revenue']} contentStyle={chartTooltip.contentStyle} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#0284c7"
                      strokeWidth={2}
                      fill="url(#revFill)"
                      name="Revenue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
              <div className="mb-2">
                <h2 className="text-base font-semibold text-slate-900">Revenue by channel</h2>
                <p className="text-xs text-slate-500">Share of ARR (demo %)</p>
              </div>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueByChannel}
                      cx="50%"
                      cy="50%"
                      innerRadius={56}
                      outerRadius={88}
                      paddingAngle={2}
                      dataKey="value"
                      nameKey="name"
                    >
                      {revenueByChannel.map((_, i) => (
                        <Cell key={revenueByChannel[i].name} fill={CHANNEL_COLORS[i % CHANNEL_COLORS.length]} stroke="#fff" strokeWidth={2} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => [`${v}%`, 'Share']} contentStyle={chartTooltip.contentStyle} />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      formatter={(value) => <span className="text-xs text-slate-600">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-900">Top clients by revenue</h2>
              <p className="text-xs text-slate-500">Click column headers to sort</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                    <th className="px-5 py-3 font-semibold">
                      <button
                        type="button"
                        onClick={() => toggleSort('client')}
                        className="inline-flex items-center gap-1.5 hover:text-slate-900"
                      >
                        Client <SortIcon column="client" />
                      </button>
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      <button
                        type="button"
                        onClick={() => toggleSort('revenue')}
                        className="inline-flex items-center gap-1.5 hover:text-slate-900"
                      >
                        Revenue <SortIcon column="revenue" />
                      </button>
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      <button
                        type="button"
                        onClick={() => toggleSort('since')}
                        className="inline-flex items-center gap-1.5 hover:text-slate-900"
                      >
                        Customer since <SortIcon column="since" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedClients.map((row) => (
                    <tr key={row.client} className="bg-white hover:bg-slate-50/80">
                      <td className="px-5 py-3 font-medium text-slate-900">{row.client}</td>
                      <td className="px-5 py-3 tabular-nums text-slate-800">{formatCurrency(row.revenue)}</td>
                      <td className="px-5 py-3 text-slate-600">{row.since}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

function MetricCard({ label, value, hint, valueClassName = '' }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
      <p className={`mt-2 text-2xl font-bold tracking-tight text-slate-900 ${valueClassName}`}>{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  )
}
