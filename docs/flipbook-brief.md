# Project Brief — Interactive Flipbook Deliverable Tool

**Status:** Concept / Pre-MVP
**Author:** Internal exploration
**Last updated:** 2026-05-06
**Working name:** TBD (candidates: *Flipdoc*, *Pagecraft*, *Bookable*, *Onceflip*)

---

## 1. Executive Summary

A self-hostable tool that converts PDFs and structured HTML reports into interactive, page-flipping web publications, sold (and used internally) under a **one-time, you-own-the-output** model — directly contrasting the subscription-only economics of Flipsnack, Issuu, FlippingBook, Heyzine, and Publuu.

The wedge is not technical superiority; it is **pricing model + ownership + simplicity**. The technology required is mature, open-source, and reproducible at low cost. The opportunity is to deliver "good enough" interactive publishing as a productized one-off purchase, while simultaneously upgrading our own client deliverables from raw PDFs/HTML into polished, branded artifacts.

---

## 2. Problem Statement

### 2.1 The client-facing problem
- We currently share reports and deliverables with clients as **HTML pages** (causes confusion — "I don't know how to open this") or **static PDFs** (feels dated, no interactivity, no analytics).
- Clients perceive HTML as fragile or developer-oriented; PDFs feel like a downgrade from the data we actually produce.
- A flipbook hits a sweet spot: **familiar metaphor** (a book), **modern execution** (web-based), **rich content** (video, links, branding).

### 2.2 The market problem
- Existing flipbook platforms charge **$15–80/month subscriptions**, equivalent to **$180–960/year**.
- Most users only produce **1–3 documents per year** (annual report, catalog, profile, proposal).
- The mismatch between **occasional use** and **perpetual subscription** is a genuine market inefficiency.
- Free tiers are deliberately crippled (watermarks, page caps, branding restrictions) to force conversion.
- **No major player offers pay-per-document or self-hosted output** — the entire industry copies the same SaaS model.

### 2.3 Why now
- PDF.js, StPageFlip, and similar libraries have matured to production grade.
- Browsers handle WebGL/CSS 3D smoothly even on mid-tier mobile.
- AI-assisted development drops the build cost dramatically.
- Subscription fatigue is a real and growing consumer sentiment.

---

## 3. Target Users & Use Cases

### 3.1 Internal use (Phase 0 — immediate)
| Use case | Current format | After |
|---|---|---|
| Client annual reports | HTML page (confusing) | Branded flipbook link |
| IMS catalogs | PDF download | Flipbook with embedded video |
| Proposals & SOWs | PDF email attachment | Shareable flipbook with read-tracking |
| Onboarding handbooks | PDF | Flipbook with clickable navigation |

### 3.2 External use (Phase 1+)
| Segment | Pain | Willingness to pay |
|---|---|---|
| **SMB consultancies** | Need polished proposals 2–10×/year | $30–80 per doc |
| **Marketing agencies** | Catalogs, lookbooks, campaign reports | $50–150 per doc |
| **Real estate / hospitality** | Property brochures, menus | $20–50 per doc |
| **Educators / trainers** | Course materials, manuals | $15–30 per doc |
| **Authors / self-publishers** | Sample chapters, lead magnets | $10–25 per doc |
| **Corporate comms** | Internal newsletters, reports | $50–200 per doc |

---

## 4. Value Proposition

> **"Make your PDF feel like a real publication. Pay once. Own the file. No subscription, no lock-in."**

| Pillar | Detail |
|---|---|
| **Ownership** | Buyer receives a self-contained HTML bundle they can host anywhere |
| **Simplicity** | Upload PDF → tweak branding → export. No editor learning curve |
| **Affordability** | One-time price ≈ 1 month of competitor's subscription |
| **No platform lock-in** | If our service disappears, the file still works |
| **Privacy** | Self-hostable option means sensitive docs never touch a third party |
| **Mobile-first** | Built for phones from day one (most competitors retrofitted) |

---

## 5. Technical Architecture (Detailed)

