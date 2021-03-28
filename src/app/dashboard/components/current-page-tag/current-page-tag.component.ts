import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-page-tag',
  templateUrl: './current-page-tag.component.html',
  styleUrls: ['./current-page-tag.component.scss']
})
export class CurrentPageTagComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
