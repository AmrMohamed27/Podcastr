export const sidebarLinks = [
  {
    id: 0,
    imgURL: "/assets/icons/left-sidebar/home.svg",
    route: "/",
    label: "Home",
  },
  {
    id: 1,
    imgURL: "/assets/icons/left-sidebar/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    id: 2,
    imgURL: "/assets/icons/left-sidebar/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
  {
    id: 3,
    imgURL: "/assets/icons/left-sidebar/profile.svg",
    route: "/profile",
    label: "My Profile",
  },
];

export const voiceDetails = [
  {
    id: 1,
    name: "alloy",
  },
  {
    id: 2,
    name: "echo",
  },
  {
    id: 3,
    name: "fable",
  },
  {
    id: 4,
    name: "onyx",
  },
  {
    id: 5,
    name: "nova",
  },
  {
    id: 6,
    name: "shimmer",
  },
];

export type podcast = {
  id: number;
  title: string;
  description: string;
  imgURL: string;
  host: string;
  plays: number;
  duration: { hours: number; minutes: number; seconds: number };
};

export const podcastData: podcast[] = [
  {
    id: 1,
    title: "Joe Rogan Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
    host: "Joe Rogan",
    plays: 1876512,
    duration: { hours: 3, minutes: 32, seconds: 45 }, // Using an object
  },
  {
    id: 2,
    title: "The Futur",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
    host: "Chris Do",
    plays: 320731,
    duration: { hours: 2, minutes: 15, seconds: 30 },
  },
  {
    id: 3,
    title: "Waveform",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
    host: "Marques Brownlee",
    plays: 274842,
    duration: { hours: 1, minutes: 50, seconds: 10 },
  },
  {
    id: 4,
    title: "The Tech Talks Daily",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
    host: "Neil C. Hughes",
    plays: 34567,
    duration: { hours: 1, minutes: 10, seconds: 5 },
  },
  {
    id: 5,
    title: "GV Audio Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
    host: "Gary Vaynerchuk",
    plays: 45456,
    duration: { hours: 2, minutes: 45, seconds: 15 },
  },
  {
    id: 6,
    title: "Syntax",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
    host: "Wes Bos & Scott Tolinski",
    plays: 42345,
    duration: { hours: 1, minutes: 55, seconds: 40 },
  },
  {
    id: 7,
    title: "IMPAULSIVE",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
    host: "Logan Paul",
    plays: 312413,
    duration: { hours: 3, minutes: 10, seconds: 20 },
  },
  {
    id: 8,
    title: "Ted Tech",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
    host: "Sherrell Dorsey",
    plays: 3124,
    duration: { hours: 2, minutes: 5, seconds: 55 },
  },
];

type Podcaster = {
  id: number;
  name: string;
  username: string;
  numberOfPodcasts: number;
  image: string;
};

export const topPodcasters: Podcaster[] = [
  {
    id: 1,
    name: "Roman Picisan",
    username: "@picisan",
    numberOfPodcasts: 34,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "James Aderson",
    username: "@james",
    numberOfPodcasts: 21,
    image: "https://via.placeholder.com/150",
  },
];

export const signInFooterLinks: { id: number; label: string; link: string }[] =
  [
    { id: 1, label: "Help", link: "/help" },
    { id: 2, label: "Privacy", link: "/privacy" },
    { id: 3, label: "Terms", link: "/terms" },
  ];
