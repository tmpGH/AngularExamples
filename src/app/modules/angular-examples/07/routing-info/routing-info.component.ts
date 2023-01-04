import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutingElementsService } from '../routing-elements.service';
// example: use of barrel defined in '../../interfaces'
import { IFragmentPart, IUrlMainParts, IRouteParameters, IQueryStringParameters } from '../interfaces';

@Component({
  selector: 'app-routing-info',
  templateUrl: './routing-info.component.html',
  styleUrls: ['./routing-info.component.css']
})
export class RoutingInfoComponent
implements OnInit, OnDestroy, IFragmentPart, IUrlMainParts, IRouteParameters, IQueryStringParameters {

  private subscriptions = new Subscription();

  urlScheme: string; urlHost: string; urlPort: string; routePath: string; queryString: string;
  routeId: number | null | undefined; routeColor: string;
  queryStringId: number | null | undefined; queryStringColor: string;
  urlFragment: string;

  constructor(private router: Router, private route: ActivatedRoute, private routingElements: RoutingElementsService) { }

  ngOnInit(): void {
    this.routingElements.getHostData(this);
    this.subscriptions.add(this.routingElements.subscribeUrlFragment(this, this.route));
    this.subscriptions.add(this.routingElements.subscribeQueryString(this, this.route));
    this.subscriptions.add(this.routingElements.subscribeRouteParams(this, this.route));
  }

  // example: unsubscribe; subscriptions added in RoutingElementsService
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
