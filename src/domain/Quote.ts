import { Author } from "@/domain/Author";

type Message = string;
type Genre = string;

export interface Quote {
  message: Message;
  author: Author;
  genre: Genre;
}
