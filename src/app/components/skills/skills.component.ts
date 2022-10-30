import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/Service/back-end.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList!: any;
  constructor(private infoDB:BackEndService) { }

  ngOnInit(): void {
    this.infoDB.getSkillsList().subscribe(data=>this.skillList=data);
  }

}
