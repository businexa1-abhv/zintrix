# 🎯 Quick Reference: Customization Checklist

## Component Customization Guide

### 1. Testimonials (`src/components/Testimonials.jsx`)

**What to change:**
```jsx
// Line 5-33: testimonials array
const testimonials = [
  {
    name: 'CHANGE: Client name',
    role: 'CHANGE: Job title',
    company: 'CHANGE: Company name',
    content: 'CHANGE: Their quote/review',
    rating: 5,  // ✓ Leave or change
    avatar: '👨‍💼',  // Change emoji
    color: 'from-blue-600 to-blue-800',  // Change gradient
  },
  // Add more testimonials...
]
```

**Customization points:**
- [ ] Change 4 testimonials to real clients
- [ ] Update names and roles
- [ ] Update testimonial text
- [ ] Change avatar emojis
- [ ] Adjust color gradients

---

### 2. Pricing (`src/components/Pricing.jsx`)

**What to change:**
```jsx
// Line 5-31: Website pricing plans
const pricingPlans = [
  {
    name: 'CHANGE: Plan name',
    price: '₹25,000',  // CHANGE: Your price
    features: [
      { text: 'CHANGE: Feature name', included: true },
      // Update all features...
    ]
  }
]

// Line 33-64: Analytics services
const analyticsServices = [
  {
    name: 'CHANGE: Service name',
    price: '₹35,000',  // CHANGE: Your price
    features: [
      { text: 'CHANGE: Feature', included: true },
      // Update all features...
    ]
  }
]
```

**Customization points:**
- [ ] Update 3 website plan names
- [ ] Set your website pricing (₹25k, ₹60k, ₹Custom)
- [ ] Update website features list
- [ ] Update 2 analytics service names
- [ ] Set your analytics pricing
- [ ] Update analytics features

---

### 3. Process (`src/components/Process.jsx`)

**What to change:**
```jsx
// Line 5-34: processes array
const processes = [
  {
    step: 1,
    title: 'CHANGE: Your step name',
    description: 'CHANGE: Step description',
    icon: '🎯',  // Change emoji
    duration: '1-2 weeks',  // CHANGE: Your duration
  },
  // Update all 5 steps...
]
```

**Customization points:**
- [ ] Update 5 step names
- [ ] Update step descriptions
- [ ] Change step icons (emojis)
- [ ] Adjust time estimates
- [ ] Update process duration

---

### 4. Team (`src/components/Team.jsx`)

**What to change:**
```jsx
// Line 5-40: teamMembers array
const teamMembers = [
  {
    name: 'CHANGE: Real team member name',
    role: 'CHANGE: Their job title',
    bio: 'CHANGE: Short bio about them',
    avatar: '👨‍💻',  // Change emoji
    color: 'from-blue-600 to-blue-800',  // Change gradient
    // socials array: links to their social media
  }
]

// Line 108-119: Team statistics
<div className="text-3xl lg:text-4xl font-extrabold text-blue-400 mb-2">35+</div>
// CHANGE: 35+ to your actual number
```

**Customization points:**
- [ ] Update 4 team member names
- [ ] Update their roles/titles
- [ ] Update their bios
- [ ] Change avatar emojis
- [ ] Update social media links
- [ ] Update team statistics (35+, 80+, 98%)

---

### 5. FAQ (`src/components/FAQ.jsx`)

**What to change:**
```jsx
// Line 5-46: faqs array
const faqs = [
  {
    question: 'CHANGE: Your question here?',
    answer: 'CHANGE: Your detailed answer here...'
  },
  // Update all 10 FAQ items...
]
```

**Customization points:**
- [ ] Update all 10 FAQ questions
- [ ] Update all 10 FAQ answers
- [ ] Add or remove FAQ items as needed
- [ ] Ensure answers are helpful

---

### 6. Contact (`src/components/Contact.jsx`)

**What to change:**
```jsx
// Line 5-17: contactInfo array
const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',  // CHANGE: Your phone
    color: 'text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@zintrix.in',  // CHANGE: Your email
    color: 'text-cyan-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',  // CHANGE: Your location
    color: 'text-purple-400',
  },
]
```

**Customization points:**
- [ ] Update phone number
- [ ] Update email address
- [ ] Update location
- [ ] Setup form submission (EmailJS/Formspree)
- [ ] Update success message if needed

---

### 7. CTABanner (`src/components/CTABanner.jsx`)

**What to change:**
```jsx
// Lines 39-41: Newsletter messaging
<h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
  Don't Miss Out on <span className="text-gradient">Updates</span>
  // CHANGE: Update headline
</h3>

<p className="text-gray-400 leading-relaxed mb-2">
  Get the latest insights, case studies, and industry tips delivered to your inbox.
  // CHANGE: Update description
</p>
```

**Customization points:**
- [ ] Update newsletter heading
- [ ] Update newsletter description
- [ ] Setup email service integration (Mailchimp/SendGrid)
- [ ] Configure success messaging

---

## Navigation Updates

### Navbar (`src/components/Navbar.jsx`)

