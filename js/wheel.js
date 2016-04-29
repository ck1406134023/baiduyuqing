window.onload=function(){
    var istouch='ontouchstart' in window;
    if(istouch){
        var mousedown='touchstart';
        var mousemove='touchmove';
        var mouseup='touchend';
    }else{
        var mousedown='mousedown';
        var mousemove='mousemove';
        var mouseup='mouseup';
    }
    var box=document.querySelector('.box');
    var inner1=document.querySelector('.inner1');
    var ih=inner1.offsetHeight;
    var i=0;
    var ch=0;
    box.addEventListener(mousedown,down);
    function down(e){
        e.preventDefault();
        var stime=e.timeStamp;
        e=istouch?e.changedTouches[0]:e;
        var dx=e.clientY;
        var mx=0;
        var cha=0;
        document.addEventListener(mousemove,move);
        function move(e){
            e=istouch?e.changedTouches[0]:e;
            mx=e.clientY;
            cha=mx-dx;
            box.style.transform="translateY("+(ch+cha)+"px)";
        }
        document.addEventListener(mouseup,up);
        function up(e){
            var etime=e.timeStamp;
            var lent=etime-stime;
            if(cha<0){
                aa(1)
            }else{
                aa(-1)
            }
            function aa(q){
                //判断一下如果位移超过一半或时间少于200ms的话就切换
                if(Math.abs(cha)>ih/3||(lent<200&&Math.abs(cha)>30)){
                    i+=q;
                    //开头和结尾不进行切换
                    if(i<0){i=0}else if(i>3){i=3}
                    box.style.transition="transform 0.3s"
                    box.style.transform="translateY("+(-ih*i)+"px)";
                }else{
                    box.style.transition="transform 0.3s"
                    box.style.transform="translateY("+(-ih*i)+"px)";
                }
            }
            ch=-ih*i;
            document.removeEventListener(mouseup,up);
            document.removeEventListener(mousemove,move);
        };

    }
}