import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
