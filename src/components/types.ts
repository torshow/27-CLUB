export interface Artist {
  id: string;
  name: string;
  role: string;
  birthYear: number;
  deathYear: number;
  image: string;
  bio: string;
  famousTrack: string;
  spotifyUrl: string;
}

export const club27Data: Artist[] = [
  {
    id: "jimi-hendrix",
    name: "Jimi Hendrix",
    role: "Guitarist & Singer",
    birthYear: 1942,
    deathYear: 1970,
    image: "${import.meta.env.BASE_URL}/jimi.jpg", 
    bio: "He completely changed how the electric guitar is played, using feedback and distortion to create sounds no one had ever heard before.",
    famousTrack: "Purple Haze",
    spotifyUrl: "https://spotify.com" 
  },
  {
    id: "amy-winehouse",
    name: "Amy Winehouse",
    role: "Soul & Jazz Singer",
    birthYear: 1983,
    deathYear: 2011,
    image: "${import.meta.env.BASE_URL}/amy.jpg", 
    bio: "A London singer whose deep, raw vocals mixed classic jazz with modern rhythm and blues. Her personal life heavily shaped her honest songwriting.",
    famousTrack: "Back To Black",
    spotifyUrl: "https://spotify.com" 
  },
  {
    id: "kurt-cobain",
    name: "Kurt Cobain",
    role: "Nirvana Frontman",
    birthYear: 1967,
    deathYear: 1994,
    image: "${import.meta.env.BASE_URL}/kurt.jpg", 
    bio: "As the guitarist and main writer for Nirvana, his music launched the 90s grunge movement from Seattle and came to define an entire generation.",
    famousTrack: "Smells Like Teen Spirit",
    spotifyUrl: "https://spotify.com" 
  },
  {
    id: "janis-joplin",
    name: "Janis Joplin",
    role: "Rock & Blues Singer",
    birthYear: 1943,
    deathYear: 1970,
    image: "${import.meta.env.BASE_URL}/janis.jpg", 
    bio: "One of rock's first major female stars, known for her intense, screaming blues performances that broke the mold for female artists in the 1960s.",
    famousTrack: "Piece of My Heart",
    spotifyUrl: "https://spotify.com" 
  }
];
