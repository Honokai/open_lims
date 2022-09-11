
export class BaseColumn {
  public columnNames: string[]
  public columnsType: string[]
  public conditionFilter: string[] = ['contains', 'starts_with', 'ends_with', 'equal', 'not equal']
  public dataFields: string[]

  constructor(columnNames?: string[], columnsType?: string[], dataFields?: string[])
  {
    this.columnNames = columnNames ?? []
    this.columnsType = columnsType ?? []
    this.dataFields = dataFields ?? []
  }

  public getConditionFilters()
  {
    return this.conditionFilter;
  }

  public getColumnNames()
  {
    return this.columnNames;
  }

  public getDataFields()
  {
    return this.dataFields;
  }
}