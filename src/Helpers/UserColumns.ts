import { BaseColumn } from "./BaseColumn";

export class UserColumns extends BaseColumn {
  public dataFields = [{field: 'id', display: 'ID'}, {field: 'nome', display: 'Nome'}, {field: 'email', display: 'E-mail'}, {field: 'created_at', display: 'Criado em'}]

  constructor(columnsType?: string[])
  {
    super(columnsType)
  }
}