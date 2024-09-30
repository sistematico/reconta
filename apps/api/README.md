# 🐷 ReConta Backend

## Desenvolvimento

Para instalar as dependências:

```sh
bun install
```

Para rodar em modo de desenvolvimento:

```sh
bun run dev
```

Abra [http://localhost:3030](http://localhost:3030)

## Endpoints

| Módulo | Rota | Métodos | Payload | Exemplo | Descrição | 
| --- | --- | --- | --- | --- | --- |
| AUTH | /auth | [POST] | [http://localhost:3030/auth](http://localhost:3030/auth) | user(string), password(string) | Rota de autenticação de usuários. | 
