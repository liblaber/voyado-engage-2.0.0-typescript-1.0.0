# CartApiModel

Cart model

**Properties**

| Name          | Type               | Required | Description           |
| :------------ | :----------------- | :------- | :-------------------- |
| cartReference | string             | ❌       | Unique cart reference |
| time          | string             | ❌       | Last change date      |
| contactId     | string             | ❌       | Contact identifier    |
| language      | string             | ❌       | Language              |
| url           | string             | ❌       | Url to cart           |
| items         | CartItemApiModel[] | ❌       | Cart items            |
