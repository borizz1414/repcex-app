import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-table',
  templateUrl: './filters-table.component.html',
  styleUrls: ['./filters-table.component.scss']
})
export class FiltersTableComponent implements OnInit {
  @Input() show_filter_users : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
