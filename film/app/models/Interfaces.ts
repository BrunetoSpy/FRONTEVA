//Interfaces.ts
interface Character {
  id: number;
  description: string;
  cost: number;
  hability: string;
  sceneId: number;
}

interface CharacterForm extends Omit<Character, 'id'> {}

interface Scene {
  id: number;
  description: string;
  budget: number;
  minutes: number;
  filmId: number;
  characters: Array<Character>;
}

interface SceneForm extends Omit<Scene, 'id' | 'characters'> {}

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  scenes: Array<Scene>;
}

interface FilmForm extends Omit<Film, 'id' | 'scenes'> {}

type FetchResponses = Character | Scene | Film;
