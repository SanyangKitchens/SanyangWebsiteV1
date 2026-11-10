import { t } from "../lib/html.mjs";
export default {
  id: "e1-carb", markets: ["uk", "ae"], category: "Materials and construction", img: "sy-fac3",
  published: "2026-11-06", slug: "e1-carb-p2-formaldehyde-kitchen-cabinets",
  title: "E1, CARB P2 and Formaldehyde: A Buyer's Guide",
  description: "What E1, CARB Phase 2 and TSCA Title VI mean for kitchen cabinets, how formaldehyde emissions are measured, and what documents to ask your supplier for.",
  excerpt: "Every wood-based board releases a little formaldehyde. Here is what the standards mean, and how to make sure your kitchens meet them.",
  keypoints: m => ["Formaldehyde is used in the resins that bind wood-based boards; emission standards cap how much a board may release.", "E1 (EN 717-1) is the European benchmark; CARB Phase 2 and TSCA Title VI are the stricter North American rules.", t(m, { uk: "The EU has introduced a tighter limit for furniture from August 2026; Northern Ireland and the Republic of Ireland follow EU rules.", ae: "UAE authorities and consultants commonly ask for E1 as a minimum in material submittals." }), "All Sanyang boards meet E1 and CARB Phase 2. Ask any supplier for test reports, not just a statement."],
  body: m => `
<p>Plywood, MDF and chipboard are held together by resins, and many of those resins contain formaldehyde. Small amounts are released into the air over time, most in the first months after manufacture. Emission standards set the limit, and specifying them is a simple way to protect residents and your reputation.</p>
<h2>E1</h2>
<p>E1 is the European emission class defined in EN 13986 and measured by the chamber method in EN 717-1. An E1 board must not exceed 0.1 ppm (0.124 mg/m³) of formaldehyde in the test chamber. It has been the de facto standard for kitchen and furniture boards in the UK and Europe for many years.</p>
<h2>CARB Phase 2 and TSCA Title VI</h2>
<p>California's Air Resources Board (CARB) set stricter limits for composite wood products, now adopted across the United States through TSCA Title VI. Limits are set by board type, for example 0.05 ppm for hardwood plywood and 0.11 ppm for MDF. Because we ship more than 500 containers a month to the US, our boards are made to these limits as standard.</p>
<h2>What is changing</h2>
${t(m, {
    uk: "<p>The European Union has introduced a lower limit of 0.062 mg/m³ for furniture and wood-based articles under REACH, applying from August 2026. Great Britain is not bound by it, but Northern Ireland and the Republic of Ireland follow EU product rules, and many UK specifiers are adopting the tighter figure anyway. Boards that meet CARB Phase 2 are generally well placed.</p>",
    ae: "<p>In the UAE, emission requirements are usually set through project specifications and consultant approvals. E1 is the common minimum; premium and hospitality projects increasingly ask for CARB Phase 2. Including the test report in your material submittal avoids delays at approval.</p>",
  })}
<h2>What to ask your supplier for</h2>
<ul><li>The emission class of each board type (carcass, doors, shelves, back panels)</li><li>Recent test reports from an accredited laboratory, not only a declaration</li><li>Chain-of-custody documents if FSC-certified timber is specified</li><li>Confirmation that edging adhesives and finishes are low-VOC</li></ul>
<div class="callout"><p><b>Our standard.</b> Every Sanyang board meets E1 (EN 13986 / EN 717-1) and CARB Phase 2 / TSCA Title VI. Test reports are available on request. See <a href="/quality/">quality and certifications</a>.</p></div>`,
  faq: [["What does E1 mean on kitchen cabinets?", "E1 is a European formaldehyde emission class for wood-based panels. An E1 board must not exceed 0.1 ppm (0.124 mg/m³) in the EN 717-1 chamber test."], ["Is CARB P2 stricter than E1?", "Yes. CARB Phase 2 sets lower limits by board type, for example 0.05 ppm for hardwood plywood."]],
};
