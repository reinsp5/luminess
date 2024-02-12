export interface Member {
  _id: string;
  name: string;
  nameEN: string;
  avatar: {
    _id: string;
    src: string;
    fileType: string;
    fileSize: number;
    fileName: string;
    width: number;
    height: number;
    altText: string;
    description: string;
    metadata: Object;
  };
  position: Position;
  platform: Platform[];
  useClass: Class[];
  twitter: string;
  youtube: string;
  website: string;
  biography: string;
}

interface Position {
  _id: string;
  name: string;
  slug: string;
}

interface Class {
  _id: string;
  name: string;
  slug: string;
  icon: {
    _id: string;
    src: string;
    fileType: string;
    fileSize: number;
    fileName: string;
    width: number;
    height: number;
  };
}

interface Platform {
  _id: string;
  name: string;
  slug: string;
  icon: {
    _id: string;
    src: string;
    fileType: string;
    fileSize: number;
    fileName: string;
    width: number;
    height: number;
  };
}