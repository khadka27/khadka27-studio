ROLE
You are a senior award-winning creative frontend developer specializing in:
- Next.js
- TypeScript
- GSAP
- ScrollTrigger
- Lenis smooth scrolling
- advanced responsive layouts
- editorial portfolio design
- motion design
- high-performance interactive websites

TASK
Recreate the portfolio shown in the ATTACHED REFERENCE VIDEO as accurately as possible in Next.js.

The attached MP4 is the MAIN VISUAL SOURCE OF TRUTH.

Do not create a generic developer portfolio.
Do not simplify the design.
Do not replace the motion system with basic fade-in animations.
Do not randomly redesign sections.

I want the final website to feel extremely close to the reference in:
- layout
- proportions
- visual hierarchy
- spacing
- typography style
- black/off-white color system
- section transitions
- scroll behavior
- image treatments
- accordions
- project presentation
- hover effects
- page transitions
- curved elements
- cinematic motion
- overall premium editorial feel

The website should feel like a polished Awwwards-level creative portfolio.

==================================================
1. TECH STACK
==================================================

Build with:

- Latest stable Next.js
- App Router
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- Lenis for smooth scrolling
- next/image
- next/font
- Lucide React only when icons are necessary
- CSS/SVG for decorative elements
- no unnecessary UI framework
- no Bootstrap
- no Material UI
- no generic component-library appearance

Prefer GSAP for major motion instead of mixing several animation libraries.

Architecture must be production-quality.

==================================================
2. VISUAL DIRECTION
==================================================

The visual identity should closely match the video.

PRIMARY PALETTE

Off-white / warm white:
#F1F1EB or a visually equivalent warm neutral

Deep black:
#050505

Soft dark:
#101010

Muted grey:
#8D8D87

Border grey:
rgba(255,255,255,0.16) on dark sections
rgba(0,0,0,0.14) on light sections

Accent:
Use the subtle dark-red / burgundy accent visible in the reference only in places where the reference uses it.

Do NOT fill the website with gradients.

The design should rely primarily on:
- typography
- imagery
- spacing
- contrast
- motion
- thin borders
- editorial composition

==================================================
3. TYPOGRAPHY
==================================================

The reference combines:

1. Extremely large condensed display typography
2. Elegant editorial serif typography
3. Clean neutral body typography

Use close web-safe / Google Font equivalents such as:

DISPLAY:
Anton
or another very close condensed bold display face.

EDITORIAL SERIF:
Instrument Serif
Bodoni Moda
Cormorant Garamond
or the closest visual match.

BODY:
Inter
Manrope
or a similar neutral sans-serif.

Use next/font.

Hero headings must be massive and tightly spaced.

Desktop hero heading:
approximately clamp(5rem, 10vw, 11rem)

Section headings:
clamp(3rem, 7vw, 8rem)

Body text should remain relatively small and refined.

Typography must scale fluidly.

==================================================
4. GLOBAL MOTION PHILOSOPHY
==================================================

The reference website feels cinematic rather than "animated for the sake of animation."

Follow these principles:

- smooth easing
- restrained motion
- long elegant transitions
- scroll-linked movement
- clipping/masking
- parallax
- image scale
- text reveal
- curved section transitions
- staggered entrances
- scrolling marquees
- pinned sequences where appropriate

Recommended easing:

power2.out
power3.out
power4.inOut
expo.out
circ.inOut

Avoid bouncy animations.

Most entrance duration:
0.8–1.4 sec

Section transitions:
1–1.6 sec

Small hover transitions:
250–450ms

==================================================
5. CUSTOM CURSOR
==================================================

Desktop should have a subtle custom cursor.

Default:
small circular pointer.

Over clickable project:
expand approximately 50–70px
display:
VIEW

Over links:
slightly enlarge.

Use mix-blend-mode only if it visually works.

Hide custom cursor on:
- mobile
- touch devices
- reduced-motion preference

==================================================
6. INTRO / PRELOADER
==================================================

Reproduce the unusual opening transition from the video.

START:

Full viewport is black.

At the bottom center there is an off-white curved / elliptical shape.

The cream shape begins as a shallow curved arc.

It rapidly expands upward until it covers the entire screen.

Implementation idea:

Create a full-screen fixed loader.

Inside:
an absolutely positioned off-white ellipse approximately:

