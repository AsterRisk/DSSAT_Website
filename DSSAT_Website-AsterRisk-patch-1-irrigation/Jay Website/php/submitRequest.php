<?php
    $results = "Parish:".$_POST["parish"]."Coordinates:".$_POST["coordinates"]."Crop:".$_POST["crop"]."Cultivar:".$_POST["cultivar"];
    echo "<h3>".$results."</h3>";
?>

<script>
    var destination = "https://google.com";
    window.location.replace(destination);
</script>