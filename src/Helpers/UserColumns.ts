import { BaseColumn } from "./BaseColumn";

export class UserColumns extends BaseColumn{
  public dataFields = ['id', 'name', 'email', 'created_at'];
  public columnNames = ['ID', 'Nome', 'E-mail', 'Criado em'];

  constructor(columnNames?: string[], columnsType?: string[])
  {
    super(columnNames, columnsType)
  }
}