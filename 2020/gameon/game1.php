<!DOCTYPE html>
<?php
    session_start();
    $old_id = session_id();
	$_SESSION["cnt"] = 8;
	$_SESSION["flag1"] = "NO FLAG";
	$_SESSION["flag2"] = "NO FLAG";
    session_regenerate_id();
    $new_id = session_id();
?>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
	<script type="text/javascript" src="jQuery.main.js"></script>
    <script type="text/javascript" src="enchant.js"></script>
	<script type="text/javascript" src="ui.enchant.js"></script>
    <script type="text/javascript" src="tutorial_battle.js"></script>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body oncontextmenu='return false'>
</body>
</html>