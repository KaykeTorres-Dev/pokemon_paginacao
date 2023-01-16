import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router) {}

  ngOnInit(): void {}

  onSearch() {
    this.apiService.list().subscribe(data => {
      data
      console.log(data);
    });
    this.router.navigate(['home/results']);
  }
}
