// contact
                    <?php
                    if (isset($_POST['submit'])) {                       
                        try {
                            $stmt = $dbh->prepare("INSERT INTO registered(Name, Email, Message) values (?,?,?)");
                            $stmt->bindParam(1, $name);
                            $stmt->bindParam(2, $email);
                            $stmt->bindParam(3, $message);
                            $human = $_POST['human'];
                            if ($human == '4') {
                                if (empty($_POST["name"])) {
                                    
                                } else {
                                    $name = $_POST["name"];
                                }
                                if (empty($_POST["email"])) {
                                    
                                } else {
                                    $email = $_POST["email"];
                                }
                                if (empty($_POST["message"])) {
                                    
                                } else {
                                    $message = $_POST["message"];
                                }
                            } else {
                                echo '<b><p class="artStyle"><font color="red">Something went wrong, please and try again!</font></p></b>';
                            }
                            $stmt->execute();
                            echo'<b><p class="artStyle"><font color="green">Thank you, I will contact you soon!</font></p></b>';
                        } catch (PDOException $e) {
                            if ($e->errorInfo[1] == 1048) {
                                echo '<b><p class="artStyle"><font color="red">You missed either name, spam, message or email.</font></p></b>';
                            } elseif ($e->errorInfo[1] == 1062) {
                                // duplicate entry, do something else
                                echo '<b><p class="artStyle"><font color="red">This email has already been added!</font></p></b>';
                            } else {
                                // an error other than duplicate entry occurred
                                echo "Exception caught: $e";
                            }
                        }
                    }
                    ?>

// books
					<?php	
					
						/*** The SQL SELECT statement ***/
						$sql = "SELECT * FROM books";
						print "<p style='background-color:#E0DCDD;border-style:none;padding:none;margin:0%;' class='artStyle'>";
						foreach ($dbh->query($sql) as $row)  
							{
													
							print 
							'<dd style="float:left;margin:auto 6%;width:12%;padding:.3%" >
							<a href="'. $row['link'] .'"target="_blank">' . '<img name="myimage" src="'. $row['image'] .'" alt="book image" /></a>							
							<b style="float:left;margin-left:.2%"> ' . $row['author'].'<br/>
							 '. $row['title'] . '</b></dd>';
								
							}	
						print "<p style='background-color:#E0DCDD;border-style:none;padding:none;margin:0%;' class='artStyle'>";
						/*** close the database connection ***/
						$dbh = null;									
					?>

	// connection
		<?php
	require_once('connection.php');				
	?>