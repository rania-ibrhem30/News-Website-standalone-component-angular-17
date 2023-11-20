import { Routes } from '@angular/router';
import { HomeComponent } from './sharedcompoents/home/home.component';
import { EgyptComponent } from './sharedcompoents/Egypt/egypt/egypt.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path:'eg',component:EgyptComponent}
];
