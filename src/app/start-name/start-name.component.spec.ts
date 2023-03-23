import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNameComponent } from './start-name.component';

describe('StartNameComponent', () => {
  let component: StartNameComponent;
  let fixture: ComponentFixture<StartNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
