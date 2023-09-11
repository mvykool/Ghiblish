import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhibliUiComponent } from './ghibli-ui.component';

describe('GhibliUiComponent', () => {
  let component: GhibliUiComponent;
  let fixture: ComponentFixture<GhibliUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhibliUiComponent]
    });
    fixture = TestBed.createComponent(GhibliUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
