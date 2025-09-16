import type { NavigationMenuItem } from '@nuxt/ui'
export const useMenuStore = defineStore('menuStore', () => {
  const menu = ref<NavigationMenuItem[]>([
    {
      label: '首页',
      icon: 'i-lucide-home',
      to: '/',
      active: true,
    },
    {
      label: '组件',
      icon: 'i-lucide-box',
      to: '/components/form',
      children: [
        {
          label: '表单',
          icon: 'i-lucide-square-menu',
          description: '展示表单示例',
          to: '/components/form',
        },
        {
          label: '表格',
          icon: 'i-lucide-table',
          description: '展示表格示例',
          to: '/components/table',
        },
      ],
    },
  ])

  return {
    menu,
  }
})
