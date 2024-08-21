import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialoogComponent } from './delete-dialoog.component';

describe('DeleteDialoogComponent', () => {
  let component: DeleteDialoogComponent;
  let fixture: ComponentFixture<DeleteDialoogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDialoogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialoogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
