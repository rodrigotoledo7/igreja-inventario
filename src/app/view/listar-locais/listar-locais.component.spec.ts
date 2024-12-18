import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLocaisComponent } from './listar-locais.component';

describe('ListarLocaisComponent', () => {
  let component: ListarLocaisComponent;
  let fixture: ComponentFixture<ListarLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarLocaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
