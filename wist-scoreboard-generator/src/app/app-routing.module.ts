import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSettingsPageComponent } from './Pages/game-settings-page/game-settings-page.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'game', component: GameSettingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
