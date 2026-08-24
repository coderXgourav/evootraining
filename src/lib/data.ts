export type Camp = {
  id: string;
  name: string;
  ageGroup: string;
  date: string;
  dateISO: string;
  start: string;
  finish: string;
  location: string;
  spaces: number;
  capacity: number;
  price: number;
  coach: string;
  description: string;
};

export const camps: Camp[] = [
  {
    id: "c1",
    name: "October Elite Camp",
    ageGroup: "8-11",
    date: "27 Oct 2026",
    dateISO: "2026-10-27",
    start: "09:00",
    finish: "15:00",
    location: "Manchester",
    spaces: 12,
    capacity: 30,
    price: 45,
    coach: "Daniel Reyes",
    description:
      "Six hours of technical work, small-sided games and performance testing built for developing players.",
  },
  {
    id: "c2",
    name: "Half-Term Performance Camp",
    ageGroup: "12-14",
    date: "28 Oct 2026",
    dateISO: "2026-10-28",
    start: "09:30",
    finish: "16:00",
    location: "Leeds",
    spaces: 4,
    capacity: 24,
    price: 55,
    coach: "Marcus Bell",
    description:
      "Speed, strength and decision-making under fatigue. Designed for players competing at academy level.",
  },
  {
    id: "c3",
    name: "Winter Development Camp",
    ageGroup: "6-9",
    date: "21 Dec 2026",
    dateISO: "2026-12-21",
    start: "10:00",
    finish: "14:00",
    location: "Manchester",
    spaces: 0,
    capacity: 28,
    price: 40,
    coach: "Aisha Kaur",
    description:
      "First touch, coordination and confidence in a high-energy environment for younger athletes.",
  },
  {
    id: "c4",
    name: "Easter Elite Residential",
    ageGroup: "14-16",
    date: "06 Apr 2027",
    dateISO: "2027-04-06",
    start: "08:30",
    finish: "17:00",
    location: "Birmingham",
    spaces: 18,
    capacity: 32,
    price: 95,
    coach: "Daniel Reyes",
    description:
      "Full-day elite pathway camp with individual performance reports and video analysis.",
  },
  {
    id: "c5",
    name: "Summer Skills Intensive",
    ageGroup: "10-13",
    date: "27 Jul 2027",
    dateISO: "2027-07-27",
    start: "09:00",
    finish: "15:30",
    location: "Leeds",
    spaces: 9,
    capacity: 30,
    price: 50,
    coach: "Marcus Bell",
    description:
      "Repetition-led technical blocks paired with agility and finishing sessions.",
  },
  {
    id: "c6",
    name: "Goalkeeper Performance Camp",
    ageGroup: "12-16",
    date: "29 Jul 2027",
    dateISO: "2027-07-29",
    start: "09:00",
    finish: "14:00",
    location: "Birmingham",
    spaces: 6,
    capacity: 16,
    price: 60,
    coach: "Aisha Kaur",
    description:
      "Handling, distribution and shot-stopping under pressure with specialist goalkeeping coaches.",
  },
];

export type Coach = {
  id: string;
  name: string;
  position: string;
  speciality: string;
  qualifications: string[];
  experience: string;
  bio: string;
  programmes: string[];
  initials: string;
};

export const coaches: Coach[] = [
  {
    id: "daniel",
    name: "Daniel Reyes",
    initials: "DR",
    position: "Head of Performance",
    speciality: "Technical development & elite pathway",
    qualifications: ["UEFA A Licence", "FA Youth Award", "L3 Strength & Conditioning"],
    experience: "14 years across academy and international youth setups",
    bio: "Daniel builds long-term development plans for athletes chasing academy and scholarship pathways, with an obsessive focus on repeatable technique under pressure.",
    programmes: ["Private Coaching", "Performance Development", "Holiday Camps"],
  },
  {
    id: "marcus",
    name: "Marcus Bell",
    initials: "MB",
    position: "Lead Performance Coach",
    speciality: "Speed, power & physical performance",
    qualifications: ["MSc Sport Science", "UKSCA Accredited", "UEFA B Licence"],
    experience: "11 years in professional sport and youth performance",
    bio: "Marcus designs the physical side of the programme — acceleration mechanics, robustness and conditioning that transfers directly into competition.",
    programmes: ["Group Training", "Performance Development", "Private Coaching"],
  },
  {
    id: "aisha",
    name: "Aisha Kaur",
    initials: "AK",
    position: "Technical & Goalkeeping Coach",
    speciality: "Goalkeeping, first touch & game intelligence",
    qualifications: ["UEFA B Licence", "FA GK Level 3", "Safeguarding Certified"],
    experience: "9 years in youth academy coaching",
    bio: "Aisha specialises in the details — scanning, body shape and decision speed — turning talented young players into reliable performers.",
    programmes: ["Private Coaching", "Holiday Camps", "Group Training"],
  },
];

