import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChordListComponent } from './chord-list/chord-list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { EditChordComponent } from './edit-chord/edit-chord.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ViewChordComponent } from './view-chord/view-chord.component';
import { AccountControlComponent } from './account-control/account-control.component';
import { UserControlBarComponent } from './user-control-bar/user-control-bar.component';
import { PublicControlBarComponent } from './public-control-bar/public-control-bar.component';
import { PublicControlComponent } from './public-control/public-control.component';
import { DmcaNoticeComponent } from './dmca-notice/dmca-notice.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ChordListComponent,
    EditChordComponent,
    UserAreaComponent,
    NewUserComponent,
    ViewChordComponent,
    AccountControlComponent,
    UserControlBarComponent,
    PublicControlBarComponent,
    PublicControlComponent,
    DmcaNoticeComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
