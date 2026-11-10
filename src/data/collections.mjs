// The 16 door collections, construction tiers and specification data, taken from the
// Sanyang UK Trade Catalogue 2026 (factory-checked 28 Oct 2026). Door tiles come from catalogue.json.
import { readFileSync } from "node:fs";
export const CAT = JSON.parse(readFileSync(new URL("./catalogue.json", import.meta.url), "utf8"));

const framed = Object.fromEntries(CAT.framed.map(c => [c.code, c]));

// Construction tiers (catalogue p. "Construction & Compliance").
export const TIERS = [
  { key: "prestige", name: "Prestige", for: "Meridian, Lantern", frame: "19 mm solid wood", carcass: "18 mm plywood", drawer: "Solid wood, dovetailed, 64 mm sides", runners: "Soft-close undermount", hinges: "6-way adjustable, soft-close", interior: "Clear UV natural plywood", exterior: "Matching colour", shelves: "18 mm plywood", ship: "One box per cabinet",
    summary: "Our premium face-frame build: plywood carcass, painted solid-wood frame and dovetailed solid-wood drawers. Specified for show homes, premium private sale and owner-occupier homes." },
  { key: "slimline", name: "Slimline", for: "Filament (except FLM-02)", frame: "19 mm solid wood", carcass: "18 mm plywood", drawer: "Solid wood, dovetailed, 79 mm sides", runners: "Soft-close undermount", hinges: "6-way adjustable, soft-close", interior: "Clear UV natural plywood", exterior: "Matching colour", shelves: "18 mm plywood", ship: "One box per cabinet",
    summary: "The Prestige specification with a deeper drawer box, built to carry our narrow-rail Filament doors." },
  { key: "flex", name: "Flex", for: "Halcyon, Equinox, FLM-02", frame: "19 mm solid wood", carcass: "18 mm plywood", drawer: "Solid wood, dovetailed, 79 mm sides", runners: "Soft-close undermount", hinges: "6-way adjustable, soft-close", interior: "Clear UV natural plywood", exterior: "Natural plywood (exposed ends take end panels)", shelves: "18 mm plywood", ship: "Box plus a separate front set",
    summary: "One natural plywood carcass for every colour, with doors and drawer fronts packed as a separate front set. Ideal when a scheme mixes several colours across house types." },
  { key: "frameless", name: "Frameless", for: "Prism and all nine signature ranges", frame: "None, full access", carcass: "18 mm plywood, white melamine", drawer: "18 mm plywood, melamine", runners: "Soft-close undermount", hinges: "6-way adjustable, soft-close", interior: "White melamine", exterior: "White melamine", shelves: "18 mm plywood, melamine", ship: "Box plus a separate front set",
    summary: "European full-access construction with no face frame, so every centimetre inside is usable. The carcass behind Prism and all nine signature door ranges." },
  { key: "contract", name: "Contract", for: "Daylight", frame: "19 mm solid wood", carcass: "12 mm UV-painted plywood", drawer: "Plywood, rebate joint", runners: "Standard undermount", hinges: "6-way adjustable, standard", interior: "UV-painted plywood", exterior: "Matching colour", shelves: "18 mm MFC", ship: "One box per cabinet",
    summary: "A value carcass for volume housing, build-to-rent and student schemes, still with a solid-wood face frame and five-piece doors." },
];
export const TIER_ROWS = [["Collections", "for"], ["Face frame", "frame"], ["Carcass", "carcass"], ["Drawer box", "drawer"], ["Runners", "runners"], ["Hinges", "hinges"], ["Interior", "interior"], ["Exterior", "exterior"], ["Shelves", "shelves"], ["Ships as", "ship"]];

const cab = (code, o) => ({ group: "cabinet", code, tiles: framed[code].tiles, door: framed[code].tiles[0].img, ...o });
const rng = (code, o) => ({ group: "range", code, tier: "frameless", ...o });

