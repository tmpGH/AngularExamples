import { Component, OnInit } from '@angular/core';
import { InterceptorService } from './interceptor.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {

  constructor(private service: InterceptorService) { }

  ngOnInit(): void {
  }

  public SendHttpMessage() {
    this.service.SendMessage();
  }

}
