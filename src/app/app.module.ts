import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { firebaseConfig } from './firebaseConfig';
import { NavComponent } from './nav/nav.component';
import { TopScorersComponent } from './top-scorers/top-scorers.component';
import { TotalPigsComponent } from './total-pigs/total-pigs.component';
import { StandingsComponent } from './standings/standings.component';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatAutocompleteModule, MatDatepickerModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatNativeDateModule,
  MatOptionModule, MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule
} from '@angular/material';
import { TopGoalScorersComponent } from './top-goal-scorers/top-goal-scorers.component';
import { TopPlaymakersComponent } from './top-playmakers/top-playmakers.component';
import { GameEventComponent } from './game-event/game-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopScorersComponent,
    TotalPigsComponent,
    StandingsComponent,
    GamesComponent,
    DashboardComponent,
    TopGoalScorersComponent,
    TopPlaymakersComponent,
    GameEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    LayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatSelectModule,
    MatOptionModule,

    MatAutocompleteModule,

    MatGridListModule,


    RouterModule.forRoot([
      {
        path: '', component: NavComponent, children: [
          {path: '', redirectTo: 'pelit', pathMatch: 'prefix'},
          {path: 'pelit', component: GamesComponent},
          {path: 'sarjataulukko', component: StandingsComponent},
          {path: 'pistekunkut', component: TopScorersComponent},
          {path: 'maalitykit', component: TopGoalScorersComponent},
          {path: 'pelintekijat', component: TopPlaymakersComponent},
          {path: 'sikaosasto', component: TotalPigsComponent},
          {path: 'kooste', component: DashboardComponent}
        ]
      },
      {path: 'dashboard', component: DashboardComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
