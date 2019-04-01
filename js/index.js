layui.user(['flow','jquery'],function(){
    var $ = layui.jquery;
    var flow = layui.flow;

    $(document).ready(function(){
        pageInit();
    });

    function pageInit(){
        flow.layimg();
    };
});