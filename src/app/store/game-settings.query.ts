import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GameSettingsState } from './game-settings.state';
import { GameSettingsStore } from './game-settings.store';

@Injectable()
export class GameSettingsQuery extends Query<GameSettingsState> {
  areGamesOfOneIncluded$ = this.select(
    (state) => state.areGamesOfOneIncluded ?? true
  );
  allPlayers$ = this.select('players');
  newPlayerName$ = this.select((state) => state?.newPlayer?.name ?? '');
  newPlayerSymbol$ = this.select(
    (state) => state?.newPlayer?.playerIdentifier ?? ''
  );
  canGenerateScoreBoard$ = this.select(
    (state) => (state?.players?.length ?? 0) >= 4
  );
  allGames$ = this.select((state) => state.initialScoreBoard);
  isPlayerValid$ = this.select(
    (state) => !!state.newPlayer.name && !!state.newPlayer.playerIdentifier
  );

  constructor(protected store: GameSettingsStore) {
    super(store);
  }
}
