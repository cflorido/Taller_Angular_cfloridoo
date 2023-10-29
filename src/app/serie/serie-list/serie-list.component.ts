import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  average: number=0;
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calcularAverage();
    });
  }

  calcularAverage():void{
    if (this.series.length > 0) {
      const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
      this.average = totalSeasons / this.series.length;
    } 
  }

  ngOnInit() {
    this.getSeries();
  }

}
