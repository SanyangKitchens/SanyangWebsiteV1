// The two sites built from this one codebase. Everything that differs between sanyang.co.uk and
// sanyang.ae lives here or in a page's `uk` / `ae` copy. Leave a value empty ("") to hide it.

const shared = {
  brand: "Sanyang Cabinetry",
  short: "Sanyang",
  proof: {
    years: "25+",
    containers: "500+",
    area: "85,000",
    people: "2,700+",
    finishes: "300",
    collections: "16",
    warrantyYears: "10",
  },
  whatsapp: "447955170009", // digits only, used for wa.me links
  whatsappDisplay: "+44 7955 170009",
  factories: [
    { country: "China", place: "Shouguang, Shandong", role: "Headquarters, R&D and main manufacturing campus" },
    { country: "Vietnam", place: "Tan Uyen, Binh Duong", role: "Precision joinery and specialist finishes" },
    { country: "Thailand", place: "Chonburi", role: "High-volume shaker and plywood production" },
  ],
  social: {
    linkedin: "", // e.g. "https://www.linkedin.com/company/sanyang-cabinetry"
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

export const markets = {
  uk: {
    ...shared,
    key: "uk",
    url: "https://sanyang.co.uk",
    lang: "en-GB",
    ogLocale: "en_GB",
    country: "United Kingdom",
    region: "UK and Ireland",
    areaServed: ["GB", "IE"],
    email: "sales@sanyang.co.uk",
    phone: "+44 7955 170009",
    phoneHref: "+447955170009",
    hours: "Monday to Friday, 8am to 6pm UK time",
    currency: "GBP",
    spelling: "uk",
    // Legal entity shown in the footer and the legal pages.
    company: {
      legalName: "Sanyang Cabinetry Limited",
      number: "13611409",
      registeredIn: "England and Wales",
      vat: "GB513235037",
    },
    tagline: "Kitchens made at source. Supplied at scale.",
    other: "ae",
  },
  ae: {
    ...shared,
    key: "ae",
    url: "https://sanyang.ae",
    lang: "en-AE",
    ogLocale: "en_AE",
    country: "United Arab Emirates",
    region: "UAE and the GCC",
    areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
    email: "sales@sanyang.ae",
    phone: "+971 50 473 7446",
    phoneHref: "+971504737446",
    hours: "Sunday to Friday, 9am to 7pm Gulf time",
    currency: "AED",
    spelling: "uk",
    company: {
      legalName: "Sanyang Cabinetry Trading LLC",
      number: "",
      registeredIn: "",
      vat: "",
    },
    // Showroom address. Leave empty until confirmed; the contact page and schema then omit it.
    showroom: { street: "Shop 6, Masaken, D78 Al Mateena Street", area: "Deira", city: "Dubai", country: "AE", full: "Shop 6, Masaken, D78 Al Mateena St, Deira, Dubai, United Arab Emirates" },
    tagline: "Kitchens and joinery, designed for you and made in our own factories.",
    other: "uk",
  },
};

export const MARKET_KEYS = Object.keys(markets);
