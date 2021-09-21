import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageComponent } from './usage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ByteFormatPipe, FileInputComponent } from 'ngx-material-file-input';

describe('UsageComponent', () => {
  let component: UsageComponent;
  let fixture: ComponentFixture<UsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsageComponent, ByteFormatPipe, FileInputComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
