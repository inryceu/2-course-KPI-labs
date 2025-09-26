export interface Game {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  ageRating: string;
  cover: string; // URL
  description: string;
  systemRequirements: Map<string, string>;
  baseGameId?: number; // FK, DLC reference
}

// has Tag many-to-many
