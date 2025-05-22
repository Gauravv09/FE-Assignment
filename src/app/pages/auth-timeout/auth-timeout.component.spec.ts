import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTimeoutComponent } from './auth-timeout.component';

describe('AuthTimeoutComponent', () => {
  let component: AuthTimeoutComponent;
  let fixture: ComponentFixture<AuthTimeoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthTimeoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