export const COLLECTIONS = [
  cab("MRD", { slug: "meridian", name: "Meridian", sub: "Classic shaker", tier: "prestige", hero: "sy-white-shaker", door: "a/doors/framed/SW.jpg",
    material: "Five-piece solid-wood door with MDF centre panel", finish: "Painted",
    desc: "Our best-selling shaker in three versatile finishes. Five-piece solid-wood doors with an MDF centre panel, a painted solid-wood face frame and dovetailed solid-wood drawers: a premium specification for every kind of home.",
    long: ["Meridian is the kitchen buyers ask for by description before they know its name: a square-edged shaker with a clean recessed panel, painted to a smooth, even finish. It suits a period terrace as easily as a new-build family home, which is why it anchors so many of our housing schemes.", "Behind the door sits our Prestige construction. The carcass is 18 mm plywood rather than chipboard, the face frame is 19 mm solid wood, and the drawers are dovetailed solid wood on soft-close undermount runners. That is the build quality buyers notice when they open a drawer in a show home."],
    best: ["Show homes and premium private sale", "Owner-occupier family homes", "Classic and transitional schemes"] }),
  cab("EQX", { slug: "equinox", name: "Equinox", sub: "Double-step shaker", tier: "flex", hero: "sy-dsg", door: "a/doors/framed/DDW.jpg",
    material: "Five-piece solid-wood door with stepped double frame", finish: "Painted",
    desc: "A stepped double frame adds depth and shadow to the classic shaker door. Supplied on the Flex box: one plywood carcass for every colour, with the doors and drawer fronts packed as a separate front set.",
    long: ["Equinox takes the shaker a step further, literally: a second inner step in the frame catches the light and gives the door a richer, more tailored profile. In Pearl White it reads as crisp and bright; in Storm Grey it brings quiet depth to open-plan living.", "Because Equinox ships on our Flex construction, one natural plywood carcass serves every colour. Fronts travel as a separate set, so a developer can change a house type's colour late in the programme without re-ordering carcasses."],
    best: ["Mid-market and premium developments", "Schemes that offer buyers a colour choice", "Open-plan kitchen-living spaces"] }),
  cab("HLC", { slug: "halcyon", name: "Halcyon", sub: "Detailed shaker", tier: "flex", hero: "sy-navy", door: "a/doors/framed/NB.jpg",
    material: "Five-piece solid-wood door with a fine detail line", finish: "Painted and woodgrain",
    desc: "Shaker doors with a fine detail line, in eight finishes from deep Admiral Blue and Obsidian to the natural woodgrain of Heirloom Brown and Barnwood.",
    long: ["Halcyon is our colour collection. Eight finishes, from Shadow Grey and Cinder to Admiral Blue, Fir Green, Meadow and Obsidian, plus two natural woodgrains, give designers a full palette for statement islands, utility rooms and two-tone kitchens.", "A fine detail line inside the frame sharpens the shaker profile, and every finish is built on the same Flex carcass, so mixing two colours in one kitchen is as simple as ordering two front sets."],
    best: ["Two-tone kitchens and islands", "Boutique developments and refurbishments", "Utility rooms and boot rooms"] }),
  cab("FLM", { slug: "filament", name: "Filament", sub: "Narrow-rail shaker", tier: "slimline", hero: "sk-slim", door: "a/doors/framed/SWO.jpg",
    material: "Five-piece solid-wood door with narrow rails", finish: "Painted and natural oak",
    desc: "Narrow rails give a lighter, more contemporary shaker. Five finishes, including two natural oak tones. Fir Green (FLM-02) is supplied on the Flex box.",
    long: ["Filament slims the shaker frame down to a fine line, so the door reads as modern and architectural while keeping the warmth of a framed kitchen. Limed Oak and Cognac Oak bring real timber character; Pearl White and Obsidian give a crisp contrast.", "Filament is built on our Slimline construction, with a deeper 79 mm dovetailed drawer box, so it feels as considered inside as it looks outside."],
    best: ["Contemporary urban apartments", "Japandi and Scandi-style schemes", "Premium rental and build-to-rent"] }),
  cab("LTN", { slug: "lantern", name: "Lantern", sub: "Raised panel", tier: "prestige", hero: "sy-raised", door: "a/doors/framed/AW.jpg",
    material: "Five-piece solid-wood door with raised moulded panel", finish: "Painted and glazed",
    desc: "Traditional raised-panel doors with a moulded profile, for period homes and statement kitchens.",
    long: ["Lantern is our most traditional door: a raised, moulded centre panel that brings the character of a classic country or period kitchen. Linen White and Calico White are soft and timeless; Anthracite gives the same profile a dramatic modern edge.", "Lantern uses our Prestige construction, and pairs naturally with our cornice, dentil and rope mouldings, corbels and canopy hood surrounds for a fully furnished look."],
    best: ["Period properties and country homes", "Luxury villas and statement kitchens", "Heritage and conversion projects"] }),
  cab("PRM", { slug: "prism", name: "Prism", sub: "Frameless slab", tier: "frameless", hero: "sy-gloss", door: "a/doors/framed/OB.jpg",
    material: "Slab door: high gloss, matt, oak effect and glass", finish: "Gloss, matt, wood effect, glass",
    desc: "European full-access cabinets with flat slab fronts in high gloss, matt, oak-effect and glass-effect finishes. No face frame, so every centimetre inside is usable.",
    long: ["Prism is our European kitchen: flat slab fronts with no face frame, so the doors sit edge to edge and the cabinet opens to its full width. Polar Gloss and Steel Gloss bounce light around compact spaces; Vellum Matt and Onyx Matt feel calm and tactile; Flax Oak and Smoked Oak add warmth; Clearview and Smoked Glass make display cabinets.", "Every Prism cabinet is built on our Frameless carcass: 18 mm plywood finished in white melamine, with soft-close hinges and runners."],
    best: ["Apartments and city developments", "Handleless and minimalist schemes", "Hospitality and serviced apartments"] }),
  cab("DLT", { slug: "daylight", name: "Daylight", sub: "Value shaker", tier: "contract", hero: "sy-builder", door: "a/doors/framed/FG.jpg",
    material: "Five-piece solid-wood door on a value carcass", finish: "Painted",
    desc: "Our value shaker for volume housing and rental schemes: a solid-wood face frame and five-piece doors on a 12 mm UV-painted plywood carcass.",
    long: ["Daylight is built for volume. It keeps the solid-wood face frame and five-piece shaker door that tenants and buyers recognise as quality, on a 12 mm UV-painted plywood carcass that keeps the cost per plot down.", "It is the collection we recommend for build-to-rent, student accommodation, social and affordable housing, where hundreds of identical kitchens need to look good at handover and stand up to years of use."],
    best: ["Build-to-rent and student accommodation", "Social and affordable housing", "Volume housebuilding"] }),
  rng("EMB", { slug: "ember", name: "Ember", sub: "Woodgrain slab", hero: "studio-warwick-127", material: "Melamine-faced chipboard (MFC)", finish: "Textured woodgrain",
    desc: "A textured woodgrain slab in a modern palette, from pale Frost to deep Carbon. The melamine surface is hard-wearing and wipes clean, which makes Ember a dependable, cost-effective choice for whole developments.",
    long: ["Ember is a slab door you can feel: a textured woodgrain melamine surface in a palette that runs from pale Frost through warm greys to deep Carbon. It is tough, easy to clean and consistent from the first plot to the last.", "Like all nine signature ranges, Ember is supplied on our Frameless carcass, so specifiers can choose the door and know exactly what sits behind it."],
    best: ["Volume housing and rental schemes", "Contemporary slab kitchens", "Utility rooms and secondary kitchens"] }),
  rng("DSK", { slug: "dusk", name: "Dusk", sub: "Super-matt slab", hero: "studio-victoria-137", material: "Melamine-faced board, smooth matt surface", finish: "Matt, anti-fingerprint",
    desc: "Super-matt slab doors with a soft, low-sheen surface that resists fingerprints, so kitchens still look fresh at handover. The palette runs from Arctic White through warm neutrals to Racing Green and Damson.",
    long: ["Dusk is the modern matt kitchen at its most practical. The super-matt surface is soft to the touch, has almost no sheen and resists fingerprints, which matters on a show-home island that hundreds of visitors will touch.", "The palette is broad, from Arctic White and soft neutrals to Racing Green, Ink Blue and Damson, so Dusk works for both quiet, neutral schemes and bold colour."],
    best: ["Show homes and sales suites", "Handleless and J-pull kitchens", "Contemporary family homes"] }),
  rng("LUS", { slug: "lustre", name: "Lustre", sub: "High-gloss acrylic", hero: "studio-acrylic-97", material: "Acrylic-faced board", finish: "High gloss",
    desc: "Acrylic-faced gloss doors with a deep, mirror-like surface that reflects light and makes compact kitchens feel larger. From Pure White Gloss to Sapphire Gloss.",
    long: ["Lustre's acrylic face gives a deep, mirror-like gloss that does more than look good: in a compact apartment kitchen it reflects light and makes the room feel bigger.", "Acrylic holds its colour and is easy to keep clean. From Pure White Gloss to Sapphire Gloss, Lustre suits city apartments, serviced accommodation and modern villas alike."],
    best: ["City apartments and compact kitchens", "Modern villas", "Serviced and hospitality accommodation"] }),
  rng("SPC", { slug: "spectrum", name: "Spectrum", sub: "Four shaker profiles", hero: "studio-chelsea-128", material: "Vinyl-wrapped MDF", finish: "PVC thermofoil, plain and woodgrain",
    desc: "A painted-look shaker in vinyl-wrapped MDF, made with broad or fine rails, each with or without the inner joint line. Every colour is available in all four profiles, in plain and woodgrain finishes.",
    long: ["Spectrum is the most flexible shaker we make. Choose a profile, broad rail or fine rail, each with or without the inner joint line, then choose any of 35 colours in plain or woodgrain. Every colour comes in every profile.", "The doors are vinyl-wrapped MDF (PVC thermofoil): a seamless, wipe-clean surface with the look of a painted shaker at a lower cost. That combination is why Spectrum is so popular with retailers and developers who want choice without complexity."],
    best: ["Kitchen retailers and showrooms", "Developments offering buyer choice", "Painted-look shaker at volume"] }),
  rng("CDL", { slug: "candela", name: "Candela", sub: "Arched and panelled", hero: "studio-chatsworth-108", material: "Vinyl-wrapped MDF", finish: "PVC thermofoil, plain and woodgrain",
    desc: "Arched, panelled and slab profiles in vinyl-wrapped MDF, for traditional and contemporary schemes alike. The combinations shown are our standard offer; other pairings of profile and colour are available on request.",
    long: ["Candela brings 14 door styles into one range: soft, bow, peaked and grooved arches, framed and grooved squares, split panels, tongue and groove, and flat and bevelled slabs.", "All are vinyl-wrapped MDF, so traditional detail comes with a seamless, wipe-clean finish. The combinations shown are our standard offer, and other pairings of profile and colour are available on request."],
    best: ["Traditional and country kitchens", "Period refurbishments", "Retailers wanting a broad style range"] }),
  rng("GHR", { slug: "golden-hour", name: "Golden Hour", sub: "Wood-effect profiles", hero: "studio-kensington-138", material: "Wood-effect vinyl-wrapped MDF", finish: "PVC thermofoil, oak and wood effects",
    desc: "Oak and walnut effects on our vinyl-wrapped profiles: the look of timber with a surface that wipes clean. From pale Chalk White to rich Dark Walnut.",
    long: ["Golden Hour puts the warmth of oak and walnut onto our vinyl-wrapped profiles. The result looks like timber but cleans like a laminate, and it will not move or crack with changes in humidity.", "From pale Chalk White and Whitewashed Oak to Toasted Oak and rich Dark Walnut, it is a natural partner for painted shaker in two-tone kitchens."],
    best: ["Warm, natural-material schemes", "Two-tone kitchens", "Humid climates and coastal homes"] }),
  rng("DAP", { slug: "dapple", name: "Dapple", sub: "Synchronised-grain oak", hero: "studio-clarence-62", material: "Synchronised-grain melamine", finish: "Real-wood texture",
    desc: "Synchronised-grain doors: the surface texture follows the printed grain, so they look and feel like real oak. Pale, natural and stained oak finishes.",
    long: ["In a synchronised-grain door the texture is pressed in register with the printed grain, so your fingers feel the grain exactly where your eyes see it. Dapple is the closest a melamine door comes to real oak.", "Six finishes, from Whitewashed Oak and Pale Oak to Chestnut, Tobacco and Cocoa Oak, cover Scandinavian, Japandi and warm contemporary schemes."],
    best: ["Premium slab kitchens", "Scandi and Japandi interiors", "Furniture-style islands and tall banks"] }),
  rng("DWN", { slug: "dawn", name: "Dawn", sub: "Value slab", hero: "studio-classicslab-62", material: "Melamine-faced board", finish: "Smooth and woodgrain",
    desc: "A clean, simple slab in plain colours and wood tones. Our best value for build-to-rent, student and social housing schemes.",
    long: ["Dawn is our simplest and most economical door: a clean slab in plain colours and wood tones that looks neat on day one and is easy to replace years later.", "It is the door we recommend when cost per unit, speed and durability matter most: student blocks, social housing, build-to-rent and contractor packages."],
    best: ["Student accommodation", "Social and affordable housing", "Contractor and refurbishment packages"] }),
  rng("ECL", { slug: "eclipse", name: "Eclipse", sub: "Designer panels", hero: "studio-soho-150", material: "Decorative panel on recycled wood-fibre board", finish: "Metallic and stone effects",
    desc: "Metallic and stone-effect panels that turn an island, a run of tall units or a feature wall into a centrepiece. Made on recycled wood-fibre board.",
    long: ["Eclipse is for the moment a kitchen needs to make a statement: brushed steel, patina, corten, veined marble and travertine effects for islands, tall banks and feature walls.", "Made on recycled wood-fibre board, Eclipse panels pair with any of our slab ranges, so one dramatic surface can lift an otherwise simple specification."],
    best: ["Feature islands and tall banks", "Luxury apartments and penthouses", "Hospitality and show suites"] }),
];

