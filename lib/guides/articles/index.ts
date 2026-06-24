import { budgetBeachDaysGuide } from "./budget-friendly-beach-days";
import { firstTimersGuide } from "./first-timers-guide-pompano-beach";
import { freeThingsGuide } from "./best-free-things-to-do";
import { happyHoursGuide } from "./happy-hours-near-the-beach";
import { movingToPompanoGuide } from "./moving-to-pompano-beach";
import { oldPompanoGuide } from "./neighborhood-spotlight-old-pompano";
import { parkingPierGuide } from "./parking-pier-access-tips";
import { seasonalEventsGuide } from "./seasonal-events-calendar";
import type { Guide } from "../types";

export const guides: Guide[] = [
  firstTimersGuide,
  budgetBeachDaysGuide,
  oldPompanoGuide,
  seasonalEventsGuide,
  freeThingsGuide,
  movingToPompanoGuide,
  parkingPierGuide,
  happyHoursGuide,
];
