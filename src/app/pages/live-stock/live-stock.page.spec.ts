import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveStockPage } from './live-stock.page';

describe('LiveStockPage', () => {
  let component: LiveStockPage;
  let fixture: ComponentFixture<LiveStockPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
