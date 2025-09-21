import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skaiciuotuvas } from './skaiciuotuvas';

describe('Skaiciuotuvas', () => {
  let component: Skaiciuotuvas;
  let fixture: ComponentFixture<Skaiciuotuvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skaiciuotuvas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skaiciuotuvas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
