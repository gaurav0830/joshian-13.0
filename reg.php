<?php
  require_once "config/db.php";

  if(isset($_SESSION['user_id'])!="") {
    header("Location: dashboard.php");
  }

    if (isset($_POST['signup'])) {
       
        $college=mysqli_real_escape_string($conn, $_POST['college']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $department=mysqli_real_escape_string($conn, $_POST['department']);
        $event=mysqli_real_escape_string($conn, $_POST['event']);
        $name1 = mysqli_real_escape_string($conn, $_POST['name1']);
        $phone1 = mysqli_real_escape_string($conn, $_POST['phone1']);
        $name2 = mysqli_real_escape_string($conn, $_POST['name2']);
        $phone2 = mysqli_real_escape_string($conn, $_POST['phone2']);
        $name3 = mysqli_real_escape_string($conn, $_POST['name3']);
        $phone3 = mysqli_real_escape_string($conn, $_POST['phone3']);
        $name4 = mysqli_real_escape_string($conn, $_POST['name4']);
        $phone4 = mysqli_real_escape_string($conn, $_POST['phone4']);
        if (!preg_match("/^[a-zA-Z ]+$/",$name1)) {
            $name_error = "Name must contain only alphabets and space";
        }
        if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
            $email_error = "Please Enter Valid Email ID";
        }       
        if(strlen($phone1) < 10) {
            $mobile_error = "Mobile number must be minimum of 10 characters";
        }
        if (!$error) {
            if(mysqli_query($conn, "INSERT INTO users(college,email,department,event,name1,phone1,name2,phone2,name3,phone3,name4,phone4) VALUES('" . $college . "','" . $email . "', '" . $department . "', '" . $event . "','" . $name1 . "','" . $phone1 . "','" . $name2 . "','" . $phone2 . "','" . $name3 . "','" . $phone3 . "','" . $name4 . "','" . $phone4 . "')")) {
              echo '<script>alert("Registration successful!"); window.location.href = "index.html";</script>';
             exit();
            } else {
               echo "Error: " . $sql . "" . mysqli_error($conn);
            }
        }
        mysqli_close($conn);
    }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JOSHIANA | 13.0</title>
    <link rel="icon" type="image/x-icon" href="images/fav-icon.png">
    <link rel="stylesheet" href="assests/css/reg.css" />
    </head>
    <body>
    <section class="container-reg">
      <h4>JOSHIANA <sup>13.0</sup></h4>
      <header>Registration Form</header>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" class="form">
        <div class="input-box">
          <input type="text" placeholder="Enter College Address*" name="college" required />
        </div>
        <div class="input-box">
            <input type="email" placeholder="Enter Email Address*" name="email" required />
            <span class="text-danger"><?php if (isset($email_error)) echo $email_error; ?></span>
        </div>
        <div class="input-box address">
        <div class="column">
          <div class="select-box">
            <select name="department" id="">
              <option hidden>Department*</option>
              <option value="mca">MCA</option>
              <option value="msc(Cs&It)">MSC(CS & IT)</option>
              <option value="M.tech(Cs)">M.TECH</option>
              <option value="Bca">BCA</option>
              <option value="Bsc(cs)">BSC(CS)</option>
            </select>
          </div>
          <div class="select-box">
            <select name="event" id="">
              <option hidden>Select Event*</option>
              <option value="SEOUL">seoul</option>
              <option value="CodeBlanca">CodeBlanca</option>
              <option value="CairoConflicts">Cairo Conflicts</option>
              <option value="NukeTown">Nuke Town</option>
              <option value="DortWeb">DortWeb</option>
              <option value="Vlog of Fame">Vlog of Fame</option>
              <option value="Harlem Shake">Harlem Shake</option>
              <option value="L'ObjectIf">L'ObjectIf</option>
              <option value="IT Pharaoh">IT Pharaoh</option>
              <option value="Takeshi's Castle">Takeshi's Castle</option>
            </select>
          </div>
        </div>
        </div>
        <div class="column">
        <div class="input-box">
          <input type="text" placeholder="Enter Participant Name 1" name="name1" required />
          <span class="text-danger"><?php if (isset($name_error)) echo $name_error; ?></span>
        </div>
          <div class="input-box">
            <input type="tel" placeholder="Enter Phone Number 1" name="phone1" required />
            <span class="text-danger"><?php if (isset($mobile_error)) echo $mobile_error; ?></span>
          </div>
        </div>

        <div class="column">
        <div class="input-box">
          <input type="text" placeholder="Enter Participant Name 2" name="name2"  />
          <span class="text-danger"><?php if (isset($name_error)) echo $name_error; ?></span>
        </div>
          <div class="input-box">
            <input type="tel" placeholder="Enter Phone Number 2" name="phone2"  />
            <span class="text-danger"><?php if (isset($mobile_error)) echo $mobile_error; ?></span>
          </div>
        </div>

        <div class="column">
        <div class="input-box">
          <input type="text" placeholder="Enter Participant Name 3" name="name3"  />
          <span class="text-danger"><?php if (isset($name_error)) echo $name_error; ?></span>
        </div>
          <div class="input-box">
            <input type="tel" placeholder="Enter Phone Number 3" name="phone3"  />
            <span class="text-danger"><?php if (isset($mobile_error)) echo $mobile_error; ?></span>
          </div>
        </div>
        <div class="column">
        <div class="input-box">
          <input type="text" placeholder="Enter Participant Name 4" name="name4"  />
          <span class="text-danger"><?php if (isset($name_error)) echo $name_error; ?></span>
        </div>
          <div class="input-box">

            <input type="tel" placeholder="Enter Phone Number 4" name="phone4"  />
            <span class="text-danger"><?php if (isset($mobile_error)) echo $mobile_error; ?></span>
          </div>
        </div>
        <button name="signup">Register</button>
      </form>
    </section>
    
  </body>
</html>
