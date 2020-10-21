import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JUMBOTRONComponent } from './jumbotron.component';

describe('JUMBOTRONComponent', () => {
  let component: JUMBOTRONComponent;
  let fixture: ComponentFixture<JUMBOTRONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JUMBOTRONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JUMBOTRONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
