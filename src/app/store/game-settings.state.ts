import { Player } from './models';

export interface GameSettingsState {
  players: Player[];
  areGamesOfOneIncluded: boolean;
  newPlayer: Player;
}
