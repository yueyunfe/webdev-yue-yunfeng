// // import {Routes, RouterModule} from '@angular/router';
// //
// //
// // import {RegisterComponent} from './views/user/register/register.component';
// // import {ProfileComponent} from './views/user/profile/profile.component';
// // // import {WebsiteListComponent} from './views/website/website-list/website-list.component';
// // import {LoginComponent} from './views/user/login/login.component';
// //
// // const appRoutes: Routes = [
// //   {path: 'login', component: LoginComponent},
// //   {path: 'register', component: RegisterComponent},
// //   {path: 'profile', component: ProfileComponent},
// //   // {path: 'profile/:userId', component: ProfileComponent},
// //   //
// //   // {path: 'profile/:userId/website', component: WebsiteListComponent}
// // ];
// //
// // export const routing = RouterModule.forRoot(appRoutes);
//
// import {Routes, RouterModule} from '@angular/router';
//
// import {RegisterComponent} from './views/user/register/register.component';
// import {ProfileComponent} from './views/user/profile/profile.component';
// import {WebsiteListComponent} from './views/website/website-list/website-list.component';
// import {LoginComponent} from './views/user/login/login.component';
// import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
// import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
// import {PageListComponent} from './views/page/page-list/page-list.component';
// import {PageNewComponent} from './views/page/page-new/page-new.component';
// import {PageEditComponent} from './views/page/page-edit/page-edit.component';
// import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
// import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
// import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
//
// const appRoutes: Routes = [
//   { path: '', component: LoginComponent},
//   { path: 'default', component: LoginComponent},
//   { path: 'login', component: LoginComponent},
//   { path: 'register', component: RegisterComponent},
//   { path: 'user/:uid', component: ProfileComponent},
//   { path: 'user/:uid/website', component: WebsiteListComponent},
//   { path: 'user/:uid/website/new', component: WebsiteNewComponent},
//   { path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
//   { path: 'user/:uid/website/:wid/page', component: PageListComponent},
//   { path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
//   { path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
//   { path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
//   { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
//   { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent}
// ];
//
// // for example
// path: 'profile/:userId/website/:websiteId/page/:pageId', component: WebsiteListComponent} to get every user's every website's every page;
// export const routing = RouterModule.forRoot(appRoutes);
//
//
//
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageEditComponent } from './views/page/page-edit/page-edit.component';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';
import {FlickrImageSearchComponent} from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {AuthGuard} from './services/auth-guard.service';

// for routing
// for example, if the url goes to /login, then load LoginComponent
const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid',	 component:	WebsiteEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page', component:	PageListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/new', component:	PageNewComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid', component:	PageEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget', component:	WidgetListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new', component:	WidgetChooserComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/:wgid', component:	WidgetEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/header', component: WidgetHeaderComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/image', component: WidgetImageComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/youtube', component: WidgetYoutubeComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/html', component: WidgetHtmlComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/text', component: WidgetTextComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
