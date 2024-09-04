import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../configs/db.config";
import { AssetCategory } from "./asset-category.model";


export const Asset = sequelize.define(
  "Asset",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    serialNumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    uniqueId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    make: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: AssetCategory,
        key: "id",
      },
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: "in_stock",
    },
    branch: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    value: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    purchaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "assets",
  }
);
