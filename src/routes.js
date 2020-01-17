import {ReactComponent as profileIcon} from 'assets/img/profile.svg';
import {ReactComponent as chatsIcon} from 'assets/img/chats.svg';
import {ReactComponent as myOrdersIcon} from 'assets/img/my_orders.svg';
import {ReactComponent as findOrdersIcon} from 'assets/img/find_orders.svg';
import {ReactComponent as myTeamsIcon} from 'assets/img/my_teams.svg';
import {ReactComponent as collaborationsIcon} from 'assets/img/collaborations.svg';
import {ReactComponent as blogsIcon} from 'assets/img/blogs.svg';
import {ReactComponent as helpUsToBuildIcon} from 'assets/img/help_us_to_build.svg';
import {ReactComponent as questionsIcon} from 'assets/img/questions.svg';
import {ReactComponent as preferenciesIcon} from 'assets/img/preferencies.svg';

import ProfilePage from "containers/ProfilePage";

const mainRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: profileIcon,
    component: ProfilePage,
    layout: "/user",
    divider: true,
    deviderMargin: "40px",
  },
  {
    path: "/chats",
    name: "Chats",
    icon: chatsIcon,
    // component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/my-orders",
    name: "My orders",
    icon: myOrdersIcon,
    // component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/find-orders",
    name: "Find orders",
    icon: findOrdersIcon,
    // component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/my-teams",
    name: "My teams",
    icon: myTeamsIcon,
    // component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/collaborations",
    name: "Collaborations",
    icon: collaborationsIcon,
    // component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: blogsIcon,
    // component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/help-us",
    name: "Help us to build",
    icon: helpUsToBuildIcon,
    // component: DashboardPage,
    layout: "/user",
    deviderMargin: "140px",
    divider: true
  },
  {
    path: "/questions",
    name: "Questions",
    icon: questionsIcon,
    // component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/preferencies",
    name: "Preferencies",
    icon: preferenciesIcon,
    // component: DashboardPage,
    layout: "/user",
    divider: true,
    deviderMargin: "10px",
  },
]



export default mainRoutes;
