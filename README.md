# CRUD по работе с пользователями

## Конфигурация

Необходимо создать файл `.env`, содержащий переменные конфигурации
сервера (в частности, данные для подключения к базе данных).

За основу можнл взять файл `.template.env`:

```sh
cp .template.env .env
```

## Установка

Установка зависимостей:

```sh
npm i
```

Создание схемы базы данных:

```sh
npm run initdb
```

Запуск сервера:

```sh
npm run start
```

## Описание API

### Создание пользователя

**Запрос**: `POST /users`.

Тело запроса должно содержать JSON с данными нового пользователя:

```js
{
  name: string,
  age: number
}
```

**Ответы**:

- `200 OK` - Возвращается с случае успешного добавления пользователя.
  Возвращает данные нового пользователя, включая сгенерированный ID:

  ```js
  {
    id: number,
    name: string,
    age: number
  }
  ```

- `422 Property Required` - Возвращается в случае, если в теле запроса
  отсутствует одно или несколько свойств нового пользователя (например,
  не передан возраст).

### Получение всех пользователей

**Запрос**: `GET /users`.

**Ответ**: `200 OK`. Тело ответа содержит массив следующего формата:

```js
[
  {
    id: number,
    name: string,
    age: number
  },
  ...
]
```

### Получение пользователя по ID

**Запрос**: `GET /users/:id`, например `GET /users/123`.

**Ответы**:

- `200 OK` - Возвращается в случае успеха. Тело ответа содержит данные
  пользователя:

  ```js
  {
    id: number,
    name: string,
    age: number
  }
  ```

- `404 User Not Found` - Возвращается в случае, если пользователь с
  переданным ID не существует.

### Обновление данных пользователя

**Запрос**: `PUT /users/:id`, например `PUT /users/123`.

Тело запроса должно содержать JSON с новыми данными пользователя, в
том числе теми, которые не подлежат изменению:

```js
{
  name: string,
  age: number
}
```

**Ответы**:

- `200 OK` - Возвращается с случае успешного обновления пользователь.
  Возвращает данные обновленного пользователя:

  ```js
  {
    id: number,
    name: string,
    age: number
  }
  ```

- `404 User Not Found` - Возвращается в случае, если пользователь с
  переданным ID не существует.

- `422 Property Required` - Возвращается в случае, если в теле запроса
  отсутствует одно или несколько свойств пользователя (например,
  не передан возраст).

### Удаление пользователя

**Запрос**: `DELETE /users/:id`, например `DELETE /users/123`.

**Ответы**:

- `200 OK` - Возвращается в случае успеха. Тело ответа содержит данные
  удаленного пользователя:

  ```js
  {
    id: number,
    name: string,
    age: number
  }
  ```

- `404 User Not Found` - Возвращается в случае, если пользователь с
  переданным ID не существует.
