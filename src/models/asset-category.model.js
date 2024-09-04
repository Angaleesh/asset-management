import { INTEGER, STRING, DATE, NOW } from "sequelize";
import { sequelize } from "../configs/db.config";


export const AssetCategory = sequelize.define(
  "AssetCategory",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DATE,
      defaultValue: NOW,
    },
    updatedAt: {
      type: DATE,
      defaultValue: NOW,
    },
  },
  {
    tableName: "asset_categories",
  }
);
