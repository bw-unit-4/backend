exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (users) => {
        users.increments('user_id')
        users.string('username', 200).notNullable()
        users.string('password', 200).notNullable()
        users.string('phone_number', 10).notNullable().unique();
        users.timestamps(false, true)
      })
      .createTable('plants', (plants) => {
        plants.increments('plant_id')
        plants.string('nickname', 128).notNullable()
        plants.string('species', 128).notNullable()
        plants.decimal('h2oFrequency').notNullable()
        plants.string('image', 600)
  
        plants.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
  }