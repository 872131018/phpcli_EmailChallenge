<?php
    /**
    * Require block #misslaravelalready
    */
    require('../FileProcessor.php');

    if(!empty($_FILES)) {
        $file = $_FILES['file']['tmp_name'];

        $fileProcessor = new FileProcessor(getcwd(), getcwd());
        $data = $fileProcessor->processFile($file);

        echo json_encode($data);
        return;
    }
