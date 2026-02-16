# Link Shortener & Auto-Deploy System

A simple PHP/MySQL link shortener with a built-in auto-migration and FTP deployment system.

## Features
- **Link Shortener**: Create short links instantly.
- **Redirection**: Fast redirection to original URLs.
- **Admin Panel**: View all links and click statistics.
- **Auto-Deploy**: Deploy via FTP and run migrations with a single command.
- **Migrations**: Database version control.

## Installation (Local Development)

1. **Clone/Download** the repository.
2. **Configuration**:
    - Copy `config/config.example.php` to `config/config.php`.
    - Edit `config/config.php` with your database credentials.
3. **Database**:
    - Create a MySQL database separately (or use existing).
    - Run migrations: `php deploy.php migrate`
4. **Run**:
    - Start PHP built-in server:
      ```bash
      php -S localhost:8000
      ```
    - Access `http://localhost:8000`

## Deployment (Production on Hostinger)

1. **Configure FTP**:
    - Edit `config/config.php` with Hostinger FTP details.
2. **Deploy**:
    - Run: `php deploy.php full` (Migrates DB + Uploads Files)
    - Or: `php deploy.php deploy` (Uploads Files only)
    - Or: `php deploy.php migrate` (Runs Migrations only)

## Project Structure
- `admin/`: Admin dashboard.
- `config/`: Configuration files.
- `migrations/`: SQL migration files.
- `src/`: Core PHP classes (`Database.php`, `LinkShortener.php`).
- `deploy.php`: CLI deployment tool.
- `index.php`: Main application entry point.

## Requirements
- PHP 7.4+
- MySQL 5.7+
