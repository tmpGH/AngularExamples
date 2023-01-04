import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingElementsService } from '../routing-elements.service';
import { Subscription } from 'rxjs';
import { IFragmentPart, IRouteParameters, IQueryStringParameters } from '../interfaces';

@Component({
  selector: 'app-router-navigate',
  templateUrl: './router-navigate.component.html',
  styleUrls: ['./router-navigate.component.css']
})
export class RouterNavigateComponent
implements OnInit, OnDestroy, IFragmentPart, IRouteParameters, IQueryStringParameters {

  private subscriptions = new Subscription();

  routePath: string; queryString: string;
  routeId: number | null | undefined; routeColor: string;
  queryStringId: number | null | undefined; queryStringColor: string;
  urlFragment: string;

  constructor(private router: Router, private route: ActivatedRoute, private routingElements: RoutingElementsService) { }

  ngOnInit(): void {
    this.setHostData();
    this.subscriptions.add(this.routingElements.subscribeUrlFragment(this, this.route));
    this.subscriptions.add(this.routingElements.subscribeQueryString(this, this.route));
    this.subscriptions.add(this.routingElements.subscribeRouteParams(this, this.route));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  navigateClick0() {
    this.router.navigate(['angular/RouterNavigate']);
  }
  navigateClick1() {
    this.router.navigate(['angular/RouterNavigate', { id: 3, color: 'red color' }]);
  }
  navigateClick2() {
    this.router.navigate(['angular/RouterNavigate', 3, 'red color']);
  }
  navigateClick3() {
    this.router.navigate(['../RouterNavigate', 3], { relativeTo: this.route });
  }
  navigateClick4() {
    this.router.navigate(['angular/RouterNavigate'], { queryParams: { id: 4, color: 'blue color'} });
  }
  navigateClick5() {
    this.router.navigate(['angular/RouterNavigate', 3, 'red color'],
      {
        queryParams: { id: 4, color: 'blue color'},
        fragment: 'some fragment'
      }
    );
  }
  navigateClick6() {
    this.router.navigate(['RouterNavigate', 4]);
  }

  private setHostData() {
    this.routePath = window.location.pathname;
    this.queryString = window.location.search;
  }
}
