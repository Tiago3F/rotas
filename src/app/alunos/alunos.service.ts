import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Tiago', email: 'tiago@gmail.com' },
    { id: 2, nome: 'Mírian', email: 'mirian@gmail.com' },
    { id: 3, nome: 'Pedro', email: 'pedro@gmail.com' },
  ]

  getAlunos(){
    return this.alunos
  }


  getAluno(id: number){
    let alunoFinded
    this.alunos.forEach(aluno => {
          aluno.id == id ? alunoFinded = aluno : null
    })
    return alunoFinded
}

  constructor() { }
}
