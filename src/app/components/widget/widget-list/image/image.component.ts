import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../model/widget.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class ImageComponent implements OnInit {

  @Input() widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
