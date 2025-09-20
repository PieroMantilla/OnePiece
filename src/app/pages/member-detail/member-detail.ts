import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { OnepieceService } from '../../services/onepiece';
import { Member } from '../../models/member';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './member-detail.html',
  styleUrls: ['./member-detail.css']
})
export class MemberDetail implements OnInit {
  member?: Member;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private onepiece: OnepieceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadMember(id);
    }
  }

  loadMember(id: string | number) {
    this.loading = true;

    
    this.onepiece.getCharacters().subscribe({
      next: (chars: Member[]) => {
        this.member = chars.find(m => String(m.id) === String(id));
        this.loading = false;
      },
      error: () => {
        this.member = undefined;
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/lista']);
  }
}
