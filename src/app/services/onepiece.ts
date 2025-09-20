import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crew } from '../models/crew';
import { Member } from '../models/member';

@Injectable({ providedIn: 'root' })
export class OnepieceService {
  private APIUrl = 'https://api.api-onepiece.com/v2';

  constructor(private http: HttpClient) {}

  // Crews
  getCrews(): Observable<Crew[]> {
    return this.http.get<Crew[]>(`${this.APIUrl}/crews/en`);
  }

  getCrewById(id: string | number): Observable<Crew> {
    return this.http.get<Crew>(`${this.APIUrl}/crews/${id}/en`);
  }

  // Characters
  getCharacters(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.APIUrl}/characters/en`);
  }

  getCharacterById(id: string | number): Observable<Member> {
    return this.http.get<Member>(`${this.APIUrl}/characters/${id}/en`);
  }
}
