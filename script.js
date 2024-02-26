  
        function warningMessage(){
            alert('There some missing info that you need to fill-in!')
            $('button').prop('disabled', true );
        }
    $(document).ready(function(){
        $("#datepicker").datepicker();
        $('.btn').on('click', function(){
            if($('#first-name').val() == ""){
                warningMessage();
            }else if($('#last-name').val() == ""){
                warningMessage();
            }else if($('#email').val() == ""){
                warningMessage();
            }else if($('#Age').val() == ""){
                warningMessage();
            }else if($('#datepicker').val() == ""){
                warningMessage();
            }
            else{
                alert("Succesful Submit")
            }
        });
        $('#first-name').on('keyup', function(){
            var charCount = $(this).val().length;
            $('#first-name').text('Characters: ' + charCount);
            if($('#first-name').val() !== ""){
               $('button').prop('disabled', false );
            }
            else{
                alert("Succesful Submit")
            }
        });
        $('#last-name').on('keyup', function(){
            var charCount = $(this).val().length;
            $('#last-name').text('Characters: ' + charCount);
            if($('#last-name').val() !== ""){
               $('button').prop('disabled', false );
            }
            else{
                alert("Succesful Submit")
            }
        });

        $('#email').on('keyup', function(){
            var charCount = $(this).val().length;
            $('#email').text('Characters: ' + charCount);
            if($('#email').val() !== ""){
               $('button').prop('disabled', false );
            }
            else{
                alert("Succesful Submit")
            }
        });
    });