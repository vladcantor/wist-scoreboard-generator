import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { GameSettingsState } from './game-settings.state';
import { WistGame } from './models';
import { Router } from '@angular/router';

@Injectable()
@StoreConfig({ name: 'gameSettings' })
export class GameSettingsStore extends Store<GameSettingsState> {
  constructor(private router: Router) {
    super(createInitialState());
  }

  public setNewPlayerName(newPlayerName?: string) {
    this.update((state) => {
      return {
        newPlayer: {
          ...state.newPlayer,
          name: newPlayerName ?? '',
          playerIdentifier:
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
          playerIdentifier: '',
        },
      };
    });
  }
  public generateScoreBoard(): void {
    this.update((state) => {
      this.router.navigate(['score-board']);
      return {
        initialScoreBoard: getScoreBoard(state),
      };
    });
  }

  public deletePlayer(playerIdentifier?: string) {
    if (!playerIdentifier) {
      return;
    }

    this.update((state) => {
      return {
        players: [
          ...state.players.filter(
            (player) => player.playerIdentifier !== playerIdentifier
          ),
        ],
      };
    });
  }
}

const getNextPlayerIndex = (
  playerCounter: number,
  state: GameSettingsState
) => {
  playerCounter = (playerCounter + 1) % state.players.length;
  return playerCounter;
};

function createInitialState(): GameSettingsState {
  return {
    areGamesOfOneIncluded: false,
    players: [],
    newPlayer: {
      name: '',
      playerIdentifier: '',
    },
    initialScoreBoard: [],
  };
}
const getScoreBoard = (state: GameSettingsState) => {
  if (state.players.length < 1) {
    return [];
  }

  let result: WistGame[] = [];
  if (state.areGamesOfOneIncluded) {
    result = getGamesOfForEachPlayer(state, 1, 0);
  }

  let playerCounter = 0;
  for (let i = 2; i < 8; i++) {
    result.push({
      cardsDealer: state.players[playerCounter],
      numberOfCards: i,
    });
    playerCounter = getNextPlayerIndex(playerCounter, state);
  }

  result = result.concat(getGamesOfForEachPlayer(state, 8, playerCounter));

  for (let i = 7; i >= 2; i--) {
    result.push({
      cardsDealer: state.players[playerCounter],
      numberOfCards: i,
    });
    playerCounter = getNextPlayerIndex(playerCounter, state);
  }

  if (state.areGamesOfOneIncluded) {
    result = result.concat(getGamesOfForEachPlayer(state, 1, playerCounter));
  }
  return result;
};

const getGamesOfForEachPlayer = (
  state: GameSettingsState,
  numberOfCards: number,
  startingIndex: number
): WistGame[] => {
  const result: WistGame[] = [];
  let index = 0;
  while (index < state.players.length) {
    index++;
    result.push({
      cardsDealer: state.players[startingIndex],
      numberOfCards: numberOfCards,
    });
    startingIndex = getNextPlayerIndex(startingIndex, state);
  }
  return result;
};
