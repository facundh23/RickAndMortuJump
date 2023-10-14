export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Response {
  results: Character[];
  info: Info;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Location {
  name: string;
  url: string;
}