width: 160vw
height: 130vh
left: 50%
bottom: -110vh
transform: translateX(-50%)

Animate the ellipse upward / scale it so the curved top moves through the viewport.

Timeline:

0.0s
black screen

0.15–0.8s
off-white curved surface rises from bottom

0.8–1.25s
off-white fills viewport

1.2–1.8s
hero interface reveals

Use GSAP.

Do NOT use a generic percentage counter unless one exists in the reference.

Once complete:
remove loader from pointer interaction.

The reveal must feel smooth at 60fps.

==================================================
7. HEADER / NAVIGATION
==================================================

Header sits over the hero.

Desktop:

LEFT:
small circular monogram/logo

beside it:
very small identity/title text.

RIGHT:
Works
About
Contact

then black rounded Resume button.

Header should be minimal with lots of negative space.

Use:
position:absolute initially

When appropriate during scrolling:
optionally transition to a compact sticky form.

Resume button:
black background
white text
pill shape

Hover:
invert or slightly scale.

Navigation links use small typography.

Clicking navigation links should smooth-scroll to sections.

==================================================
8. HERO SECTION
==================================================

Recreate the hero seen at the start of the reference.

Full viewport minimum.

Warm off-white background.

Main visual hierarchy:

HUGE NAME ACROSS THE TOP/MIDDLE.

Example data:

YOUR NAME

Do not hardcode portfolio owner details throughout components.

Create:

src/data/portfolio.ts

Example:

export const portfolio = {
  name: "YOUR NAME",
  firstName: "YOUR",
  lastName: "NAME",
  role: "Designer & Developer",
  availability: "AVAILABLE FOR WORK",
  availabilityDate: "JAN'2026",
  ...
}

==================================================
HERO LAYOUT
==================================================

Desktop:

Massive name heading spans almost full viewport width.

Center/bottom:
portrait photograph.

Portrait:
- approximately 230–320px wide
- portrait ratio
- black & white
- subtle border radius
- object-fit cover

LEFT COLUMN:
small arrow icon
short personal statement such as:

"Motivated to work globally and
create digital work that is
thoughtful, refined, and
built to make a difference."

Below:
rotating circular scroll indicator.

RIGHT BOTTOM:
AVAILABLE FOR WORK
large date:
JAN'2026

Replicate the asymmetrical editorial placement visible in the reference.

==================================================
HERO ANIMATIONS
==================================================

After preloader:

1. Navigation fades down into position.
2. Name reveals from a clipping container.

For title:
overflow:hidden

characters/words animate:
yPercent: 110 -> 0

with approximately:
0.04–0.08 sec stagger.

3. Portrait:
clip-path:
inset(100% 0 0 0)
to:
inset(0% 0 0 0)

plus:
scale:1.08 -> 1

4. Left copy fades upward.

5. Availability/date fades upward last.

6. Circular scroll text continuously rotates slowly.

On scroll through hero:

- portrait translates slightly slower than page
- name shifts subtly
- supporting text has very light parallax

Keep the effect restrained.

==================================================
9. LIGHT TO DARK CURVED SECTION TRANSITION
==================================================

One of the most important visual characteristics of the reference is the curved transition between light and black sections.

Do NOT use a basic straight horizontal section boundary.

Before the dark section:

create a huge black surface whose top border forms a wide elliptical/curved arch.

Possible implementation:

.dark-transition {
    position: relative;
}

.dark-transition::before {
    content:"";
    position:absolute;
    width:140%;
    height:200px;
    left:-20%;
    top:-100px;
    border-radius:50% 50% 0 0 / 100% 100% 0 0;
    background:#050505;
}

Animate this curve upward as it enters the viewport.

Alternative:
use an SVG elliptical path.

The curve should feel identical to the large sweeping sections seen in the video.

==================================================
10. "WHAT I DO" SECTION
==================================================

Full black section.

Large breathing room.

Top area:

LEFT:
small heading:
What I Do/

RIGHT:
large monochrome horizontal editorial image.

Below:
intro paragraph across a constrained width.

Then build THREE oversized accordion rows:

(01) UI/UX & Frontend
(02) Full-Stack Development
(03) Optimization

Each row:

left:
large number

middle:
large title

right:
small arrow/chevron

horizontal thin borders.

