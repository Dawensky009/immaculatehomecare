

# "Join Our Team" - Careers Page and Home Section

## What We're Building

1. **A new "Join Our Team" section on the home page** -- an eye-catching banner placed between the Testimonials and Our Services sections that invites CNAs, HHAs, LPNs, and RNs to apply. It will have a button that takes visitors to a dedicated careers page.

2. **A separate Careers / Apply page** (`/careers`) with:
   - A hero section with a compelling headline about joining the team
   - Benefits of working at Immaculate Home Care (competitive pay, flexible schedules, supportive team, etc.)
   - Open positions listed (CNA, HHA, LPN, RN)
   - A full application form

3. **Application form fields:**
   - Full Name
   - Phone Number
   - Email Address
   - Position applying for (CNA / HHA / LPN / RN -- select one)
   - Years of experience (dropdown or number input)
   - Certifications/Licenses held (checkboxes)
   - Are you authorized to work in the US? (Yes/No)
   - Briefly describe your caregiving experience (text area)
   - Preferred work schedule (Full-time / Part-time / Per Diem)
   - Preferred contact method (Phone / Email)
   - Submit button
   - Full client-side validation on required fields

---

## Technical Details

### Setting Up Routing

The app currently renders everything directly in `App.tsx` with no router. We need to add `react-router-dom` (already installed) to support two pages:

- **`/`** -- The existing home page (all current sections)
- **`/careers`** -- The new careers/application page

**Files to modify:**

- **`src/App.tsx`** -- Wrap content in `BrowserRouter` with `Routes` and `Route`. Move the current home page content into a new `HomePage` component, add a route for `/careers`.

- **`src/components/Navbar.tsx`** -- Add a "Join Our Team" link that navigates to `/careers` using React Router's `Link` or `useNavigate`. Update the scroll logic so that if a user is on the careers page and clicks a home-section link (like "Services"), it navigates back to `/` first.

- **`src/components/SiteFooter.tsx`** -- Add a "Careers" link in the footer quick links.

### New Files to Create

- **`src/pages/HomePage.tsx`** -- Extracts the current home page layout (all existing sections) into its own page component.

- **`src/components/JoinOurTeam.tsx`** -- The new home page section (banner/CTA). Features:
  - Dark navy or gradient background to stand out
  - Headline: "Join Our Team of Compassionate Caregivers"
  - Short description about career opportunities
  - Role badges showing CNA, HHA, LPN, RN
  - A prominent "Apply Now" button linking to `/careers`

- **`src/pages/CareersPage.tsx`** -- The full careers page with:
  - Navbar at the top (reused)
  - Hero banner with headline and background styling
  - "Why Work With Us" benefits grid (4-6 benefit cards)
  - Open positions section listing roles
  - The application form
  - Footer at the bottom (reused)

- **`src/components/ApplicationForm.tsx`** -- The job application form component with all fields listed above, client-side validation, and a success toast on submission.

### Section Order on Home Page (Updated)
1. Navbar
2. Hero Slider
3. Sliding Banner
4. Who We Serve
5. Bento Grid
6. Care Team
7. Testimonials
8. **Join Our Team (NEW)**
9. Our Services
10. Why Choose Us
11. Our Commitment
12. Contact Form
13. Footer

