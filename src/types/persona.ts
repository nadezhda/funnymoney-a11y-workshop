export interface Persona {
  id: string;
  name: string;
  image?: string;
  summary: string;
  disability: string;
  tools: string[];
  goals: string[];
  frustrations: string[];
  solutions: string[];
}
