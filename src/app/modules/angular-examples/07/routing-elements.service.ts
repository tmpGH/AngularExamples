import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFragmentPart, IUrlMainParts, IRouteParameters, IQueryStringParameters } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class RoutingElementsService {

  getHostData(component: IUrlMainParts) {
    // TODO: is window.location trustworthy
    component.urlScheme = window.location.protocol;
    component.urlHost = window.location.hostname;
    component.urlPort = window.location.port;
    component.routePath = window.location.pathname;
    component.queryString = window.location.search;
  }

  subscribeUrlFragment(component: IFragmentPart, route: ActivatedRoute): Subscription {
    return route.fragment.subscribe( frag => {
      component.urlFragment = frag ?? "";
    });
  }

  subscribeRouteParams(component: IRouteParameters, route: ActivatedRoute): Subscription {
    return route.paramMap.subscribe( params => {
      const id = params.get('id');
      component.routeId = id ? +id : null;
      component.routeColor = params.get('color') ?? "";
    });
    // the below code has the same effect
    // return = route.params.subscribe( (params: Params) => {
    //   const id = params.id;
    //   component.routeId = id ? +id : null;
    //   component.routeColor = params.color;
    // });
  }

  subscribeQueryString(component: IQueryStringParameters, route: ActivatedRoute): Subscription {
    return route.queryParams.subscribe( params => {
      // example: syntactic sugar - string to number conversion
      component.queryStringId = params?.['id'] ? +(params?.['id']) : null;
      component.queryStringColor = params?.['color'];
     });
  }
}
