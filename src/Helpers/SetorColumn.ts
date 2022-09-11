import { BaseColumn } from "./BaseColumn";

export class SetorColumn extends BaseColumn {
  public dataFields = ['id', 'nome', 'created_at', 'updated_at']
  public columnNames = ['ID', 'Setor', 'Data criação', 'Atualizado em'];

  constructor(columnNames?: string[], columnsType?: string[])
  {
    super(columnNames, columnsType)
  }
}