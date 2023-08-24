#### Crear Productos

```http
  POST /api/product
```

> Body

| Campo | Tipo | Requerido | Default | Descripción | Ejemplo | Anotaciones |
| :---: | :--: | :-------: | :-----: | :---------- | :------ | :---------- |
| `name` | `string` | **Si** | - | El nombre del producto | `"Extra Picante"` | - |
| `type` | `string` | **Si** | - | Que tipo de producto es | `"burger"` | Se debe validar sea uno de estos valores `"burger"`, `"condiments"`, `"snacks"`, `"drinks"` |
| `price` | `number` | **Si** | - | El precio del producto | `350.50` | - |
| `image` | `string` | **No** | `"https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg"` | La imagen del producto | `"https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg"` | Si no se ingresa debe guardase el default |
| `isPromotion` | `boolean` | **No** | `false` | Indica si el producto esta en promoción | `false` | Si no se ingresa debe guardase el default |
| `discount` | `number` | **No** | - | Indica el porcentaje de dinero a descontar | `15` | Solo debe poder ser ingresado si `isPromotion` esta en `true` |
| `ingredients` | `Array<string>` | **Si** | - | Un listado de ingredientes | `["Carne Vacuna", "Queso", "Jalapeño", "Pan Tostado", "Panceta"]` | No puede estar vació, Si se ingresa un ingrediente repetido solo se debe guardar una vez |

#### Edición de Productos

```http
  PUT /api/product/{id}
```

> Body

| Campo | Tipo | Requerido | Default | Descripción | Ejemplo | Anotaciones |
| :---: | :--: | :-------: | :-----: | :---------- | :------ | :---------- |
| `status` | `string` | **No** | - | El nombre del producto | `"active"` | Se debe validar que sea `"active"` o `"inactive"`, si no llega se debe respetar el valor actual |

#### Eliminar Producto

```http
  DELETE /api/product/{id}
```

#### Listado de Productos

```http
  GET /api/product
```

> Query Parameters

| Campo | Acción | Ejemplo | Anotaciones |
| :---: | :----- | :-----: | :---------- |
| `name` | Filtra los productos por nombre | `Premium Patagonica` | sería ideal que pudiera hacer busquedas parciales |
| `type` | Filtra los productos por tipo | `burger` | sería ideal que validara los tipos |
| `priceFrom` | Filtra los productos por precio mayores al valor | `200.50` | - |
| `priceTo` | Filtra los productos por precio menores al valor | `400` | - |
| `isPromotion` | Filtra los productos que estan o no en Promoción | `1` | Para `true` se acepta `1` y para `false` se acepta `0` |
| `orderBy` | Ordena los resultados por el nombre del campo que se pasa como valor | `price` | Se debe aceptar solo `name`, `price`, `type` y `discount` |
| `orderDirection` | Indica la dirección del ordenamiento | `asc` | Se debe aceptar solo `asc` para ascendente, `desc` para descendente |

Ejemplo:

```http
  GET /api/product?priceFrom=300&priceTo=500&orderBy=price&orderDirection=desc
```

#### Get Individual de Producto

```http
  GET /api/product/{id}
```
