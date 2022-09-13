import { DataFieldType } from "./TypeHelpers"

export class BaseColumn {
  public conditionFilter: string[] = ['contains', 'starts_with', 'ends_with', 'equal', 'not_equal']
  public dataFields: DataFieldType[]

  constructor(dataFields?: DataFieldType[])
  {
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