Desktop title approximately:
32–48px

==================================================
ACCORDION INTERACTION
==================================================

Default:
first row can be open.

When opened:

description expands smoothly.

Under description display individual capabilities such as:

UI/UX & Frontend:
- User-Centered UI/UX & Visual Hierarchy
- Figma, Wireframing & Interactive Prototyping
- HTML, CSS & JavaScript

Full-Stack Development:
- Next.js / React
- REST APIs
- Git / GitHub

Optimization:
- Performance Optimization
- Accessibility
- Technical SEO
- Responsive Design

Use GSAP height animation or CSS grid row animation.

Arrow rotates.

When changing accordion:
transition content rather than snapping.

Optional:
desktop image beside section changes subtly according to open item.

==================================================
11. CURVED CINEMATIC IMAGE MARQUEE
==================================================

After / around the service section the reference shows a wide moving strip of photographs inside a curved container.

Build a reusable:

<CurvedMarquee />

Features:

- horizontal image strip
- overflow hidden
- wide curved top and bottom edges
- dark background
- images continuously travel horizontally
- seamless looping
- subtle perspective
- thin outline
- cinematic aspect ratio

Use GSAP seamless loop.

Images:
approximately 250–350px wide on desktop.

gap:
8–16px.

Top/bottom container should appear slightly concave/arched.

Possible technique:

- oversized container
- clip-path elliptical polygon/mask
- SVG mask
OR
- curved pseudo elements layered over marquee.

Autoplay slowly.

On hover:
reduce animation speed.

On scroll:
apply slight horizontal velocity influence.

==================================================
12. WORK / PROJECTS SECTION
==================================================

Black background.

Small label:
My Works/

Show projects as large editorial case studies.

Do NOT use generic equal-sized cards.

Each project should feel individually art-directed.

Example projects:

SATHI
Smart Docs
Futsal Nepal Pro Zone
Sports and Luxury Car Collection
Song Playlist
etc.

Store all project data in:

src/data/projects.ts

Structure:

{
  slug,
  title,
  year,
  type,
  description,
  tools,
  roles,
  thumbnail,
  gallery,
  challenge,
  solution,
  designDetails,
  relatedProjects
}

==================================================
PROJECT CARD LAYOUT
==================================================

Each large project block contains:

project title

large mockup/image

description

metadata

technology/category tags

small index/year.

Alternate compositions slightly.

Images should dominate.

Use thin borders.

Tags:
small bordered pills.

==================================================
PROJECT CARD ANIMATION
==================================================

When entering viewport:

image wrapper:
clip-path inset(100% 0 0 0)
-> inset(0)

image:
scale 1.1 -> 1

title:
y:50 -> 0

metadata:
opacity 0 -> 1

On hover:

image scale:
1 -> 1.035

project arrow slides diagonally

custom cursor displays VIEW

Optional:
title letters shift minimally.

Click leads to:
/work/[slug]

==================================================
13. "BEHIND THE SCENES" SECTION
==================================================

Create the dark conceptual section shown in the video.

Centered composition.

Center:
dark abstract 3D / sculptural image.

Text:

BEHIND THE
Scenes/

Use white typography with a dark red accent on "Scenes".

Around image:
small floating skill pills such as:

Figma
Next.js
React
HTML
CSS
JavaScript
UI/UX
Wireframing
Prototyping
Git
Performance
Responsive Design
Accessibility
etc.

Pills:
subtle dark fill
thin grey outline

Animate them individually on enter:
opacity
scale
y

then add extremely slow floating movement.

Mouse movement:
slight parallax around centerpiece.

Do not overdo it.

==================================================
14. PROJECT DETAIL PAGE
==================================================

Build dynamic route:

app/work/[slug]/page.tsx

The project-detail pages should switch back to the light/off-white visual system exactly like the reference.

Desktop layout:

LEFT:
sticky information sidebar.

RIGHT:
project narrative/content.

LEFT SIDEBAR examples:

PROJECT
Song Playlist

ROLE
UI/UX Designer

SKILLS
Figma
Research
Frontend

YEAR
2026

CLIENT
...

Each section divided with very thin borders.

==================================================
DETAIL PAGE MAIN COLUMN
==================================================

Start with a large editorial quotation / project overview.

Use serif typography for the large statement.

