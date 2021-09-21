import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceComponent } from './appearance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileInputComponent } from 'ngx-material-file-input';

describe('AppearanceComponent', () => {
  let component: AppearanceComponent;
  let fixture: ComponentFixture<AppearanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppearanceComponent, FileInputComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
