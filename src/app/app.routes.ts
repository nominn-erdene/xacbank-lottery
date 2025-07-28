import { Routes } from '@angular/router';
import { LotteryListComponent } from './pages/lottery-list/lottery-list.component';
import { LotteryCreateManualComponent } from './pages/lottery-create-manual/lottery-create-manual.component';
import { LotteryUpdateComponent } from './pages/lottery-update/lottery-update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lottery-list', pathMatch: 'full' },
  { path: 'lottery-list', component: LotteryListComponent },
  { path: 'lottery-create', component: LotteryCreateManualComponent },
  { path: 'lottery-update', component: LotteryUpdateComponent },
];
