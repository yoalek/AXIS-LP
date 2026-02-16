<?php

// Security: Prevent unauthorized access? 
// For now, we assume this file will be deleted after use.
// Or we can simple check for a query param? keeping it simple for now.

require_once 'config/config.php';

function runWebMigrations() {
    echo "<h1>Database Setup & Migration</h1><hr>";
    
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        die("<p style='color:red'>Connection failed: " . $conn->connect_error . "</p>");
    }
    echo "<p style='color:green'>Database Connected Successfully.</p>";
    
    // Create migrations table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        migration_name VARCHAR(255) UNIQUE NOT NULL,
        executed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    
    if ($conn->query($sql) === TRUE) {
        echo "<p>Migrations table checked/created.</p>";
    } else {
        die("<p style='color:red'>Error creating migrations table: " . $conn->error . "</p>");
    }
    
    $migrationFiles = glob(__DIR__ . '/migrations/*.sql');
    
    if (empty($migrationFiles)) {
        echo "<p>No migration files found in /migrations folder.</p>";
    }
    
    foreach ($migrationFiles as $file) {
        $filename = basename($file);
        
        $check = $conn->query("SELECT id FROM migrations WHERE migration_name = '$filename'");
        
        if ($check->num_rows == 0) {
            echo "<p>Executing: <strong>$filename</strong>...</p>";
            $sqlEvents = file_get_contents($file);
            
            if ($conn->multi_query($sqlEvents)) {
                do {
                    if ($result = $conn->store_result()) {
                        $result->free();
                    }
                } while ($conn->more_results() && $conn->next_result());
                
                $conn->query("INSERT INTO migrations (migration_name) VALUES ('$filename')");
                echo "<p style='color:green'>Success: $filename</p>";
            } else {
                echo "<p style='color:red'>Error executing $filename: " . $conn->error . "</p>";
                exit; 
            }
        } else {
            echo "<p style='color:gray'>Skipped: $filename (Already executed)</p>";
        }
    }
    
    $conn->close();
    echo "<hr><h3>Setup Complete!</h3>";
    echo "<p>You should now delete this file (setup.php) from your server.</p>";
    echo "<p><a href='index.php'>Go to Homepage</a></p>";
}

runWebMigrations();
