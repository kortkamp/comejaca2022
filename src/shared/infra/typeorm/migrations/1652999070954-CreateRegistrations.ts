import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRegistrations1652999070954 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE SEQUENCE registration_number_id_seq START 1;',
    );
    await queryRunner.createTable(
      new Table({
        name: 'registrations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'number_id',
            type: 'integer',
            default: "nextval('registration_number_id_seq')",
          },
          {
            name: 'nome_completo',
            type: 'varchar(255)',
          },
          {
            name: 'nome_cracha',
            type: 'varchar(255)',
          },
          {
            name: 'email',
            type: 'varchar(255)',
          },
          {
            name: 'data_nascimento',
            type: 'varchar(255)',
          },

          {
            name: 'idade',
            type: 'integer',
          },
          {
            name: 'sexo',
            type: 'varchar(255)',
          },
          {
            name: 'genero',
            type: 'varchar(255)',
          },
          {
            name: 'telefone',
            type: 'varchar(255)',
          },
          {
            name: 'cep',
            type: 'varchar(255)',
          },
          {
            name: 'endereco',
            type: 'varchar(255)',
          },
          {
            name: 'estado',
            type: 'varchar(255)',
          },
          {
            name: 'cidade',
            type: 'varchar(255)',
          },

          {
            name: 'bairro',
            type: 'varchar(255)',
          },
          {
            name: 'numero',
            type: 'varchar(255)',
          },

          {
            name: 'questionario',
            type: 'varchar',
          },

          {
            name: 'tipo',
            type: 'varchar(255)',
          },
          {
            name: 'comissao',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'gfe',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'incluir_camisa',
            type: 'varchar(1)',
          },
          {
            name: 'tamanho_camisa',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'tempo_instituicao',
            type: 'varchar(255)',
          },
          {
            name: 'nome_instituicao',
            type: 'varchar(255)',
          },
          {
            name: 'endereco_instituicao',
            type: 'varchar(255)',
          },
          {
            name: 'cep_instituicao',
            type: 'varchar(255)',
          },
          {
            name: 'cidade_instituicao',
            type: 'varchar(255)',
          },
          {
            name: 'bairro_instituicao',
            type: 'varchar(255)',
          },
          {
            name: 'telefone_instituicao',
            type: 'varchar(255)',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registrations');
    await queryRunner.query('DROP SEQUENCE registration_number_id_seq');
  }
}
