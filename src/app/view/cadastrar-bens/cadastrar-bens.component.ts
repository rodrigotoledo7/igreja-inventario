import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service'; // Ajuste conforme seu serviço

@Component({
  selector: 'app-cadastrar-bens',
  templateUrl: './cadastrar-bens.component.html',
  styleUrls: ['./cadastrar-bens.component.css']
})
export class CadastrarBensComponent implements OnInit {
  bensForm!: FormGroup; 
  locais: any[] = []; 

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.bensForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      local_id: ['', Validators.required]
    });

    this.apiService.getLocais().subscribe((locais: any[]) => {
      this.locais = locais;
    });
  }

  addBem(): void {
    if (this.bensForm.valid) {
      this.apiService.addBem(this.bensForm.value).subscribe(response => {
        console.log('Bem adicionado com sucesso!', response);
        this.bensForm.reset();
      });
    }
  }
}
