import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  article: { id: number }
  dataObject: any
  subs: Subscription

  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.article = {
      id: this.route.snapshot.params['id'],
    }

    this.subs = this.dataService.getDataOne(this.article.id).subscribe(
      (data) => {
        this.dataObject = data
      }
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
