const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Order",
    tableName: "orm_orders",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        user_id: {
            type: "int"
        },
        name: {
            type: "varchar"
        },
        ordered_at: {
            type: "date"
        }
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "User",
            joinColumn: {name: "user_id"}
        }
    }
});
