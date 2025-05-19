const express=require('express');
const cors=require('cors');

const app=express();


app.use(cors());
app.use(express.json());

const animals=[
  {
    "name": "African Elephant",
    "description": "The largest land mammal, known for its impressive size, long trunk used for communication and grasping, and highly intelligent social structures within herds roaming the vast savannas and forests of Africa."
  },
  {
    "name": "Bengal Tiger",
    "description": "A majestic striped predator inhabiting the dense forests and mangrove swamps of the Indian subcontinent, renowned for its powerful build, solitary nature, and iconic orange and black coat."
  },
  {
    "name": "Giant Panda",
    "description": "A beloved bear native to the bamboo forests of China, characterized by its black and white fur, gentle demeanor, and almost exclusive diet of bamboo, making it a symbol of conservation efforts."
  },
  {
    "name": "Grey Wolf",
    "description": "A highly social and adaptable canid found across North America and Eurasia, known for its complex pack dynamics, cooperative hunting strategies, and hauntingly beautiful howls echoing through the wilderness."
  },
  {
    "name": "Humpback Whale",
    "description": "A migratory marine mammal easily recognized by its knobby head and long pectoral fins, famous for its complex and melodic songs that travel vast distances across the world's oceans during breeding season."
  },
  {
    "name": "Cheetah",
    "description": "The fastest land animal, built for incredible speed with a flexible spine and long legs, relying on bursts of acceleration to chase down prey across the open grasslands of Africa."
  },
  {
    "name": "Orangutan",
    "description": "An intelligent and arboreal great ape native to the rainforests of Borneo and Sumatra, known for its reddish-brown fur, long arms adapted for tree climbing, and complex social behaviors."
  },
  {
    "name": "Snow Leopard",
    "description": "A elusive and solitary feline inhabiting the high-altitude mountain ranges of Central Asia, perfectly camouflaged with its smoky grey fur and thick tail, adapted to survive in harsh, snowy environments."
  },
  {
    "name": "Emperor Penguin",
    "description": "The tallest and heaviest of all living penguin species, breeding in the harsh Antarctic winter, with males famously incubating a single egg on their feet in the freezing cold."
  },
  {
    "name": "Komodo Dragon",
    "description": "The largest living lizard, endemic to several Indonesian islands, possessing a venomous bite and a powerful build, making it a formidable apex predator in its unique ecosystem."
  },
  {
    "name": "African Lion",
    "description": "A powerful and social feline, often called the 'king of the jungle' (though they live in grasslands), known for their cooperative hunting in prides and their iconic roaring calls."
  },
  {
    "name": "Polar Bear",
    "description": "A magnificent Arctic predator adapted to survive in icy environments, with thick white fur for camouflage and powerful swimming abilities to hunt seals on sea ice."
  },
  {
    "name": "Giraffe",
    "description": "The tallest mammal on Earth, easily recognized by its extremely long neck used to reach high foliage, with unique spot patterns and a gentle, herbivorous nature."
  },
  {
    "name": "Dolphin",
    "description": "Highly intelligent marine mammals known for their playful behavior, sophisticated communication through clicks and whistles, and streamlined bodies adapted for swift swimming in oceans worldwide."
  },
  {
    "name": "Bald Eagle",
    "description": "A majestic bird of prey, the national symbol of the United States, recognized by its white head and tail feathers, powerful talons for hunting fish, and keen eyesight."
  },
  {
    "name": "Rhinoceros",
    "description": "Large, herbivorous mammals characterized by their prominent horns on their snouts, facing threats from poaching due to the value of these horns in traditional medicine."
  },
  {
    "name": "Hippopotamus",
    "description": "A semi-aquatic mammal native to sub-Saharan Africa, known for its barrel-shaped body, large mouth with formidable teeth, and spending most of the day submerged in water."
  },
  {
    "name": "Kangaroo",
    "description": "A marsupial native to Australia, famous for its powerful hind legs used for hopping, a strong tail for balance, and a pouch for carrying its young, called joeys."
  },
  {
    "name": "Cobra",
    "description": "A venomous snake known for its distinctive hood that it flares when threatened, found in various regions of Asia and Africa, possessing potent neurotoxic venom."
  },
  {
    "name": "Sea Otter",
    "description": "The smallest marine mammal in North America, known for its thick fur, playful behavior, and crucial role in kelp forest ecosystems by controlling sea urchin populations."
  },
  {
    "name": "Zebra",
    "description": "African equids with distinctive black and white stripes, which are unique to each individual, often found in herds on grasslands and savannas, grazing on vegetation."
  },
  {
    "name": "Koala",
    "description": "An arboreal marsupial native to Australia, known for its fluffy ears, leathery nose, and diet consisting almost entirely of eucalyptus leaves, spending much of its time sleeping in trees."
  },
  {
    "name": "Octopus",
    "description": "A highly intelligent marine mollusk with eight arms covered in suckers, capable of camouflage, problem-solving, and even escaping from seemingly secure enclosures."
  },
  {
    "name": "Peacock",
    "description": "A male bird known for its extravagant and colorful tail feathers, which it displays during courtship rituals to attract peahens, creating a stunning visual spectacle."
  },
  {
    "name": "Beaver",
    "description": "A semi-aquatic rodent known for its dam-building abilities, using logs, branches, and mud to create ponds and lodges, significantly altering its local environment."
  },
  {
    "name": "Red Fox",
    "description": "A small and adaptable canid with reddish-brown fur, known for its cunning and intelligence, found in various habitats across the Northern Hemisphere, often hunting small mammals."
  },
  {
    "name": "Macaw",
    "description": "Large and brightly colored parrots native to Central and South American rainforests, known for their loud vocalizations, strong beaks for cracking nuts, and vibrant plumage."
  },
  {
    "name": "Chimpanzee",
    "description": "A highly intelligent and social great ape native to the forests of Africa, known for its complex social structures, tool use, and close genetic relationship to humans."
  },
  {
    "name": "Crocodile",
    "description": "A large and powerful reptile with a long snout, sharp teeth, and armored skin, found in tropical regions worldwide, often lying in wait to ambush prey in water."
  },
  {
    "name": "Eagle Ray",
    "description": "A cartilaginous fish with broad wings, gliding gracefully through the ocean, often seen in groups, and possessing a venomous spine near the base of its tail for defense."
  },
  {
    "name": "Sloth",
    "description": "A slow-moving mammal native to Central and South American rainforests, spending most of its life hanging upside down in trees, with a low metabolic rate and algae growing on its fur."
  },
  {
    "name": "Penguin",
    "description": "Flightless aquatic birds adapted for swimming in cold waters, found primarily in the Southern Hemisphere, with streamlined bodies and flippers for propulsion."
  },
  {
    "name": "Camel",
    "description": "An even-toed ungulate adapted to arid environments, known for its humps which store fat, its ability to go long periods without water, and its sturdy build for desert travel."
  },
  {
    "name": "Orchid Mantis",
    "description": "A fascinating insect that mimics the appearance of orchid flowers, using its camouflage to ambush unsuspecting prey, showcasing a remarkable example of mimicry in nature."
  },
  {
    "name": "Electric Eel",
    "description": "A South American freshwater fish capable of generating powerful electric shocks for defense and hunting, despite not being a true eel, possessing specialized organs for this unique ability."
  },
  {
    "name": "Hammerhead Shark",
    "description": "A distinctive shark characterized by its hammer-shaped head, which enhances its sensory perception and maneuverability in the ocean, found in warmer waters worldwide."
  },
  {
    "name": "Pufferfish",
    "description": "A fish known for its ability to inflate its body into a spherical shape when threatened, a defense mechanism against predators, and some species contain a deadly neurotoxin."
  },
  {
    "name": "Narwhal",
    "description": "A medium-sized toothed whale found in Arctic waters, males possessing a long, spiraled tusk, which is actually an elongated tooth with sensory capabilities."
  },
  {
    "name": "Aye-aye",
    "description": "A nocturnal lemur native to Madagascar, characterized by its large eyes, bushy tail, and a long, slender middle finger used for tapping on trees to locate insect larvae."
  },
  {
    "name": "Tapir",
    "description": "A large, herbivorous mammal with a distinctive prehensile snout, found in the forests of South America and Southeast Asia, related to horses and rhinoceroses."
  },
  {
    "name": "Wolverine",
    "description": "A stocky and powerful mustelid, known for its ferocity and ability to thrive in harsh, cold environments, found in the northern regions of North America and Eurasia."
  },
  {
    "name": "Quokka",
    "description": "A small macropod native to Western Australia, often called the 'happiest animal' due to its seemingly smiling facial expression, known for its friendly and curious nature."
  },
  {
    "name": "Axolotl",
    "description": "A neotenic salamander native to Mexico, retaining its larval features into adulthood, known for its external gills and regenerative abilities, often kept as a pet and studied in research."
  },
  {
    "name": "Fennec Fox",
    "description": "A small nocturnal fox native to the Sahara Desert, characterized by its exceptionally large ears, which help it dissipate heat and locate prey underground."
  },
  {
    "name": "Kakapo",
    "description": "A flightless nocturnal parrot endemic to New Zealand, known for its moss-green plumage, strong musty odor, and booming mating calls, critically endangered due to introduced predators."
  },
  {
    "name": "Okapi",
    "description": "An elusive mammal native to the rainforests of the Democratic Republic of the Congo, often called the 'forest giraffe' due to its long neck and zebra-like stripes on its legs."
  },
  {
    "name": "Pangolin",
    "description": "A scaled mammal, the only extant member of its order, found in Asia and Africa, heavily trafficked for its meat and scales, making it one of the world's most endangered animals."
  },
  {
    "name": "Tarsier",
    "description": "A small nocturnal primate with enormous eyes, native to Southeast Asia, known for its incredible leaping abilities and its diet consisting mainly of insects."
  },
  {
    "name": "Naked Mole Rat",
    "description": "A hairless, subterranean rodent native to East Africa, living in eusocial colonies similar to ants and bees, with a remarkable resistance to cancer and a long lifespan."
  }
]

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.get('/animals', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedAnimals = animals.slice(startIndex, endIndex);
  res.json(paginatedAnimals);
});




const PORT=5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