Example:

"Song Playlist is a concept-based music streaming app redesign focused on improving user engagement and usability..."

Below:
paragraphs.

Then:
full-width project visual.

Then:
more images / components / design system examples.

Use large whitespace.

Include sections such as:

Overview
Problem
Research
Design Process
Components
Final Design
Outcome

But let the exact layout follow the reference video rather than becoming a standard UX case-study template.

==================================================
15. PROJECT DETAIL IMAGE INTERACTION
==================================================

Images should reveal on scroll using clip masks.

Add very subtle parallax.

Large image:
scale 1.05 -> 1 while scrolling.

Do not animate every element.

Create visual rhythm.

==================================================
16. RELATED WORKS
==================================================

At bottom of every case study:

heading:
Related Works

small link:
View all works →

Then two large project cards side by side.

Large visual thumbnail.

Below each:
small project metadata.

Hover:
image zoom
cursor VIEW
arrow movement.

Mobile:
stack vertically.

==================================================
17. PAGE TRANSITIONS
==================================================

Clicking a project should not immediately hard-cut.

Implement route transitions.

Use a full-screen overlay.

Transition idea:

Click project
→ black/off-white curved overlay grows from bottom
→ route changes
→ overlay exits upward
→ project title/image reveals.

Keep approximately:
700–1100ms.

Prevent double-clicking during transition.

==================================================
18. ABOUT SECTION
==================================================

Light/off-white section.

Heading:
About [Name]!

Small intro copy underneath.

Then large editorial photograph composition.

Reference style:

one vertical image on left
one large horizontal/group image on right

Images should have subtle reveal animations.

Use natural images rather than overly rounded cards.

==================================================
19. DESIGNER / CODER VISUAL
==================================================

Recreate the section visually demonstrating the portfolio owner's multidisciplinary profile.

Include labels such as:

Part designer
Part coder

Center:
minimal circular/pie visual.

Around it:
skills/roles.

Do not make it look like a dashboard chart.

It should feel like editorial visual design.

Animate the circle drawing/filling when entering viewport.

==================================================
20. EXPERIENCE SECTION
==================================================

Transition to black again using the same curved transition language.

Headline:

Where Ideas
Become Digital Experiences

Use subtle red accent on one phrase.

Desktop:

vertical experience timeline.

Left:
year / date

center:
vertical line

nodes

right:
job title/company/description.

Draw timeline line progressively with ScrollTrigger.

Each node appears when the line reaches it.

Experience item:
opacity 0 -> 1
y 25 -> 0.

Keep the layout elegant.

==================================================
21. CAPTURED MOMENTS
==================================================

Dark section.

Label:
Captured Moments!

First:
another curved horizontally moving photo strip.

Then:
large asymmetric image grid.

Use personal/lifestyle/event images.

Grid images should:
- use thin gaps
- mostly square/portrait
- reveal using clip path
- slight zoom on hover

Do not add unnecessary text cards.

==================================================
22. DARK CONTACT CTA
==================================================

Before main contact area create a large rounded dark panel.

Something similar to:

LET'S CONNECT

centered.

Huge breathing room.

Circular button under title.

Footer/social links near bottom.

Dark subtle texture/noise is okay.

Background:
#080808.

Panel corners:
very large radius 30–60px.

Entrance:
scale .97 -> 1
opacity -> 1

Title reveals vertically.

==================================================
23. MAIN CONTACT SECTION
==================================================

Return to light background.

This is another important reference section.

Large huge editorial serif heading:

LET'S MAKE IT HAPPEN

It should span wider than the viewport.

Use overflow:hidden.

Animate headline horizontally depending on scroll progress.

For example:
xPercent: 8 -> -14

with ScrollTrigger scrub.

==================================================
CONTACT GRID
==================================================

Two columns.

LEFT:
small text:
Send me an email

Then form fields:

Name

Role:
Designer
Developer
Marketing
Other

Email

Message

Submit button:
SEND

Minimal borders.

No overly rounded SaaS-style fields.

RIGHT:
large visual map.

If no Mapbox API key is available:
build a stylized static map/image placeholder matching the reference.

Optional:
support Mapbox if env variable exists:

NEXT_PUBLIC_MAPBOX_TOKEN

Map should be mostly desaturated/dark-grey with a few accent markers.

