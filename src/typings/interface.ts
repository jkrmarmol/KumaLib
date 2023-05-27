import { Animated, ImageSourcePropType } from 'react-native';

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