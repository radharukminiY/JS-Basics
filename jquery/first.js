<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <style>
            #main{
                height:300px;
                width: 300px;
                background: teal;
            }
        </style>
        <script>
            $(document).ready(() => {
                $('#color').click(() => {
                    $('#one').css('color','tomato')
                })
                $('#hide').click(() => {
                    $('#main').hide(5000)
                })
                $('#show').click(() => {
                    $('#main').show(4000)
                })
            })
        </script>
    </head>
    <body>
        <h1 id="one">This is from Jquery</h1>
        <button id="color">Color</button>
        <button id="hide">Hide</button>
        <button id="show">Show</button>
        <div id="main"></div>
    </body>
</html>
