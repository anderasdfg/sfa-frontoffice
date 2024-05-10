export interface MenuItem {
  to?: string;
  href?: string;
  label?: string;
  icon?: string;
  target?: string;
  menu?: MenuItem[];
  isDivider?: boolean;
  isLogout?: boolean;
  isDesktopNoLabel?: boolean;
  isToggleLightDark?: boolean;
  isCurrentUser?: boolean;
}
