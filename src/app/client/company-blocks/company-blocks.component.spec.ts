import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBlocksComponent } from './company-blocks.component';

describe('CompanyBlocksComponent', () => {
  let component: CompanyBlocksComponent;
  let fixture: ComponentFixture<CompanyBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
