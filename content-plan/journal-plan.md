# Journal publishing plan

A scheduled task publishes one new article on each site every weekday (Monday to Friday), which is 5 a week on
sanyang.co.uk and 5 a week on sanyang.ae. Each run takes the first unticked topic in each table below, writes the
article as a file in `src/posts/`, runs the build, opens a pull request, checks that the Cloudflare previews built,
merges it and ticks the topic here with the date and slug.

When fewer than 15 topics are left in a table, the run adds 20 more, researched from what buyers in that market
search for (Search Console queries once available, then trade press, forums and "People also ask").

## House rules for every article

- One target query per article, used in the title, the first paragraph, one `<h2>` and the slug. Never target a query
  that an existing article or page already targets (check the slugs and titles in `src/posts/`).
- 900 to 1,600 words of genuinely useful, specific content: real dimensions in mm, standards, process steps, tables.
  No filler, no "in today's fast-paced world", no keyword stuffing, no invented statistics, studies, quotes or customers.
- Facts about Sanyang only from the site's own data (`src/markets.mjs`, `src/data/*`): 25+ years, 500+ containers
  a month to the US (always "a month"), 85,000 m² of factories in China, Vietnam and Thailand, 300 door and colour
  options, 16 collections, 10-year warranty, FSC / E1 (CARB P2) / ISO 9001 / KCMA.
- Never state a fixed minimum order, prices, lead-time guarantees or payment terms in numbers. Mention only
  US, UK and Ireland projects.
- Never mention Opal & Oak, Amazon or the Birmingham warehouse.
- 3 to 5 internal links to the most relevant product, sector, location or guide pages, plus 1 or 2 links to related
  Journal articles. Link text says what the page is (not "click here").
- `keypoints`: 4 or 5 short factual takeaways. `faq`: 3 or 4 real questions with direct answers (they become FAQ
  schema). `description`: 70 to 160 characters, unique. Title under 60 characters before " | Sanyang".
- `img`: a photo from `src/data/images.json` that fits the topic; do not reuse the image of the previous 5 articles.
- UK spelling for both sites. UK articles speak to housebuilders, developers, contractors, housing providers,
  retailers and distributors in the UK and Ireland. UAE articles speak to developers, fit-out contractors, designers,
  villa owners and merchants in Dubai, Abu Dhabi, Sharjah and the northern emirates.
- Categories: Buying guides, Materials and construction, Design and trends, Projects and procurement, Market insight.

## UK topics (sanyang.co.uk, `markets: ["uk"]`)

