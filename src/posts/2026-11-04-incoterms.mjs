import { t } from "../lib/html.mjs";
export default {
  id: "incoterms", markets: ["uk", "ae"], category: "Projects and procurement", img: "sy-fac6",
  published: "2026-11-04", slug: "incoterms-exw-fob-cif-ddp-kitchen-imports",
  title: "EXW, FOB, CIF or DDP? Incoterms for Kitchen Buyers",
  description: "The four delivery terms you will see on a factory-direct kitchen quotation, who pays and carries the risk at each stage, and how to choose the right one.",
  excerpt: "The Incoterm on your quotation decides who books the ship, who pays the duty and who carries the risk. Here is a plain-English guide.",
  keypoints: m => ["Incoterms 2020 define who pays for and carries the risk of each stage of delivery.", "EXW and FOB suit buyers with their own freight forwarder; CIF moves sea freight to the seller; DDP is door-to-door.", t(m, { uk: "With DDP, UK import duty and VAT are included; with other terms you pay them on arrival (VAT can usually be accounted for through postponed VAT accounting).", ae: "UAE import duty is generally 5% of the CIF value, plus 5% VAT; with DDP these are included in the price." }), "Compare quotations on the same Incoterm, or you are not comparing like with like."],
  body: m => `
<p>Factory-direct kitchens are cheaper because there is no distributor in the middle. But someone still has to move the goods from the factory to your ${t(m, { uk: "site or warehouse", ae: "site or warehouse" })}. Incoterms are the internationally agreed rules (currently Incoterms 2020) that say who does what. These are the four you will see on our quotations.</p>
<h2>EXW: Ex works</h2>
<p>We pack the goods and make them available at our factory. You (usually through your freight forwarder) arrange collection, export clearance, sea freight, import clearance and delivery. It gives you the most control and usually the lowest quoted price, but you manage everything and carry the risk from the factory gate.</p>
<h2>FOB: Free on board</h2>
<p>We deliver the goods, export-cleared, onto the vessel at the port of origin. From that point the costs and risk are yours. FOB is popular with buyers who already have a forwarder and good sea-freight rates.</p>
<h2>CIF: Cost, insurance and freight</h2>
<p>We book and pay the sea freight and insurance to your chosen port${t(m, { uk: " in the UK or Ireland", ae: ", usually Jebel Ali" })}. Risk passes to you when the goods are loaded at origin, but you do not have to organise shipping. You handle import clearance, duty and final delivery.</p>
<h2>DDP: Delivered duty paid</h2>
<p>We deliver to your warehouse or site with import duty and clearance included. It is the simplest option: one price, one supplier, and the goods arrive ready to unload.</p>
<h2>Who does what</h2>
<table class="spec"><thead><tr><th>Stage</th><th>EXW</th><th>FOB</th><th>CIF</th><th>DDP</th></tr></thead><tbody>
<tr><td>Packing and loading at factory</td><td>Sanyang</td><td>Sanyang</td><td>Sanyang</td><td>Sanyang</td></tr>
<tr><td>Export clearance</td><td>Buyer</td><td>Sanyang</td><td>Sanyang</td><td>Sanyang</td></tr>
<tr><td>Sea freight and insurance</td><td>Buyer</td><td>Buyer</td><td>Sanyang</td><td>Sanyang</td></tr>
<tr><td>Import clearance, duty and VAT</td><td>Buyer</td><td>Buyer</td><td>Buyer</td><td>Sanyang</td></tr>
<tr><td>Delivery to site</td><td>Buyer</td><td>Buyer</td><td>Buyer</td><td>Sanyang</td></tr></tbody></table>
<h2>Duty and tax</h2>
<p>${t(m, { uk: "Kitchen cabinets are classified as HS 9403 40 (wooden kitchen furniture). Check the current UK Global Tariff rate for your commodity code with your customs broker. Import VAT is charged at 20%; VAT-registered businesses can usually use postponed VAT accounting to avoid paying it upfront at the border.", ae: "Kitchen cabinets are classified as HS 9403 40 (wooden kitchen furniture). Under the GCC common customs tariff, UAE import duty is generally 5% of the CIF value, and 5% VAT applies on import. Your clearing agent will confirm the figures for your shipment." })}</p>
<h2>Choosing the right term</h2>
<p>If you import regularly and have a forwarder, EXW or FOB usually gives the best total cost. If this is your first project with us, or you want one fixed delivered price, choose DDP. Whatever you choose, compare quotations from different suppliers on the same Incoterm.</p>
<div class="callout"><p>Every Sanyang quotation states its Incoterm, and we can quote more than one so you can compare. See <a href="/shipping-and-delivery/">shipping and delivery</a>.</p></div>`,
  faq: [["What does EXW mean on a quotation?", "Ex works: the seller makes the packed goods available at its factory, and the buyer arranges and pays for everything from there, including export clearance."], ["What is the difference between FOB and CIF?", "With FOB the buyer pays sea freight and insurance from the port of origin. With CIF the seller pays them to the destination port. In both, risk passes to the buyer when the goods are loaded at origin."]],
};
