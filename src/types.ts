export interface  ApiPage {
  title: string;
  content: string;
}

export interface  Page {
  id: string;
  title: string;
  content: string;
}

export interface  ApiPages {
  [id: string]: Page;
}