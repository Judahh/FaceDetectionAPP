import { Routes, RouterModule } from '@angular/router';

import { ComponentPage } from './view/body/page/ComponentPage';

import { ComponentPageHome } from './view/body/page/pageHome/ComponentPageHome';

//import { ControllerHire } from './../aPI/hire/ControllerHire';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: ComponentPageHome
  },
  {
    path: '**',
    redirectTo: '/WhoAmI',
  }//,
  // {
  //   path: 'api/{controller}/{id?}',
  //   component: ControllerHire
  // }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = 
  [
    ComponentPageHome
  ];
