<?php

    echo 'Executing...';
    echo PHP_EOL;
    /**
    * Look through files for an archive
    */
    $files_in_directory = scandir(getcwd());
    $root_directory = getcwd();
    /**
    * Search for an archive with .tar.gz
    */
    foreach($files_in_directory as $index => $file) {
        /**
        * Know from supplied file this is a possible filetype
        */
        if(strpos($file, '.tar.gz')) {
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
                * On successful archive go into archive directory
                */
                chdir('email_archive');
                /**
                * Look for a folder containing email archives
                */
                $files_in_directory = scandir(getcwd());
                /**
                * Go into email directory
                */
                foreach ($files_in_directory as $index => $file) {
                    if($file != '.' && $file != '..') {
                        chdir($file);
                        break;
                    }
                }
                /**
                * Get array of archived emails to parse
                */
                $files_in_directory = scandir(getcwd());
                $archived_emails = [];
                /**
                * Go into email directory
                */
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
                    /**
                    * Open a file for reading
                    */
                    $open_file = fopen($file,"r");
                    $date = '';
                    $sender = '';
                    $subject = '';
                    while(!feof($open_file)) {
                        /**
                        * Get a line to look for a piece of data
                        */
                        $current_line = fgets($open_file);
                        /**
                        * Date: at 0 should indicate sending date
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
                    array_push($final_output, [
                        $file => [
                            'date' => $date,
                            'sender' => $sender,
                            'subject' => $subject
                        ]
                    ]);
                }
                /**
                * @TODO: per spec push into a file in a meaningful way
                */
                $output = fopen($root_directory."/processedEmailData.json", "w");
                fwrite($output, json_encode($final_output, JSON_PRETTY_PRINT));
                fclose($output);

            } catch(Exception $e) {
                echo 'Error Encountered!!!';
                echo PHP_EOL;
                print_r($e);
            }
        }
    }

    /**
    * @param string $directory
    * @return array $files
    */
    /*
    private function get_files($directory) {
        return scandir(getcwd());
    }
    */
