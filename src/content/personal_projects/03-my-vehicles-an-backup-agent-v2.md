---
title: My Vehicles AN - Backup Agent
icon: database-sync
link: https://codeberg.org/davideccia/my-vehicles-an-backup-agent-v2
stack: ['Go', 'Goravel', 'PostgreSQL', 'Docker']
---

Backend service for the My Vehicles AN app, mirroring its local database to a server so it can be restored on new devices. Full-table sync over an authenticated HTTP API, with multi-database support (SQLite, PostgreSQL, MySQL) and schema version validation.
