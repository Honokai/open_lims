import { DataFieldType } from "./TypeHelpers"

export class BaseColumn {
  public columnsType: string[]
  public conditionFilter: string[] = ['contains', 'starts_with', 'ends_with', 'equal', 'not_equal']
  public dataFields: DataFieldType[]

  constructor(columnsType?: string[], dataFields?: DataFieldType[])
  {
    this.columnsType = columnsType ?? []
    this.dataFields = dataFields ?? []
  }

  public getConditionFilters()
  {
    return this.conditionFilter;
  }

  public getDataFields()
  {
    return this.dataFields;
  }
}