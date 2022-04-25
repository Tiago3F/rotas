import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id']
        this.aluno = this.alunosService.getAluno(id)
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
