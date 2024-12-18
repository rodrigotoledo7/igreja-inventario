import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-locais',
  templateUrl: './listar-locais.component.html',
  styleUrls: ['./listar-locais.component.css']
})
export class ListarLocaisComponent implements OnInit {
  locais: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/locais').subscribe({
      next: (data) => (this.locais = data),
      error: (err) => console.error(err)
    });
  }
}
