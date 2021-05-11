import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  getRoute(route){
    if(route=='about-us'){
      
    this.router.navigateByUrl('about-us');
    
    }else if(route=='index'){
    
    this.router.navigateByUrl('index');
    
  }else if(route=='services'){

    }else{
      //error
    }
    
  }

}
