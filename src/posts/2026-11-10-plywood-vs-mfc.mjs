import { t } from "../lib/html.mjs";
export default {
  id: "plywood-vs-mfc", markets: ["uk", "ae"], category: "Materials and construction", img: "b26-close-drawer",
  published: "2026-11-10",
  slug: "plywood-vs-mfc-kitchen-carcass",
  title: "Plywood vs MFC Kitchen Carcasses: Which Lasts Longer?",
  description: "Plywood or chipboard (MFC)? How kitchen carcass materials compare on strength, moisture, screw holding, weight and cost, and which to specify.",
  excerpt: "The carcass is the part of a kitchen nobody sees and everybody relies on. Here is how plywood and MFC really compare, and when each makes sense.",
  keypoints: m => [
    "Plywood holds screws and hinges better than MFC and recovers far better from water.",
    "MFC (melamine-faced chipboard) is cheaper and very flat, but swells permanently if water gets into a cut edge.",
    t(m, { uk: "For rental, student and social housing, plywood's durability usually pays back over the kitchen's life.", ae: "In the Gulf's humid coastal air, and around sinks and dishwashers, plywood's moisture tolerance matters even more." }),
    "Every Sanyang construction uses a plywood carcass, from 12 mm UV-painted plywood on Contract to 18 mm on Prestige.",
  ],
  body: m => `
<p>Open any kitchen cabinet and you are looking at its carcass: the box of sides, base, top and back that carries the doors, drawers, worktop and everything stored inside. Buyers choose kitchens by the door, but they keep them, or replace them, because of the carcass. In ${t(m, { uk: "the UK", ae: "the UAE" })} the two materials you will meet most often are <strong>plywood</strong> and <strong>MFC</strong> (melamine-faced chipboard, also called particleboard).</p>
<h2>What is the difference?</h2>
<p><strong>Plywood</strong> is made from thin layers (plies) of real wood veneer, glued with the grain of each layer at right angles to the next. That cross-lamination makes it strong in every direction and stable when humidity changes.</p>
<p><strong>MFC</strong> is chipboard, made from wood chips and resin pressed into a board, then faced on both sides with a decorative melamine paper. It is flat, consistent and economical, which is why it dominates the budget end of the market.</p>
<h2>Strength and screw holding</h2>
<p>Hinges, drawer runners and wall-hanging brackets are all held by screws. In plywood, screws bite into continuous wood fibre, so they hold firmly and can be re-tightened. In chipboard, screws grip loose particles; overtighten one or work it loose a few times and the hole strips. That is the most common reason doors drop and drawers sag in older kitchens.</p>
<h2>Moisture: the real test</h2>
<p>Kitchens get wet: a leaking trap under the sink, steam from a dishwasher, a mopped floor against the plinth. Melamine faces are waterproof, but cut edges and drilled holes are not. Once water reaches the chipboard core it swells, and the swelling does not go down. Plywood can still be damaged by prolonged soaking, but it tolerates splashes and humidity far better and usually dries out without losing its shape.</p>
${t(m, { uk: "", ae: "<p>This is especially relevant in the UAE, where coastal humidity is high for much of the year and many apartments are air-conditioned to well below outdoor temperature, so condensation can form inside cabinets on exterior walls.</p>" })}
<h2>Weight, cost and sustainability</h2>
<p>Plywood is lighter than chipboard for the same strength, which helps on site and in shipping. MFC is cheaper per square metre, and for that reason many mass-market kitchens use it. Both can be made from certified timber; ask your supplier for FSC documentation and for E1 or CARB Phase 2 formaldehyde compliance whichever you choose.</p>
<table class="spec"><thead><tr><th></th><th>Plywood</th><th>MFC (chipboard)</th></tr></thead><tbody>
<tr><td><b>Screw and hinge holding</b></td><td>Excellent, can be re-tightened</td><td>Good when new, strips if over-tightened</td></tr>
<tr><td><b>Moisture tolerance</b></td><td>Good, recovers from splashes</td><td>Poor at cut edges, swelling is permanent</td></tr>
<tr><td><b>Weight</b></td><td>Lighter</td><td>Heavier</td></tr>
<tr><td><b>Cost</b></td><td>Higher</td><td>Lower</td></tr>
<tr><td><b>Typical life</b></td><td>20+ years</td><td>10 to 15 years, depending on use</td></tr></tbody></table>
<h2>Which should you specify?</h2>
<p>${t(m, { uk: "For a private-sale home where the first owner will replace the kitchen in ten years, a good MFC carcass can be adequate. For build-to-rent, student accommodation and social housing, where a landlord owns the kitchen for twenty years and tenants change often, plywood's durability usually pays back many times over.", ae: "For villas and premium apartments, plywood is the expected standard. For high-volume projects it is still worth comparing the life-cycle cost: replacing swollen sink bases after a few years is expensive, and disruptive for tenants and owners." })}</p>
<div class="callout"><p><b>How we build.</b> Every Sanyang construction uses a plywood carcass: 18 mm plywood on <a href="/construction/">Prestige, Slimline, Flex and Frameless</a>, and 12 mm UV-painted plywood on our value Contract construction. You can see each tier's full specification on our <a href="/construction/">construction page</a>.</p></div>`,
  faq: [["Is plywood better than chipboard for kitchen cabinets?", "For durability, yes: plywood holds screws better, is lighter for the same strength and copes far better with moisture. Chipboard (MFC) is cheaper and very flat, which is why it is common in budget kitchens."], ["Does MFC swell if it gets wet?", "The melamine face is waterproof, but if water reaches a cut edge or drilled hole the chipboard core swells, and the swelling is permanent."], ["What thickness should a kitchen carcass be?", "18 mm is the common standard for sides and bases. Some value constructions use 15 mm or, in plywood, 12 mm with a solid-wood face frame for rigidity."]],
};
