import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRootComponent } from './for-root.component';

describe('ForRootComponent', () => {
  let component: ForRootComponent;
  let fixture: ComponentFixture<ForRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
