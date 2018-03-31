import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../../services/widget.service.client';
import { PageService } from '../../../../services/page.service.client';
import { WebsiteService } from '../../../../services/website.service.client';
import { UserService } from '../../../../services/user.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  // properties
  widget: any = {};
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;

  constructor(
    private widgetService: WidgetService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.widgetService.findWidgetById(params.wgid).subscribe(
          (widget: any) => {
            if (widget._page === params.pid) {
              this.pageService.findPageById(widget._page).subscribe(
                (page: any) => {
                  if (page._website === params.wid) {
                    this.websiteService.findWebsiteById(page._website).subscribe(
                      (website: any) => {
                        if (website._user === params.uid) {
                          this.userId = params.uid;
                          this.websiteId = params.wid;
                          this.pageId = params.pid;
                          this.widgetId = params.wgid;
                          this.widget = widget;
                        } else {
                          console.log("User ID does not match.");
                        }
                      }
                    );
                  } else {
                    console.log("Website ID does not match.");
                  }
                }
              );
            }
          }
        );
      }
    );
  }

  updateWidget(widget: any) {
    this.widgetService.updateWidget(this.widgetId, widget).subscribe(
      (widget: any) => {
        console.log("good");
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      (widget: any) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