// Door tiles for each signature range.
export function rangeTiles(c) {
  if (c.code === "SPC") {
    const B = CAT.spectrum.B.colours;
    return B.map((d, i) => ({ code: `SPC-B${String(i + 1).padStart(2, "0")}`, name: d.colour, img: d.img }));
  }
  return c.group === "cabinet" ? c.tiles : CAT.uk[c.code];
}
for (const c of COLLECTIONS) {
  if (c.group === "range") { c.tiles = rangeTiles(c); c.door = c.tiles[Math.min(2, c.tiles.length - 1)].img; }
  c.tierObj = TIERS.find(x => x.key === c.tier);
}
export const SPECTRUM_PROFILES = Object.entries(CAT.spectrum).map(([code, v]) => ({ code: `SPC-${code}`, label: v.label, img: v.colours[0].img }));
export const totalDoors = () => COLLECTIONS.reduce((n, c) => n + (c.code === "SPC" ? c.tiles.length * 4 : c.tiles.length), 0);

// Compliance (catalogue).
export const COMPLIANCE = [
  ["Formaldehyde", "E1 boards (EN 13986 / EN 717-1) for the UK, Europe and the Gulf, and CARB Phase 2 / TSCA Title VI for North America."],
  ["Responsible timber", "FSC-certified materials available. Supply-chain documents provided to support your due diligence, including UK Timber Regulation."],
  ["Quality management", "Manufactured under an ISO 9001:2015 quality management system."],
  ["Performance", "Framed cabinetry tested to KCMA performance standards for structure, doors, drawers and finish."],
  ["Inspection", "Orders are inspected before packing. Independent pre-shipment inspection by your nominated agent is welcome."],
  ["Samples", "Sample doors and handles let you and your client approve colour and finish before production."],
];
export const KEY_DIMS = [
  ["Base units", "H720 × D560 carcass. 870 mm on 150 mm adjustable legs."],
  ["Worktop height", "908 mm with a 38 mm worktop (600 mm deep)."],
  ["Wall units", "H720 standard, H900 tall, H360 bridging. D300 carcass. Hung at 1400 mm, 492 mm above the worktop."],
  ["Tall units", "H1970 (2120 on legs) lines up with the top of H720 wall units. H2150 (2300 on legs) lines up with H900 walls."],
  ["Mouldings", "Plinth 150 mm high. Cornice, pelmet and moulding lengths 2440 mm."],
  ["Appliances", "Housings take standard 600 mm built-in appliances. We check apertures against your appliance schedule."],
];
export const HARDWARE = [
  ["Hinges", "6-way adjustable, 110° soft-close (standard close on Contract)"],
  ["Runners", "Full-extension soft-close undermount (standard on Contract)"],
  ["Legs", "150 mm adjustable plinth legs with clips, packed with every base unit"],
  ["Fixings", "Door buffers, metal shelf pegs and clips, L-brackets for base units"],
  ["Handles", "Ordered by code from 19 families; made by partner factories, packed by Sanyang"],
];
