import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { OnepieceService } from '../../services/onepiece';
import { Crew } from '../../models/crew';
import { Member } from '../../models/member';

@Component({
  selector: 'app-crew-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crew-detail.html',
  styleUrls: ['./crew-detail.css']
})
export class CrewDetail implements OnInit {
  crew?: Crew;
  members: Member[] = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private onepiece: OnepieceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.loadCrew(id);
  }

  loadCrew(id: string | number) {
    this.loading = true;
    this.onepiece.getCrews().subscribe({
      next: (crews: Crew[]) => {
        const crew = crews.find(c => Number(c.id) === Number(id));
        if (crew) {
          this.crew = crew;

          // luego cargo los miembros
          this.onepiece.getCharacters().subscribe((chars: Member[]) => {
            this.members = chars.filter(m => Number(m.crew?.id) === Number(crew.id));
            this.loading = false;
          });
        } else {
          this.crew = undefined;
          this.loading = false;
        }
      },
      error: () => {
        this.crew = undefined;
        this.loading = false;
      }
    });
  }


  goBack() {
    this.router.navigate(['/lista']);
  }

  goToMember(m: Member) {
    this.router.navigate(['/members', m.id]);
  }
}
