<?php
    /**
    * Require block
    */
    require('./FileProcessor.php');

    echo 'Starting Execution...';
    echo PHP_EOL;

    $fileProcessor = new FileProcessor(getcwd(), getcwd());
    $fileProcessor->processFiles();
