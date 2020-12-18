import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIntakeFormUpdateComponent } from './manage-intake-form-update.component';

describe('ManageIntakeFormUpdateComponent', () => {
  let component: ManageIntakeFormUpdateComponent;
  let fixture: ComponentFixture<ManageIntakeFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIntakeFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIntakeFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
