import { images } from "@/lib/images";

export const VIATOR_AFFILIATE_DISCLOSURE =
  "We may earn a commission if you book through these links, at no extra cost to you.";

export const viatorExperiences = [
  {
    id: "browse-all",
    title: "Browse All Experiences",
    description:
      "Explore tours, activities, water adventures, and local attractions near Pompano Beach.",
    buttonLabel: "View Experiences",
    href: "https://www.viator.com/searchResults/all?text=pompano+beach&pid=P00307055&mcid=42383&medium=link&medium_version=selector&campaign=excursions-page",
    image: images.goldenBeach,
    imageAlt: images.goldenBeachAlt,
  },
  {
    id: "fishing-charters",
    title: "Fishing Charters",
    description:
      "Book deep-sea fishing trips, inshore charters, and guided fishing experiences.",
    buttonLabel: "View Fishing Trips",
    href: "https://www.viator.com/searchResults/all?text=pompano+beach+fishing+charter&pid=P00307055&mcid=42383&medium=link&medium_version=selector&campaign=Fishing-Charter",
    image: images.fishing,
    imageAlt: images.fishingAlt,
  },
  {
    id: "boat-dolphin-tours",
    title: "Boat & Dolphin Tours",
    description:
      "Discover sightseeing cruises, dolphin encounters, and scenic boat tours.",
    buttonLabel: "View Boat Tours",
    href: "https://www.viator.com/searchResults/all?text=pompano+beach+Boat+&pid=P00307055&mcid=42383&medium=link&medium_version=selector&campaign=Boat-Dolphin-Tours",
    image: images.catamaran,
    imageAlt: images.catamaranAlt,
  },
  {
    id: "water-sports",
    title: "Water Sports",
    description:
      "Find jet ski rentals, paddleboarding, watersports, and adventure activities.",
    buttonLabel: "View Water Sports",
    href: "https://www.viator.com/searchResults/all?text=pompano+beach+water+sport&pid=P00307055&mcid=42383&medium=link&medium_version=selector&campaign=water-sport",
    image: images.kayak,
    imageAlt: images.kayakAlt,
  },
  {
    id: "snorkeling-scuba",
    title: "Snorkeling & Scuba Diving",
    description:
      "Explore reefs, marine life, snorkeling excursions, and scuba adventures.",
    buttonLabel: "View Adventures",
    href: "https://www.viator.com/searchResults/all?text=pompano+beach+snorkeling+scuba+diving&pid=P00307055&mcid=42383&medium=link&medium_version=selector&campaign=snorkeling-scuba",
    image: images.snorkeling,
    imageAlt: images.snorkelingAlt,
  },
] as const;