The website must still work without an API key.

==================================================
24. FOOTER
==================================================

Dark footer / card.

Large centered:
LET'S CONNECT

Email.

Social icons:
LinkedIn
GitHub
Instagram
etc.

Small copyright.

Back to top button.

Circular arrow animation.

==================================================
25. SCROLL BEHAVIOUR
==================================================

Use Lenis smooth scrolling.

Recommended:

duration around 1.1–1.3

smooth wheel scrolling.

Integrate Lenis correctly with GSAP ScrollTrigger.

Example architecture:

requestAnimationFrame
lenis.raf(time)

gsap.ticker.add()

ScrollTrigger.update()

Do not allow Lenis/GSAP synchronization bugs.

==================================================
26. SCROLLTRIGGER RULES
==================================================

Use ScrollTrigger only where it materially improves the motion.

Use it for:

- hero parallax
- curved transitions
- image reveal
- horizontal headline movement
- timeline drawing
- photo marquee influence
- section title reveals
- selected project storytelling

Avoid creating hundreds of ScrollTrigger instances.

Use gsap.context() and clean everything when component unmounts.

==================================================
27. TEXT REVEAL COMPONENT
==================================================

Build reusable:

<RevealText />

Support:

lines
words
characters

Example behavior:

wrapper overflow hidden.

child:
translateY(110%)
rotateX slightly

to:
translateY(0)

Use Intersection/ScrollTrigger.

Props:

text
mode
delay
stagger
className

==================================================
28. IMAGE REVEAL COMPONENT
==================================================

Build:

<RevealImage />

wrapper:
overflow:hidden

on reveal:

wrapper clip-path:
inset(100% 0% 0% 0%)
to:
inset(0%)

image:
scale 1.12
to 1.

Duration:
1–1.4 sec.

==================================================
29. SECTION TRANSITION COMPONENT
==================================================

Build reusable:

<CurvedSectionTransition
  from="light"
  to="dark"
/>

and:

<CurvedSectionTransition
  from="dark"
  to="light"
/>

It needs to reproduce the large elliptical wipe style visible throughout the reference.

==================================================
30. RESPONSIVE DESIGN
==================================================

Must look intentionally designed on:

1440px+
1280px
1024px
768px
430px
390px
360px

Do NOT simply shrink desktop.

==================================================
MOBILE HERO
==================================================

Name wraps intelligently.

Portrait becomes more prominent.

Supporting text repositions.

Availability moves below portrait.

Navigation turns into minimalist menu trigger if required.

==================================================
MOBILE ACCORDION
==================================================

Numbers and title remain visible.

Descriptions full width below.

No horizontal overflow.

==================================================
MOBILE PROJECTS
==================================================

One project at a time.

Image width:
100%.

Tags wrap.

Keep generous whitespace.

==================================================
MOBILE CONTACT
==================================================

Form first.

Map second.

Large headline remains dramatic but uses:
clamp()

Horizontal text animation must not create unwanted body overflow.

==================================================
31. MOBILE MENU
==================================================

If needed create full-screen menu.

Background:
black.

Large links:
WORK
ABOUT
CONTACT
RESUME

Staggered reveal.

Close icon top right.

Links animate vertically from hidden masks.

==================================================
32. ACCESSIBILITY
==================================================

Use semantic:

header
nav
main
section
article
footer

All project images need alt attributes.

Interactive elements keyboard accessible.

Visible focus states.

Accordion:
aria-expanded
aria-controls.

Respect:

prefers-reduced-motion

When reduced motion is enabled:
- disable Lenis
- disable parallax
- stop continuous animations
- use simple fades instead

==================================================
33. PERFORMANCE
==================================================

Target premium visual quality WITHOUT destroying performance.

Requirements:

- Next/Image
- responsive image sizes
- AVIF/WebP where possible
- lazy load images below fold
- priority only critical hero assets
- avoid excessive JavaScript
- dynamic-import very heavy animation sections if appropriate
- transform/opacity animations
- avoid layout-triggering animation
- use will-change selectively
- no huge unnecessary video backgrounds
- prevent CLS
- avoid scroll jank

Aim for:
90+ Lighthouse performance on a realistic production build where possible.

==================================================
34. SEO / METADATA
==================================================

Create metadata in Next.js.

