import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Widget} from '../../../model/widget.model';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WidgetEditComponent implements OnInit {

  widgetId: string;
  widget: Widget;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.widgetId = param.wdid;
        this.widget = this.widgetService.findWidgetById(this.widgetId);
      }
    );
  }

}
