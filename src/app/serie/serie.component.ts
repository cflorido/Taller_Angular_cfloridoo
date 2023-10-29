import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
