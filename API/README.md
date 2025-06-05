# Live Stock Management Application

## Description

Welcome to the live stock management application to keep track of important information about your animals.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

## Prisma CLI Usage

Prisma is used for database schema management, migrations, and generating the Prisma Client for database access.

### Setup

```bash
# Initialize Prisma in your project (creates a prisma/ folder with schema.prisma)
$ npx prisma init
```

### Generate Prisma Client

Regenerates the Prisma Client based on your latest schema.  
**Note:** This is run automatically after each migration, but you should also run it manually if you change your schema without running a migration.

```bash
$ npm run prisma:generate
```

### Run Migrations

Creates a new migration file based on changes in your Prisma schema, applies it to your database, and automatically regenerates the Prisma Client.  
**You must provide a name for the migration.**

```bash
$ npm run prisma:migrate -- your_migration_name
# This runs: prisma migrate dev --name your_migration_name
```

### Apply Migrations

Applies all pending migrations to your database.  
This is typically used in production or CI/CD environments to ensure the database schema is up to date.

```bash
$ npm run prisma:migrate:deploy
```

### Open Prisma Studio

Launches Prisma Studio, a web-based GUI to view and edit your database content.

```bash
$ npm run prisma:studio
```
