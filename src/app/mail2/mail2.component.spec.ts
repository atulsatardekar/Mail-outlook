import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mail2Component } from './mail2.component';

describe('Mail2Component', () => {
  let component: Mail2Component;
  let fixture: ComponentFixture<Mail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mail2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
