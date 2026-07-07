import type { NavigationMenuItem } from '@nuxt/ui'

const LOCALE = 'zh-CN'

export function getNavData(): NavigationMenuItem[] {
  const route = useRoute()
  return [
    {
      label: '主页',
      icon: 'i-lucide-house',
      to: '/',
      active: route.path.startsWith('/')
    },
    {
      label: 'Docs',
      to: '/user',
      active: route.path.startsWith('/user'),
      children: [
        {
          label: 'Profile',
          to: '/user/profile',
          active: route.path.startsWith('/user/profile'),
        },
        {
          label: 'Settings',
          to: '/user/settings',
          active: route.path.startsWith('/user/settings'),
        }
      ]
    },
    {
      label: 'Figma',
      to: 'https://go.nuxt.com/figma-ui',
      target: '_blank'
    },
  ]
}


export const formatNumber = (
  value: number,
  options?: Intl.NumberFormatOptions,
): string => {
  return new Intl.NumberFormat(LOCALE, options).format(value)
}

/**
 * 货币格式化
 */
export const formatCurrency = (
  value: number,
  currency = 'CNY',
): string => {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency,
  }).format(value)
}

/**
 * 百分比格式化
 */
export const formatPercent = (value: number): string => {
  return new Intl.NumberFormat(LOCALE, {
    style: 'percent',
  }).format(value)
}

/**
 * 日期格式化
 */
export const formatDate = (
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
): string => {
  return new Intl.DateTimeFormat(
    LOCALE,
    options,
  ).format(new Date(date))
}