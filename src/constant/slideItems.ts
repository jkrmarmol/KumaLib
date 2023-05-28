import { ISlideItems } from "../typings/interfaces";

const items: ISlideItems[] = [
  {
    id: 1,
    title: 'reading_time',
    description: 'Books at your command. Access a vast library of knowledge anytime, anywhere with KumaLib.',
    images: require('../assets/images/undraw_Reading_time_re_phf7.png')
  },
  {
    id: 2,
    title: 'hooked_re',
    description: 'Read, grow, repeat. KumaLib: Where learning never stops, wherever you are.',
    images: require('../assets/images/undraw_Hooked_re_vl59.png')
  },
  {
    id: 3,
    title: 'road_to_knowledge',
    description: 'Knowledge unlocked. Explore, learn, and expand your horizons with KumaLib.',
    images: require('../assets/images/undraw_road_to_knowledge_m8s0.png')
  }
];

export default items;