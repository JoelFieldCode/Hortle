import type { Category, Specimen } from "../types";

export const SPECIMENS: Specimen[] = [
        {
          name: "Aphids",
          guess: "APHIDS",
          category: "pest",
          emoji: "🐛",
          clue: "Sticky honeydew coats the leaves, and ants are suddenly very interested in your roses.",
          symptoms:
            "Curled, distorted, sticky new growth; clusters of small soft insects on shoot tips; black sooty mould growing on the honeydew.",
          cause:
            "Sap-sucking insects that multiply rapidly on tender new growth, often worse where nitrogen levels are high.",
          treatment:
            "Blast colonies off with a jet of water, apply insecticidal soap or neem oil, or release/encourage ladybirds and lacewings.",
          prevention:
            "Avoid over-fertilising with nitrogen, inspect new growth regularly, and maintain habitat for predator insects.",
          actions: [
            "Blast colonies off with a jet of water",
            "Apply insecticidal soap or neem oil",
            "Encourage ladybirds and lacewings",
          ],
        },
        {
          name: "Spider mites",
          guess: "SPIDERMITES",
          wordLens: [6, 5],
          category: "pest",
          emoji: "🕷️",
          clue: "Leaves look dusty and speckled, with faint silk threads strung between the stems.",
          symptoms:
            "Fine pale stippling or speckling across leaves, bronzing or yellowing foliage, and delicate webbing in bad infestations.",
          cause:
            "Tiny sap-feeding mites that thrive in hot, dry, dusty conditions.",
          treatment:
            "Increase humidity, hose down foliage regularly, and apply insecticidal soap or a registered miticide.",
          prevention:
            "Keep plants well watered in heat, avoid dusty conditions, and check undersides of leaves often.",
          actions: [
            "Increase humidity around the plant",
            "Hose down foliage regularly",
            "Apply insecticidal soap or a miticide",
          ],
        },
        {
          name: "Whitefly",
          guess: "WHITEFLY",
          category: "pest",
          emoji: "🦟",
          clue: "Tap the leaf and a tiny white cloud lifts off like dust.",
          symptoms:
            "Clouds of small white flying insects disturbed when foliage is touched, sticky leaves, sooty mould.",
          cause:
            "Sap-sucking insects that congregate on the undersides of leaves, especially in warm, sheltered conditions.",
          treatment:
            "Use yellow sticky traps, apply insecticidal soap, and encourage parasitic wasps for biological control.",
          prevention:
            "Inspect new plants before introducing them, remove heavily infested leaves early, and avoid overcrowding.",
          actions: [
            "Use yellow sticky traps",
            "Apply insecticidal soap",
            "Encourage parasitic wasps",
          ],
        },
        {
          name: "Thrips",
          guess: "THRIPS",
          category: "pest",
          emoji: "🪰",
          clue: "Petals look silvered and streaky, as if scratched with a pin.",
          symptoms:
            "Silvery streaks or fine speckling on leaves and petals, distorted or discoloured flowers, tiny dark specks of frass.",
          cause:
            "Slender, fast-moving insects that rasp at plant surfaces to feed on cell contents.",
          treatment:
            "Use blue sticky traps, remove and dispose of affected blooms, introduce predatory mites, or apply spinosad.",
          prevention:
            "Keep weeds down nearby, avoid over-fertilising, and monitor flowers regularly during warm months.",
          actions: [
            "Use blue sticky traps",
            "Remove and dispose of affected blooms",
            "Introduce predatory mites or apply spinosad",
          ],
        },
        {
          name: "Mealybugs",
          guess: "MEALYBUGS",
          category: "pest",
          emoji: "🐞",
          clue: "Little tufts of white cotton wool cling to the stem joints.",
          symptoms:
            "White, cottony, waxy masses clustered in leaf axils, along stems, and on root crowns; sticky residue and weak growth.",
          cause:
            "Soft-bodied sap-sucking insects that shelter in tight plant crevices under a protective waxy coating.",
          treatment:
            "Dab colonies with an alcohol-soaked cotton bud, apply insecticidal soap, or use horticultural oil for heavier infestations.",
          prevention:
            "Quarantine and inspect new plants, avoid overwatering and overcrowding, and check crevices regularly.",
          actions: [
            "Dab bugs with an alcohol-soaked cotton bud",
            "Apply insecticidal soap",
            "Use horticultural oil for heavy infestations",
          ],
        },
        {
          name: "Scale insects",
          guess: "SCALE",
          category: "pest",
          emoji: "🛡️",
          clue: "Odd little bumps on the stem don't brush off like ordinary dirt should.",
          symptoms:
            "Small brown, grey or waxy bumps fixed to stems and leaf undersides, sticky honeydew, sooty mould, weakened growth.",
          cause:
            "Sap-sucking insects that settle in one place and form a protective shell over themselves.",
          treatment:
            "Scrape or brush off light infestations, apply horticultural oil to smother them, or use a systemic insecticide for severe cases.",
          prevention:
            "Inspect new plants closely, prune out heavily infested stems, and keep plants unstressed and well cared for.",
          actions: [
            "Scrape or brush off light infestations",
            "Apply horticultural oil",
            "Use a systemic insecticide for severe cases",
          ],
        },
        {
          name: "Slugs and snails",
          guess: "SLUGS",
          category: "pest",
          emoji: "🐌",
          clue: "Something ate your seedlings down to stubs overnight, leaving a silvery trail behind.",
          symptoms:
            "Irregular ragged holes in leaves, seedlings disappearing entirely, and glistening slime trails across soil and foliage.",
          cause:
            "Molluscs that feed at night or in damp, humid weather, sheltering under mulch or debris by day.",
          treatment:
            "Set beer traps, apply copper tape around pots, hand-pick after dark, or use iron phosphate-based baits.",
          prevention:
            "Remove daytime hiding spots, water in the morning rather than evening, and protect seedlings with barriers.",
          actions: [
            "Set beer traps",
            "Apply copper tape around pots",
            "Use iron phosphate-based baits",
          ],
        },
        {
          name: "Cutworms",
          guess: "CUTWORMS",
          category: "pest",
          emoji: "🐛",
          clue: "A healthy seedling is found toppled over, its stem neatly severed right at ground level.",
          symptoms:
            "Young seedlings and transplants cut clean through near the soil line overnight, with the plant left lying beside the stump.",
          cause:
            "Fat, grey-brown caterpillars that curl up in soil by day and feed on stems at night.",
          treatment:
            "Fit cardboard or foil collars around stems, hand-pick caterpillars found near damaged plants at night, or apply beneficial nematodes.",
          prevention:
            "Cultivate soil before planting to expose larvae, keep beds free of weeds, and use collars on new transplants.",
          actions: [
            "Fit cardboard or foil collars around stems",
            "Hand-pick caterpillars at night",
            "Apply beneficial nematodes to the soil",
          ],
        },
        {
          name: "Skeletonisation",
          guess: "SKELETONISATION",
          category: "pest",
          emoji: "🪲",
          clue: "Leaves look lacy, as though only the veins were left behind after a very fussy meal.",
          symptoms:
            "Leaves skeletonised between the veins, chewed flower petals, and metallic green-bronze beetles feeding in clusters.",
          cause:
            "Adult beetles feeding in groups on foliage and flowers, with grubs damaging lawn roots earlier in their life cycle.",
          treatment:
            "Hand-pick beetles into soapy water in the early morning, use row covers during peak season, and treat lawn grubs with milky spore.",
          prevention:
            "Avoid pheromone traps near vulnerable plants (they can attract more beetles in), and keep lawns healthy to discourage grubs.",
          actions: [
            "Hand-pick beetles into soapy water",
            "Use row covers during peak season",
            "Treat lawn grubs with milky spore",
          ],
        },
        {
          name: "Leaf miners",
          guess: "LEAFMINERS",
          wordLens: [4, 6],
          category: "pest",
          emoji: "🍃",
          clue: "Squiggly pale tunnels wander through the leaf, like a tiny hand-drawn maze.",
          symptoms:
            "Winding, pale, papery tunnels within the leaf tissue itself, sometimes with a small larva visible inside.",
          cause:
            "Larvae of small flies or moths that feed between the upper and lower leaf surfaces.",
          treatment:
            "Remove and destroy mined leaves promptly, use floating row covers to prevent egg-laying, and encourage parasitic wasps.",
          prevention:
            "Rotate susceptible crops, remove affected leaves as soon as tunnels appear, and keep row covers on during egg-laying periods.",
          actions: [
            "Remove and destroy mined leaves",
            "Use floating row covers",
            "Encourage parasitic wasps",
          ],
        },
        {
          name: "Powdery mildew",
          guess: "MILDEW",
          category: "disease",
          emoji: "🍄",
          clue: "Leaves look dusted in flour, even though it isn't baking day.",
          symptoms:
            "A white to greyish powdery coating across leaf surfaces, stems and sometimes flowers, often starting on older leaves.",
          cause:
            "A fungus that thrives in warm days, cool nights, and poor air circulation, spreading easily by airborne spores.",
          treatment:
            "Improve airflow by spacing and pruning, remove badly affected leaves, and apply sulfur or potassium bicarbonate spray.",
          prevention:
            "Choose resistant varieties, avoid overhead watering, and prune to keep foliage open and airy.",
          actions: [
            "Improve airflow through pruning and spacing",
            "Remove affected leaves",
            "Apply sulfur or potassium bicarbonate spray",
          ],
        },
        {
          name: "Downy mildew",
          guess: "DOWNYMILDEW",
          wordLens: [5, 6],
          category: "disease",
          emoji: "🌫️",
          clue: "The top of the leaf looks yellow-blotched; flip it over and there's a grey fuzz waiting.",
          symptoms:
            "Yellow, angular patches on the upper leaf surface with a corresponding greyish-purple fuzzy growth underneath.",
          cause:
            "A water-mould pathogen that spreads fastest in cool, humid, wet conditions.",
          treatment:
            "Improve airflow and drainage, remove and destroy infected foliage, and apply a copper-based fungicide.",
          prevention:
            "Water at the base rather than overhead, space plants for airflow, and avoid working in wet foliage.",
          actions: [
            "Improve airflow and drainage",
            "Remove and destroy infected foliage",
            "Apply a copper-based fungicide",
          ],
        },
        {
          name: "Black spot",
          guess: "BLACKSPOT",
          wordLens: [5, 4],
          category: "disease",
          emoji: "⚫",
          clue: "Round black blotches ring themselves in yellow before the leaf finally gives up and drops.",
          symptoms:
            "Circular black spots with fringed edges, often haloed in yellow, followed by premature leaf drop.",
          cause:
            "A fungus that splashes up from soil or spreads between wet leaves, especially common on roses.",
          treatment:
            "Remove and dispose of fallen and infected leaves, improve airflow through pruning, and apply a suitable fungicide.",
          prevention:
            "Water at soil level, avoid wetting foliage, and clear fallen leaves at the end of the season.",
          actions: [
            "Remove and dispose of fallen leaves",
            "Improve airflow through pruning",
            "Apply a suitable fungicide",
          ],
        },
        {
          name: "Botrytis / grey mould",
          guess: "BOTRYTIS",
          category: "disease",
          emoji: "🌁",
          clue: "A soft grey fuzz appears on a flower after a cold, damp week.",
          symptoms:
            "Fuzzy grey-brown mould developing on flowers, soft fruit, or damaged stems, usually after cool, humid weather.",
          cause:
            "A fungus that colonises damaged, dying or overly damp plant tissue and spreads rapidly in still, humid air.",
          treatment:
            "Remove affected flowers and stems promptly, improve ventilation, avoid overhead watering, and apply fungicide if needed.",
          prevention:
            "Deadhead spent blooms, avoid overcrowding, and water in the morning so foliage dries during the day.",
          actions: [
            "Remove affected flowers and stems",
            "Improve ventilation",
            "Avoid overhead watering",
          ],
        },
        {
          name: "Fire blight",
          guess: "FIREBLIGHT",
          wordLens: [4, 6],
          category: "disease",
          emoji: "🔥",
          clue: "Branch tips look scorched and curl over like a shepherd's crook, though there was no fire at all.",
          symptoms:
            "Blackened, blighted shoot tips that curl into a hook shape, as if burnt, often oozing in wet weather.",
          cause:
            "A bacterial infection that enters through blossoms or wounds and spreads through susceptible pome fruit trees.",
          treatment:
            "Prune well below the infection using sterilised tools between cuts, and avoid heavy nitrogen fertilising that encourages soft growth.",
          prevention:
            "Choose resistant varieties, avoid pruning in wet weather, and sterilise tools between plants.",
          actions: [
            "Prune well below the infection",
            "Sterilise tools between cuts",
            "Avoid heavy nitrogen fertilising",
          ],
        },
        {
          name: "Verticillium wilt",
          guess: "VERTICILLIUM",
          category: "disease",
          emoji: "🥀",
          clue: "Only one side of the plant wilts, and a stem cut open shows a telltale brown streak inside.",
          symptoms:
            "One-sided wilting and yellowing of leaves, with brown vascular streaking visible when a stem is cut lengthwise.",
          cause:
            "A soil-borne fungus that blocks a plant's water-conducting tissue from within.",
          treatment:
            "Remove and destroy infected plants, solarise the soil where practical, and replant with resistant varieties.",
          prevention:
            "Rotate crops, avoid replanting susceptible species in the same spot, and keep plants unstressed.",
          actions: [
            "Remove and destroy infected plants",
            "Solarise the soil",
            "Replant with resistant varieties",
          ],
        },
        {
          name: "Clubroot",
          guess: "CLUBROOT",
          category: "disease",
          emoji: "🥬",
          clue: "Pull up a wilting cabbage and the roots have swollen into strange, gnarled clubs.",
          symptoms:
            "Stunted, wilting brassicas with roots that are swollen, distorted and club-like instead of fine and fibrous.",
          cause:
            "A soil-borne slime mould that infects brassica roots and persists in soil for many years.",
          treatment:
            "Raise soil pH with lime, improve drainage, and avoid planting brassicas in the same bed for several years.",
          prevention:
            "Rotate brassica crops on a long cycle, maintain a higher soil pH, and disinfect tools between beds.",
          actions: [
            "Raise soil pH with lime",
            "Improve drainage",
            "Avoid planting brassicas in the same bed for years",
          ],
        },
        {
          name: "Rust",
          guess: "RUST",
          category: "disease",
          emoji: "🟠",
          clue: "The underside of the leaf looks dusted in fine orange powder.",
          symptoms:
            "Orange-brown pustules erupting on the undersides of leaves, sometimes with yellow spotting on top.",
          cause:
            "A fungus that produces airborne spores, spreading fastest in humid conditions with wet foliage.",
          treatment:
            "Remove and destroy infected leaves, improve airflow, and apply a suitable fungicide if the spread is significant.",
          prevention:
            "Choose resistant varieties, water at the base, and avoid overcrowding plants.",
          actions: [
            "Remove and destroy infected leaves",
            "Improve airflow",
            "Apply a suitable fungicide",
          ],
        },
        {
          name: "Bacterial wilt",
          guess: "BACTERIALWILT",
          wordLens: [9, 4],
          category: "disease",
          emoji: "💧",
          clue: "The plant collapses overnight even though the soil is damp; cut the stem and it oozes a milky sap.",
          symptoms:
            "Sudden, irreversible wilting despite adequate soil moisture, with cut stems oozing a sticky, milky ooze.",
          cause:
            "Bacteria that block the plant's vascular system, often spread by insect vectors such as cucumber beetles.",
          treatment:
            "Remove and destroy infected plants immediately; there is no cure once a plant is infected, so control the insect vector.",
          prevention:
            "Control cucumber beetles and other vectors early, and use row covers on young susceptible plants.",
          actions: [
            "Remove and destroy infected plants immediately",
            "Control cucumber beetle vectors",
            "Use row covers on young plants",
          ],
        },
        {
          name: "Root rot",
          guess: "ROOTROT",
          wordLens: [4, 3],
          category: "disease",
          emoji: "🪱",
          clue: "Roots that should be firm and pale are brown, mushy, and smell distinctly foul.",
          symptoms:
            "Wilting and yellowing despite consistently wet soil, with roots that are dark, soft, and unpleasant-smelling when checked.",
          cause:
            "Fungal or water-mould pathogens that thrive in waterlogged, poorly-drained, oxygen-starved soil.",
          treatment:
            "Improve drainage, cut back watering, trim away affected roots, and apply a fungicide drench for valuable plants.",
          prevention:
            "Use free-draining potting mix, avoid overwatering, and ensure pots and beds drain freely.",
          actions: [
            "Improve drainage",
            "Cut back on watering",
            "Trim away affected roots",
          ],
        },
        {
          name: "Blossom end rot",
          guess: "BLOSSOMENDROT",
          wordLens: [7, 3, 3],
          category: "disorder",
          emoji: "🍅",
          clue: "The bottom of an otherwise perfect tomato has turned into a dark, leathery, sunken patch.",
          symptoms:
            "A sunken, dark, leathery patch developing on the blossom end of tomatoes, peppers, or squash.",
          cause:
            "Calcium not reaching the developing fruit, usually caused by inconsistent watering rather than a true calcium shortage.",
          treatment:
            "Water consistently and mulch to retain even soil moisture; adding calcium alone rarely fixes the underlying watering issue.",
          prevention:
            "Keep watering even and regular, mulch well, and avoid letting soil dry out between waterings.",
          actions: [
            "Water consistently and evenly",
            "Mulch to retain soil moisture",
            "Avoid letting soil dry out between waterings",
          ],
        },
        {
          name: "Iron chlorosis",
          guess: "CHLOROSIS",
          category: "disorder",
          emoji: "🟡",
          clue: "New leaves turn yellow, but the veins stay stubbornly green.",
          symptoms:
            "Yellowing of new leaves while the veins remain green, giving a distinctive net-like pattern.",
          cause:
            "Iron becoming unavailable to the plant, most often in alkaline (high pH) soils rather than true iron shortage.",
          treatment:
            "Lower soil pH where practical, apply chelated iron as a foliar spray or soil drench, and improve drainage.",
          prevention:
            "Test and manage soil pH for the species grown, and avoid over-liming acid-loving plants.",
          actions: [
            "Lower soil pH where practical",
            "Apply chelated iron as a foliar spray",
            "Improve drainage",
          ],
        },
        {
          name: "Sunscald",
          guess: "SUNSCALD",
          category: "disorder",
          emoji: "☀️",
          clue: "A pale, papery blister appears on the side of the fruit facing the harsh afternoon sun.",
          symptoms:
            "Pale, blistered, or bleached patches on fruit or bark on the side facing strong sun, sometimes cracking later.",
          cause:
            "Sudden, intense sun exposure on tissue not acclimatised to it, often after pruning removes shade foliage.",
          treatment:
            "Use shade cloth over exposed fruit, avoid harsh pruning in peak summer, and paint trunks with diluted white latex to reflect heat.",
          prevention:
            "Introduce sun exposure gradually, retain some canopy shade, and protect newly exposed bark or fruit.",
          actions: [
            "Use shade cloth over exposed fruit",
            "Avoid harsh pruning in peak summer",
            "Paint trunks with diluted white latex",
          ],
        },
        {
          name: "Frost damage",
          guess: "FROSTDAMAGE",
          wordLens: [5, 6],
          category: "disorder",
          emoji: "❄️",
          clue: "Overnight the leaves turned black and slumped, right after the temperature plunged.",
          symptoms:
            "Blackened, water-soaked, wilted leaves and stems appearing suddenly after a cold snap.",
          cause:
            "Ice forming within plant cells, rupturing them, following exposure to freezing temperatures.",
          treatment:
            "Avoid pruning damaged growth immediately, water well before hard frosts are forecast, and wait to see what regrows before cutting back.",
          prevention:
            "Use frost cloth on cold nights, choose appropriately hardy species, and avoid feeding late in the season.",
          actions: [
            "Avoid pruning damaged growth immediately",
            "Water well before hard frosts",
            "Wait to see what regrows before cutting back",
          ],
        },
        {
          name: "Oedema",
          guess: "OEDEMA",
          category: "disorder",
          emoji: "💦",
          clue: "Odd corky warts appear on the underside of the leaf, though there's no pest in sight.",
          symptoms:
            "Small, corky, wart-like bumps on the undersides of leaves, with no insects or fungal growth present.",
          cause:
            "Roots absorbing more water than the leaves can transpire, usually from overwatering combined with low light and still air.",
          treatment:
            "Reduce watering frequency, increase light levels and airflow, and avoid letting pots sit waterlogged.",
          prevention:
            "Water according to season and light levels, and improve ventilation around susceptible plants.",
          actions: [
            "Reduce watering frequency",
            "Increase light levels and airflow",
            "Avoid letting pots sit waterlogged",
          ],
        },
        {
          name: "Nitrogen deficiency",
          guess: "NITROGENDEFICIENCY",
          wordLens: [8, 10],
          category: "disorder",
          emoji: "🟢",
          clue: "The oldest, lowest leaves fade evenly to pale yellow while the whole plant seems to stall.",
          symptoms:
            "Uniform pale yellowing starting on older, lower leaves, alongside slow, stunted overall growth.",
          cause:
            "Insufficient available nitrogen in the soil for the plant's growth stage.",
          treatment:
            "Apply a balanced or nitrogen-rich fertiliser, or work in compost, blood meal, or well-rotted manure.",
          prevention:
            "Feed regularly during the growing season and maintain healthy, organic-rich soil.",
          actions: [
            "Apply a balanced or nitrogen-rich fertiliser",
            "Work in compost or well-rotted manure",
            "Feed regularly during the growing season",
          ],
        },
        {
          name: "Magnesium deficiency",
          guess: "MAGNESIUMDEFICIENCY",
          wordLens: [9, 10],
          category: "disorder",
          emoji: "🍂",
          clue: "Older leaves go yellow between the veins, like a green skeleton left on a pale sheet.",
          symptoms:
            "Interveinal yellowing on older leaves first, with the veins themselves staying distinctly green.",
          cause:
            "Insufficient magnesium, often worsened in sandy, free-draining or heavily leached soils.",
          treatment:
            "Apply an Epsom salt (magnesium sulfate) foliar spray or soil drench to correct the shortage quickly.",
          prevention:
            "Feed with a balanced fertiliser containing trace elements and avoid over-liming sandy soils.",
          actions: [
            "Apply an Epsom salt foliar spray",
            "Apply a magnesium sulfate soil drench",
            "Feed with a balanced fertiliser containing trace elements",
          ],
        },
      ];

      
export const CATEGORY_LABEL: Record<Category, string> = {
  pest: "Pest",
  disease: "Disease",
  disorder: "Disorder",
};

export function specimenId(name: string): number {
  return SPECIMENS.findIndex((d) => d.name === name) + 1;
}
