layui.use(['flow','jquery'],function(){
    var $ = layui.jquery;
    var flow = layui.flow;

    $(document).ready(function(){
        pageInit();
        getImages();
    });

    function pageInit(){
        flow.lazyimg();
    };

    function getImages() {
        $.ajax({
            url: '../mock/2019.json',
            type: 'GET',
            dataType: 'JSON',
            success: function(data){
                console.log(data);
            }
        });
    }

});

