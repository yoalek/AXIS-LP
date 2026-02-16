<?php

require_once __DIR__ . '/Database.php';

class LinkShortener {
    private $db;
    
    public function __construct() {
        $this->db = new Database();
    }
    
    // Validate URL
    public function validateUrl($url) {
        return filter_var($url, FILTER_VALIDATE_URL) !== false;
    }
    
    // Generate unique short code
    public function generateShortCode($length = 6) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    
    // Create short link
    public function createShortLink($url) {
        if (!$this->validateUrl($url)) {
            return ['status' => 'error', 'message' => 'Invalid URL format'];
        }
        
        // Check if URL already exists? (Optional, but good practice to avoid duplicates)
        // For simplicity as per requirements, we might just create a new one, 
        // but let's check for existing original_url to return same code?
        // Requirement says "Gera automaticamente um link encurtado único". 
        // Let's generate a new one every time for simplicity and tracking individual "shares".
        
        $shortCode = $this->generateShortCode();
        
        // Ensure uniqueness of short code
        while ($this->getOriginalUrl($shortCode, false)) {
            $shortCode = $this->generateShortCode();
        }
        
        $this->db->query("INSERT INTO links (original_url, short_code) VALUES (:url, :code)");
        $this->db->bind(':url', $url);
        $this->db->bind(':code', $shortCode);
        
        if ($this->db->execute()) {
            return ['status' => 'success', 'short_code' => $shortCode];
        } else {
            return ['status' => 'error', 'message' => 'Database error'];
        }
    }
    
    // Get original URL by short code
    public function getOriginalUrl($code, $incrementClicks = true) {
        $this->db->query("SELECT * FROM links WHERE short_code = :code");
        $this->db->bind(':code', $code);
        
        $row = $this->db->single();
        
        if ($row) {
            if ($incrementClicks) {
                $this->incrementClicks($code);
            }
            return $row->original_url;
        } else {
            return false;
        }
    }
    
    // Increment clicks
    private function incrementClicks($code) {
        $this->db->query("UPDATE links SET clicks = clicks + 1 WHERE short_code = :code");
        $this->db->bind(':code', $code);
        $this->db->execute();
    }
    
    // Get all links (for admin)
    public function getLinks($limit = 100, $offset = 0) {
        $this->db->query("SELECT * FROM links ORDER BY created_at DESC LIMIT :limit OFFSET :offset");
        $this->db->bind(':limit', $limit, PDO::PARAM_INT);
        $this->db->bind(':offset', $offset, PDO::PARAM_INT);
        return $this->db->resultSet();
    }
    
    // Get total links count
    public function getTotalLinks() {
        $this->db->query("SELECT COUNT(*) as count FROM links");
        $row = $this->db->single();
        return $row->count;
    }
}
