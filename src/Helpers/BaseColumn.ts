
export class BaseColumn {
  public columnNames: string[]
  public columnsType: string[]
  public conditionFilter: string[] = ['contains', 'starts_with', 'ends_with', 'equal', 'not equal']

  constructor(columnNames: string[], columnsType: string[])
  {
    this.columnNames = columnNames
    this.columnsType = columnsType
  }

  public getConditionFilters(): string[]
  {
    return this.conditionFilter;
  }

  public getColumnNames(): string[]
  {
    return this.columnNames;
  }
}