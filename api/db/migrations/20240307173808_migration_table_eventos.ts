import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('table_eventos', function (table) {
        table.uuid('id').primary();
        table.date('horaInicio');
        table.date('horaFinal');
        table.string('nome').notNullable();
        table.string('local').notNullable();
        table.enu('status', ['atual', 'pendente', 'finalizado']);

        table.timestamp('create_at').defaultTo(knex.fn.now()).notNullable()
        
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('table_eventos');
}