| Done | Working title | Target query | Category | Link to |
| --- | --- | --- | --- | --- |
| [x] 2026-11-11 new-build-kitchen-specification | How to specify kitchens for a 100-plot development | new build kitchen specification | Projects and procurement | /who-we-supply/housebuilders-and-developers/, /sample-kitchen/ |
| [x] 2026-11-12 soft-close-kitchen-hinges-and-runners | Soft-close hinges and drawer runners: what to check | soft close kitchen hinges | Materials and construction | /construction/, /quality/ |
| [x] 2026-11-13 factory-direct-kitchen-lead-times | Factory-direct kitchen lead times, explained | kitchen lead times | Buying guides | /how-it-works/, /shipping-and-delivery/ |
| [ ] | Kitchen trends for UK new builds in 2027 | new build kitchen trends 2027 | Design and trends | /kitchen-cabinets/, /colours/ |
| [ ] | Thermofoil vs painted vs lacquered kitchen doors | painted vs lacquered kitchen doors | Materials and construction | /kitchen-cabinets/, /construction/ |
| [ ] | How to read a kitchen cabinet specification sheet | kitchen cabinet specification | Buying guides | /construction/, /cabinet-units/ |
| [ ] | Build-to-rent kitchens: what drives the cost per unit | build to rent kitchen cost | Projects and procurement | /who-we-supply/build-to-rent-and-student/ |
| [ ] | Fire safety and kitchen units in flats | kitchen fire safety regulations flats | Market insight | /quality/, /who-we-supply/build-to-rent-and-student/ |
| [ ] | What FSC certification means for a kitchen order | FSC certified kitchens | Materials and construction | /quality/, /journal/uk-timber-regulation-kitchen-cabinets/ |
| [ ] | Plot labelling and phased delivery for housebuilders | phased kitchen delivery housebuilders | Projects and procurement | /shipping-and-delivery/, /who-we-supply/housebuilders-and-developers/ |
| [ ] | Kitchen replacement programmes for housing associations | social housing kitchen replacement | Projects and procurement | /who-we-supply/social-housing/ |
| [ ] | Handleless kitchens: J-pull, true handleless and push-to-open | handleless kitchen | Design and trends | /handles/, /kitchen-cabinets/ |
| [ ] | Integrated appliance housings that fit first time | integrated appliance housing sizes | Buying guides | /cabinet-units/ |
| [ ] | Importing kitchens to the UK: duty, VAT and paperwork | importing kitchens to UK duty | Market insight | /shipping-and-delivery/, /journal/incoterms-exw-fob-cif-ddp-kitchen-imports/ |
| [ ] | Worktops for trade kitchens: laminate, quartz or solid surface | best kitchen worktop for new build | Materials and construction | /sample-kitchen/ |
| [ ] | Kitchen layouts for small UK flats | small flat kitchen layout | Design and trends | /cabinet-units/, /who-we-supply/build-to-rent-and-student/ |
| [ ] | Pre-shipment inspection: what a kitchen QC report covers | pre shipment inspection kitchen cabinets | Projects and procurement | /quality/, /our-factories/ |
| [ ] | Utility rooms from standard kitchen units | utility room units | Design and trends | /cabinet-units/, /colours/ |
| [ ] | Bathroom vanity units for new builds | bathroom vanity units new build | Buying guides | /bathroom-vanities/ |
| [ ] | How independent kitchen retailers can buy factory-direct | kitchen supplier for retailers | Buying guides | /who-we-supply/kitchen-retailers-and-distributors/ |
| [ ] | Damage-free delivery: cartons, pallets and containers | kitchen delivery damage | Projects and procurement | /shipping-and-delivery/ |
| [ ] | Kitchen colours that help new homes sell | kitchen colours that sell houses | Design and trends | /colours/ |
| [ ] | Supplying kitchens to developers in Ireland | kitchen suppliers Ireland | Market insight | /ireland/ |
| [ ] | Solid wood vs MDF kitchen doors | solid wood vs mdf kitchen doors | Materials and construction | /kitchen-cabinets/, /journal/kitchen-door-materials-explained/ |
| [ ] | Kitchen cornice, pelmet and plinth: a finishing guide | kitchen cornice and pelmet | Buying guides | /panels-and-mouldings/ |
| [ ] | Corner units compared: blind corner, carousel and LeMans | kitchen corner unit solutions | Buying guides | /cabinet-units/ |
| [ ] | Accessible kitchens and Part M: what to specify | accessible kitchen design part m | Projects and procurement | /cabinet-units/, /who-we-supply/social-housing/ |
| [ ] | Student accommodation kitchens that survive tenancies | student accommodation kitchens | Projects and procurement | /who-we-supply/build-to-rent-and-student/ |
| [ ] | Shaker kitchen doors: framed, slim and painted styles | shaker kitchen doors | Design and trends | /kitchen-cabinets/meridian/, /kitchen-cabinets/spectrum/ |
| [ ] | High-gloss kitchens: acrylic, lacquer and foil compared | high gloss kitchen doors | Materials and construction | /kitchen-cabinets/lustre/ |
| [ ] | Oak kitchens: real veneer, laminate and woodgrain foil | oak kitchen doors | Materials and construction | /kitchen-cabinets/dapple/ |
| [ ] | Kitchen drawer boxes: dovetail, metal and double-wall | kitchen drawer boxes | Materials and construction | /construction/ |
| [ ] | How to budget a whole-site kitchen package | kitchen package for developers | Projects and procurement | /who-we-supply/housebuilders-and-developers/ |
| [ ] | Warranty terms to look for in trade kitchens | kitchen cabinet warranty | Buying guides | /warranty/ |
| [ ] | Kitchen islands in new builds: sizes and clearances | kitchen island size | Design and trends | /cabinet-units/ |
| [ ] | Moisture, steam and kitchen carcasses | moisture resistant kitchen units | Materials and construction | /journal/plywood-vs-mfc-kitchen-carcass/ |
| [ ] | Tall larder units and pantry storage | larder unit | Buying guides | /cabinet-units/ |
| [ ] | Kitchen sample sign-off: what to approve before production | kitchen samples approval | Projects and procurement | /how-it-works/ |
| [ ] | How kitchen flat-pack assembly works on site | flat pack kitchen assembly | Buying guides | /construction/ |
| [ ] | Kitchen trends for build-to-rent amenity spaces | communal kitchen design | Design and trends | /who-we-supply/build-to-rent-and-student/ |
| [ ] | Sustainable kitchens: what is measurable | sustainable kitchen cabinets | Market insight | /quality/ |
| [ ] | Green kitchens: sage, olive and forest shades | green kitchen | Design and trends | /colours/ |
| [ ] | Navy and dark kitchens done well | navy kitchen | Design and trends | /colours/ |
| [ ] | Kitchen wall unit heights: 720 vs 900 mm | wall unit height | Buying guides | /journal/uk-kitchen-unit-sizes-guide/ |
| [ ] | Choosing kitchen handles for a development | kitchen handles | Design and trends | /handles/ |
| [ ] | Kitchen fitters' checklist for a smooth install | kitchen installation checklist | Projects and procurement | /cabinet-units/ |
| [ ] | Retrofit kitchens in refurbishment projects | kitchen refurbishment contractor | Projects and procurement | /who-we-supply/contractors-and-fit-out/ |
| [ ] | Bedroom wardrobes from the kitchen factory | fitted wardrobes for developers | Buying guides | /who-we-supply/housebuilders-and-developers/ |
| [ ] | Container loading: how kitchens are packed to plan | container loading kitchens | Projects and procurement | /journal/how-many-kitchens-fit-in-a-container/ |
| [ ] | Why kitchen order codes save money on site | kitchen unit codes | Buying guides | /sample-kitchen/ |
| [ ] | The UK kitchen market in 2027: what buyers should expect | uk kitchen market 2027 | Market insight | /about/ |
| [ ] | Wine racks, open shelves and end units | kitchen end shelf unit | Buying guides | /cabinet-units/ |
| [ ] | Sink base units and service voids | sink base unit | Buying guides | /cabinet-units/ |
| [ ] | Kitchen door profiles explained | kitchen door styles | Design and trends | /kitchen-cabinets/ |
| [ ] | Two-tone kitchens: pairing colours and woods | two tone kitchen | Design and trends | /colours/ |
| [ ] | How to compare kitchen quotations like-for-like | compare kitchen quotes | Buying guides | /contact/ |
| [ ] | Kitchens for later-living and retirement schemes | retirement home kitchens | Projects and procurement | /who-we-supply/social-housing/ |
| [ ] | Timber legality and due diligence for importers | timber due diligence uk | Market insight | /journal/uk-timber-regulation-kitchen-cabinets/ |
| [ ] | White kitchens that do not look generic | white kitchen ideas | Design and trends | /kitchen-cabinets/ |
| [ ] | Frameless vs framed: which suits UK housebuilding | frameless kitchen cabinets | Materials and construction | /kitchen-cabinets/prism/ |

