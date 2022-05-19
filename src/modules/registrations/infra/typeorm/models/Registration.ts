import { IRegistration } from '@modules/registrations/models/IRegistration';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('registrations')
class Registration implements IRegistration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome_completo: string;

  @Column()
  nome_cracha: string;

  @Column()
  email: string;

  @Column()
  data_nascimento: string;

  @Column()
  idade: string;

  @Column()
  sexo: string;

  @Column()
  genero: string;

  @Column()
  telefone: string;

  @Column()
  cep: string;

  @Column()
  endereco: string;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  numero: string;

  @Column()
  questionario: string;

  @Column()
  tipo: string;

  @Column()
  comissao: string;

  @Column()
  incluir_camisa: 'S' | 'N';

  @Column()
  tamanho_camisa: string;

  @Column()
  instituicao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Registration };
