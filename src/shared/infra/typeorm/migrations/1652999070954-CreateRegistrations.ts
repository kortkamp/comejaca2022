import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRegistrations1652999070954 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
            name: 'name',
            type: 'varchar(255)',
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
          },
          {
            name: 'incluir_camisa',
            type: 'varchar(1)',
          },
          {
            name: 'tamanho_camisa',
            type: 'varchar(255)',
          },

          {
            name: 'instituicao',
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
  }
}
