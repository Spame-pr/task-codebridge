import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnDestroy,OnInit {

  array: any;
  search: any;
  subs:Subscription

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subs = this.dataService.getData().subscribe(
      (data) => {
        this.array = data
      }
    )
  }
  ngOnDestroy(): void {
   this.subs.unsubscribe()
  }
}
