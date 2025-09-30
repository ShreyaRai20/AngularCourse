import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  users = [
  { id: 1, name: 'Shreya', age: 23 },
  { id: 2, name: 'Arjun', age: 25 },
  { id: 3, name: 'Priya', age: 22 },
  { id: 4, name: 'Rahul', age: 28 },
  { id: 5, name: 'Neha', age: 24 },
  { id: 6, name: 'Amit', age: 30 },
  { id: 7, name: 'Kavya', age: 26 },
  { id: 8, name: 'Rohan', age: 27 },
  { id: 9, name: 'Sneha', age: 21 },
  { id: 10, name: 'Varun', age: 29 },
  { id: 11, name: 'Ananya', age: 23 }
];

constructor(private router: Router){}
  goToProfile(){
      this.router.navigate(['login'],{queryParams:{name:'shreya02'}})
    }

}
