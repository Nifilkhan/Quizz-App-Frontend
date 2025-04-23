export interface Question {
  _id: string;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
}
