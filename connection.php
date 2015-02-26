<?php
/*** mysql hostname ***/		

						/*** mysql username ***/
						$username = 'bb914ffcd1fa47';

						/*** mysql password ***/
						$password = 'acc8a381';

						try {
						
						 $dbh = new PDO('mysql:host=eu-cdbr-azure-west-a.cloudapp.net;dbname=stephenaanocvews', $username, $password, array(
                            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                            PDO::ATTR_EMULATE_PREPARES => false,
                            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC));							
							/*** echo a message saying we have connected ***/						
							}
						catch(PDOException $e)
							{
							echo $e->getMessage();
							}				