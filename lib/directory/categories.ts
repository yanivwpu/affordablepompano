import type { DirectoryType } from "./types";

export type DirectoryCategory = {
  id: string;
  title: string;
  description: string;
  type: DirectoryType;
  /** Anchor on hub page or filter key */
  hubAnchor?: string;
};

export const restaurantCategories: DirectoryCategory[] = [
  { id: "seafood", type: "restaurant", title: "Seafood", description: "Fresh catch, raw bars, and pier-side favorites.", hubAnchor: "seafood" },
  { id: "waterfront", type: "restaurant", title: "Waterfront", description: "Harbor views, Intracoastal patios, and sunset dining.", hubAnchor: "waterfront" },
  { id: "breakfast", type: "restaurant", title: "Breakfast & Brunch", description: "Morning diners, brunch patios, and Cuban coffee.", hubAnchor: "breakfast" },
  { id: "brunch", type: "restaurant", title: "Brunch", description: "Weekend patios, mimosas, and late-morning favorites." },
  { id: "coffee", type: "restaurant", title: "Coffee & Cafes", description: "Espresso bars, bakeries, and grab-and-go mornings." },
  { id: "pizza", type: "restaurant", title: "Pizza", description: "Neapolitan, New York slice, and delivery favorites." },
  { id: "italian", type: "restaurant", title: "Italian", description: "Pasta, red-sauce classics, and neighborhood trattorias.", hubAnchor: "italian" },
  { id: "mexican", type: "restaurant", title: "Mexican & Tacos", description: "Taco counters, cantinas, and casual Latin eats.", hubAnchor: "cheap-eats" },
  { id: "sushi", type: "restaurant", title: "Sushi & Asian", description: "Sushi bars, poke, and Pan-Asian spots." },
  { id: "steakhouse", type: "restaurant", title: "Steakhouse", description: "Steaks, chops, and special-occasion dinners." },
  { id: "family-dining", type: "restaurant", title: "Family Dining", description: "Kid-friendly menus and relaxed service." },
  { id: "fine-dining", type: "restaurant", title: "Fine Dining", description: "Chef-driven menus and date-night destinations." },
  { id: "happy-hour", type: "restaurant", title: "Happy Hour", description: "Discount drinks, apps, and early-evening deals." },
];

export const businessCategories: DirectoryCategory[] = [
  { id: "real-estate", type: "business", title: "Real Estate", description: "Agents, brokers, and relocation specialists." },
  { id: "mortgage", type: "business", title: "Mortgage & Lending", description: "Purchase, refinance, and snowbird financing." },
  { id: "title", type: "business", title: "Title Companies", description: "Closing and title services for Broward transactions." },
  { id: "insurance", type: "business", title: "Insurance", description: "Home, flood, auto, and commercial coverage." },
  { id: "attorneys", type: "business", title: "Attorneys", description: "Real estate, estate, and business law." },
  { id: "inspectors", type: "business", title: "Home Inspectors", description: "Buyers, sellers, and wind-mitigation inspections." },
  { id: "contractors", type: "business", title: "General Contractors", description: "Remodeling, additions, and hurricane hardening." },
  { id: "roofing", type: "business", title: "Roofing", description: "Roof repair, replacement, and storm prep." },
  { id: "plumbing", type: "business", title: "Plumbing", description: "Residential and commercial plumbing services." },
  { id: "electricians", type: "business", title: "Electricians", description: "Electrical repair, panels, and EV chargers." },
  { id: "hvac", type: "business", title: "HVAC", description: "AC repair, installation, and maintenance." },
  { id: "landscaping", type: "business", title: "Landscaping", description: "Lawns, irrigation, and tropical landscaping." },
  { id: "pool-services", type: "business", title: "Pool Services", description: "Pool cleaning, repair, and resurfacing." },
  { id: "pest-control", type: "business", title: "Pest Control", description: "Termite, rodent, and lawn pest treatments." },
  { id: "photographers", type: "business", title: "Photographers", description: "Real estate, portrait, and event photography." },
  { id: "medical", type: "business", title: "Medical", description: "Primary care and specialty clinics." },
  { id: "dentists", type: "business", title: "Dentists", description: "General and cosmetic dentistry." },
  { id: "veterinarians", type: "business", title: "Veterinarians", description: "Pet care and emergency vet services." },
  { id: "auto-repair", type: "business", title: "Auto Repair", description: "Mechanics, tires, and auto detailing." },
  { id: "fitness", type: "business", title: "Fitness & Gyms", description: "Gyms, studios, and personal training." },
  { id: "services", type: "business", title: "Local Services", description: "Accountants, cleaners, and everyday pros." },
];

export const excursionCategories: DirectoryCategory[] = [
  { id: "fishing-charters", type: "excursion", title: "Fishing Charters", description: "Reef, drift, and deep-sea charters." },
  { id: "boat-rentals", type: "excursion", title: "Boat Rentals", description: "Pontoon, deck boat, and day-rental options." },
  { id: "boat-tours", type: "excursion", title: "Boat Tours", description: "Sightseeing, lighthouse, and sunset cruises." },
  { id: "jet-ski", type: "excursion", title: "Jet Ski Rentals", description: "Personal watercraft and guided rides." },
  { id: "diving", type: "excursion", title: "Scuba Diving", description: "Certified dives and discover scuba trips." },
  { id: "snorkeling", type: "excursion", title: "Snorkeling", description: "Reef snorkel tours and gear rentals." },
  { id: "paddleboarding", type: "excursion", title: "Paddleboarding", description: "SUP rentals and Intracoastal paddles." },
  { id: "kayaking", type: "excursion", title: "Kayaking", description: "Mangrove tunnels and calm-water paddles." },
  { id: "parks", type: "excursion", title: "Parks & Nature", description: "Trails, birding, and outdoor recreation." },
  { id: "museums", type: "excursion", title: "Museums & Culture", description: "Local history and arts attractions." },
  { id: "family-attractions", type: "excursion", title: "Family Attractions", description: "Kid-friendly outings and group activities." },
  { id: "golf", type: "excursion", title: "Golf", description: "Public courses and country-club guest play." },
  { id: "shopping", type: "excursion", title: "Shopping", description: "Boutiques, markets, and local retail." },
  { id: "nightlife", type: "excursion", title: "Nightlife", description: "Live music, bars, and evening entertainment." },
];

export function getCategoriesForType(type: DirectoryType): DirectoryCategory[] {
  if (type === "restaurant") return restaurantCategories;
  if (type === "excursion") return excursionCategories;
  return businessCategories;
}

export function getCategoryById(
  type: DirectoryType,
  categoryId: string,
): DirectoryCategory | undefined {
  return getCategoriesForType(type).find((c) => c.id === categoryId);
}
