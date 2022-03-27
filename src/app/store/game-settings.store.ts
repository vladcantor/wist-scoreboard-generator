import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { GameSettingsState } from './game-settings.state';
function createInitialState(): GameSettingsState {
  return {
    areGamesOfOneIncluded: false,
    players: [],
    newPlayer: {
      name: '',
      symbol: '',
    },
  };
}

@Injectable()
@StoreConfig({ name: 'gameSettings' })
export class GameSettingsStore extends Store<GameSettingsState> {
  constructor() {
    super(createInitialState());
  }

  public setNewPlayerName(newPlayerName?: string) {
    this.update((state) => {
      return {
        newPlayer: {
          ...state.newPlayer,
          name: newPlayerName ?? '',
          symbol:
            (newPlayerName?.length ?? 0) > 0
              ? newPlayerName![0].toLocaleUpperCase()
              : '',
        },
      };
    });
  }
  public addNewPlayer(): void {
    this.update((state) => {
      return {
        players: [...state.players, state.newPlayer],
        newPlayer: {
          name: '',
          symbol: '',
        },
      };
    });
  }
}
