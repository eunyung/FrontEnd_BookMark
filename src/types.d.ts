export type BookmarksResponse = {
  data: Bookmark[];
  totalElements: number;
  currentPage: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
};

export type BookmarkType = {
  id: number;
  title: string;
  url: string;
  created_at: Date;
};
