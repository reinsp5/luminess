export interface Common {
  skip: number;
  limit: number;
  total: number;
}

export interface Articles extends Common {
  items: Article[];
}

export interface Article {
  _id: string;
  _sys: System;
  title: string;
  slug: string;
  body: string;
  tags: Tag[];
  description: string;
  coverImage: CoverImage;
}

interface CoverImage {
  _id: string;
  src: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  width: number;
  height: number;
  title: string;
  altText: string;
  description: string;
}

export interface Tags extends Common {
  items: Tag[];
}

export interface Tag {
  _id: string;
  _sys: System;
  name: string;
  slug: string;
}

export interface System {
  createdAt: Date;
  updatedAt: Date;
}
