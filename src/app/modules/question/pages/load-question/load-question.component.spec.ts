import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadQuestionComponent } from './load-question.component';

describe('LoadQuestionComponent', () => {
  let component: LoadQuestionComponent;
  let fixture: ComponentFixture<LoadQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