### 5.1 High-level pipeline
```
┌──────────┐   ┌──────────────┐   ┌────────────┐   ┌──────────────┐
│ PDF      │──▶│ Page         │──▶│ Asset      │──▶│ Bundle /     │
│ upload   │   │ rasterization│   │ optimization│   │ host & share │
└──────────┘   └──────────────┘   └────────────┘   └──────────────┘
                      │                  │                 │
                      ▼                  ▼                 ▼
                 PDF.js render      WebP+thumbs        ZIP or URL
                 (server-side)      2 resolutions      + metadata
```

### 5.2 Stack proposal
| Layer | Choice | Rationale |
|---|---|---|
| **PDF parsing** | `pdfjs-dist` (Mozilla) | Industry standard, Apache 2.0, active |
| **Server rendering** | `pdfjs-dist` + `canvas` (Node) or headless Chromium | Reliable rasterization; Chromium for fidelity |
| **Page-flip viewer** | `StPageFlip` (MIT) — primary candidate | Modern, framework-agnostic, mobile-aware |
| **Fallback / alt** | Custom CSS 3D transforms | Lighter weight, simpler animation |
| **Frontend framework** | React + Vite (matches existing portal) | Reuse existing infrastructure |
| **Backend** | Node.js worker (existing stack) | Reuse existing infrastructure |
| **Storage** | S3 / Cloudflare R2 | Cheap, signed URLs, CDN-friendly |
| **Database** | Reuse existing (Drizzle/Postgres) | Track flipbook metadata, owners, view counts |
| **Image format** | WebP (with JPEG fallback) | 25–35% smaller than JPEG, near-universal support |

### 5.3 Output formats
1. **Hosted URL** — for online sharing, optional analytics, optional password
2. **Self-contained HTML bundle** — single ZIP containing `index.html` + assets, opens offline
3. **Embeddable iframe** — for clients who want to embed in their own site

### 5.4 Page resolution strategy
- **Thumbnail:** 200×280, ~10 KB per page
- **Standard:** 1280×1810, ~80–120 KB per page (typical viewing)
- **Hi-res zoom:** 2560×3620, lazy-loaded only when user zooms

A typical 30-page document: ~3–4 MB total bundle. Mobile-friendly.

### 5.5 Optional enhancements (Phase 2+)
| Feature | Tech | Effort |
|---|---|---|
| Embedded video | HTML5 `<video>` overlaid on page | Low |
| Clickable hotspots | JSON region map + handler | Low |
| Text search | Extract text with PDF.js, build inverted index | Medium |
| Analytics | Beacon API → existing portal DB | Low |
| Password protection | Pre-shared key + client-side decrypt OR server gate | Medium |
| Custom domain | CNAME + cert provisioning (Caddy/ACME) | Medium |
| Lead capture forms | Optional inline form, POST to webhook | Low |

### 5.6 Performance targets
- First page rendered: **< 1.5 s** on 4G mobile
- Full document loaded: **< 6 s** on 4G mobile
- Bundle size for typical doc (30 pages): **< 5 MB**
- Mobile FPS during flip: **≥ 50**
- Lighthouse score (viewer page): **≥ 90 across all categories**

### 5.7 Hosting cost model (per 1,000 flipbooks)
- Storage (avg 5 MB × 1,000 = 5 GB): ~$0.10/month on R2
- Egress (R2 has no egress fees): $0
- Bandwidth: effectively free if R2; ~$0.05/GB on S3
- **Estimated: < $5/month for first 1,000 flipbooks** — economics support one-time pricing

---

## 6. MVP Scope (Phase 1)

### 6.1 In scope (2–3 weeks of focused dev)
- [ ] PDF upload (drag-drop) with progress
- [ ] Server-side page rasterization to WebP (2 resolutions)
- [ ] StPageFlip viewer with mobile swipe + desktop click/keyboard
- [ ] Basic branding: logo upload, primary accent color
- [ ] Shareable URL with view counter
- [ ] Self-contained ZIP export
- [ ] 3 starter templates (Report, Catalog, Profile)
- [ ] Mobile-responsive viewer
- [ ] Auth (reuse existing portal auth)

