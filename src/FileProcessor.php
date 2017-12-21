<?php
class FileProcessor {
    function __construct() {
        /*
        * Used to do some stuff here when the project was CLI based
        */
    }
    /**
    * Convert email archive to readable json output with data
    */
    public function processArchive($file, $name) {
        /**
        * Interface for archive files and the like
        */
        try {
            /*
            * Ensure uploaded filed gets a valid extension
            */
            $temp_name = $file.'.tgz';
            move_uploaded_file($file, $temp_name);
            $archive = new PharData($temp_name);
            /**
            * Decompress the archive
            */
            $directory = '/tmp';
            $archive->decompress()->extractTo($directory, null, true);
            /**
            * Get files in archive
            * @TODO: add a loop to get the name of the compressed directory
            */
            $files = scandir($directory.'/smallset');
            /**
            * Look for files that don't conform (aka ninja traps)
            */
            $valid = [];
            foreach ($files as $index => $file) {
                if(pathinfo($file, PATHINFO_EXTENSION) == 'msg') {
                    array_push($valid, $file);
                }
            }
            /**
            * Now process each email
            */
            $output = [];
            foreach ($valid as $index => $file) {
                array_push($output, $this->processFile("$directory/smallset/$file", $name));
            }

            return $output;
        } catch(Exception $e) {
            echo 'Error Encountered!!!';
            echo PHP_EOL;
            print_r($e);
        }
    }

    /**
    * Logic for processing files
    */
    public function processFile($file, $name) {
        /**
        * Open a file for reading
        */
        $open_file = fopen($file, "r");
        $to = '';
        $from = '';
        $date = '';
        $subject = '';
        $messageId = '';
        while(!feof($open_file)) {
            /**
            * Get a line to look for a piece of data
            */
            $current_line = fgets($open_file);
            /**
            * To:, From:, Date:, or Subject: at 0 should indicate relevant data
            */
            if(strpos($current_line, 'To:') === 0) {
                $to = $current_line;
            }
            if(strpos($current_line, 'From:') === 0) {
                $from = $current_line;
            }
            if(strpos($current_line, 'Date:') === 0) {
                $date = $current_line;
            }
            if(strpos($current_line, 'Subject:') === 0) {
                $subject = $current_line;
            }
            if(strpos($current_line, 'Message-ID:') === 0) {
                $messageId = $current_line;
            }
        }
        /**
        * Close the open file after reading
        */
        fclose($open_file);
        /**
        * Push data into final output
        */
        $output =  [
            'name' => $name,
            'to' => $to,
            'from' => $from,
            'date' => $date,
            'subject' => $subject,
            'messageId' => $messageId
        ];
        return $output;
    }
}
