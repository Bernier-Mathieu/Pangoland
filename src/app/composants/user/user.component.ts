import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  nom!: string;
  role!: string;

  constructor() {
    this.nom = 'Pangolin 1';
    this.role = 'Sorcier';
   }

  ngOnInit(): void {
  }

}
