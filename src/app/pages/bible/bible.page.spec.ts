import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiblePage } from './bible.page';

describe('BiblePage', () => {
  let component: BiblePage;
  let fixture: ComponentFixture<BiblePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
