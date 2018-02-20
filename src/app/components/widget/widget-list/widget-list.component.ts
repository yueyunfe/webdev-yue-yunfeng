import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../model/widget.model';
import {WebsiteService} from '../../../services/website.service.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WidgetListComponent implements OnInit {

  pageId: string;
  widgets: Widget[];
  userId: string;
  webId: string;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService,private pageService: PageService, private webService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.pageId = param.pid;
        this.widgets = this.widgetService.findWidgetByPageId(this.pageId);
        this.userId = param.uid;
        this.webId = param.wid;
      }
    );
  }

}
