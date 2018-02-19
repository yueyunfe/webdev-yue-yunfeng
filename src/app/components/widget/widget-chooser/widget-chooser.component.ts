import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: string;
  widgetsChooser = ['Header', 'Label', 'HTML', 'Text Input', 'Link', 'Button', 'Image', 'Youtube', 'Data Table', 'Repeater'];
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.userId = param.uid;
      }
    );
  }
}
