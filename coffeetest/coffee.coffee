<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js">
</script>
    <script
 src="http://jashkenas.github.com/coffee-script/extras/coffee-script.js">
 </script>
    <script type="text/coffeescript">
        gcd = (a,b) -> if (b==0) then a else gcd(b, a % b)
        $("#button").click ->
            a = $("#a").val()
            b = $("#b").val()
            $("#c").html gcd(a,b)
    </script>
</head>
<body>
    A: <input type="text" id="a"/>
    B: <input type="text" id="b"/>
    <input type="button" value="Calculate GCD" id="button"/>
    C: <span id="c"/>
</body>
</html>
