import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchexampleComponent } from './switchexample.component';

describe('SwitchexampleComponent', () => {
  let component: SwitchexampleComponent;
  let fixture: ComponentFixture<SwitchexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
