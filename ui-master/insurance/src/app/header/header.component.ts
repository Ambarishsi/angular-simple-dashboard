import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeGraphButton: boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url)
    if(this.router.url=='/graphs'){
      this.activeGraphButton = true;
    }else{
      this.activeGraphButton = false;
    }
  }


  goToGraph() {
    this.router.navigate(['graphs'])
  }

}
