import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBlocksComponent } from './pricing-blocks.component';

describe('PricingBlocksComponent', () => {
  let component: PricingBlocksComponent;
  let fixture: ComponentFixture<PricingBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
