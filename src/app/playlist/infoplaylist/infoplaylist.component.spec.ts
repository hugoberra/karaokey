import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoplaylistComponent } from './infoplaylist.component';

describe('InfoplaylistComponent', () => {
  let component: InfoplaylistComponent;
  let fixture: ComponentFixture<InfoplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoplaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
