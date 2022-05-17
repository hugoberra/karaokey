import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudplaylistComponent } from './crudplaylist.component';

describe('CrudplaylistComponent', () => {
  let component: CrudplaylistComponent;
  let fixture: ComponentFixture<CrudplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudplaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
