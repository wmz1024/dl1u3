function GetQueryString(api) {
    var reg = new RegExp("(^|&)" + api + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;}
    var sname = GetQueryString("i");
    if (sname != null) {
        var sname_ = decodeURIComponent(sname);
    }
    function GetQueryString(api2) {
        var reg = new RegExp("(^|&)" + api2 + "=([^&]*)(&|$)");
        var r = decodeURI(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]);
        return null;}
        var snam = GetQueryString("d");
        if (snam != null) {
            var snam_ = decodeURIComponent(snam);
        }
        
if (sname=="audio"){
    document.write("<div class='center-in-center'><audio src="+snam+" controls='controls' >您的浏览器不支持 audio 标签。</audio></div>")
}
else if (sname=="document"){
    document.write("<iframe name='show' id='show' width='500' height=500' src="+snam+" />")
}
else if (sname=="video"){
    document.write("<div class='center-in-center'><video src="+snam+" controls='controls'>your browser does not support the video tag</video></div>")
}
else{
    document.write("<h1>没有参数</h1>")
}
