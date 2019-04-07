<?php
  $gewicht = $_GET["gewicht"];
  $lengte  = $_GET["lengte_cm"];
  BMIcalc($gewicht, $lengte);
  function BMIcalc($gewicht, $lengte){
    $lengte = $lengte / 100;
    $bmi = $gewicht / ($lengte * $lengte);
    $bmi = round($bmi,+1);
    switch ($bmi){
      case $bmi < 18.5:
        $text = "ondergewicht";
        break;
      case $bmi < 25:
        $text = "normaal/gezond";
        break;
      case $bmi < 27:
        $text = "licht overgewicht";
        break;
      case $bmi < 30:
        $text = "matig overgewicht";
        break;
      case $bmi < 40:
        $text = "obesitas";
        break;
      default:
        $text = "morbide obesitas";
        break;
    }
    echo "je BMI is $bmi" . " categorie " . "$text";
  }
?>
