import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailOutlookComponent } from './mail-outlook.component';

describe('MailOutlookComponent', () => {
  let component: MailOutlookComponent;
  let fixture: ComponentFixture<MailOutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailOutlookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
