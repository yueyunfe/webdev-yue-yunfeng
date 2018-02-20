import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { TestService } from './services/test.service.client';

// import {Routes, }

import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';



import { routing } from './app.routing';
import {UserService} from './services/user.service.client';
import {PageService} from './services/page.service.client';
import {WebsiteService} from './services/website.service.client';
import {WidgetService} from './services/widget.service.client';
import {HeadingComponent} from './components/widget/widget-list/heading/heading.component';
import {ImageComponent} from './components/widget/widget-list/image/image.component';
import {YoutubeComponent} from './components/widget/widget-list/youtube/youtube.component';
import {HtmlComponent} from './components/widget/widget-list/html/html.component';
import {NewHeadingComponent} from './components/widget/widget-chooser/widget-new/new-heading/new-heading.component';
import {NewImageComponent} from './components/widget/widget-chooser/widget-new/new-image/new-image.component';
import {NewYoutubeComponent} from './components/widget/widget-chooser/widget-new/new-youtube/new-youtube.component';
import {WidgetNewComponent} from './components/widget/widget-chooser/widget-new/widget-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    HeadingComponent,
    ImageComponent,
    YoutubeComponent,
    HtmlComponent,
    NewHeadingComponent,
    NewImageComponent,
    NewYoutubeComponent,
    WidgetNewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [UserService, PageService, WebsiteService, WidgetService],
  bootstrap: [AppComponent]
  // decide where you start
})
export class AppModule { }
