import { IRegistration } from '@modules/registrations/models/IRegistration';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('registrations')
class Registration implements IRegistration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Generated()
  number_id: number;

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
  gfe: string;

  @Column()
  incluir_camisa: 'S' | 'N';

  @Column()
  tamanho_camisa: string;

  @Column()
  tempo_instituicao: string;
  @Column()
  nome_instituicao: string;
  @Column()
  endereco_instituicao: string;
  @Column()
  cep_instituicao: string;
  @Column()
  cidade_instituicao: string;
  @Column()
  bairro_instituicao: string;
  @Column()
  telefone_instituicao: string;

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
