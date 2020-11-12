interface ISource {
  source: string | { uri: string };
}

interface Doc {
  _id: string;
  name: string;
}
interface BookListResponse {
  docs: Doc[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export { ISource, Doc, BookListResponse };
