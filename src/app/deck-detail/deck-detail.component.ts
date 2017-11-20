import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss']
})
export class DeckDetailComponent implements OnInit {
  isInfoVisible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleInfo(): void {
    this.isInfoVisible = !this.isInfoVisible;
  }

}
