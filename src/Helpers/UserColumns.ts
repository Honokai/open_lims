import { BaseColumn } from "./BaseColumn";
import { DataFieldType } from "./TypeHelpers";

export class UserColumns extends BaseColumn {
  public dataFields: DataFieldType[] = [
    {field: 'id', display: 'ID', filterType: 'text'},
    {field: 'name', display: 'Nome', filterType: 'text', showFilter: true},
    {field: 'email', display: 'E-mail', filterType: 'text', showFilter: true},
    {field: 'created_at', display: 'Criado em', filterType: 'date', showFilter: true}
  ]
}