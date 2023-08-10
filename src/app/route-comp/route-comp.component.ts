import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-route-comp',
  templateUrl: './route-comp.component.html',
  styleUrls: ['./route-comp.component.css'],
})
export class RouteCompComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  id: any;
  ngOnInit() {
    this.activatedRoute.params.subscribe((m) => {
      this.id = m['routeParam'];
    });
  }
}
