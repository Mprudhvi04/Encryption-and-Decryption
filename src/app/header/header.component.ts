import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  imports:[HeaderComponent],

standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(){

  }
  ngOnInit(): void {
  

    }
  }


