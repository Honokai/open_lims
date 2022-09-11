import { BaseColumn } from "./BaseColumn";

export class UserColumns extends BaseColumn{
  private dataFields = ['id', 'name', 'email', 'created_at']

  public getFields()
  {
    return this.dataFields
  }
}