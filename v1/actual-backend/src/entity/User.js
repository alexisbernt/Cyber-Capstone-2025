const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      length: 255,
    },
    email: {
      type: "varchar",
      length: 255,
      unique: true,
    },
    password: {
      type: "varchar",
      length: 255,
    },
    lastLogin: {
      type: "datetime",
      nullable: true,
    },
    loginStreak: {
      type: "int",
      default: 1,
    },
  },
});

module.exports = { User };