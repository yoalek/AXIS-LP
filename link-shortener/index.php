<?php

require_once 'config/config.php';
require_once 'src/LinkShortener.php';

$shortener = new LinkShortener();

// Check for redirection request via .htaccess (GET ?code=xyz) or direct path
$code = $_GET['code'] ?? '';
// If using Apache rewrite rules, $code might come from $_GET['code']. 
// If not using rewrite rules, check path info.
if (empty($code)) {
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $code = trim($path, '/');
}

// Redirect logic
if (!empty($code) && !in_array($code, ['index.php', 'admin'])) {
    $originalUrl = $shortener->getOriginalUrl($code);
    if ($originalUrl) {
        header("Location: " . $originalUrl);
        exit;
    } else {
        $error = "Link not found!";
    }
}

// Creation logic
$shortLink = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['url'])) {
    $url = $_POST['url'];
    $result = $shortener->createShortLink($url);
    
    if ($result['status'] === 'success') {
        $shortLink = BASE_URL . '/' . $result['short_code'];
    } else {
        $error = $result['message'];
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Link Shortener</title>
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f4; margin: 0; }
        .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; max-width: 400px; text-align: center; }
        h1 { margin-bottom: 1.5rem; color: #333; }
        input[type="url"] { width: 100%; padding: 10px; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
        button { background-color: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; width: 100%; font-size: 1rem; }
        button:hover { background-color: #0056b3; }
        .result { margin-top: 1.5rem; padding: 1rem; background-color: #e9ecef; border-radius: 4px; word-break: break-all; }
        .error { color: red; margin-bottom: 1rem; }
        .footer { margin-top: 2rem; font-size: 0.8rem; color: #666; }
        a { color: #007bff; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Link Shortener</h1>
        
        <?php if (isset($error)): ?>
            <div class="error"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>
        
        <form method="POST">
            <input type="url" name="url" placeholder="Enter URL to shorten" required>
            <button type="submit">Shorten</button>
        </form>
        
        <?php if ($shortLink): ?>
            <div class="result">
                <strong>Your short link:</strong><br>
                <a href="<?php echo $shortLink; ?>" target="_blank"><?php echo $shortLink; ?></a>
            </div>
        <?php endif; ?>
        
        <div class="footer">
            <a href="admin/index.php">Admin Panel</a>
        </div>
    </div>
</body>
</html>
