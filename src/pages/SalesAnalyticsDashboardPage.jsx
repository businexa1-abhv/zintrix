import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { DollarSign, ShoppingBag, Users, TrendingUp, LayoutDashboard } from 'lucide-react'

const kpis = {
  totalRevenue: 487_920,
  orders: 12_847,
  customers: 8_932,
  growthPercent: 18.4,
}

const monthlyRevenue = [
  { month: 'Jan', revenue: 32_100 },
  { month: 'Feb', revenue: 35_400 },
  { month: 'Mar', revenue: 38_200 },
  { month: 'Apr', revenue: 36_800 },
  { month: 'May', revenue: 41_500 },
  { month: 'Jun', revenue: 44_200 },
  { month: 'Jul', revenue: 42_900 },
  { month: 'Aug', revenue: 45_600 },
  { month: 'Sep', revenue: 48_100 },
  { month: 'Oct', revenue: 46_300 },
  { month: 'Nov', revenue: 51_200 },
  { month: 'Dec', revenue: 55_400 },
]

const topProducts = [
  { name: 'Pro Headphones', sales: 1840 },
  { name: 'Smart Watch', sales: 1520 },
  { name: 'USB Dock', sales: 1280 },
  { name: 'Keyboard', sales: 960 },
  { name: 'Webcam', sales: 720 },
]

const recentOrders = [
  { id: 'SO-9821', customer: 'A. Rivera', amount: 249.0, status: 'Shipped', date: '2026-05-09' },
  { id: 'SO-9820', customer: 'M. Chen', amount: 89.5, status: 'Processing', date: '2026-05-09' },
  { id: 'SO-9819', customer: 'J. Patel', amount: 512.0, status: 'Delivered', date: '2026-05-08' },
  { id: 'SO-9818', customer: 'S. Brooks', amount: 124.99, status: 'Shipped', date: '2026-05-08' },
  { id: 'SO-9817', customer: 'L. Kim', amount: 67.25, status: 'Cancelled', date: '2026-05-07' },
  { id: 'SO-9816', customer: 'D. Nguyen', amount: 340.0, status: 'Delivered', date: '2026-05-07' },
  { id: 'SO-9815', customer: 'R. Tate', amount: 199.0, status: 'Processing', date: '2026-05-06' },
  { id: 'SO-9814', customer: 'K. OSS', amount: 45.0, status: 'Shipped', date: '2026-05-06' },
]

function formatMoney(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

const chartTooltipStyle = {
  backgroundColor: '#0f172a',
  border: '1px solid #334155',
  borderRadius: '8px',
  fontSize: '12px',
}

function KpiCard({ title, value, sub, icon: Icon, accent }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
          {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
        </div>
        <div className={`rounded-lg p-2 ${accent}`}>
          <Icon size={22} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default function SalesAnalyticsDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
              <LayoutDashboard size={22} />
            </span>
            <div>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Sales Analytics</h1>
              <p className="text-sm text-slate-400">Demo dashboard • hardcoded data</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="rounded-md bg-slate-800 px-3 py-1.5 font-medium text-slate-200">FY 2026</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            title="Total Revenue"
            value={formatMoney(kpis.totalRevenue)}
            sub="Year to date"
            icon={DollarSign}
            accent="bg-emerald-500"
          />
          <KpiCard
            title="Orders"
            value={kpis.orders.toLocaleString()}
            sub="All channels"
            icon={ShoppingBag}
            accent="bg-indigo-500"
          />
          <KpiCard
            title="Customers"
            value={kpis.customers.toLocaleString()}
            sub="Active profiles"
            icon={Users}
            accent="bg-sky-500"
          />
          <KpiCard
            title="Growth"
            value={`+${kpis.growthPercent}%`}
            sub="Vs. prior year"
            icon={TrendingUp}
            accent="bg-amber-500"
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Monthly revenue</h2>
            <p className="text-sm text-slate-500">Last 12 months</p>
            <div className="mt-4 h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyRevenue} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={{ stroke: '#cbd5e1' }} />
                  <YAxis
                    tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                    tick={{ fontSize: 12, fill: '#64748b' }}
                    axisLine={{ stroke: '#cbd5e1' }}
                  />
                  <Tooltip
                    formatter={(value) => [formatMoney(value), 'Revenue']}
                    contentStyle={chartTooltipStyle}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Top products</h2>
            <p className="text-sm text-slate-500">Units sold (demo)</p>
            <div className="mt-4 h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal />
                  <XAxis type="number" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={{ stroke: '#cbd5e1' }} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={100}
                    tick={{ fontSize: 11, fill: '#64748b' }}
                    axisLine={{ stroke: '#cbd5e1' }}
                  />
                  <Tooltip contentStyle={chartTooltipStyle} labelStyle={{ color: '#e2e8f0' }} />
                  <Bar dataKey="sales" fill="#22c55e" radius={[0, 4, 4, 0]} name="Sales" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-lg font-semibold text-slate-900">Recent orders</h2>
            <p className="text-sm text-slate-500">Latest transactions</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-5 py-3 font-semibold">Order ID</th>
                  <th className="px-5 py-3 font-semibold">Customer</th>
                  <th className="px-5 py-3 font-semibold">Amount</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentOrders.map((row) => (
                  <tr key={row.id} className="bg-white hover:bg-slate-50/80">
                    <td className="whitespace-nowrap px-5 py-3 font-medium text-indigo-600">{row.id}</td>
                    <td className="px-5 py-3 text-slate-800">{row.customer}</td>
                    <td className="px-5 py-3 text-slate-800">{formatMoney(row.amount)}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          row.status === 'Delivered'
                            ? 'bg-emerald-100 text-emerald-800'
                            : row.status === 'Shipped'
                              ? 'bg-sky-100 text-sky-800'
                              : row.status === 'Processing'
                                ? 'bg-amber-100 text-amber-800'
                                : row.status === 'Cancelled'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-500">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
