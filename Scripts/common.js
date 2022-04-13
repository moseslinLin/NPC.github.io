String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] == undefined) {
                    return "";
                }
                else {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    }
    else {
        return this;
    }
}


String.prototype.toFloat = function () {
    var result = this;
    while (result.indexOf(",") >= 0)
    {
        result = result.replace(",", "");
    }
    if (result.indexOf("(") >= 0 && result.indexOf(")") >= 0) {
        result = "-" + result.replace("(", "").replace(")", "");
    }

    return parseFloat(result);
}

Array.prototype.add = function (arg) {
    this[this.length] = arg;
}

Array.prototype.add = function (key, arg) {
    this[key] = arg;
}

Array.prototype.has = function (key) {
    for (var _key in this) {
        if (_key == key && this[_key] != null) return true;
    }
    return false;
}

Array.prototype.remove = function (key) {
    for (var _key in this) {
        if (_key == key) {
            this[_key] = null;
        }
    }
}

Number.prototype.toCurrency = function () {
    var num = this;
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
        num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}

//Number.prototype.toString = function (n) {
//    var s = this;
//    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
//    var l = s.split(".")[0].split("").reverse(),
//    r = s.split(".")[1];
//    t = "";
//    for (i = 0; i < l.length; i++) {
//        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
//    }
//    return t.split("").reverse().join("") + "." + r;
//}

function shake(ele, cls, times) {
    var i = 0, t = false, o = ele.attr("class") + " ", c = "", times = times || 2;
    if (t) return;
    t = setInterval(function () {
        i++;
        c = i % 2 ? o + cls : o;
        ele.attr("class", c);
        if (i == 2 * times) {
            clearInterval(t);
            ele.removeClass(cls);
        }
    }, 200);
};

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}