import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHeader } from './list-header';

describe('ListHeader', () => {
  let component: ListHeader;
  let fixture: ComponentFixture<ListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ListHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
