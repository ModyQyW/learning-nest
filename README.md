# learning-nest

**WIP**

## TODO

- [ ] test

## Usage

Install dependencies.

```shell
pnpm install
```

Update your hosts.

```hosts
127.0.0.1 mongodb-primary mongodb-secondary mongodb-arbiter test-mongodb-primary test-mongodb-secondary test-mongodb-arbiter
```

Start `docker-compose` for development.

```shell
pnpm run docker # mongodb-primary × 1, mongodb-secondary × 1, mongodb-arbiter × 1
pnpm run docker-scale # mongodb-primary × 1, mongodb-secondary × 3, mongodb-arbiter × 1
```

Start project.

```shell
pnpm run dev
```

Build project. Deploy `dist` and start `docker-compose` on your server for production.

```shell
pnpm run build
```

Start `docker-compose` for test.

```shell
pnpm run docker:test
pnpm run docker-scale:test
```

Test project.

```shell
pnpm run test
pnpm run test:cov
pnpm run test:e2e
```
