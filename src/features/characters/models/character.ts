export interface CharacterImage {
  big: string;
  little: string;
}

export interface Character {
  id: number;
  images: CharacterImage;
  description: string;
  name: string;
}
