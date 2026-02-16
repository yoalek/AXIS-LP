<?php

require_once '../config/config.php';
require_once '../src/LinkShortener.php';

$shortener = new LinkShortener();

$limit = 50;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $limit;

$links = $shortener->getLinks($limit, $offset);
$totalLinks = $shortener->getTotalLinks();
$totalPages = ceil($totalLinks / $limit);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Link Shortener</title>
    <style>
        body { font-family: sans-serif; background-color: #f4f4f4; margin: 0; padding: 2rem; }
        .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 1000px; margin: 0 auto; }
        h1 { color: #333; display: inline-block; }
        .back-link { float: right; margin-top: 1rem; color: #007bff; text-decoration: none; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8f9fa; color: #333; font-weight: 600; }
        tr:hover { background-color: #f1f1f1; }
        .pagination { margin-top: 1.5rem; text-align: center; }
        .pagination a { display: inline-block; padding: 8px 16px; margin: 0 4px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px; color: #333; text-decoration: none; }
        .pagination a.active { background-color: #007bff; color: white; border-color: #007bff; }
        .short-code { font-family: monospace; font-weight: bold; background: #eee; padding: 2px 6px; border-radius: 4px; color: #000; }
        .clicks { font-weight: bold; color: #28a745; }
    </style>
</head>
<body>
    <div class="container">
        <a href="../index.php" class="back-link">&larr; Back to Shortener</a>
        <h1>Link Dashboard</h1>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Original URL</th>
                    <th>Short Code</th>
                    <th>Link</th>
                    <th>Clicks</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($links as $link): ?>
                <tr>
                    <td><?php echo $link->id; ?></td>
                    <td><a href="<?php echo htmlspecialchars($link->original_url); ?>" target="_blank" title="<?php echo htmlspecialchars($link->original_url); ?>"><?php echo substr(htmlspecialchars($link->original_url), 0, 50) . (strlen($link->original_url) > 50 ? '...' : ''); ?></a></td>
                    <td><span class="short-code"><?php echo $link->short_code; ?></span></td>
                    <td><a href="<?php echo BASE_URL . '/' . $link->short_code; ?>" target="_blank"><?php echo BASE_URL . '/' . $link->short_code; ?></a></td>
                    <td class="clicks"><?php echo $link->clicks; ?></td>
                    <td><?php echo date('M d, Y H:i', strtotime($link->created_at)); ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        
        <div class="pagination">
            <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                <a href="?page=<?php echo $i; ?>" class="<?php echo $i === $page ? 'active' : ''; ?>"><?php echo $i; ?></a>
            <?php endfor; ?>
        </div>
    </div>
</body>
</html>
