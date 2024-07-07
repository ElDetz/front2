import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { TranslateService } from '@ngx-translate/core';

interface Professor {
  id: string;
  userId: string;
  researchGroupId: string;
  isCoordinator: boolean;
  user: {
    id: string;
    tenantId: string;
    email: string;
    firstName: string;
    lastName: string;
    role: number;
    status: number;
  };
  researchGroup: {
    id: string;
    name: string;
  };
}

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  professors: Professor[] = [];

  constructor(private professorService: ProfessorService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.professorService.getProfessors().subscribe(response => {
      if (response.success) {
        this.professors = response.data.items;
      }
    });
  }

  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
  }
}

