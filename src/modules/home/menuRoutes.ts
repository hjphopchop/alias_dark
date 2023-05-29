import {
  NewGameIcon,
  RulesIcon,
  SettingIcon,
} from '@/assets/icons/layoutIcons';

export type MenuRoute = {
  title: string;
  link: string;
  icon: React.FC;
};
export const menuRoutes: MenuRoute[] = [
  {
    title: 'Начать игру',
    link: '/game/teams',
    icon: NewGameIcon,
  },

  {
    title: 'Правила',
    link: '/',
    icon: RulesIcon,
  },
  {
    title: 'Настроки',
    link: '/settings',
    icon: SettingIcon,
  },
];
