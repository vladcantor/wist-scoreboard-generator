import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GameSettingsQuery } from 'src/app/store';

@Component({
  selector: 'score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreBoardComponent {
  constructor(private query: GameSettingsQuery) {}
  public scoreBoard$ = this.query.allGames$;
  public players$ = this.query.allPlayers$;
}
