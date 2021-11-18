<?php 
$url = $_GET['url'] ?? null;
if (empty($url)) {
  die('Nothing to fetch');
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
echo file_get_contents($url);