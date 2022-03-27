import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GameSettingsState } from './game-settings.state';
import { GameSettingsStore } from './game-settings.store';

@Injectable()
export class GameSettingsQuery extends Query<GameSettingsState> {
  areGamesOfOneIncluded$ = this.select(
    (state) => state.areGamesOfOneIncluded ?? true
  );
  selectPlayers$ = this.select('players');
  newPlayerName$ = this.select((state) => state?.newPlayer?.name ?? '');
  newPlayerSymbol$ = this.select((state) => state?.newPlayer?.symbol ?? '');

  constructor(protected store: GameSettingsStore) {
    super(store);
  }
}
