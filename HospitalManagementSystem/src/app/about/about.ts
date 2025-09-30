import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  name :string = ''
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.name= params['name'];

    })
  }
}