**Already Done:** Navigation links have been updated to point to new sections:
- Home → #home
- Services → #services
- Portfolio → #portfolio
- Pricing → #pricing (NEW)
- About → #team (NEW)
- Contact → #contact

**No changes needed** - Navigation is ready to use!

---

## HTML Meta Tags

### index.html

**Already Updated:**
- ✅ Meta description
- ✅ Keywords
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URL

**Optional customization:**
```html
<!-- Line 8: Update description -->
<meta name="description" content="CHANGE: Your 160-char description" />

<!-- Line 9: Update keywords -->
<meta name="keywords" content="CHANGE: Your keywords" />

<!-- Line 15-16: Update title -->
<meta property="og:title" content="CHANGE: Your title" />

<!-- Lines 17-19: Update URLs -->
<meta property="og:url" content="CHANGE: https://yourdomain.com/" />

<!-- Line 14: Update title in HTML head -->
<title>CHANGE: Your Page Title</title>
```

---

## Form Integration

### Contact Form Setup

**Current state:** Form has simulated submission with 1.5 second delay

**To enable real email submission:**

#### Option 1: EmailJS (Easiest)
```bash
npm install @emailjs/browser
```

Then update `Contact.jsx`:
```jsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // Get from emailjs.com
      'YOUR_TEMPLATE_ID',     // Get from emailjs.com
      formData,
      'YOUR_USER_ID'          // Get from emailjs.com
    )
    setSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
  setIsLoading(false)
}
```

#### Option 2: Formspree
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  
  try {
    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    setSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
  setIsLoading(false)
}
```

---

## Newsletter Integration

### CTABanner Newsletter Setup

**Current state:** Newsletter has simulated subscription with success message

**To enable real email collection:**

#### Option 1: Mailchimp
```jsx
const handleSubscribe = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  
  try {
    const response = await fetch('YOUR_MAILCHIMP_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    })
    
    if (response.ok) {
      setSubscribed(true)
      setEmail('')
    }
  } catch (error) {
    console.error('Error:', error)
  }
  setIsLoading(false)
}
```

---

## Color Customization

### tailwind.config.js

```javascript
extend: {
  colors: {
    dark: {
      900: '#050810',  // Main background - CHANGE HERE
      800: '#0a0f1e',  // Card background - CHANGE HERE
      700: '#0d1426',  // Hover state - CHANGE HERE
      600: '#111827',  // Borders - CHANGE HERE
    },
    brand: {
      400: '#38bdf8',  // Cyan accent - CHANGE HERE
      500: '#2563eb',  // Blue primary - CHANGE HERE
      600: '#1d4ed8',  // Dark blue - CHANGE HERE
      glow: '#0686DA', // Glow effect - CHANGE HERE
    },
  }
}
```

---

## Complete Customization Checklist

### Priority 1 (Must Do)
- [ ] Update testimonials with real clients
- [ ] Set your actual pricing
- [ ] Update team member names/roles
- [ ] Update contact information
- [ ] Setup form email integration

### Priority 2 (Important)
- [ ] Update FAQ with your questions
- [ ] Update process steps
- [ ] Customize hero text if needed
- [ ] Update footer information
- [ ] Update meta tags with your info

### Priority 3 (Nice to Have)
- [ ] Change color scheme
- [ ] Update animations (optional)
- [ ] Add your own images
- [ ] Setup analytics
- [ ] Setup newsletter service

### Priority 4 (Before Launch)
- [ ] Test all forms
- [ ] Mobile device testing
- [ ] Lighthouse audit
- [ ] Browser testing
- [ ] Performance optimization

---

## File Locations Quick Reference

| Component | File | Data Array | Lines |
|-----------|------|-----------|-------|
| Testimonials | `Testimonials.jsx` | testimonials | 5-33 |
| Pricing | `Pricing.jsx` | pricingPlans, analyticsServices | 5-64 |
| Process | `Process.jsx` | processes | 5-34 |
| Team | `Team.jsx` | teamMembers | 5-40 |
| FAQ | `FAQ.jsx` | faqs | 5-46 |
| Contact | `Contact.jsx` | contactInfo | 5-17 |
| Navbar | `Navbar.jsx` | navLinks | Already Updated ✓ |

---

## Testing Checklist

After customization:

- [ ] All sections display correctly
- [ ] Navigation links work
- [ ] Form validation works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] All images load
- [ ] Animations smooth
- [ ] Forms submit (when integrated)
- [ ] Links point to correct places
- [ ] Colors consistent

---

## Support Resources

### Styling Questions
- Tailwind docs: https://tailwindcss.com/docs
- Color picker: https://www.tailwindcss.com/resources/tailwindcss-color-palette

### Animation Questions
- Framer Motion: https://www.framer.com/motion/
- Examples: https://www.framer.com/motion/examples/

### Form Integration
- EmailJS: https://www.emailjs.com/
- Formspree: https://formspree.io/
- Mailchimp: https://mailchimp.com/

### Deployment
- Vercel: https://vercel.com/
- Netlify: https://www.netlify.com/
- GitHub Pages: https://pages.github.com/

---

**Happy customizing! 🎨**

All files are ready to modify. Start with Priority 1 items first.
