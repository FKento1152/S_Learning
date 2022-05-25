<script>
const data = <?php 
$data = [
    'flower0'=>["バラ", "flower5520.png", 400],
    'flower1'=>["ユリ", "flower0002.png", 600],
    'flower2'=>["チューリップ", "flower1470.png", 700],
];
echo json_encode($data);
?>;
</script>
<link href="style.css" rel="stylesheet">