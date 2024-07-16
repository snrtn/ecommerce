export interface Suggestion {
  name: string;
  colors: string[];
  sizes: string[];
  price: string;
}

export interface Suggestions {
  hommes: Suggestion[];
  femmes: Suggestion[];
}
