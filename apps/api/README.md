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

## Inicialização do Banco de Dados

### Geração

```bash 
bunx drizzle-kit generate --dialect sqlite --schema ./src/drizzle/schema.ts --out ./src/drizzle
# ou
bun run db:generate
```

### Migração

```bash 
bun run ./src/drizzle/migrate.ts
# ou
bun run db:migrate
```

### Semeadura

```bash 
bun run ./src/drizzle/seed.ts
# ou
bun run db:seed
```

## Endpoints

| Módulo | Rota | Métodos | Payload | Exemplo | Descrição | 
| --- | --- | --- | --- | --- | --- |
| AUTH | /auth | [POST] | [http://localhost:3030/auth](http://localhost:3030/auth) | user(string), password(string) | Rota de autenticação de usuários. | 
