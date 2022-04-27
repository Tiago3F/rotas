import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id']
    //     this.aluno = this.alunosService.getAluno(id)
    //   }
    // )

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
      }
    );

  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
