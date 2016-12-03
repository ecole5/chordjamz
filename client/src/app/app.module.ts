import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChordListComponent } from './chord-list/chord-list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { EditChordComponent } from './edit-chord/edit-chord.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ChordListComponent,
    HeaderComponent,
    EditChordComponent,
    UserAreaComponent,
    NewUserComponent,
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