### 6.2 Out of scope for MVP
- Embedded video / hotspots
- Custom domains
- Password protection
- Analytics dashboards
- Multi-tenant editor for end clients
- Public marketplace

### 6.3 Definition of done
- Internal user uploads a PDF and gets a shareable flipbook link in **< 60 seconds**.
- The flipbook works on iPhone Safari, Android Chrome, desktop Chrome, Firefox, Safari, Edge.
- Self-hosted ZIP opens offline by double-clicking `index.html`.

---

## 7. Phase Roadmap

| Phase | Duration | Goal | Deliverable |
|---|---|---|---|
| **0 — Internal pilot** | 2 weeks | Validate utility on real client deliverables | 3 client reports converted, feedback collected |
| **1 — MVP** | 2–3 weeks | Working productizable tool | Self-serve upload → viewer → share/export |
| **2 — Polish** | 2 weeks | Embedded video, hotspots, analytics | Premium-tier features ready |
| **3 — Soft launch** | 4 weeks | First 10 paying customers from existing client base | Pricing, payment, support flow |
| **4 — Public launch** | 4–8 weeks | Landing page, content marketing, Product Hunt | Public availability, $1K MRR equivalent |

---

## 8. Business Model (Detailed)

### 8.1 Pricing options analyzed

**Option A — Pay-per-flipbook (recommended)**
| Tier | Price (one-time) | Includes | Target buyer |
|---|---|---|---|
| **Basic** | $19 | ≤ 30 pages, default branding, 12-month hosting | Solo / first-time |
| **Branded** | $39 | ≤ 80 pages, custom logo + colors, 12-month hosting | SMB / freelancer |
| **Premium** | $79 | Unlimited pages, video/hotspots, analytics, 24-month hosting | Agency / serious user |
| **Enterprise** | Custom (≥ $499) | White-label, API, bulk credits, custom domain, SLA | Mid-market+ |

**Option B — Credit packs**
- 5 flipbooks: $79 (~$16/each)
- 10 flipbooks: $139 (~$14/each)
- Reduces friction for repeat buyers.

**Option C — Hybrid**
- Free tier: 1 watermarked flipbook, capped at 20 pages, 30-day link
- Pay-per-doc above that (no subscription option)
- Best for marketing acquisition.

**Recommended:** Start with **Option A**, add Option B for repeat buyers in Phase 3.

### 8.2 Pricing rationale
- $19 entry feels like an "obvious yes" — below the $25 emotional friction line
- $79 premium positions against ~1 month of Flipsnack Business ($79/mo) — same price, but **owned forever**
- $19/$39 cluster captures the bulk segment Flipsnack underserves (occasional users)

### 8.3 Unit economics (illustrative)
| Item | Per Basic ($19) | Per Premium ($79) |
|---|---|---|
| Payment processing (Stripe) | -$0.85 | -$2.59 |
| Hosting (12–24 months) | -$0.10 | -$0.30 |
| Support (avg 2 min, $30/hr) | -$1.00 | -$3.00 |
| **Gross margin** | **~$17** | **~$73** |
| **Gross margin %** | **89%** | **92%** |

### 8.4 Revenue scenarios (12-month projection)

| Scenario | Customers | Avg ticket | Revenue | Notes |
|---|---|---|---|---|
| Pessimistic | 50 | $25 | $1,250 | Internal + word of mouth only |
| Base | 300 | $35 | $10,500 | Soft launch + content marketing |
| Optimistic | 1,000 | $40 | $40,000 | Product Hunt hit + repeat buyers |

### 8.5 Internal revenue impact (often overlooked)
Even if external sales are zero, value as an **upgrade to existing client deliverables** is real:
- Improves perceived quality of our reports → easier renewals & referrals
- Could justify a 5–10% price uplift on existing services
- Reduces "what is HTML?" confusion → less support time

---

## 9. Competitive Landscape

