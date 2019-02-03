
window.onload = init;

function init() {

    $(document).ready(function () {
        var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
        $(function () {
            $.backstretch(['assets/image1.jpg', 'assets/image2.jpg', 'assets/image3.jpg'], {duration:3500, fade:750});
        });
    });

}


