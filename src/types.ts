export type Category = "pest" | "disease" | "disorder";
export type AppMode = "diagnose" | "treat" | "study";
export type TileResult = "correct" | "present" | "absent";

export type Specimen = {
  name: string;
  guess: string;
  wordLens?: number[];
  category: Category;
  emoji: string;
  clue: string;
  symptoms: string;
  cause: string;
  treatment: string;
  prevention: string;
  actions: string[];
};

export type Guess = {
  word: string;
  result: TileResult[];
};

export type ActiveRow = {
  currentRowArr: string[];
  unlockedIndices: number[];
  inputPtr: number;
};

export type TreatOption = {
  text: string;
  correct: boolean;
};
