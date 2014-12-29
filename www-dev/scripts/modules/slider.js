/**
 * Created by shijiuwei on 2014/12/27.
 */
define(function (require) {
    require("jquery");
    return {
        slider: function () {
            var bn_alp,// 定义动画变量
                Time = 3000,// 自动播放间隔时间 毫秒
                num = 1000,// 切换图片间隔的时间 毫秒
                page = 0,// 定义变量
                $boxli = $(".bn-alp .box li"),
                len = $boxli.length;// 获取图片的数量
            $boxli.each(function () {
                $(this).css("opacity", 0);
                $(this).css("background-image", "url(" + $(this).find('img.bg').attr('src') + ")");
                $(".bn-alp .i").append('<i></i>');
            });   // 设置全部的图片透明度为0
            $(".bn-alp .box li:first").css("opacity", 1); // 设置默认第一张图片的透明度为1
            $(".bn-alp .i i").eq(0).addClass("on");
            function fun(){// 封装
                $(".bn-alp .i i").eq(page).addClass("on").siblings('i').removeClass("on");     // 切换小点
                $(".bn-alp .box li").eq(page).addClass("on").animate({"opacity": 1}, num).siblings('li').removeClass("on").animate({"opacity": 0}, num);// 切换图片
            }
            function run() {// 封装
                if (!$(".bn-alp .box li").is(":animated"))// 判断li是否在动画
                {
                    if (page == len - 1)// 当图片切换到了最后一张的时候
                    {
                        page = 0;  // 把page设置成0 又重新开始播放动画
                        fun();
                    } else {// 继续执行下一张
                        page++;
                        fun();
                    }
                }
            }
            $(".bn-alp .i i").click(function () {// 点击小点
                clearInterval(bn_alp);//鼠标点击下面的点就清除动画开始新的动画。
                //if( !$( ".bn-alp .box li" ).is( ":animated" ) )// 判断li是否在动画
                //{
                var index = $(".bn-alp .i i").index(this);// 获取点击小点的位置
                page = index;// 同步于page
                fun();
                //}
            });
            $(".bn-alp").hover(function () {// 鼠标放上去图片的时候清除动画
                clearInterval(bn_alp);
            }, function () {// 鼠标移开图片的时候又开始执行动画
                bn_alp = setInterval(run, Time);
            }).trigger("mouseleave");
        }
    }
});