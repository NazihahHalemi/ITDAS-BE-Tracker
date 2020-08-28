import React from 'react';
import mandaysProfile from './views/ITDAS Tracker/MandaysProfile';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Gant = React.lazy(() => import('./views/Gant/Gant'));
const RackList = React.lazy(() => import('./views/Inventory/RackList'));
const Rack = React.lazy(() => import('./views/Inventory/Rack'));
const NetworkPort = React.lazy(() => import('./views/Inventory/NetworkPort'));
const NetworkBandwidth = React.lazy(() => import('./views/Inventory/NetworkBandwidth'));
const UPS = React.lazy(() => import('./views/Inventory/UPS'));
const UPSList = React.lazy(() => import('./views/Inventory/UPSList'));
const CRAC = React.lazy(() => import('./views/Inventory/CRAC'));
const CRACList = React.lazy(() => import('./views/Inventory/CRACList'));
const PDU = React.lazy(() => import('./views/Inventory/PDU'));
const PDUList = React.lazy(() => import('./views/Inventory/PDUList'));
const ResourceCheck = React.lazy(() => import('./views/Resource Checking/ResourceCheck'));
const ResourceDetails = React.lazy(() => import('./views/Resource Checking/ResourceDetails'));
const TaskList = React.lazy(() => import('./views/TaskList/taskList'));
const PendingApproval = React.lazy(() => import('./views/TaskList/pendingApproval'));
const myTask = React.lazy(() => import('./views/TaskList/myTask'));
const RequestProfile = React.lazy(() => import('./views/ITDAS Tracker/RequestProfile'));
const CreateBE = React.lazy(() => import('./views/ITDAS Tracker/CreateBE'));
const Requestor = React.lazy(() => import('./views/ITDAS Tracker/Requestor'));
const MandaysProfile = React.lazy(() => import('./views/ITDAS Tracker/MandaysProfile'));
const BudgetProfile = React.lazy(() => import('./views/ITDAS Tracker/BudgetProfile'));
const RequestList = React.lazy(() => import('./views/ITDAS Tracker/listRequest'));
const LandingPage = React.lazy(() => import('./views/ITDAS Tracker/LandingPage'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/inventory', exact: true, name: 'Inventory', component: RackList },
  { path: '/rackList', name: 'Rack List', component: RackList },
  { path: '/rack', name: 'Rack', component: Rack },
  { path: '/network_port', name: 'Ntework Port', component: NetworkPort },
  { path: '/network_bandwidth', name: 'Network Bandwidth', component: NetworkBandwidth },
  { path: '/UPS', name: 'UPS', component: UPS },
  { path: '/upsList', name: 'UPS List', component: UPSList },
  { path: '/pdu', name: 'PDU', component: PDU },
  { path: '/pduList', name: 'PDU List', component: PDUList },
  { path: '/CRAC', name: 'CRAC', component: CRAC },
  { path: '/CRACList', name: 'CRAC List', component: CRACList },
  { path: '/resourceChecking', name: 'Resource Checking', component: ResourceCheck },
  { path: '/resourceDetails', name: 'Resource Details', component: ResourceDetails },
  { path: '/taskList', name: 'Task List', component: TaskList },
  { path: '/pendingApproval', name: 'Waiting Approval', component: PendingApproval },
  { path: '/myTask', name: 'My Task', component: myTask },
  { path: '/RequestList', name: 'Request List', component: RequestList },
  { path: '/RequestProfile', name: 'Request Profile', component: RequestProfile },
  { path: '/CreateBE', name: 'CreateBE', component: CreateBE },
  { path: '/Requestor', name: 'Requestor', component: Requestor },
  { path: '/MandaysProfile', name: 'Mandays Profile', component: MandaysProfile },
  { path: '/BudgetProfile', name: 'Budget Profile', component: BudgetProfile },
  { path: '/LandingPage', name: 'LandingPage', component: LandingPage },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/gant', exact: true,  name: 'Gant', component: Gant },
];

export default routes;
