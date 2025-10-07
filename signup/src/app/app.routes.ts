import { Routes } from '@angular/router';
import { Dashboar } from './dashboar/dashboar';
import { Pages } from './pages/pages';
import { Settings } from './settings/settings';

export const routes: Routes = [
    {path:'',component:Dashboar},
    {path:'pages',component:Pages},
    {path:'settings',component:Settings},
];
