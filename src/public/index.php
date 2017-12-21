<?php
    /**
    * Require block #misslaravelalready
    */
    require('../FileProcessor.php');

    if(!empty($_FILES)) {
        $fileProcessor = new FileProcessor();
        $file = $_FILES['file']['tmp_name'];
        $name = $_FILES['file']['name'];
        /*
        * Check if the file is a msg file for parsing or an archive
        */
        if(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION) == 'msg') {
            $data = $fileProcessor->processFile($file, $name);
        } else {
            $data = $fileProcessor->processArchive($file, $name);
        }

        echo json_encode($data);
        return;
    }
