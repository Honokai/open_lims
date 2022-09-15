### Utilização data table

1. crie uma classe que estende BaseColumn e informe no atributo dataFieds os campos que você quer que sejam apresentados na tabela

```typescript
export class UserColumns extends BaseColumn {
  public dataFields: DataFieldType[] = [
    {
        field: 'id', // o campo na tabela, utilizado para pesquisar na coleção de itens
        display: 'ID', // nome de exibicao
        filterType: 'text', // ainda nao implementado
        showFilter: true // exibe ou nao o filtro da coluna
    },
    {
        field: 'username',
        display: 'Username',
        filterType: 'text',
        showFilter: false
    }
  ]
}
```
