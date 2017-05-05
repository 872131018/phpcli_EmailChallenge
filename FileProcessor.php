<?php
class FileProcessor {
    private $files_in_directory;
    private $root_directory;

    function __construct($directory, $root) {
        $this->files_in_directory = scandir($directory);
        $this->root_directory = $root;
    }
    /**
    * Convert email archive to readable json output with data
    */
    public function processFiles() {
        /**
        * Browse current directory for the archive
        */
        foreach($this->files_in_directory as $index => $file) {
            /**
            * Check for file archive
            */
            if($this->fileArchiveCheck($file)) {
                /**
                * Interface for archive files and the like
                */
                try {
                    $archive = new PharData($file);
                    /**
                    * Decompress the archive
                    */
                    $archive->decompress()->extractTo('email_archive');
                    /**
                    * On successful extract go into archive directory
                    */
                    chdir('email_archive');
                    /**
                    * Extracted archive could have a different name than .tar file
                    */
                    $files_in_directory = scandir(getcwd());
                    /**
                    * Name agnostic way to get into files after extraction
                    */
                    foreach ($files_in_directory as $index => $file) {
                        /**
                        * Go into archive and prepare to process
                        */
                        if($file != '.' && $file != '..') {
                            chdir($file);
                            /**
                            * Get array of files in archive
                            */
                            $files_in_directory = scandir(getcwd());
                            /**
                            * Create list of email files to process
                            */
                            $archived_emails = [];
                            foreach ($files_in_directory as $index => $file) {
                                if(strpos($file, '.msg')) {
                                    array_push($archived_emails, $file);
                                }
                            }
                            /**
                            * Now process each email and get
                            */
                            $final_output = [];
                            foreach ($archived_emails as $index => $file) {
                                array_push($final_output, $this->processFile($file));
                            }
                            /**
                            * @TODO: per spec push into a file in a meaningful way
                            */
                            $json_file = fopen($this->root_directory."/processedEmailData.json", "w");
                            fwrite($json_file, json_encode($final_output, JSON_PRETTY_PRINT));
                            fclose($json_file);
                        }
                    }
                } catch(Exception $e) {
                    echo 'Error Encountered!!!';
                    echo PHP_EOL;
                    print_r($e);
                }
            }
        }
    }
    /**
    * Function to check for variations of archive file type
    */
    private function fileArchiveCheck($filename) {
        /**
        * Could check for other formats here
        */
        return strpos($filename, '.tar.gz');
    }
    /**
    * Logic for processing files
    */
    private function processFile($file) {
        /**
        * Open a file for reading
        */
        $open_file = fopen($file, "r");
        $date = '';
        $sender = '';
        $subject = '';
        while(!feof($open_file)) {
            /**
            * Get a line to look for a piece of data
            */
            $current_line = fgets($open_file);
            /**
            * Date:, From:, or Subject: at 0 should indicate relevant data
            */
            if(strpos($current_line, 'Date:') === 0) {
                $date = $current_line;
            }
            if(strpos($current_line, 'From:') === 0) {
                $sender = $current_line;
            }
            if(strpos($current_line, 'Subject:') === 0) {
                $subject = $current_line;
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
            $file => [
                'date' => $date,
                'sender' => $sender,
                'subject' => $subject
            ]
        ];
        return $output;
    }
}
