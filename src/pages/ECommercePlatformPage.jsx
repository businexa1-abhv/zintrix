import { useState, useMemo } from 'react'
import { ShoppingCart, X, Plus, Minus, Package } from 'lucide-react'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 79.99 },
  { id: 2, name: 'Smart Watch Pro', price: 199.0 },
  { id: 3, name: 'USB-C Hub', price: 45.5 },
  { id: 4, name: 'Mechanical Keyboard', price: 129.99 },
  { id: 5, name: 'Ergonomic Mouse', price: 59.0 },
  { id: 6, name: '4K Webcam', price: 89.99 },
  { id: 7, name: 'Laptop Stand', price: 39.95 },
  { id: 8, name: 'Noise Cancelling Buds', price: 149.0 },
]

function formatMoney(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
}

export default function ECommercePlatformPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0), [cart])
  const orderTotal = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.qty, 0), [cart])

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }]
    })
    setCartOpen(true)
  }

  function updateQty(id, delta) {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p))
        .filter((p) => p.qty > 0),
    )
  }

  function removeLine(id) {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white">
              <Package size={20} />
            </span>
            <span className="text-lg tracking-tight">Shop<span className="text-violet-600">Demo</span></span>
          </div>

          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
            aria-label={`Open cart, ${cartCount} items`}
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-violet-600 px-1 text-xs font-bold text-white">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Products</h1>
          <p className="mt-2 text-slate-600">Browse our catalog — demo UI only, no checkout.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-100 via-slate-200 to-violet-100" aria-hidden />
              <div className="flex flex-1 flex-col p-4">
                <h2 className="font-semibold text-slate-900">{p.name}</h2>
                <p className="mt-1 text-lg font-bold text-violet-700">{formatMoney(p.price)}</p>
                <button
                  type="button"
                  onClick={() => addToCart(p)}
                  className="mt-4 w-full rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Overlay */}
      <button
        type="button"
        aria-label="Close cart overlay"
        className={`fixed inset-0 z-40 bg-slate-900/40 transition-opacity duration-300 ${
          cartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* Cart sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!cartOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="text-lg font-bold text-slate-900">Your cart</h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <p className="py-12 text-center text-slate-500">Your cart is empty. Add products from the grid.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="h-16 w-16 shrink-0 rounded-lg bg-gradient-to-br from-slate-200 to-violet-100" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{formatMoney(item.price)} each</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        className="rounded-lg border border-slate-200 bg-white p-1 text-slate-600 hover:bg-slate-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="rounded-lg border border-slate-200 bg-white p-1 text-slate-600 hover:bg-slate-100"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeLine(item.id)}
                        className="ml-auto text-xs font-medium text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex items-center justify-between text-lg font-bold text-slate-900">
            <span>Order total</span>
            <span className="text-violet-700">{formatMoney(orderTotal)}</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Demo only — no payment processing.</p>
        </div>
      </aside>
    </div>
  )
}
