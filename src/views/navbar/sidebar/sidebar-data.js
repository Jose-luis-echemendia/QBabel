import { IconDashboard } from "@/components/icons/custom-icons";

export const elements = [
  {
    id: 1,
    label: 'Dashboard',
    highlightPath: ['/dashboard'],
    icon: <IconDashboard />,
    subElements: [],
  },
  {
    id: 2,
    label: 'Orders',
    highlightPath: ['/orders', '/orders/defective-products'],
    icon: <IconDashboard />,
    subElements: ['Defective Products'],
  },
  {
    id: 3,
    label: 'Products',
    highlightPath: ['/products', '/products/add-product'],
    icon: <IconDashboard />,
    subElements: ['Add Product'],
  },
  {
    id: 4,
    label: 'Customers',
    highlightPath: ['/customers'],
    icon: <IconDashboard />,
    subElements: [],
  },
  {
    id: 5,
    label: 'Reports',
    highlightPath: ['/reports'],
    icon: <IconDashboard />,
    subElements: [],
  },
  {
    id: 6,
    label: 'Settings',
    highlightPath: ['/settings'],
    icon: <IconDashboard />,
    subElements: [],
  },
]