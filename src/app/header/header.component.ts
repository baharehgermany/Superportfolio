import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // showMenu(): void{

    // }
  }

}


// function showMenu() {

//   var v = document.getElementById("busket");
//   if (v.style.display === "none") {
//       v.style.display = "block";
//   } else {
//       v.style.display = "none";

//   }

// }