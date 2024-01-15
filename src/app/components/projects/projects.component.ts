import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/Service/back-end.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList!: any;
  
  constructor(private infoDB:BackEndService) { }

  ngOnInit(): void {
    this.infoDB.getProyectsList().subscribe(data=>this.projectsList=data);
  }

}
