export interface Note {
  id: string; // use string because firebase id is in the string format
  title: string;
  content: string;
  createdAt: Date;
}
