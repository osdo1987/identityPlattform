import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginuserComponent } from './siginuser.component';

describe('SiginuserComponent', () => {
  let component: SiginuserComponent;
  let fixture: ComponentFixture<SiginuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiginuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
