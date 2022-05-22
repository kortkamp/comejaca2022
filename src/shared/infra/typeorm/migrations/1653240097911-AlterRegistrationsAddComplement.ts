import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterRegistrationsAddComplement1653240097911
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'registrations',
      new TableColumn({
        name: 'complemento',
        type: 'varchar(255)',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('registrations', 'complemento');
  }
}
