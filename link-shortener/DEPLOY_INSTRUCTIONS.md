# Deployment Instructions (Manual Method)

Since you cannot run PHP commands locally, follow these steps to deploy your Link Shortener to Hostinger.

## 1. Upload Files
Use an **FTP Client** (like FileZilla) or **Hostinger File Manager**:
1.  Connect to your FTP account (`82.25.73.176`).
2.  Navigate to `public_html/` (or wherever you want the site to be).
3.  Upload **all files and folders** from the `link-shortener` folder to the server.
    *   `admin/`
    *   `config/`
    *   `migrations/`
    *   `src/`
    *   `.htaccess`
    *   `deploy.php`
    *   `index.php`
    *   `setup.php`

## 2. Run Database Setup
1.  Open your web browser.
2.  Go to: `https://coral-kudu-139947.hostingersite.com/setup.php`
3.  You should see a message: **"Database Setup & Migration"**.
4.  If successful, it will say "Success: 001_create_links_table.sql" and "Setup Complete!".

## 3. Cleanup (Important!)
After the setup is complete:
1.  **Delete `setup.php`** from your server using File Manager or FTP.
2.  This prevents anyone else from trying to re-run your migrations.

## 4. Test
Go to your homepage: `https://coral-kudu-139947.hostingersite.com/`
You should see the Link Shortener form.

## Troubleshooting
- If you see a "Connection failed" error, check `config/config.php` and ensure your database password is correct.
- If you see a 404 or 500 error, ensure `.htaccess` was uploaded correctly.
