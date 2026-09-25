---
name: anythingllm-sql-agent
description: Use when a question has to be answered from data in a SQL database, such as PostgreSQL, MySQL, or SQL Server
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/sql-agent). Original name: sql-agent. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# SQL Connector (AnythingLLM)

AnythingLLM's `sql-agent` skill answers questions by querying the user's databases, **read-only**, in four steps: list databases, list tables, read the schema, then run a `SELECT`.

## Connect

Use a database tool or MCP server the environment provides, or the database's own CLI (`psql`, `mysql`, `sqlcmd`) with a connection the user has configured. Never guess credentials. If no connection exists, ask the user for one.

## Procedure

1. **Database:** decide which one to use. If several are configured, list them and confirm with the user.
2. **Tables:** list them.
   - PostgreSQL: `SELECT * FROM pg_catalog.pg_tables WHERE schemaname = 'public';` (or the configured schema)
   - MySQL: `SELECT table_name FROM information_schema.tables WHERE table_schema = '<database>';`
   - SQL Server: `SELECT name FROM sysobjects WHERE xtype = 'U';`
3. **Schema:** read the columns of every table you'll query before writing the query.
   - PostgreSQL: `SELECT column_name, data_type, character_maximum_length, column_default, is_nullable FROM information_schema.columns WHERE table_name = '<table>' AND table_schema = 'public';`
   - MySQL: `SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, COLUMN_DEFAULT, EXTRA FROM information_schema.columns WHERE table_schema = '<database>' AND table_name = '<table>';`
   - SQL Server: `SELECT COLUMN_NAME, COLUMN_DEFAULT, IS_NULLABLE, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '<table>';`
4. **Query:** run a `SELECT` in the database's own dialect, with a reasonable row limit (`LIMIT`, or `TOP` on SQL Server) so it can't run long or overload the database.
5. Answer from the returned rows, and show the query you ran.

## Rules

- Read-only: run only `SELECT` statements, never anything that changes data or schema (`INSERT`, `UPDATE`, `DELETE`, `DROP`, `ALTER`, `TRUNCATE`, …). If the user wants data changed, tell them this skill only reads.
- Take table and column names from the schema you read, never from guesses.
