import { NewGameIcon, RulesIcon, SettingIcon } from '@/assets/icons/icons';

export type MenuRoute = {
  title: string;
  link: string;
  icon: React.FC;
  variants: any;
};
export const menuRoutes: MenuRoute[] = [
  {
    title: 'Начать игру',
    link: '/game/teams',
    icon: NewGameIcon,
    variants: {
      hover: { rotate: 20 },
      noHover: { rotate: 0 },
    },
  },

  {
    title: 'Правила',
    link: '/',
    icon: RulesIcon,
    variants: {
      hover: { rotate: 20 },
      noHover: { rotate: 0 },
    },
  },
  {
    title: 'Настройки',
    link: '/settings',
    icon: SettingIcon,
    variants: {
      hover: { rotate: 50 },
      noHover: { rotate: 0 },
    },
  },
];
