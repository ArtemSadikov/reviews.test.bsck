import { MigrationInterface, QueryRunner } from "typeorm";

export class reviewInfo1660997765734 implements MigrationInterface {
    name = 'reviewInfo1660997765734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" ADD "text" text`);
        await queryRunner.query(`ALTER TABLE "review" ADD "rating" smallint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "review" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "review" DROP COLUMN "text"`);
    }

}
