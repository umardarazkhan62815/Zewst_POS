import {icons} from '../../assets/icons';
import {colors} from '../../utilies/colors';
export const productTypes = [
  {
    id: '1',
    text: 'Total Raw Products',
    icon: icons.product,
    count: 57,
    arrow: false,
    tintColor: '#B75513',
    bgColor: 'rgba(255,244,228,1)',
  },
  {
    id: '2',
    text: 'Total Mixtures',
    icon: icons.mixture,
    count: 62,
    arrow: false,

    tintColor: '#FE6A6A',
    bgColor: 'rgba(252,236,236,1)',
  },
  {
    id: '3',
    text: 'Update product count',
    icon: icons.product,
    count: null,
    arrow: false,

    tintColor: '#09F4E6',
    bgColor: 'rgba(228,254,255,1)',
  },
  {
    id: '4',
    text: 'update mixture count',
    icon: icons.mixture,
    count: null,
    arrow: false,

    tintColor: '#40C978',
    bgColor: 'rgba(227,255,239,1)',
  },
  {
    id: '5',
    text: 'Food log',
    icon: icons.waste,
    count: null,
    arrow: true,

    tintColor: colors.purple,
    bgColor: colors.purpleLight,
  },
  {
    id: '6',
    text: 'Food waste',
    icon: icons.waste,
    count: 10,
    arrow: true,

    tintColor: colors.purple,
    bgColor: colors.purpleLight,
  },
  {
    id: '7',
    text: 'Menu item',
    icon: icons.product,
    count: null,
    arrow: true,
    tintColor: colors.purple,
    bgColor: colors.purpleLight,
  },
];
