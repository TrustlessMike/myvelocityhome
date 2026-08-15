export const SITE_URL = "https://www.myvelocitymortgage.com"

export const APPLICATION_URL = "https://myvelocity.my1003app.com/161982/register"

export const CompanyInfo = {
  legalName: "Velocity Home Loans Corp",
  name: "Velocity Home Loans",
  address: "203 Brookside Ln",
  city: "Brighton",
  state: "MI",
  zip: "48116",
  phone: "(248) 974-8711",
  phoneHref: "tel:2489748711",
  email: "info@myvelocitymortgage.com",
  nmls: "2706011",
  nmlsUrl: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2706011",
  zillowUrl: "https://www.zillow.com/lender-profile/samine186/",
  linkedInUrl: "https://www.linkedin.com/company/velocity-home-loans",
  reviewCount: 111,
  ratingValue: "5.0",
  geo: {
    latitude: 42.4677403,
    longitude: -83.7826492,
  },
  hours: [
    { days: "Monday - Friday", hours: "8:00am - 8:00pm ET", schema: "Mo,Tu,We,Th,Fr 08:00-20:00" },
    { days: "Saturday", hours: "9:00am - 1:00pm ET", schema: "Sa 09:00-13:00" },
    { days: "Sunday", hours: "Closed", schema: null },
  ],
  licensedIn: ["Michigan", "Florida"] as const,
}

export const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.0533139221244!2d-83.7826492!3d42.4677403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882334c7c4b9b8b7%3A0x6f5a9b8f6a1a7d8a!2s203%20Brookside%20Ln%2C%20Brighton%2C%20MI%2048116!5e0!3m2!1sen!2sus!4v1617304123456!5m2!1sen!2sus"

export type TeamMemberRecord = {
  id: string
  name: string
  title: string
  email: string
  phone: string
  nmls: string
  bio: string
  imageSrc: string
  reviewsUrl?: string
  applicationUrl?: string
}

export const teamMembers: TeamMemberRecord[] = [
  {
    id: "sam",
    name: "Sam Amine",
    title: "President & CEO",
    email: "sam@myvelocitymortgage.com",
    phone: "(248) 974-8711",
    nmls: "161982",
    bio: `I'm a seasoned Mortgage Broker with 24 years of experience and a steadfast commitment to dual fiduciary responsibility: delivering the best possible financing solutions for my clients while ensuring my company originates high-quality, high-performing loans. I bring a strategic mindset, deep industry knowledge, and a leadership-driven approach that consistently creates value across my network.

For me, leadership isn't just a title—it's the foundation of everything. I believe organizational success hinges on the ability to lead with clarity, integrity, and vision. I'm constantly reflecting on what could've been done better last month or last year to move the needle today—and more importantly, I'm always thinking forward: What can we do now to drive sustainable success tomorrow?

I lead by example and foster a culture of empowerment, helping my team tap into their strengths and grow into the best versions of themselves. My mission is to extend my influence across the industry by combining experience, strategic thinking, and forward-focused leadership to fuel both individual and organizational growth.

"Build your own dreams, or someone else will hire you to build theirs."
"The best time to plant a tree was 20 years ago. The second best time is now."`,
    imageSrc: "/sam-amine.webp",
    reviewsUrl: "https://www.zillow.com/lender-profile/samine186/",
    applicationUrl: "https://myvelocity.my1003app.com/161982/register",
  },
  {
    id: "christa",
    name: "Christa Spencer",
    title: "Senior Mortgage Consultant",
    email: "christa@myvelocitymortgage.com",
    phone: "(248) 320-7066",
    nmls: "533751",
    bio: "Christa Spencer brings over a decade of expertise in the mortgage industry, with a passion for helping clients navigate the complexities of home financing. As a dedicated mortgage professional, she specializes in creating personalized loan solutions that align with her clients' unique financial goals and circumstances. Christa is known for her exceptional communication skills and ability to simplify the mortgage process, making it accessible and stress-free for first-time homebuyers and experienced homeowners alike. Her commitment to client education ensures that borrowers understand every aspect of their mortgage options, empowering them to make confident decisions. With a reputation for responsiveness and attention to detail, Christa consistently delivers a seamless mortgage experience from application to closing.",
    imageSrc: "/christa-spencer.webp",
    applicationUrl: "https://myvelocity.my1003app.com/533751/register",
  },
  {
    id: "robert",
    name: "Robert Jastrzebski",
    title: "Senior Loan Officer",
    email: "rob@myvelocitymortgage.com",
    phone: "(734) 748-2416",
    nmls: "2654571",
    bio: `I've been working in client-based solutions for over 15 years, and what drives me is keeping things straightforward, saving my clients money, reducing stress, and being transparent every step of the way. I believe in educating when needed, so you always understand the 'why' behind the decisions we make together.

For me, building relationships is the key to finding the best solutions. I take the time to listen, understand your goals, and then figure out the smartest way forward.

I live here in Brighton with my wife, Bridgette, who teaches in the community, and our three kids—Adalynn, Robby, and Ben. Brighton has been home for the past five years, and it's important to me to serve my clients with the same care and honesty I'd want for my own family.`,
    imageSrc: "/robert-jastrzebski.webp",
    applicationUrl: "https://myvelocity.my1003app.com/2654571/register",
  },
]

