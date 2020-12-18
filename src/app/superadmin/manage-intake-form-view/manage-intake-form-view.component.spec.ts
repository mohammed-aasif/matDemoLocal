import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIntakeFormViewComponent } from './manage-intake-form-view.component';

describe('ManageIntakeFormViewComponent', () => {
  let component: ManageIntakeFormViewComponent;
  let fixture: ComponentFixture<ManageIntakeFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIntakeFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIntakeFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
