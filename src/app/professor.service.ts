import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

interface ApiResponse {
  success: boolean;
  errors: any;
  detailedErrors: any[];
  data: {
    count: number;
    items: Professor[];
    page: number;
    pageSize: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = 'https://localhost:7001/api/v1/Professor';

  constructor(private http: HttpClient) {}

  getProfessors(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
