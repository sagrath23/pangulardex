import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeindexComponent } from './pokeindex.component';

describe('PokeindexComponent', () => {
  let component: PokeindexComponent;
  let fixture: ComponentFixture<PokeindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
