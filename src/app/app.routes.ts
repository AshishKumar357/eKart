import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ContainerComponent },
  //   { path: 'about', component: AboutComponent },
  //   { path: 'contact', component: ContactComponent },
  //   { path: 'download', component: DownloadComponent },
  //   { path: 'catalog', component: CatalogComponent },
  //   { path: 'termsAndConditions', component: TermsAndConditionsComponent },
  //   { path: 'privacyPolicy', component: PrivacyPolicyComponent },
];
