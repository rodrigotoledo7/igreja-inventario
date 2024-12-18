import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBensComponent } from './listar-bens.component';

describe('ListarBensComponent', () => {
  let component: ListarBensComponent;
  let fixture: ComponentFixture<ListarBensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarBensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
