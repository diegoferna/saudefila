import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('table_agendamento', function (table) {
        
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('table_agendamento');
}