export type Location = {
  id: string;
  venue: string;
  address: string;
  coaching: string[];
  camps: string[];
  times: string[];
  mapQuery: string;
};

export const locations: Location[] = [
  {
    id: "manchester",
    venue: "EvoTraining Manchester",
    address: "Trafford Sports Dome, Manchester, M32 0LR",
    coaching: ["Private Coaching", "Group Training", "Performance Development"],
    camps: ["October Elite Camp", "Winter Development Camp"],
    times: ["Mon–Fri 16:00–20:00", "Sat 09:00–14:00"],
    mapQuery: "Trafford Sports Dome Manchester",
  },
  {
    id: "leeds",
    venue: "EvoTraining Leeds",
    address: "Elland Performance Centre, Leeds, LS11 8BU",
    coaching: ["Private Coaching", "Group Training"],
    camps: ["Half-Term Performance Camp", "Summer Skills Intensive"],
    times: ["Mon–Thu 17:00–20:30", "Sun 10:00–13:00"],
    mapQuery: "Elland Road Leeds",
  },
  {
    id: "birmingham",
    venue: "EvoTraining Birmingham",
    address: "Aston Performance Hub, Birmingham, B6 6HE",
    coaching: ["Private Coaching", "Performance Development"],
    camps: ["Easter Elite Residential", "Goalkeeper Performance Camp"],
    times: ["Tue–Fri 16:30–20:00", "Sat 08:30–13:00"],
    mapQuery: "Aston Birmingham sports centre",
  },
];

export const programmes = [
  {
    id: "private",
    name: "Private Coaching",
    duration: "60 min",
    price: 50,
    detail: "1-to-1 technical and performance session",
  },
  {
    id: "duo",
    name: "Private Duo Session",
    duration: "60 min",
    price: 70,
    detail: "Two athletes, one coach, shared intensity",
  },
  {
    id: "group",
    name: "Group Training",
    duration: "90 min",
    price: 25,
    detail: "Small-group high-intensity development",
  },
  {
    id: "performance",
    name: "Performance Development",
    duration: "Block of 6",
    price: 270,
    detail: "Structured long-term development block",
  },
];

export const stats = [
  { value: "500+", label: "Athletes trained" },
  { value: "1,000+", label: "Sessions delivered" },
  { value: "3", label: "Training locations" },
];

export const testimonials = [
  {
    quote:
      "Six weeks in and the difference in his confidence on the ball is unmistakable. The coaching is detailed, demanding and genuinely individual.",
    name: "Rachel M.",
    role: "Parent, Manchester",
  },
  {
    quote:
      "The performance block changed how I train. I understand why I'm doing every drill and I feel faster in games.",
    name: "Kai T.",
    role: "Athlete, age 15",
  },
  {
    quote:
      "Organised, professional and relentlessly positive. The camps are the only thing my daughter asks for every holiday.",
    name: "David O.",
    role: "Parent, Leeds",
  },
];

export const pillars = [
  {
    title: "Technique",
    body: "Thousands of quality repetitions. First touch, ball mastery and execution that holds up when the game speeds up.",
  },
  {
    title: "Physical Performance",
    body: "Acceleration, change of direction, strength and durability programmed around each athlete's stage of growth.",
  },
  {
    title: "Game Intelligence",
    body: "Scanning, positioning and decision speed developed through structured constraint-based practice.",
  },
  {
    title: "Mentality",
    body: "Standards, discipline and resilience. Athletes learn to prepare properly and compete under pressure.",
  },
];
