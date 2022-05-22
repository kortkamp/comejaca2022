import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterRegistrationsDropPhone1653239964566
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('registrations', 'telefone_instituicao');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'registrations',
      new TableColumn({
        name: 'telefone_instituicao',
        type: 'varchar(255)',
      }),
    );
  }
}
