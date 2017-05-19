var routes = [
  {
    route:'/liste',
    activeTag:'liste',
    templateUrl:'app/views/public/list/list.part.html',
    controller:'ListController',
    name: 'Listes',
    icon: 'fa-home',
    showInNavbar: true,
    showInSidebar: true
  },
  {
    route:'/about',
    activeTag:'about',
    templateUrl:'app/views/public/about/about.part.html',
    controller:'AboutController',
    name: 'A propos',
    icon: 'fa-newspaper-o',
    showInNavbar: true,
    showInSidebar: true
  },
  {
    route:'/contact',
    activeTag:'contact',
    templateUrl:'app/views/public/contact/contact.part.html',
    controller:'ContactController',
    name: 'Contact',
    icon: 'fa-envelope',
    showInNavbar: true,
    showInSidebar: true
  },
  {
    route:'/login',
    activeTag:'login',
    templateUrl:'app/views/public/login/login.part.html',
    controller:'LoginController',
    name: 'Se connecter',
    icon: 'fa-power-off',
    showInNavbar: false,
    showInSidebar: false
  },
  {
    route:'/secure/home',
    activeTag:'.home',
    templateUrl:'app/views/public/contact/contact.part.html',
    controller:'ContactController',
    name: 'Accueil privé',
    icon: 'fa-home',
    showInNavbar: false,
    showInSidebar: true
  },
]