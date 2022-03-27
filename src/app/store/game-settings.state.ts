import { Player, WistGame } from './models';

export interface GameSettingsState {
  players: Player[];
  areGamesOfOneIncluded: boolean;
  newPlayer: Player;
  initialScoreBoard: WistGame[];
}