Title:
[Name] — Designer & Developer

Description.

Open Graph metadata.

Twitter card.

Canonical.

favicon.

Generate:
sitemap.ts
robots.ts

Project detail pages should generate metadata dynamically.

Use semantic headings correctly.

Only one main H1 per page.

==================================================
35. FILE STRUCTURE
==================================================

Use a clean structure similar to:

app/
  layout.tsx
  page.tsx
  globals.css

  work/
    page.tsx
    [slug]/
      page.tsx

components/
  layout/
    Header.tsx
    Footer.tsx
    MobileMenu.tsx

  home/
    Preloader.tsx
    Hero.tsx
    WhatIDo.tsx
    CurvedMarquee.tsx
    WorkSection.tsx
    BehindScenes.tsx
    About.tsx
    Experience.tsx
    CapturedMoments.tsx
    Contact.tsx

  work/
    ProjectCard.tsx
    ProjectHero.tsx
    ProjectSidebar.tsx
    RelatedWorks.tsx

  motion/
    RevealText.tsx
    RevealImage.tsx
    CurvedTransition.tsx
    MagneticButton.tsx
    CustomCursor.tsx
    SmoothScroll.tsx
    PageTransition.tsx

data/
  portfolio.ts
  projects.ts

hooks/
  useLenis.ts
  useMediaQuery.ts

lib/
  gsap.ts
  utils.ts

public/
  images/
    portrait/
    projects/
    about/
    moments/

==================================================
36. DATA-DRIVEN CONTENT
==================================================

Do NOT repeat personal information directly in components.

Put it in data files.

portfolio.ts:

export const portfolioData = {
  name: "YOUR NAME",
  role: "UI/UX Designer & Developer",
  email: "hello@example.com",
  location: "Your Location",
  availability: "Available for work",
  availabilityDate: "JAN'2026",
  introduction: "...",
  socialLinks: {
    linkedin: "",
    github: "",
    instagram: ""
  }
}

services.ts or within portfolio data.

projects.ts handles project information.

This should allow me to replace portfolio information without changing layouts.

==================================================
37. MAGNETIC INTERACTIONS
==================================================

For selected circular buttons and Resume button add a subtle magnetic effect.

Mouse approaches button:
button content translates toward cursor around 4–8px.

On mouse leave:
spring smoothly back.

Do not apply magnetic behavior to every button.

==================================================
38. IMAGE HOVER
==================================================

Project image hover:

scale 1 -> 1.04

Duration:
700ms

Ease:
cubic-bezier(.2,.7,.2,1)

Overlay slightly changes brightness.

Project title/arrow reacts.

==================================================
39. LINK HOVER
==================================================

Navigation link:

text is clipped.

original label slides upward.

duplicate label enters from bottom.

Duration:
approximately 300ms.

This should create the premium rolling-text link hover visible in high-end portfolio sites.

==================================================
40. SCROLL INDICATOR
==================================================

Create circular text:

SCROLL TO EXPLORE • SCROLL TO EXPLORE •

around a small arrow.

Use SVG textPath or circular HTML layout.

Continuously rotate approximately one full rotation every 12–18 seconds.

==================================================
41. MICRO DETAILS
==================================================

Include:

- thin hairline borders
- tiny section indexes
- restrained uppercase metadata
- little arrows
- precise alignment
- asymmetric margins
- editorial line lengths
- intentional negative space
- slight image desaturation where applicable
- overflow clipping
- very subtle grain/noise texture where appropriate

Avoid:

- neon gradients
- giant glowing blobs
- glassmorphism
- generic developer-dashboard UI
- excessive cards
- excessive border radii
- random iconography
- colorful backgrounds
- generic Framer Motion template animations

==================================================
42. OPTIONAL GRAIN
==================================================

Create subtle site-wide noise overlay with CSS.

Opacity:
0.025–0.045.

pointer-events:none.

Do not make the website visibly dirty or grainy.

==================================================
43. DEVELOPMENT REQUIREMENTS
==================================================

Everything must run with:

npm install
npm run dev

No TypeScript errors.

No hydration errors.

No browser console errors.

No broken image paths.

No unfinished TODO components.

No fake imports.

No placeholder functions.

Do not give me pseudo code.

Implement the actual components.

==================================================
44. DESIGN ACCURACY WORKFLOW
==================================================