export type LoanProduct = {
  slug: string
  title: string
  shortTitle: string
  href: string
  description: string
  features: string[]
  intro: string
  body: string[]
  whoItsFor: string[]
  faqs: { q: string; a: string }[]
}

export const loanProducts: LoanProduct[] = [
  {
    slug: "conventional",
    title: "Conventional Mortgage Loans",
    shortTitle: "Conventional Loans",
    href: "/loans/conventional",
    description: "Traditional mortgage loans with competitive rates and flexible terms for primary and secondary homes.",
    features: ["Down payments as low as 3%", "Fixed and adjustable rates", "Primary and secondary homes"],
    intro:
      "A conventional loan is a mortgage that is not insured or guaranteed by the federal government. Velocity shops wholesale lenders so Brighton, Michigan, and Florida buyers can compare conforming programs in one conversation.",
    body: [
      "Most Velocity clients start here. Conventional financing works for first-time buyers who can put 3% down, move-up buyers who want to keep PMI temporary, and homeowners who prefer a 15- or 30-year fixed payment they can plan around.",
      "Because we are a licensed mortgage broker, we are not limited to one bank's rate sheet. We compare overlays, credit requirements, and closing-cost credits across wholesale partners and explain the tradeoffs in plain language before you apply.",
      "If your credit, reserves, or property type sit outside a retail bank's comfort zone, a conventional wholesale program is often still available. We will tell you that before you write an offer, not after you are under contract.",
    ],
    whoItsFor: [
      "Buyers with a down payment of 3% or more",
      "Homeowners refinancing a conforming balance",
      "Primary residences, second homes, and some investment properties",
    ],
    faqs: [
      {
        q: "How much do I need down on a conventional loan?",
        a: "Many first-time buyers qualify with 3% down. Putting 20% down removes private mortgage insurance. We will price both so you can see the monthly difference.",
      },
      {
        q: "Is a conventional loan better than FHA?",
        a: "It depends on credit, down payment, and how long you will keep the loan. Conventional PMI can be removed later; FHA mortgage insurance usually cannot. We run both when it is close.",
      },
    ],
  },
  {
    slug: "fha",
    title: "FHA Loans",
    shortTitle: "FHA Loans",
    href: "/loans/fha",
    description: "Government-backed loans with more flexible qualification requirements for first-time buyers.",
    features: ["Down payments as low as 3.5%", "Lower credit score options", "Built for first-time buyers"],
    intro:
      "FHA loans are insured by the Federal Housing Administration. They are often the right path when you have a smaller down payment, a shorter credit history, or recent financial recovery.",
    body: [
      "FHA is not a consolation prize. For many Michigan and Florida first-time buyers, it is the program that lets you compete for a home without waiting years to save 20%. Down payments start at 3.5% for qualified borrowers.",
      "Velocity still shops the rate. FHA pricing varies by lender overlay, and a broker can compare those overlays instead of sending you to a single retail desk. We will also be honest when conventional is cheaper over the life of the loan.",
      "FHA works for purchases and some streamlines. Property condition standards are stricter than conventional, so we coordinate with your agent early if the house needs work.",
    ],
    whoItsFor: [
      "First-time buyers with 3.5% down",
      "Borrowers rebuilding credit after a hardship",
      "Buyers who need more flexible debt-to-income guidelines",
    ],
    faqs: [
      {
        q: "Can I use an FHA loan if I have already owned a home?",
        a: "Yes. FHA is popular with first-time buyers, but it is not limited to them. Eligibility depends on occupancy, credit, and the property.",
      },
      {
        q: "Does FHA require mortgage insurance?",
        a: "Yes. FHA loans include an upfront premium and annual mortgage insurance. We will show you that cost next to a conventional quote before you choose.",
      },
    ],
  },
  {
    slug: "va",
    title: "VA Loans",
    shortTitle: "VA Loans",
    href: "/loans/va",
    description: "Loans for veterans, active military, and eligible spouses with no down payment and no PMI.",
    features: ["No down payment required", "No PMI required", "Competitive interest rates"],
    intro:
      "VA loans are guaranteed by the U.S. Department of Veterans Affairs. Eligible veterans, active-duty service members, and surviving spouses can often buy with $0 down and no monthly PMI.",
    body: [
      "If you have earned a VA entitlement, using it is usually the lowest-cash way to buy a primary home in Michigan or Florida. Velocity helps you confirm remaining entitlement, Certificate of Eligibility, and occupancy rules before you shop.",
      "No down payment does not mean no planning. We still walk through residual income, funding fees, and whether a seller credit or lender credit is the better way to cover closing costs.",
      "VA appraisals include a minimum property requirement. We work with your realtor so inspection timing and repairs do not surprise you in underwriting.",
    ],
    whoItsFor: [
      "Veterans and active-duty service members",
      "Eligible surviving spouses",
      "Buyers who want to keep cash for the move instead of a down payment",
    ],
    faqs: [
      {
        q: "Do I need a down payment on a VA loan?",
        a: "Most eligible borrowers can finance 100% of the purchase price on a primary residence. Funding fees and closing costs still apply unless they are paid by a credit.",
      },
      {
        q: "Can I use a VA loan more than once?",
        a: "Often yes, depending on remaining entitlement and whether a prior VA loan has been paid off. We check entitlement before you write an offer.",
      },
    ],
  },
  {
    slug: "jumbo",
    title: "Jumbo Loans",
    shortTitle: "Jumbo Loans",
    href: "/loans/jumbo",
    description: "Financing for high-value properties above conforming loan limits.",
    features: ["Higher loan amounts", "Competitive jumbo pricing", "Multiple term options"],
    intro:
      "Jumbo loans finance amounts above the conforming limit. They are common for higher-priced homes in Southeast Michigan and across licensed Florida markets.",
    body: [
      "Jumbo is a different conversation than a $300,000 conforming loan. Lenders look harder at reserves, credit depth, and the property itself. Velocity prepares that file before it hits underwriting.",
      "We compare jumbo fixed and ARM structures so you are not locked into a 30-year payment if a 7-year ARM or 15-year fixed is a better fit for how long you will keep the house.",
      "Because jumbo overlays change quickly, a broker who shops multiple wholesale desks can matter more here than on a standard conforming purchase.",
    ],
    whoItsFor: [
      "Buyers above the conforming loan limit",
      "Homeowners refinancing a jumbo balance",
      "Borrowers with strong reserves who want to keep cash invested",
    ],
    faqs: [
      {
        q: "What counts as a jumbo loan?",
        a: "Any loan amount above the current conforming limit for the county. Limits change annually. We will confirm the number for your property before pre-approval.",
      },
      {
        q: "Are jumbo rates always higher?",
        a: "Not always. Strong credit and reserves can price competitively. We quote jumbo and conforming options when you are near the limit.",
      },
    ],
  },
  {
    slug: "refinance",
    title: "Refinance Options",
    shortTitle: "Refinance",
    href: "/loans/refinance",
    description: "Lower your rate, shorten your term, or tap home equity with a refinance built around your goals.",
    features: ["Rate-and-term refinance", "Cash-out refinance", "Streamline options when eligible"],
    intro:
      "A refinance should have a reason: a lower payment, a shorter term, or cash for a purpose you can name. Velocity prices the break-even before you pay for an appraisal.",
    body: [
      "Rate-and-term refinances replace your current mortgage with a new loan on the same property. Cash-out refinances pull equity. FHA and VA also have streamline paths when you already have that loan type.",
      "We do not start with a product. We start with how long you will stay in the house, what the current note costs, and whether credits or a slightly higher rate produce a better net result.",
      "Michigan and Florida homeowners use Velocity for both payment cuts and equity access. If keeping the current loan is smarter, we will say so.",
    ],
    whoItsFor: [
      "Homeowners whose rate is above today's market",
      "Borrowers who want to drop PMI or shorten the term",
      "Owners who need structured cash-out for a defined purpose",
    ],
    faqs: [
      {
        q: "How do I know if refinancing is worth it?",
        a: "We calculate closing costs against monthly savings and the months you expect to keep the loan. If the break-even is longer than you will stay, we recommend waiting.",
      },
      {
        q: "Can I refinance if I have little equity?",
        a: "Sometimes, especially with FHA or VA streamline options. Conventional cash-out needs more equity. We check the actual program rules for your note.",
      },
    ],
  },
]

