<?php
    /**
    * Require block #misslaravelalready
    */
    require('../FileProcessor.php');

    if(!empty($_FILES)) {
        $file = $_FILES['file']['tmp_name'];
        $name = $_FILES['file']['name'];

        $fileProcessor = new FileProcessor(getcwd(), getcwd());
        $data = $fileProcessor->processFile($file, $name);

        echo json_encode($data);
        return;
    }
