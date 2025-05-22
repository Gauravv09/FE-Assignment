import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { InactivityTimerService } from './inavtivity-timer.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

describe('InactivityTimerService', () => {
  let service: InactivityTimerService;
  let routerSpy: jasmine.SpyObj<Router>;
  const platformIdBrowser = 'browser';

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    TestBed.configureTestingModule({
      providers: [
        InactivityTimerService,
        { provide: Router, useValue: routerSpy },
        { provide: PLATFORM_ID, useValue: platformIdBrowser }
      ]
    });

    jasmine.clock().install();  // mock timers
    service = TestBed.inject(InactivityTimerService);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('resetTimer should update lastActivityTime', () => {
    const oldTime = service['lastActivityTime'];
    jasmine.clock().tick(5000); // advance 5 seconds
    service.resetTimer();
    expect(service['lastActivityTime']).toBeGreaterThan(oldTime);
  });

  it('should emit warningTriggered when inactivity time reached', () => {
    const warningSpy = jasmine.createSpy('warningSpy');
    service.warningTriggered.subscribe(warningSpy);

    // Simulate last activity time older than inactivityTime
    service['lastActivityTime'] = Date.now() - service['inactivityTime'] - 1000;

    // Trigger the interval check manually
    jasmine.clock().tick(1000);

    expect(warningSpy).toHaveBeenCalledWith(true);
  });

  it('logoutUser should navigate to /login and alert', () => {
    spyOn(window, 'alert');
    service.logoutUser();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
    expect(window.alert).toHaveBeenCalledWith('You have been logged out due to inactivity');
  });
});