### 9.1 Direct competitors
| Tool | Pricing | Strengths | Weaknesses we exploit |
|---|---|---|---|
| **Flipsnack** | $14–79/mo + Enterprise | Polished, big template library, strong AI features | Subscription-only; no ownership; expensive for occasional use |
| **Issuu** | $19–35/mo | Discovery / publishing platform, large reader base | Brand-restrictive; ad-laden free tier; outdated UX |
| **FlippingBook** | $14–199/mo | Strong B2B sales focus, lead gen | Heavy, dated UI; expensive premium tiers |
| **Heyzine** | $7–30/mo | Cheaper than Flipsnack | Still subscription; brand recognition weak |
| **Publuu** | $20–40/mo | Decent quality, EU-friendly | Same SaaS trap; smaller ecosystem |

### 9.2 Indirect competitors
- **Static PDFs** — free, universal, but no interactivity
- **Notion / Coda public pages** — interactive but feels "doc-y," not publication-y
- **Custom microsites** — bespoke, expensive, slow to produce
- **Canva** — has flipbook templates but no real flipbook player

### 9.3 Our positioning
> *"The flipbook tool for people who don't make flipbooks every day."*

Not for daily power users. **For the 80% of buyers who need 1–5 great-looking publications per year and resent paying $360+/year for it.**

---

## 10. Go-to-Market Strategy

### 10.1 Phase 0 — Internal validation (Weeks 1–4)
- Convert 3 real client deliverables to flipbooks
- A/B feedback: PDF version vs. flipbook version
- Document what clients actually noticed and valued
- **Decision gate:** if ≥ 2 of 3 clients react positively, proceed to MVP

### 10.2 Phase 1 — MVP build (Weeks 5–8)
- Build core tool internal-only
- Convert 5–10 more deliverables; iterate on pain points
- Begin drafting public landing page copy

### 10.3 Phase 2 — Soft launch (Weeks 9–14)
- Offer to existing IMS portal clients as paid add-on
- Goal: 10 paying customers, $250–500 in revenue, mountains of feedback
- Gather testimonials and case studies

### 10.4 Phase 3 — Public launch (Weeks 15–24)
- **Channels:**
  - SEO-targeted landing pages: "flipbook without subscription," "PDF to flipbook one-time payment," "Flipsnack alternative"
  - Product Hunt launch (clear narrative: "We made flipbooks ownable again")
  - Reddit (r/SaaS, r/Entrepreneur, r/SmallBusiness)
  - LinkedIn organic (B2B angle)
  - Direct outreach to 100 small consultancies via cold email
- **Content strategy:**
  - "True cost of Flipsnack over 5 years" comparison post
  - "How we built a flipbook tool in 3 weeks" technical post (developer audience)
  - Case study: client X used flipbook for annual report
- **Affiliate / partner:**
  - Print shops, marketing freelancers, small agencies as referrers (15–20% rev share)

### 10.5 Acquisition cost target
- Aim for **CAC < $5** through SEO + Product Hunt
- Even at $10 CAC, Premium tier ($79) gives 8–10× LTV/CAC

---

## 11. Risks & Mitigations

| Category | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| **Tech** | Page-flip animation underwhelming on low-end Android | Medium | Medium | Graceful fallback to simple swipe animation; test on $100 phones |
| **Tech** | PDF rendering edge cases (fonts, forms, encrypted) | High | Medium | Use headless Chromium for fidelity; reject unsupported PDFs with clear error |
| **Tech** | Bundle size creep over time | Low | Medium | Hard cap; performance budget enforced in CI |
| **Business** | One-time pricing creates support burden without recurring revenue | Medium | High | Self-serve only; FAQ-driven support; cap support time to 5 min/customer |
| **Business** | Long-tail hosting costs on "lifetime" links | Medium | Medium | Cap free hosting at 12 months; renewable for $5/year; ZIP option for permanent archive |
| **Business** | Race-to-bottom pricing from copycats | Low | Medium | Differentiate on UX + ownership ZIP; build template library as moat |
| **Legal** | Copyright/abuse (uploading copyrighted PDFs) | Medium | Medium | Terms of service; takedown process; no public discoverability by default |
| **Legal** | GDPR / data residency for EU clients | Medium | Medium | Self-hosted ZIP option sidesteps; offer EU region hosting on R2 |
| **Strategic** | Flipsnack adds one-time pricing in response | Low | High | Move fast; build brand before they react; their existing $$ disincentivizes them |
| **Strategic** | Scope creep into a SaaS editor we didn't want | High | High | Written principle: **"This is a converter, not a platform."** Refuse editor features |
| **Operational** | Distraction from core IMS portal work | High | Medium | Time-box MVP at 3 weeks; pause if exceeds 4 weeks |

