// @material-ui/icons
import BubbleChart from '@material-ui/icons/BubbleChart';
import Dashboard from '@material-ui/icons/Dashboard';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import Person from '@material-ui/icons/Person';
// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.js';
import Icons from 'views/Icons/Icons.js';
import Maps from 'views/Maps/Maps.js';
import NotificationsPage from 'views/Notifications/Notifications.js';
import TableList from 'views/TableList/TableList.js';
import Typography from 'views/Typography/Typography.js';
import UserProfile from 'views/UserProfile/UserProfile.js';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User Profile',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: Person,
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/table',
    name: 'Table List',
    rtlName: 'قائمة الجدول',
    icon: 'content_paste',
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Typography',
    rtlName: 'طباعة',
    icon: LibraryBooks,
    component: Typography,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    rtlName: 'الرموز',
    icon: BubbleChart,
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    rtlName: 'خرائط',
    icon: LocationOn,
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    rtlName: 'إخطارات',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
  },
];

export default dashboardRoutes;
