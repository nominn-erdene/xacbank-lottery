import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryCreateManualComponent } from './lottery-create-manual.component';

describe('LotteryCreateManualComponent', () => {
  let component: LotteryCreateManualComponent;
  let fixture: ComponentFixture<LotteryCreateManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotteryCreateManualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotteryCreateManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
