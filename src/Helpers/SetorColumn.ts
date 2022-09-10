import { BaseColumn } from "./BaseColumn";

export class SetorColumn extends BaseColumn {
  public columnNameDisplay = ['ID', 'Setor', 'Data criação', 'Atualizado em']

  public getColumnNameDisplay(): string[]
  {
    return this.columnNameDisplay
  }

  public getOriginalNameAndDisplay(): Array<string[]>
  {
    return [this.columnNameDisplay, this.columnNames]
  }
}