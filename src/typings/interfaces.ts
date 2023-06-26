import type { Animated, ImageSourcePropType } from 'react-native';

export interface ISlideItems {
  id: number;
  title: string;
  description: string;
  images: ImageSourcePropType
}

export interface IPaginatorParam {
  data: ISlideItems[],
  scrollX: Animated.Value
}

export interface ISocMedImages {
  name: string;
  images: ImageSourcePropType
}

export interface IDataBookRender {
  id: number;
  title: string;
  author: string;
  cover: string;
  hash: string;
}

export interface IBookRenderParam {
  tab: string;
  item: IDataBookRender[]
}

export interface IChangePasswordState {
  newPassword: string;
  confirmPassword: string
}

export interface IEditProfileState {
  email: string;
  nameOrNick: string;
}

export interface ISocialMediaLink {
  email: string;
  facebook: string;
  linkedin: string;
  github: string;
}

export interface IAuthenticationInitialState {
  signInAccount: {
    response: null | any;
    status: null | string;
  },
  checkAuthenticated: {
    response: null | any;
    status: null | string;
  }
}

export interface IModalState {
  toggle: boolean,
  images: ImageSourcePropType,
  message: string;
  description: string;
}

export interface IZLibraryType {
  success: number;
  user: {
    id: number;
    email: string;
    name: string;
    kindle_email: string;
    remix_userkey: string;
    donations_active: null | string;
    donations_expire: null | string;
    downloads_today: number;
    downloads_limit: number;
    confirmed: 1;
    personalDomains: Array<string>;
  }
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  volume: string;
  year: number;
  edition: string;
  publisher: string;
  identifier: string;
  language: string;
  extension: string;
  pages: number;
  filesize: number;
  series: string;
  cover: string;
  terms_hash: string;
  active: number;
  deleted: number;
  filesizeString: string;
  href: string;
  hash: string;
  description: string;
  kindleAvailable: boolean;
  sendToEmailAvailable: boolean;
  interestScore: string;
  qualityScore: string;
  dl: string;
  preview: string;
  date_saved: string;
  _isUserSavedBook: boolean
}

export interface IBookType {
  id: number;
  title: string;
  author: string;
  cover: string;
  hash: string;
}

interface IBookSearchType {
  id: string;
  title: string;
  author: string;
  volume: string;
  year: string;
  edition: string;
  publisher: string;
  identifier: string;
  language: string;
  extension: string;
  pages: string;
  filesize: string;
  series: string;
  cover: string;
  terms_hash: string;
  active: string;
  deleted: number;
  filesizeString: string;
  href: string;
  hash: string;
  description: string;
  kindleAvailable: boolean;
  sendToEmailAvailable: boolean;
  interestScore: string;
  qualityScore: string;
  dl: string;
  preview: string;
  _isUserSavedBook: boolean;
}

export interface IBookInitialState {
  saved: {
    response: null | {
      success: number;
      books: Array<IBook>
    };
    status: string;
  },
  popular: {
    response: null | {
      success: number;
      books: Array<IBookType>;
    };
    status: string;
  },
  recently: {
    response: null | {
      success: number;
      books: Array<IBookType>;
    };
    status: string;
  },
  recommended: {
    response: null | {
      success: number;
      books: Array<IBookType>
    };
    status: string;
  },
  search: {
    response: null | {
      success: number;
      books: Array<IBookSearchType>
    };
    status: string;
  },
  information: {
    response: null | {
      success: number;
      book: IBook
    };
    status: string;
  },
  unsave: {
    response: null | {
      success: number;
    };
    status: string;
  },
  save: {
    response: null | {
      success: number;
    };
    status: string;
  },
  download: {
    response: null | any;
    status: string;
  }
}

export interface IAccountInitialState {
  viewProfile: {
    response: null | IZLibraryType;
    status: string;
  },
  updateProfile: {
    response: null | IZLibraryType;
    status: string;
  };
  updatePassword: {
    response: null | IZLibraryType;
    status: string;
  };
}

export interface IDownload {
  title: string;
  extension: string;
  id: string;
  hash: string;
}

export interface ITeamMember {
  image: ImageSourcePropType;
  name: string;
  position: string;
  course: string
}