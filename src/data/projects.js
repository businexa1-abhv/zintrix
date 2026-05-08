export const projects = [
  {
    title: 'Coffee Shop Website',
    slug: 'coffee-shop',
    category: 'Website Development',
    color: '#7c3f1e',
    accent: '#d97706',
    icon: '☕',
    desc: 'Modern website for local cafe - 40% increase in online orders',
    liveUrl: 'https://zintrix.in/coffee-shop',
    summary:
      'A conversion-focused website for a neighborhood cafe featuring online ordering, menu highlights, and mobile-first design.',
  },
  {
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    category: 'Website Development',
    color: '#1a1a2e',
    accent: '#a78bfa',
    icon: '🛍️',
    desc: 'Full-featured online store with payment gateway and inventory',
    liveUrl: 'https://zintrix.in/e-commerce-platform',
    summary:
      'A scalable online store with secure checkout, product catalog management, and inventory tracking for smooth operations.',
  },
  {
    title: 'Sales Analytics Dashboard',
    slug: 'sales-analytics-dashboard',
    category: 'Data Analytics',
    color: '#0a1628',
    accent: '#38bdf8',
    icon: '📊',
    desc: 'Real-time sales tracking and performance metrics with Power BI',
    liveUrl: 'https://zintrix.in/sales-analytics-dashboard',
    summary:
      'A real-time analytics dashboard built for sales teams to monitor trends, targets, and daily business performance.',
  },
  {
    title: 'Business Website',
    slug: 'business-website',
    category: 'Website Development',
    color: '#1c2d1c',
    accent: '#f59e0b',
    icon: '🏢',
    desc: 'Professional portfolio website with case studies and contact forms',
    liveUrl: 'https://zintrix.in/business-website',
    summary:
      'A professional business site designed to present services, success stories, and lead capture with polished branding.',
  },
  {
    title: 'Revenue Dashboard',
    slug: 'revenue-dashboard',
    category: 'Data Analytics',
    color: '#0d1117',
    accent: '#34d399',
    icon: '📈',
    desc: 'Executive dashboard for monitoring KPIs and growth metrics',
    liveUrl: 'https://zintrix.in/revenue-dashboard',
    summary:
      'An executive KPI dashboard that helps leaders track revenue growth, profitability, and strategic performance indicators.',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
