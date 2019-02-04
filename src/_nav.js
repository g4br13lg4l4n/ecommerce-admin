export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
      }
    },
    {
      title: true,
      name: 'Productos',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Todos los productos',
      url: '/dashboard/productos/todos',
      icon: 'icon-basket-loaded'
    },
    {
      name: 'Agregar nuevo',
      url: '/dashboard/productos/agregar',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/dashboard/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/dashboard/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/dashboard/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/dashboard/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Collapses',
          url: '/dashboard/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/dashboard/base/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/dashboard/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/dashboard/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/dashboard/base/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navbars',
          url: '/dashboard/base/navbars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/dashboard/base/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/dashboard/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/dashboard/base/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/dashboard/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/dashboard/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/dashboard/base/tabs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/dashboard/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/dashboard/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/dashboard/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Dropdowns',
          url: '/dashboard/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Groups',
          url: '/dashboard/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Brand Buttons',
          url: '/dashboard/buttons/brand-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/dashboard/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Icons',
      url: '/dashboard/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/dashboard/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Flags',
          url: '/dashboard/icons/flags',
          icon: 'icon-star'
        },
        {
          name: 'Font Awesome',
          url: '/dashboard/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/dashboard/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/dashboard/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/dashboard/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/dashboard/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/dashboard/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/dashboard/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    }
  ]
}
