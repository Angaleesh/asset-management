import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import { Asset } from "./asset.model";
import { Employee } from "./employee.model";


export const AssetHistory = sequelize.define(
  "AssetHistory",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    assetId: {
      type: DataTypes.INTEGER,
      references: {
        model: Asset,
        key: "id",
      },
    },
    employeeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: "id",
      },
    },
    issueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    returnDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    scrapDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    reason: {
      type: DataTypes.STRING(255),
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
    tableName: "asset_history",
  }
);
