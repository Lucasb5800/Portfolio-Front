import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/Service/back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombreCompleto!: any;

  constructor(private infoDB:BackEndService) { }

  ngOnInit(): void {
    this.infoDB.getCompleteName().subscribe(data=>this.nombreCompleto=data);
    
  }

}
