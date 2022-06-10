# learning-nest

## Develop

Install dependencies.

```shell
pnpm install
```

Set `.env`.

```shell
MONGODB_IMAGE_NAME=bitnami/mongodb
MONGODB_VERSION=5.0
MONGODB_ENABLE_IPV6=true
MONGODB_ROOT_USER=root
MONGODB_ROOT_PASSWORD=mongodb
MONGODB_DEFAULT_DB=db

MONGODB_REPLICA_SET_NAME=replicaset
MONGODB_REPLICA_SET_KEY=replicasetkey
MONGODB_PORT_NUMBER=27017

MONGODB_PRIMARY_ADVERTISED_HOSTNAME=mongodb-primary
MONGODB_PRIMARY_REPLICA_SET_MODE=primary
MONGODB_PRIMARY_PORTS=27017:27017
MONGODB_PRIMARY_VOLUMES=~/bitnami/mongodb:/bitnami/mongodb

MONGODB_SECONDARY_ADVERTISED_HOSTNAME=mongodb-secondary
MONGODB_SECONDARY_REPLICA_SET_MODE=secondary
MONGODB_SECONDARY_PORTS=27018-27020

MONGODB_ARBITER_ADVERTISED_HOSTNAME=mongodb-arbiter
MONGODB_ARBITER_REPLICA_SET_MODE=arbiter
MONGODB_ARBITER_PORTS=27021:27017

MONGODB_CONNECTION_STRING=mongodb://root:mongodb@0.0.0.0:27017,0.0.0.0:27018,0.0.0.0:27019,0.0.0.0:27020,0.0.0.0:27021/db?authSource=admin&replicaSet=replicaset

```

Update hosts if using Windows or macOS.

```hosts
127.0.0.1 mongodb-primary mongodb-secondary mongodb-arbiter
```

Start `docker-compose`.

```shell
pnpm run docker # mongodb-primary × 1, mongodb-secondary × 1, mongodb-arbiter × 1
pnpm run docker-scale # mongodb-primary × 1, mongodb-secondary × 3, mongodb-arbiter × 1
```

Start project.

```shell
pnpm run dev
```

## Deploy

Build project.

```shell
pnpm run build
```

Deploy `dist` and start `docker-compose` on your server manully.

TODO: better deploy. Maybe docker

## Test

TODO: update tests.

Set `.env.test`.

```shell
MONGODB_IMAGE_NAME=bitnami/mongodb
MONGODB_VERSION=5.0
MONGODB_ENABLE_IPV6=true
MONGODB_ROOT_USER=root
MONGODB_ROOT_PASSWORD=mongodb
MONGODB_DEFAULT_DB=db

MONGODB_REPLICA_SET_NAME=replicaset
MONGODB_REPLICA_SET_KEY=replicasetkey
MONGODB_PORT_NUMBER=27017

MONGODB_PRIMARY_ADVERTISED_HOSTNAME=test-mongodb-primary
MONGODB_PRIMARY_REPLICA_SET_MODE=primary
MONGODB_PRIMARY_PORTS=28017:27017

MONGODB_SECONDARY_ADVERTISED_HOSTNAME=test-mongodb-secondary
MONGODB_SECONDARY_REPLICA_SET_MODE=secondary
MONGODB_SECONDARY_PORTS=28018-28020

MONGODB_ARBITER_ADVERTISED_HOSTNAME=test-mongodb-arbiter
MONGODB_ARBITER_REPLICA_SET_MODE=arbiter
MONGODB_ARBITER_PORTS=28021:27017

MONGODB_CONNECTION_STRING=mongodb://root:mongodb@0.0.0.0:28017,0.0.0.0:28018,0.0.0.0:28019,0.0.0.0:28020,0.0.0.0:28021/db?authSource=admin&replicaSet=replicaset

```

Update hosts if using Windows or macOS.

```hosts
127.0.0.1 test-mongodb-primary test-mongodb-secondary test-mongodb-arbiter
```

Start `docker-compose`.

```shell
pnpm run docker:test # test-mongodb-primary × 1, test-mongodb-secondary × 1, test-mongodb-arbiter × 1
pnpm run docker-scale:test # test-mongodb-primary × 1, test-mongodb-secondary × 3, test-mongodb-arbiter × 1
```

Test project.

```shell
pnpm run test
pnpm run test:cov
pnpm run test:e2e
...
```
