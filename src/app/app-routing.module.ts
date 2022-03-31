import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSettingsPageComponent } from './Pages/game-settings-page/game-settings-page.component';
import { ScoreBoardComponent } from './Pages/score-board/score-board.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'game', component: GameSettingsPageComponent },
  { path: 'score-board', component: ScoreBoardComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
