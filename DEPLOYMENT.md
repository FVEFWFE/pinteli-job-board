# Pinteli.io Deployment Guide

**Job Board Funnel Landing Page - Monday Morning Setup**

This guide will get you from v0.dev output → live on pinteli.io in **2-3 hours**.

---

## 🚀 Quick Start (Production Deployment)

### Prerequisites
- [ ] pinteli.io domain already owned ✅ (per DO_THIS_NOW.md)
- [ ] Vercel account (sign up at https://vercel.com - free)
- [ ] Typeform Pro account ($29/mo - required for logic jumps)
- [ ] PostHog account (free tier works - https://posthog.com)

---

## STEP 1: Environment Setup (10 minutes)

### 1.1 Create PostHog Project

1. Go to https://posthog.com and sign up
2. Create new project: "Pinteli Job Board Funnel"
3. Copy your **Project API Key** (starts with `phc_`)
4. Note your API host: `https://us.i.posthog.com` (or EU if selected)

### 1.2 Create Typeform Survey

1. Go to https://typeform.com/signup
2. Sign up for **Typeform Pro** ($29/mo - required for logic jumps)
3. Create new typeform: "Content Producer Application"
4. Build your 15-question survey using template from:
   `POVRiches.ai (infomarketing)/4. Distribution/Paid Ads/Job board funnel system/03_TYPEFORM_QUESTIONS.md`
5. Set up logic jumps and scoring (0-200 points)
6. Configure 4 tier-based redirects:
   - Tier 1 (0-75): Rejected
   - Tier 2 (75-120): BasPalms only
   - Tier 3 (120-160): Qualified (povriches.ai/qualified)
   - Tier 4 (160-200): Qualified (povriches.ai/qualified)
7. Copy your **Typeform ID** from Share → Embed (the part after `typeform.com/to/`)

### 1.3 Create Local Environment File

```bash
# In the project directory
cp .env.local.example .env.local
```

Edit `.env.local` and add your values:

```env
NEXT_PUBLIC_TYPEFORM_ID=your_typeform_id_here
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

---

## STEP 2: Deploy to Vercel (20 minutes)

### 2.1 Install Dependencies

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install project dependencies
cd digital-creator-network
pnpm install
```

### 2.2 Test Locally

```bash
# Start development server
pnpm dev

# Open http://localhost:3000
# Verify:
# - Landing page loads
# - Typeform embeds correctly
# - Privacy policy page works
```

### 2.3 Deploy to Vercel

**Option A: Via Vercel CLI (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? N
# - Project name: pinteli-job-board
# - Directory: ./
# - Override settings? N

# Deploy to production
vercel --prod
```

**Option B: Via Vercel Dashboard (Easier)**

1. Go to https://vercel.com/new
2. Import Git Repository (or upload folder)
3. Select this directory
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `pnpm build`
   - Output Directory: `.next`
5. Add Environment Variables:
   - `NEXT_PUBLIC_TYPEFORM_ID` = your_typeform_id
   - `NEXT_PUBLIC_POSTHOG_KEY` = phc_your_key
   - `NEXT_PUBLIC_POSTHOG_HOST` = https://us.i.posthog.com
6. Click "Deploy"

---

## STEP 3: Configure Custom Domain (15 minutes)

### 3.1 Point DNS to Vercel

1. Log in to your domain registrar (where pinteli.io is hosted)
2. Go to DNS settings
3. Add these records:

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

4. Save changes
5. Wait 5-30 minutes for DNS propagation

### 3.2 Add Domain to Vercel

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add domain: `pinteli.io`
4. Add domain: `www.pinteli.io` (optional redirect)
5. Vercel will automatically provision SSL certificate
6. Wait for "Valid Configuration" status

---

## STEP 4: Verify Deployment (10 minutes)

### 4.1 Check Landing Page

1. Visit https://pinteli.io
2. Verify:
   - [ ] Page loads correctly
   - [ ] Typeform embeds and displays
   - [ ] Header and footer render
   - [ ] Mobile responsive works
   - [ ] SSL certificate is active (https://)

### 4.2 Test Typeform Integration

1. Fill out the Typeform
2. Submit a test application
3. Verify redirect works:
   - High scorers (120+) → Should redirect to povriches.ai/qualified (or your configured URL)
   - Low scorers → Should redirect to thank you page

### 4.3 Verify Analytics

1. Check PostHog dashboard
2. Look for pageview events from pinteli.io
3. Verify tracking is working
4. Check cross-domain tracking cookie

### 4.4 Test Privacy Policy

1. Visit https://pinteli.io/privacy
2. Verify all sections render correctly
3. Check links work

---

## STEP 5: Pre-Launch Checklist

### ✅ Functional Testing

- [ ] Landing page loads on desktop
- [ ] Landing page loads on mobile
- [ ] Typeform embeds correctly
- [ ] Typeform scoring logic works (test with 4 different tier submissions)
- [ ] Redirects work correctly (tier-based)
- [ ] Privacy policy page accessible
- [ ] Email link works (applications@digitalcreatornetwork.com)
- [ ] SSL certificate active

### ✅ Analytics Verification

- [ ] PostHog tracking works
- [ ] Pageviews captured
- [ ] Cross-domain tracking configured
- [ ] No retargeting pixels on pinteli.io (correct!)

### ✅ Compliance

- [ ] Privacy policy GDPR-compliant
- [ ] No mention of POVRiches.ai or BasPalms (ToS safe)
- [ ] Professional recruiting platform appearance
- [ ] No adult content references

---

## STEP 6: Connect to Email Sequences (Zapier)

### 6.1 Set Up Zapier Integration

1. Go to https://zapier.com (free tier works)
2. Create new Zap: Typeform → Email Tool (ConvertKit/Mailchimp)
3. Trigger: New Typeform Entry
4. Action: Add to email list with tags
5. Map Typeform score → Email list tags (tier1, tier2, tier3, tier4)
6. Set up 4 different email sequences based on tier

**Reference:** See `04_EMAIL_SEQUENCES.md` for email sequence templates

---

## 🎯 Going Live

Once all checklist items are ✅, you're ready to post job ads:

### Week 1 Launch (Free Platforms)

**Monday:**
- [ ] Post to Indeed FREE (link: https://pinteli.io?utm_source=indeed&utm_medium=job&utm_campaign=neutral_v1)
- [ ] Post to LinkedIn (link: https://pinteli.io?utm_source=linkedin&utm_medium=job&utm_campaign=neutral_v1)
- [ ] Post to Reddit r/DigitalNomad (link: https://pinteli.io?utm_source=reddit_dn&utm_medium=job&utm_campaign=transparent_v1)

**Monitor applications:**
- Check Typeform submissions 2x/day
- Track by UTM source (Indeed vs LinkedIn vs Reddit)
- Respond to 160+ scorers within 24 hours

---

## 📊 Success Metrics

### Day 1-3 Targets:
- Landing page: 50-100 visitors
- Typeform starts: 30-60 (60% conversion)
- Completed applications: 20-40 (70% completion rate)
- Qualified (120+ pts): 5-10 (25% qualification rate)

### Week 1 Targets:
- Total applications: 50-100
- Qualified leads: 10-20
- Tier 4 immediate conversions: 1-3 students ($397-1,191 revenue)

---

## 🔧 Troubleshooting

### Typeform Not Embedding

**Problem:** Empty white box where Typeform should be

**Solution:**
1. Check `.env.local` has correct `NEXT_PUBLIC_TYPEFORM_ID`
2. Verify Typeform is published (not draft)
3. Check browser console for errors
4. Test Typeform ID manually: https://form.typeform.com/to/YOUR_ID

---

### PostHog Not Tracking

**Problem:** No pageviews in PostHog dashboard

**Solution:**
1. Check `NEXT_PUBLIC_POSTHOG_KEY` is set correctly
2. Verify PostHog project is active
3. Open browser DevTools → Network → Look for `i.posthog.com` requests
4. Check for ad blockers (disable for testing)

---

### DNS Not Propagating

**Problem:** pinteli.io doesn't point to Vercel after 30+ minutes

**Solution:**
1. Check DNS records are correct (A record: 76.76.21.21)
2. Use https://dnschecker.org to verify propagation globally
3. Clear your browser DNS cache: chrome://net-internals/#dns
4. Wait up to 24 hours (usually 5-30 minutes)

---

### Job Posts Getting Flagged

**Problem:** Indeed/LinkedIn removes job post for ToS violation

**Solution:**
1. Use more neutral language (remove "unconventional", "controversial")
2. Never mention POVRiches.ai or BasPalms in job post
3. Frame as legitimate hiring (which it is)
4. Use pinteli.io link (neutral domain passes review)
5. Wait 24 hours, repost with sanitized version

---

## 📁 Project Structure

```
digital-creator-network/
├── app/
│   ├── layout.tsx          # Root layout with PostHog analytics
│   ├── page.tsx            # Main landing page
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header component
│   ├── Footer.tsx          # Footer component
│   └── TypeformEmbed.tsx   # Typeform integration
├── .env.local.example      # Environment variables template
├── DEPLOYMENT.md           # This file
└── package.json            # Dependencies
```

---

## 🚨 Critical Reminders

### DO:
- ✅ Keep branding neutral (Digital Creator Network only)
- ✅ Use PostHog (NO retargeting pixels on pinteli.io)
- ✅ Test all Typeform tiers before launch
- ✅ Monitor applications daily

### DON'T:
- ❌ Mention POVRiches.ai or BasPalms in job posts or on pinteli.io
- ❌ Add Facebook Pixel or Google Analytics to pinteli.io
- ❌ Use adult content references
- ❌ Deploy without testing Typeform redirects

---

## 📞 Support

**For technical issues:**
- Vercel: https://vercel.com/docs
- Typeform: https://help.typeform.com
- PostHog: https://posthog.com/docs

**For deployment questions:**
- Check DO_THIS_NOW.md for context
- Review LANDING_PAGE_NEUTRAL.md for design specs
- See 03_TYPEFORM_QUESTIONS.md for survey logic

---

## ✅ Final Checklist Before Going Live

- [ ] .env.local configured with real values
- [ ] Deployed to Vercel successfully
- [ ] Custom domain pinteli.io configured
- [ ] SSL certificate active
- [ ] Typeform survey built and published
- [ ] Typeform redirects tested (all 4 tiers)
- [ ] PostHog tracking verified
- [ ] Email sequences set up in ConvertKit/Mailchimp
- [ ] Zapier integration tested
- [ ] Privacy policy accessible
- [ ] Mobile responsive verified
- [ ] No POVRiches/BasPalms branding visible
- [ ] Job posts ready to publish

**When all boxes checked → Post first job ad to Indeed FREE** 🚀

Expected result: First applications within 24-48 hours.

---

**Timeline:** Monday 8am → Live by Monday 2pm (if no blockers)

**Cost:** $29/mo (Typeform Pro) + $0 (PostHog free tier) + $0 (Vercel free tier) = **$29/mo total**

**ROI:** First customer = $397 → 13.7x ROI from first month alone

---

Good luck! 🎯
