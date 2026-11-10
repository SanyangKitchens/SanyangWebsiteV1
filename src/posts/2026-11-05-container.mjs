import { t } from "../lib/html.mjs";
export default {
  id: "container", markets: ["uk", "ae"], category: "Projects and procurement", img: "sy-fac8",
  published: "2026-11-05", slug: "how-many-kitchens-fit-in-a-container",
  title: "How Many Kitchens Fit in a Shipping Container?",
  description: "How many flat-packed kitchens fit in a 20ft or 40ft high-cube container, what changes the number, and how to plan container loads for a phased project.",
  excerpt: "About 35 kitchens in a 20ft and 80 in a 40ft high-cube, as a guide. Here is how the numbers work and how to plan your loads.",
  keypoints: ["As a guide, a 20ft container (about 33 m³) holds about 35 flat-packed kitchens; a 40ft high-cube (about 76 m³) about 80.", "The guide assumes mixed flat-packed carcasses and about 14 cartons per kitchen.", "Assembled framed cabinets, tall units and large islands reduce the count.", "Loading to a plan, by plot or by floor, matters as much as the total."],
  body: m => `
<p>It is one of the first questions on any ${t(m, { uk: "multi-plot scheme", ae: "project with more than a handful of units" })}: how many kitchens will one container carry, and how many containers will the project need? The answer depends on the kitchen, but there are reliable rules of thumb.</p>
<h2>The guide figures</h2>
<table class="spec"><thead><tr><th>Container</th><th>Usable volume</th><th>Cabinets</th><th>Kitchens</th></tr></thead><tbody><tr><td><b>20ft standard</b></td><td>about 33 m³</td><td>about 500</td><td>about 35</td></tr><tr><td><b>40ft high-cube</b></td><td>about 76 m³</td><td>about 1,150</td><td>about 80</td></tr></tbody></table>
<p>These assume mixed flat-packed carcasses and about 14 cartons per kitchen: a typical twelve-cabinet new-build layout like our <a href="/sample-kitchen/">sample kitchen</a>, plus panels, plinth and cornice.</p>
<h2>What changes the number</h2>
<ul><li><strong>Kitchen size.</strong> A studio kitchen of six units takes less than half the space of a family kitchen with an island and larder.</li><li><strong>Tall units.</strong> Larders and appliance housings are the bulkiest cartons.</li><li><strong>Assembled or flat-packed.</strong> Framed cabinets shipped assembled take much more space. Our Flex and Frameless constructions ship as a box plus a separate front set, which packs efficiently.</li><li><strong>Weight.</strong> Kitchens rarely hit a container's weight limit before its volume limit, but heavy worktops or appliances can.</li><li><strong>Extra products.</strong> Wardrobes, vanities and internal doors share the load and change the mix.</li></ul>
<h2>Plan the load, not just the count</h2>
<p>On a live site, the order of arrival matters. We label every carton with the order code, finish and your plot or unit reference, and load each container to a plan, so each kitchen comes off the truck together and in the order your installers need it. For phased programmes, loads are split by phase.</p>
<h2>A worked example</h2>
<p>${t(m, { uk: "A 120-plot scheme of two- and three-bed houses averages twelve cabinets per kitchen. At about 80 kitchens per 40ft high-cube, the whole scheme fits in two containers, which could be shipped in two phases to match the build programme.", ae: "A 300-apartment tower with compact kitchens of around eight cabinets could fit roughly 110 kitchens in a 40ft high-cube, so three containers, loaded floor by floor, cover the building." })}</p>
<div class="callout"><p>We plan every load and confirm the container count with your quotation. See <a href="/shipping-and-delivery/">shipping and delivery</a>.</p></div>`,
  faq: [["How many kitchen cabinets fit in a 40ft container?", "About 1,150 flat-packed cabinets, or about 80 typical kitchens, in a 40ft high-cube, as a guide."], ["How many kitchens fit in a 20ft container?", "About 35 typical flat-packed kitchens (about 500 cabinets)."]],
};
