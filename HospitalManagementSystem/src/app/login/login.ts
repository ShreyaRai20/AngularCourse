import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userName: string | null =''
  constructor(private route: ActivatedRoute, router: Router){}
  ngOnInit(){
    this.userName = this.route.snapshot.paramMap.get('name');

    this.route.queryParams.subscribe(params=>this.userName=params['name'])

    this.route.data.subscribe(data=>this.userName=data['name'])
    
  }
}
