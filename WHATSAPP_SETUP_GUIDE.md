# WhatsApp Integration Guide

## Quick Setup

### 1. Update WhatsApp Number

**File**: `src/components/Contact.jsx`
```javascript
// Line ~50 (in contactInfo array)
{
  icon: MessageCircle,
  label: 'WhatsApp',
  display: 'WhatsApp Chat',
  action: 'https://wa.me/919876543210'  // ← Update this number
}
```

**File**: `src/components/WhatsAppButton.jsx`
```javascript
// Line ~20 (in href)
<a
  href="https://wa.me/919876543210"  // ← Update this number
  target="_blank"
  rel="noopener noreferrer"
>
```

### 2. WhatsApp URL Format

```
https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]

Examples:
- India: https://wa.me/919876543210
- US: https://wa.me/12015550132
- UK: https://wa.me/442071838750
```

**Without spaces or special characters!**

### 3. Features

**WhatsAppButton Component**:
- ✅ Fixed position (bottom-right corner)
- ✅ Animated pulse effect
- ✅ Green gradient colors
- ✅ Mobile optimized
- ✅ Always on top (z-40)
- ✅ Direct messaging on click

**Contact Form Integration**:
- ✅ WhatsApp listed as contact option
- ✅ Clickable link
- ✅ Opens WhatsApp Web or App

### 4. Testing

**Desktop**:
1. Click WhatsApp button
2. Should open WhatsApp Web
3. Shows chat with your business

**Mobile**:
1. Click WhatsApp button
2. Should open WhatsApp App
3. Ready to send message

### 5. Message Template (Optional)

You can add pre-filled messages:

```javascript
// Add message parameter
https://wa.me/919876543210?text=Hi%20Zintrix%20I%20need%20a%20website

// Replace spaces with %20
```

### 6. Response Management

**Best Practices**:
- Monitor WhatsApp during business hours
- Set auto-reply for off-hours
- Save common responses as templates
- Use WhatsApp Business if volume is high

## Component Locations

```
src/
├─ components/
│  ├─ WhatsAppButton.jsx ← Floating button
│  ├─ Contact.jsx ← Contact form with WhatsApp
│  └─ Other components
└─ App.jsx ← Main component (WhatsAppButton imported here)
```

## Styling Reference

**WhatsApp Green Color**: `#25d366`

**Button Size**: 
- Icon: 24px
- Container: 56px (mobile friendly)
- Pulse animation: Infinite loop

**Position**:
- Bottom: 24px
- Right: 24px
- Z-index: 40

## Analytics Integration

You can track WhatsApp clicks by adding:

```javascript
// In WhatsAppButton.jsx handleClick
const handleClick = () => {
  // Track in analytics
  if (window.gtag) {
    gtag('event', 'whatsapp_click', {
      phone: '919876543210'
    })
  }
}
```

## Common Issues

**Button not showing?**
- Check z-index in Tailwind (z-40)
- Verify it's imported in App.jsx
- Check mobile viewport width

**Link not working?**
- Verify phone number format (country code required)
- No spaces or special characters
- Test on multiple browsers

**Message not sending?**
- WhatsApp Web needs login
- Mobile app needs installation
- Check internet connection

## Advanced Features

### WhatsApp Business API
For higher volume, consider:
- Webhooks for automation
- Message templates
- Analytics dashboard
- Multi-agent support

Visit: https://www.whatsapp.com/business/api

### Chatbot Integration
Consider tools like:
- Twilio
- Botpress
- ManychatPro
- Wati

## Files Updated

1. ✅ `WhatsAppButton.jsx` - Floating button component
2. ✅ `Contact.jsx` - Contact form integration
3. ✅ `App.jsx` - Component import
4. ✅ Documentation - This file

## Deployment Checklist

- [ ] Update phone number in both files
- [ ] Test on desktop and mobile
- [ ] Verify WhatsApp opens
- [ ] Check message flow
- [ ] Setup WhatsApp auto-reply
- [ ] Monitor response times
- [ ] Track message volume
- [ ] Gather feedback

---

**Ready to go live!** 🚀

For more info: https://www.whatsapp.com/business/