export type AreaPage = {
  slug: string
  href: string
  title: string
  heading: string
  description: string
  intro: string
  body: string[]
  cities: string[]
}

export const areaPages: AreaPage[] = [
  {
    slug: "brighton-mi",
    href: "/brighton-mi",
    title: "Brighton MI Mortgage Broker",
    heading: "Mortgage help in Brighton, Michigan",
    description:
      "Velocity Home Loans is a Brighton mortgage broker at 203 Brookside Lane. Call (248) 974-8711 for conventional, FHA, VA, jumbo, and refinance options.",
    intro:
      "Velocity is based in Brighton, not a national call center. Sam Amine and the team live and close loans in Livingston County, so pre-approval, local realtor timing, and in-person meetings are part of the same process.",
    body: [
      "Buyers in Brighton, Howell, Hartland, and Genoa Township often need a two-day pre-approval to write an offer. That is a normal Velocity request, not a special exception. We collect the file, shop wholesale lenders, and put a number in writing you can send to your agent.",
      "The office is at 203 Brookside Lane. You can schedule a 30-minute phone consult or come in. Saturday hours run 9am to 1pm ET for people who cannot call during the workweek.",
      "If you are relocating into Brighton from elsewhere in Michigan or from Florida, we already originate in both states. You do not need a second broker for the move.",
    ],
    cities: ["Brighton", "Howell", "Hartland", "Genoa Township", "Livingston County"],
  },
  {
    slug: "michigan",
    href: "/michigan",
    title: "Michigan Mortgage Broker",
    heading: "Licensed Michigan mortgage broker",
    description:
      "Velocity Home Loans is a licensed Michigan mortgage broker offering conventional, FHA, VA, jumbo, and refinance loans with Brighton-based loan officers.",
    intro:
      "Velocity is licensed in Michigan and works statewide from Brighton. You get a named loan officer, wholesale rate shopping, and a local team that answers the phone.",
    body: [
      "Michigan buyers deal with lake-effect timing, township inspections, and offer wars in Southeast Michigan. A broker who can turn a pre-approval quickly and explain overlays is more useful than a logo on a rate ad.",
      "We originate conventional, FHA, VA, jumbo, and refinance loans. If a retail bank already gave you a quote, bring it. We will compare it to wholesale pricing and tell you whether shopping is worth it.",
      "NMLS #2706011. Confirm licensing on NMLS Consumer Access. Equal Housing Opportunity.",
    ],
    cities: ["Detroit metro", "Ann Arbor", "Lansing", "Grand Rapids", "Northern Michigan second homes"],
  },
  {
    slug: "florida",
    href: "/florida",
    title: "Florida Mortgage Broker",
    heading: "Licensed Florida mortgage lending",
    description:
      "Velocity Home Loans is licensed in Florida as well as Michigan. Get a named loan officer for Florida purchases, refinances, and second homes.",
    intro:
      "Velocity is licensed in Florida, so snowbirds, relocations, and Florida primary-home purchases stay with the same team that already knows your Michigan file.",
    body: [
      "Florida lending has its own insurance, condo, and flood conversations. We do not pretend those are identical to a Brighton township purchase. We collect the association docs, insurance quotes, and occupancy story up front.",
      "You still work with Sam, Christa, or Robert. There is no handoff to an anonymous Florida desk. Application, underwriting questions, and closing coordination stay in one thread.",
      "If you are keeping a Michigan home and buying in Florida, we can look at both pictures so the new payment and the old mortgage are planned together.",
    ],
    cities: ["Florida primary homes", "Second homes", "Relocations from Michigan"],
  },
]

export const homeFaqs = [
  {
    q: "Is Velocity Home Loans a lender or a broker?",
    a: "Velocity is a licensed mortgage broker. We shop wholesale lenders instead of originating from a single bank rate sheet.",
  },
  {
    q: "Where is the office?",
    a: "203 Brookside Lane, Brighton, Michigan 48116. Call (248) 974-8711 or use the contact form to schedule a 30-minute consult.",
  },
  {
    q: "Which states are you licensed in?",
    a: "Michigan and Florida. Confirm current licensing on NMLS Consumer Access, NMLS #2706011.",
  },
]

export const navLinks = [
  { href: "/team", label: "Our Team" },
  { href: "/loans", label: "Loan Options" },
  { href: "/calculator", label: "Calculator" },
  { href: "/contact", label: "Contact" },
] as const

export function fullAddress() {
  return `${CompanyInfo.address}, ${CompanyInfo.city}, ${CompanyInfo.state} ${CompanyInfo.zip}`
}
