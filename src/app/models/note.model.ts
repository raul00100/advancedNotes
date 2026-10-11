export interface Note {
  id: string; // use string because firebase id is string
  title: string;
  content: string;
  createdAt: Date;
}
