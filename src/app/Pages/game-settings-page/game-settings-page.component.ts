import { Component, ViewChild } from '@angular/core';
import { GameSettingsQuery, GameSettingsStore, Player } from 'src/app/store';

@Component({
  selector: 'app-game-settings-page',
  templateUrl: './game-settings-page.component.html',
  styleUrls: ['./game-settings-page.component.scss'],
})
export class GameSettingsPageComponent {
  constructor(
    private query: GameSettingsQuery,
    private store: GameSettingsStore
  ) {}

  public players$ = this.query.selectPlayers$;
  public addedPlayerName$ = this.query.newPlayerName$;
  public addedPlayerSymbol$ = this.query.newPlayerSymbol$;
  public isGameOfOneIncluded$ = this.query.areGamesOfOneIncluded$;
  public onPlayerNameChanged(newName?: string) {
    this.store.setNewPlayerName(newName);
  }

  public onIncludeGamesOfOneChanged(checked: boolean) {
    this.store.update(() => {
      return {
        areGamesOfOneIncluded: checked,
      };
    });
  }

  public onAddPlayer(): void {
    this.store.addNewPlayer();
  }
}
