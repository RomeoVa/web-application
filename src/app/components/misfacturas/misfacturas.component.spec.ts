import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisfacturasComponent } from './misfacturas.component';

describe('MisfacturasComponent', () => {
  let component: MisfacturasComponent;
  let fixture: ComponentFixture<MisfacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisfacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisfacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
