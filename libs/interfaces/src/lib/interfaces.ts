export interface ChuckSearchResult {
  total: number;
  result: ChuckItemResult[];
}

export interface ChuckItemResult {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface ChukRandomJoke {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
