import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetChoooserComponent } from './widget-chooser.component';

describe('WidgetChooserComponent', () => {
  let component: WidgetChoooserComponent;
  let fixture: ComponentFixture<WidgetChoooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetChoooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetChoooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