## UAE topics (sanyang.ae, `markets: ["ae"]`)

| Done | Working title | Target query | Category | Link to |
| --- | --- | --- | --- | --- |
| [x] 2026-11-11 kitchen-supplier-for-developers-dubai | Kitchen specification for Dubai off-plan towers | kitchen supplier for developers dubai | Projects and procurement | /who-we-supply/property-developers/ |
| [x] 2026-11-12 humidity-resistant-kitchen-cabinets | Kitchen finishes for high humidity | humidity resistant kitchen cabinets | Materials and construction | /journal/kitchen-cabinets-uae-climate/ |
| [x] 2026-11-13 villa-kitchen-design-dubai | Villa kitchen timeline: design to handover | villa kitchen design dubai | Projects and procurement | /design-service/, /who-we-supply/villa-and-apartment-kitchens/ |
| [ ] | Kitchen trends in UAE villas for 2027 | kitchen trends dubai 2027 | Design and trends | /kitchen-cabinets/ |
| [ ] | Lacquer, acrylic or laminate doors for UAE kitchens | acrylic vs lacquer kitchen | Materials and construction | /kitchen-cabinets/lustre/ |
| [ ] | How to read a joinery BOQ for kitchens | joinery boq kitchen | Projects and procurement | /who-we-supply/fit-out-contractors/ |
| [ ] | Wardrobes for apartment developments | fitted wardrobes dubai | Buying guides | /who-we-supply/property-developers/ |
| [ ] | Civil Defence and consultant approvals for joinery | joinery approval dubai | Projects and procurement | /journal/kitchen-material-submittals-uae/ |
| [ ] | Green building ratings and kitchen materials | sustainable kitchen uae | Market insight | /quality/ |
| [ ] | Phased delivery for multi-tower projects | kitchen delivery for projects uae | Projects and procurement | /shipping-and-delivery/ |
| [ ] | Kitchen refurbishment for older Dubai villas | kitchen renovation dubai | Projects and procurement | /locations/dubai/ |
| [ ] | Handleless kitchens for modern UAE apartments | handleless kitchen dubai | Design and trends | /handles/ |
| [ ] | Appliance housings for UAE kitchen layouts | built in oven cabinet | Buying guides | /cabinet-units/ |
| [ ] | Importing kitchens into the UAE: duty and Jebel Ali | import kitchen cabinets to uae | Market insight | /shipping-and-delivery/ |
| [ ] | Worktops for hot climates: quartz, granite or porcelain | kitchen countertop uae | Materials and construction | /design-service/ |
| [ ] | Kitchen sizes for Dubai studios and one-bed flats | small kitchen design dubai | Design and trends | /cabinet-units/ |
| [ ] | Majlis, pantry and dirty kitchens in UAE villas | dirty kitchen design | Design and trends | /journal/show-kitchen-vs-working-kitchen-villa-design/ |
| [ ] | Bathroom vanities for hotels and serviced apartments | bathroom vanity dubai | Buying guides | /bathroom-vanities/ |
| [ ] | How building-material merchants can stock kitchens | kitchen cabinets wholesale uae | Buying guides | /who-we-supply/building-material-merchants/ |
| [ ] | Site storage and installation sequencing for joinery | joinery installation sequence | Projects and procurement | /who-we-supply/fit-out-contractors/ |
| [ ] | Colour palettes for Arabic and modern villa interiors | arabic kitchen design | Design and trends | /colours/ |
| [ ] | What Abu Dhabi developers ask a kitchen supplier | kitchen cabinets abu dhabi | Market insight | /locations/abu-dhabi/ |
| [ ] | Kitchen suppliers in Sharjah and the northern emirates | kitchen cabinets sharjah | Market insight | /locations/sharjah-and-northern-emirates/ |
| [ ] | Shop drawings for kitchens: what consultants check | kitchen shop drawings | Projects and procurement | /design-service/ |
| [ ] | 3D kitchen design: what to expect from visuals | 3d kitchen design dubai | Design and trends | /design-service/ |
| [ ] | Kitchen cabinet manufacturer vs trader | kitchen cabinet manufacturer uae | Buying guides | /our-factories/, /about/ |
| [ ] | Plywood kitchen cabinets for the Gulf climate | plywood kitchen cabinets dubai | Materials and construction | /journal/plywood-vs-mfc-kitchen-carcass/ |
| [ ] | Large villa kitchens with islands | kitchen island design dubai | Design and trends | /cabinet-units/ |
| [ ] | Walk-in wardrobes and dressing rooms | walk in wardrobe dubai | Design and trends | /design-service/ |
| [ ] | Internal doors from the joinery factory | wooden doors dubai | Buying guides | /journal/one-supplier-kitchens-wardrobes-doors-uae/ |
| [ ] | Flexible payment terms on joinery packages | joinery payment terms | Projects and procurement | /how-it-works/ |
| [ ] | Kitchen sample approval in the UAE | kitchen samples dubai | Projects and procurement | /design-service/ |
| [ ] | Gloss vs matt kitchens in UAE light | matt vs gloss kitchen | Design and trends | /kitchen-cabinets/ |
| [ ] | Oak and walnut kitchens in UAE interiors | wood kitchen cabinets dubai | Design and trends | /kitchen-cabinets/dapple/ |
| [ ] | White kitchens for UAE apartments | white kitchen cabinets dubai | Design and trends | /kitchen-cabinets/ |
| [ ] | Kitchen design for holiday homes and short lets | kitchen for holiday home dubai | Projects and procurement | /who-we-supply/villa-and-apartment-kitchens/ |
| [ ] | Hotel and serviced apartment kitchenettes | kitchenette design hotel | Projects and procurement | /who-we-supply/fit-out-contractors/ |
| [ ] | Interior designers: specifying joinery that gets built | joinery for interior designers | Buying guides | /who-we-supply/interior-designers-and-architects/ |
| [ ] | E1 and CARB P2 boards for UAE projects | e1 board kitchen uae | Materials and construction | /journal/e1-carb-p2-formaldehyde-kitchen-cabinets/ |
| [ ] | Kitchen hardware for heavy daily use | kitchen hinges dubai | Materials and construction | /construction/ |
| [ ] | Tall pantry units and storage for Gulf families | pantry cabinet dubai | Buying guides | /cabinet-units/ |
| [ ] | Kitchen lighting and cabinet integration | kitchen cabinet lighting | Design and trends | /design-service/ |
| [ ] | Container shipping times to Jebel Ali | shipping time china to dubai | Market insight | /shipping-and-delivery/ |
| [ ] | Joinery warranty: what developers should ask | kitchen warranty uae | Buying guides | /warranty/ |
| [ ] | Townhouse kitchens: repeatable designs at scale | townhouse kitchen design | Projects and procurement | /who-we-supply/property-developers/ |
| [ ] | Kitchen trends in Abu Dhabi new launches | abu dhabi kitchen design | Design and trends | /locations/abu-dhabi/ |
| [ ] | Laundry rooms and maid's rooms joinery | laundry room cabinets | Buying guides | /cabinet-units/ |
| [ ] | Kitchen design for large Emirati family homes | emirati kitchen design | Design and trends | /design-service/ |
| [ ] | Shaker kitchens in contemporary UAE homes | shaker kitchen dubai | Design and trends | /kitchen-cabinets/meridian/ |
| [ ] | Slimline frames and modern profiles | modern kitchen cabinets dubai | Design and trends | /kitchen-cabinets/filament/ |
| [ ] | Dust and sand: protecting kitchens during handover | kitchen protection construction | Projects and procurement | /who-we-supply/fit-out-contractors/ |
| [ ] | Kitchen BOQ vs itemised quotation | kitchen quotation dubai | Buying guides | /contact/ |
| [ ] | Coastal and marina apartments: salt air and finishes | kitchen cabinets marina apartments | Materials and construction | /journal/kitchen-cabinets-uae-climate/ |
| [ ] | Kitchen cabinet sizes used in the UAE | kitchen cabinet sizes uae | Buying guides | /cabinet-units/ |
| [ ] | How our factories control quality for UAE orders | kitchen factory quality control | Materials and construction | /quality/, /our-factories/ |
| [ ] | Kitchens for staff accommodation and labour camps | staff accommodation kitchens | Projects and procurement | /who-we-supply/property-developers/ |
| [ ] | Two-tone and contrast kitchens | two tone kitchen dubai | Design and trends | /colours/ |
| [ ] | The UAE property market and kitchen demand in 2027 | uae property market 2027 kitchens | Market insight | /about/ |
| [ ] | TV units, study joinery and built-in furniture | custom joinery dubai | Buying guides | /design-service/ |
| [ ] | Choosing a kitchen showroom in Deira | kitchen showroom dubai | Buying guides | /contact/, /locations/dubai/ |
