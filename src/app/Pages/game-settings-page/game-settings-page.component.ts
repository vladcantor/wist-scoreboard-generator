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

  public players$ = this.query.allPlayers$;
  public addedPlayerName$ = this.query.newPlayerName$;
  public addedPlayerSymbol$ = this.query.newPlayerSymbol$;
  public isGameOfOneIncluded$ = this.query.areGamesOfOneIncluded$;
  public canGenerate$ = this.query.canGenerateScoreBoard$;
  public isPlayerValid$ = this.query.isPlayerValid$;
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

  public onGenerateScoreBoard(): void {
    this.store.generateScoreBoard();
  }

  public onPlayerDeleted(playerIdentifier: string) {
    this.store.deletePlayer(playerIdentifier);
  }
}