Before coding:

STEP 1
Analyze the reference video frame-by-frame.

Identify:
- section order
- typography
- relative sizes
- margins
- paddings
- color changes
- image positions
- animation direction
- animation timing
- scroll-linked sequences
- hover states
- route/page changes

STEP 2
Create the static layouts first.

STEP 3
Make layouts responsive.

STEP 4
Add animations.

STEP 5
Compare implementation against the attached reference again.

STEP 6
Correct spacing, scale, and animation timing.

Do not assume the first implementation is accurate.

==================================================
45. VISUAL TESTING
==================================================

After implementation:

capture screenshots at:

1440x900
1280x800
768x1024
390x844

Compare against corresponding moments from the reference.

Fix:

- typography scale
- spacing
- section height
- alignment
- image dimensions
- transition shape
- animation start/end positions

Repeat until close.

==================================================
46. IMPORTANT MOTION DETAILS FROM REFERENCE
==================================================

Pay special attention to these because they define the design:

A.
BLACK → CURVED CREAM INTRO WIPE

B.
MASKED GIANT HERO TYPOGRAPHY REVEAL

C.
MONOCHROME PORTRAIT HERO

D.
LARGE CURVED DARK SECTION TRANSITIONS

E.
NUMBERED SERVICE ACCORDION

F.
CURVED CINEMATIC PHOTO MARQUEES

G.
LARGE EDITORIAL PROJECT PRESENTATION

H.
SMALL TECH/SKILL PILLS

I.
CENTERED "BEHIND THE SCENES" COMPOSITION

J.
LIGHT CASE-STUDY PAGES WITH STICKY LEFT SIDEBAR

K.
RELATED WORKS LARGE IMAGE GRID

L.
LIGHT ABOUT SECTION

M.
DARK EXPERIENCE TIMELINE

N.
CURVED PERSONAL-PHOTO MARQUEE

O.
PHOTO COLLAGE / CAPTURED MOMENTS

P.
ROUNDED BLACK LET'S CONNECT PANEL

Q.
GIANT SERIF "LET'S MAKE IT HAPPEN" CONTACT HEADING

R.
SCROLL-LINKED HORIZONTAL CONTACT TITLE MOVEMENT

S.
EDITORIAL CONTACT FORM + MAP

==================================================
47. HOMEPAGE ORDER
==================================================

Use approximately:

1. Preloader
2. Header
3. Hero
4. Curved transition
5. What I Do
6. Curved photo marquee
7. My Works
8. Behind the Scenes
9. About
10. Designer/Coder visual
11. Experience timeline
12. Curved personal-image marquee
13. Captured Moments
14. Let's Connect dark CTA
15. Contact / Let's Make It Happen
16. Footer

Adjust section order only when the reference video clearly indicates otherwise.

==================================================
48. PROJECT ROUTES
==================================================

Create at least several demo project routes:

/work/sathi
/work/smart-docs
/work/futsal-nepal
/work/song-playlist
/work/car-collection

The content can initially use replaceable demo text/images.

However:
all layout and animation must be complete.

==================================================
49. IMPORTANT: DO NOT CHEAT
==================================================

Do not:

- make a single static screenshot
- use the reference video as a video background
- build only the hero
- skip case-study routes
- skip mobile
- skip animations
- use only CSS fade-ins
- fake scrolling with a canvas screenshot
- create generic cards and call it finished

Build the actual interactive website.

==================================================
50. FINAL QUALITY BAR
==================================================

The end result should look like a portfolio made by a professional creative designer/developer.

When somebody compares it side-by-side with the reference video, they should immediately recognize the same:

- visual language
- motion philosophy
- section composition
- typography hierarchy
- curved transitions
- black/off-white contrast
- editorial project layouts
- premium interaction design

It should NOT feel like a cheap template.

Prioritize accuracy over speed.

==================================================
51. START IMPLEMENTATION
==================================================

First:

1. inspect the complete attached reference video
2. summarize the section structure internally
3. create the Next.js project architecture
4. install required packages
5. create the global typography/color system
6. build the preloader and hero
7. continue through every section
8. create project-detail routes
9. implement responsive behavior
10. implement motion
11. test
12. refine against the video

Do not stop after creating a plan.

Proceed with the complete implementation.