---

## 12. Resource & Investment Requirements

### 12.1 Time
- **Internal pilot (Phase 0):** ~20 hours
- **MVP (Phase 1):** ~80–120 hours focused dev
- **Polish + soft launch (Phases 2–3):** ~80 hours
- **Total to revenue:** ~200 hours / ~5–6 weeks at 1 dev FTE-equivalent

### 12.2 Cost
- **Software:** $0 (all open-source)
- **Infrastructure:** < $20/month at MVP scale (R2 + existing infra)
- **Domain + landing page:** ~$50 one-time
- **Stripe / payment processing:** transaction-only
- **Total cash outlay to launch:** < $200

### 12.3 People
- 1 dev (build)
- Existing design / marketing capacity for landing page
- No new hires required

---

## 13. Success Metrics

### 13.1 Phase 0 (internal pilot)
- 3 client deliverables converted ✓
- ≥ 2 of 3 clients react positively ✓
- Time to convert one document: < 30 minutes ✓

### 13.2 Phase 1 (MVP)
- Working upload-to-share in < 60 seconds
- Mobile + desktop quality acceptable on all major browsers
- Internal team confidence to show externally

### 13.3 Phase 2 (soft launch)
- 10 paying customers within 30 days of soft launch
- ≥ $300 in revenue
- ≥ 3 testimonials / case studies

### 13.4 Phase 3 (public launch)
- 100 paying customers within 6 months
- ≥ $3,000 in cumulative revenue
- ≥ 1,000 landing page visits / month

### 13.5 Long-term (12 months)
- Decide: scale up, hold steady as side product, or sunset
- Decision criteria: > $10K revenue OR strong internal value OR clear path to $50K → invest more
- Otherwise hold steady or sunset; don't fall into "zombie SaaS" trap

---

## 14. Open Questions

1. **Branding** — should this live under our existing brand or as a standalone product?
2. **Hosting policy** — 12 months free vs. lifetime vs. ZIP-only? (impacts perception and cost)
3. **Editor depth** — purely upload-and-convert, or allow lightweight in-tool tweaks (page reorder, cover swap)?
4. **Discovery** — public gallery (à la Issuu) or private-by-default? Private feels more aligned with "ownership."
5. **AI features** — do we ride the AI wave (auto-summary, auto-translation) or stay minimal? Bias: stay minimal at MVP.
6. **Templating** — how customizable should templates be without becoming an editor?

---

## 15. Recommended Immediate Next Steps

1. **This week:** Choose one real upcoming client deliverable to use as the pilot artifact
2. **Next week:** Spike a minimal PDF.js + StPageFlip viewer in this repo (`/flipbook` route) to confirm tech feasibility — time-box at 1 day
3. **Decision gate:** if the spike works and looks decent, schedule MVP build
4. **Within 30 days:** complete Phase 0 with 3 real client deliverables converted

---

## 16. Appendix — Key References

- PDF.js: https://mozilla.github.io/pdf.js/
- StPageFlip: https://github.com/Nodlik/StPageFlip
- turn.js: http://www.turnjs.com/
- Flipsnack pricing: https://www.flipsnack.com/pricing
- Issuu pricing: https://issuu.com/pricing

---

*This brief is a living document. Update on each phase gate.*
