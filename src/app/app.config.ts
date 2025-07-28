import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LotteryListComponent } from './pages/lottery-list/lottery-list.component';
import { LotteryCreateManualComponent } from './pages/lottery-create-manual/lottery-create-manual.component';
import { LotteryUpdateComponent } from './pages/lottery-update/lottery-update.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LotteryListComponent,
    LotteryCreateManualComponent,
    LotteryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
