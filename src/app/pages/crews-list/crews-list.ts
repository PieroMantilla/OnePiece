import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { OnepieceService } from '../../services/onepiece';
import { Crew } from '../../models/crew';

@Component({
  selector: 'app-crews-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './crews-list.html',
  styleUrls: ['./crews-list.css']
})
export class CrewsList implements OnInit {
  crews: Crew[] = [];
  loading = false;
  searchName = '';

  constructor(
    private onepiece: OnepieceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(qp => {
      this.searchName = qp['name'] ?? '';
      this.loadCrews(this.searchName);
    });
  }

  loadCrews(name?: string) {
    this.loading = true;
    this.onepiece.getCrews().subscribe({
      next: data => {
        this.crews = name 
          ? data.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
          : data;
        this.loading = false;
      },
      error: () => { this.crews = []; this.loading = false; }
    });
  }


    onSearch() {
    const params = this.searchName ? { name: this.searchName } : {};
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }


  clearSearch() {
    this.searchName = '';
    this.onSearch();
  }
}
