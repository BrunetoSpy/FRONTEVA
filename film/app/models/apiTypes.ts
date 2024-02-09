// apiTypes.ts
export interface Character {
    id: number;
    description: string;
    cost: number;
    hability: string;
    sceneId: number;
  }
  
  export interface Scene {
    id: number;
    description: string;
    budget: number;
    minutes: number;
    filmId: number;
    characters: Array<Character>;
  }
  
  export interface Film {
    id: number;
    title: string;
    director: string;
    duration: number;
    scenes: Array<Scene>;
  }
  