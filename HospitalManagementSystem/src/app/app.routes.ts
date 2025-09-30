import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {
        path: '', component: Home
    },
    {
        path: 'about/:id/:name', component: About
    },
    {
        path: 'contact', component: Contact
    },
    {
        path: 'login', component: Login, data:{name:'shreya03'}
    },
    {
        path: '**', component: PageNotFound
    }
];
