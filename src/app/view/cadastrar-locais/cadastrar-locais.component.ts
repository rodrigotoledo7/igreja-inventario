import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-locais',
  templateUrl: './cadastrar-locais.component.html',
  styleUrls: ['./cadastrar-locais.component.css']
})
export class CadastrarLocaisComponent implements OnInit {
  localForm!: FormGroup; 

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    
    this.localForm = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: ['']
    });
  }

  cadastrarLocal() {
    if (this.localForm.valid) {
      this.http.post('http://localhost:5000/locais', this.localForm.value).subscribe({
        next: () => {
          alert('Local cadastrado com sucesso!');
          this.router.navigate(['/locais/listar']);
        },
        error: (err) => console.error(err)
      });
    } else {
      alert('Por favor, preencha os campos corretamente.');
    }
  }
}
