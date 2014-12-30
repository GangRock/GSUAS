/**
 * Created by jiuwei.stone on 2014/12/30.
 */
define(function (require) {
    return {
        setHeight: function (ele,jcount) {
            ele = ele || "#iframepage";
            jcount = jcount || 0
            var main = $(window.parent.document).find(ele);
            var getDocHeight = function(doc){
                doc = doc || document;
                var body = doc.body, html = doc.documentElement;
                var height = Math.max( body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight );
                return height;
            };
            main.height(getDocHeight()-jcount);
        }
    };
});