import {
  IconCar,
  IconDashboard,
  IconFile,
  IconGame,
  IconImage,
  IconStorage,
  IconDollar,
  IconMegaphone,
  IconBars,
  IconStore
} from '@components/icons/custom-icons'
import { ROUTES } from '@constants/routes'

const sidebarConfig = [
  {
    id: 1,
    labelKey: 'home',
    subKeys: [],
    icon: IconDashboard,
    highlightPath: ['/']
  },
  {
    id: 2,
    labelKey: 'orders',
    subKeys: [
      'orders_list',
      'orders_map',
      'orders_defectiveProducts',
      'orders_fisicalStoreScale'
    ],
    icon: IconFile,
    highlightPath: [
      ROUTES.ORDERS.ROOT,
      ROUTES.ORDERS.LIST_ORDER,
      ROUTES.ORDERS.MAP_ORDER,
      ROUTES.ORDERS.DEFECTIVE_PRODUCTS,
      ROUTES.ORDERS.PHYSICAL_STORE_SALE
    ]
  },
  {
    id: 3,
    labelKey: 'warehouse',
    subKeys: [
      'warehouse_inventories',
      'warehouse_ordersOut',
      'warehouse_ordersIn',
      'warehouse_inventoried',
      'warehouse_products',
      'warehouse_combos'
    ],
    icon: IconStorage,
    highlightPath: [
      ROUTES.WAREHOUSE.INVENTORIES,
      ROUTES.WAREHOUSE.ORDERS_OUT,
      ROUTES.WAREHOUSE.ORDERS_IN,
      ROUTES.WAREHOUSE.INVENTORIED,
      ROUTES.WAREHOUSE.PRODUCTS,
      ROUTES.WAREHOUSE.COMBOS
    ]
  },
  {
    id: 4,
    labelKey: 'finance',
    subKeys: [
      'finance_generalMetrics',
      'finance_expenses',
      'finance_generalAmounts',
      'finance_payrollMessenger',
      'finance_wallets'
    ],
    icon: IconDollar,
    highlightPath: [
      ROUTES.FINANCE.GENERAL_METRICS,
      ROUTES.FINANCE.EXPENSES,
      ROUTES.FINANCE.GENERAL_AMOUNTS,
      ROUTES.FINANCE.PAYROLL_MESSENGER,
      ROUTES.FINANCE.WALLETS
    ]
  },
  {
    id: 5,
    labelKey: 'customization',
    subKeys: [
      'customization_banners',
      'customization_publicInfo',
      'customization_notifications',
      'customization_templates'
    ],
    icon: IconImage,
    highlightPath: [
      ROUTES.CUSTOMIZATION.BANNERS,
      ROUTES.CUSTOMIZATION.PUBLIC_INFO,
      ROUTES.CUSTOMIZATION.NOTIFICATIONS,
      ROUTES.CUSTOMIZATION.TEMPLATES
    ]
  },
  {
    id: 6,
    labelKey: 'games',
    subKeys: ['games_roullete'],
    icon: IconGame,
    highlightPath: [ROUTES.GAMES.ROULETTE]
  },
  {
    id: 7,
    labelKey: 'logistics',
    subKeys: [
      'logistics_mapDistribution',
      'logistics_messengers',
      'logistics_payrollHistory'
    ],
    icon: IconCar,
    highlightPath: [
      ROUTES.LOGISTICS.MAP_DISTRIBUTION,
      ROUTES.LOGISTICS.MESSENGERS,
      ROUTES.LOGISTICS.PAYROLL_HISTORY
    ]
  },
  {
    id: 8,
    labelKey: 'marketing',
    subKeys: [
      'marketing_products',
      'marketing_categories',
      'marketing_collections'
    ],
    icon: IconMegaphone,
    highlightPath: [
      ROUTES.MARKETING.PRODUCTS,
      ROUTES.MARKETING.CATEGORIES,
      ROUTES.MARKETING.COLLECTIONS
    ]
  },
  {
    id: 9,
    labelKey: 'purchases',
    subKeys: ['purchases_smartBuying'],
    icon: IconStore,
    highlightPath: [ROUTES.MARKETING.PURCHASES]
  },
  {
    id: 10,
    labelKey: 'nomenclators',
    subKeys: [
      'nomenclators_clients',
      'nomenclators_users',
      'nomenclators_categories',
      'nomenclators_products',
      'nomenclators_orderStatus',
      'nomenclators_warehouses',
      'nomenclators_features',
      'nomenclators_ranges',
      'nomenclators_typeOfShipments',
      'nomenclators_messengers',
      'nomenclators_coupons',
      'nomenclators_expenseLegend',
      'nomenclators_roles',
      'nomenclators_coins',
      'nomenclators_shops',
      'nomenclators_companies'
    ],
    icon: IconBars,
    highlightPath: [
      ROUTES.NOMENCLATORS.CLIENTS,
      ROUTES.NOMENCLATORS.USERS,
      ROUTES.NOMENCLATORS.CATEGORIES,
      ROUTES.NOMENCLATORS.PRODUCTS,
      ROUTES.NOMENCLATORS.ORDER_STATUS,
      ROUTES.NOMENCLATORS.WAREHOUSES,
      ROUTES.NOMENCLATORS.FEATURES,
      ROUTES.NOMENCLATORS.RANGES,
      ROUTES.NOMENCLATORS.SHIPMENT_TYPES,
      ROUTES.NOMENCLATORS.MESSENGERS,
      ROUTES.NOMENCLATORS.COUPONS,
      ROUTES.NOMENCLATORS.EXPENSE_LEGEND,
      ROUTES.NOMENCLATORS.ROLES,
      ROUTES.NOMENCLATORS.COINS,
      ROUTES.NOMENCLATORS.SHOPS,
      ROUTES.NOMENCLATORS.COMPANIES
    ]
  }
]

export const getSidebarElements = (t, pathName) =>
  sidebarConfig.map(({ id, labelKey, subKeys, icon: Icon, highlightPath }) => ({
    id,
    label: t(labelKey),
    subElements: subKeys.map(t),
    icon: <Icon color={highlightPath.includes(pathName) ? '#FF7500' : '#A0AEC0'} />,
    highlightPath
  }))
