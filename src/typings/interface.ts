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