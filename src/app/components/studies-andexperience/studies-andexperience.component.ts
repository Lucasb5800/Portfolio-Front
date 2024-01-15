import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/Service/back-end.service';

@Component({
  selector: 'app-studies-andexperience',
  templateUrl: './studies-andexperience.component.html',
  styleUrls: ['./studies-andexperience.component.css']
})
export class StudiesANDexperienceComponent implements OnInit {

  educationList!: any;
  experienceList!: any;

  constructor(private infoDB:BackEndService) { }

  ngOnInit(): void {
    this.infoDB.getEducationList().subscribe(data=>this.educationList=data);
    this.infoDB.getExperienceList().subscribe(data=>this.experienceList=data);
  }

}
