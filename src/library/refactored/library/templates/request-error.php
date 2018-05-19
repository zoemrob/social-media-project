<?php
    use Shared\Constants;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="<?=Constants::WEB_ROOT?>main.css" rel="stylesheet" type="text/css">
    <link href="<?=Constants::WEB_ROOT?>login-header.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="<?=Constants::WEB_ROOT?>std-error.css" type="text/css">
    <title><?=$this->getTitle();?></title>
</head>
<?=$this->getHeader();?>
<body>
    <main>
        <h1><?=$this->getMessage();?></h1>
        <h2><?="Trace:\n"?></h2>
        <pre><?=$this->getStackTrace();?></pre>
        <p><?='at: ' . date('g:i:s');?></p>
    </main>
</body>