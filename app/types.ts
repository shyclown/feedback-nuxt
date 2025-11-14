export type SavedFeedback = {
  text: string;
  contact: boolean;
  email: string;
  name: string;
  sentiment: string;
  shared: boolean;
  id: number;
  createdAt: Date;
};

export type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  phoneNr: string;
};
