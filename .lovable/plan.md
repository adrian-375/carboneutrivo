

# Implementation Plan: Approach, Expertise, and Governance Pages

## Summary
Three major updates: (1) rewrite the Approach page with the 7 pillars content, (2) rebuild the Expertise page as a single scrollable page with anchor-linked sections from the navbar dropdown, and (3) combine Governance & Risk into one page with expandable accordion sections. Also apply transparent white textbox styling consistently.

---

## 1. Rewrite Approach Page (`src/pages/ApproachPage.tsx`)

Replace the current 5-step timeline with the provided content:
- Hero: "Building High-Integrity Climate Solutions for the Long Term" with intro paragraph
- 7 numbered pillars (Environmental Integrity, Scientific Excellence, Regulatory Compliance, Community Trust, Financial Discipline, Transparency, Long-Term Impact) displayed as styled cards
- Closing "Our Commitment" statement in a transparent white textbox

---

## 2. Rebuild Expertise Page (`src/pages/ExpertisePage.tsx`)

Replace current card layout with a single-page layout containing anchored sections:
- Intro paragraph about Carbon Fund Generation & Management
- 6 anchored sections with `id` attributes matching the navbar dropdown links:
  - `#wetland-restoration` -- Wetland Restoration & Conservation
  - `#sustainable-agriculture` -- Sustainable Agriculture
  - `#sustainable-forestry` -- Sustainable Forestry (includes ARR, ALM, IFM, REDD, ACoGS, WRC sub-items)
  - `#climate-community-biodiversity` -- Climate, Community, and Biodiversity
  - `#gis-remote-sensing` -- GIS & Remote Sensing
  - `#it-solutions` -- IT Solutions
- Each section uses a transparent white textbox (`bg-foreground/[0.04] backdrop-blur-sm border border-foreground/10 rounded-2xl`) with the heading highlighted in primary color and the provided description text

---

## 3. Update Navbar Dropdown (`src/components/Navbar.tsx`)

- Change "Our Expertise" dropdown children paths from `/expertise/slug` to `/expertise#anchor-id` so clicking navigates to the expertise page and scrolls to the correct section
- Remove "Governance & Integrity" and "Risk Management" as separate tabs
- Add a single "Governance & Integrity" tab pointing to `/governance` (the combined page)

Updated nav items:
```
Home, About Us, Our Approach, Our Expertise (with dropdown), Governance & Integrity, Project Delivery, Ongoing Projects, Our Team, Contact Us
```

---

## 4. New Combined Governance, Integrity & Risk Page (`src/pages/GovernancePage.tsx`)

Rewrite the existing GovernancePage with 3 collapsible sections using the Radix accordion component:

**Section 1: Governance & Ethical Conduct**
Intro paragraph, then expandable accordion items for each policy:
- Code of Ethics & Business Conduct
- Anti-Bribery & Anti-Corruption Policy
- Anti-Child Labour Policy
- Anti-Sexual Harassment Policy
- Health, Safety & Welfare Policy

**Section 2: Integrity & Safeguards**
Accordion items:
- Indigenous Peoples & FPIC Policy
- Environmental & Social Safeguards Policy
- Grievance Redressal Policy
- Whistleblower Policy
- Double Counting Prevention Policy

**Section 3: Risk Management Framework**
Intro paragraph, then accordion items for the 8 risk categories (Additionality, Permanence, Leakage, MRV, Environmental, Social, Regulatory, Reputational), each showing Risk + Mitigation points.

**Closing: Carbon Integrity & Claims Statement**
Full statement in a transparent white textbox with approval details. Deduplicated -- appears only once at the bottom.

---

## 5. Update About Page Styling (`src/pages/AboutPage.tsx`)

Apply the same transparent white textbox styling (`bg-foreground/[0.04] backdrop-blur-sm border border-foreground/10 rounded-2xl`) to the major content sections for visual consistency with the Expertise page.

---

## 6. Update Routes (`src/App.tsx`)

Add missing route imports and definitions:
- `/approach` -- ApproachPage
- `/expertise` -- ExpertisePage
- `/expertise/:slug` -- Remove (no longer needed, using anchors)
- `/governance` -- GovernancePage
- `/delivery` -- DeliveryPage
- `/projects` -- ProjectsPage
- `/team` -- TeamPage
- `/contact` -- ContactPage

---

## Files Changed

| File | Action |
|------|--------|
| `src/pages/ApproachPage.tsx` | Rewrite with 7 pillars content |
| `src/pages/ExpertisePage.tsx` | Rewrite as single anchored page |
| `src/pages/GovernancePage.tsx` | Rewrite with 3-section accordion layout |
| `src/pages/AboutPage.tsx` | Update styling to use transparent textboxes |
| `src/components/Navbar.tsx` | Update dropdown links to anchors, merge Gov/Risk tab |
| `src/App.tsx` | Add all missing routes |

---

## Technical Notes

- The accordion component from `@radix-ui/react-accordion` is already installed and available at `src/components/ui/accordion.tsx`
- Anchor navigation on the Expertise page will use hash links (`/expertise#section-id`) and a `useEffect` with `scrollIntoView` to handle smooth scrolling on page load
- All content is deduplicated: the Carbon Integrity & Claims Statement appears once, and repeated "holistic approach" paragraphs are consolidated

