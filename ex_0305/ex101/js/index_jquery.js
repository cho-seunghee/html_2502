var d = document;
var msg = '';

fnS1 = () => {
    $(document).ready(function() {
        $(".s1 p").click(function() {
            $(this).hide();
        });
    });

    // $(function(){
    //     $(".s1 p").click(function() {
    //         $(this).hide();
    //     });
    // });
}

fnS2 = () => {
    $(function(){
        $(".s2 p").dblclick(function() {
            $(this).hide();
        });
    });
}