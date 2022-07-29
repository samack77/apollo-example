import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonContainerComponent } from './list-pokemon-container.component';

describe('ListPokemonContainerComponent', () => {
  let component: ListPokemonContainerComponent;
  let fixture: ComponentFixture<ListPokemonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
