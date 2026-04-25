import { WeddingData } from "./types";

export const WEDDING_DATA: WeddingData & {
  gallery: string[];
  accounts: { bank: string; number: string; holder: string }[];
} = {
  bride: {
    name: "NOFI",
    fullName: "NOFI YANTI",
    childOrder: "Putri Pertama",
    father: "BUDIYANTO",
    mother: "RUBIAH",
    instagram: "",
  },
  groom: {
    name: "NELSON",
    fullName: "NELSON JESUA SELPA",
    childOrder: "Putra Pertama",
    father: "ANIR",
    mother: "SEJONG",
    instagram: "",
  },
  akad: {
    date: "Rabu, 20 Mei 2026",
    time: "10.00 WIB - Selesai",
    location: "Gg. Samudra, Padang Tikar 2",
    address: "",
    mapUrl: "https://maps.app.goo.gl/quVb79XVM7kbS1c96",
  },
  reception: {
    date: "Kamis, 21 Mei 2026",
    time: "13.00 WIB - Selesai",
    location: "Gg. Samudra, Padang Tikar 2",
    address: "",
    mapUrl: "https://maps.app.goo.gl/quVb79XVM7kbS1c96",
  },
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  ],
  accounts: [
    {
      bank: "BCA",
      number: "7925615510",
      holder: "Nofi Yanti",
    },
  ],
};

export const COLORS = {
  primary: "#8b6e4e",
  secondary: "#4a3728",
  accent: "#c4a484",
  background: "#fcfaf2",
  deepRed: "#722f37",
};
