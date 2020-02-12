<?php
    $results = "Parish: ".$_POST["parish"]."\nCoordinates: ".$_POST["coordinates"]."\nCrop: ".$_POST["crop"]."\nCultivar: ".$_POST["cultivar"]."\nIrrigated?: ".$_POST["irrigated"]."\nIrrigation Schedule: ".$_POST["irrig"];
    echo "<h3>".$results."</h3>";
?>

<script>
    var destination = "https://google.com";
    window.location.replace(destination);
</script>
