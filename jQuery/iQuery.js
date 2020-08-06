function addEvent(elem, type, handler){
    // 能力检测
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    }else if(elem.attachEvent){
        // attachEvent: IE中的事件绑定函数，但是它有如下问题：
        // 1. 事件绑定的顺序反过来了
        // 2. this绑丢了（this指向出了问题），使用call、apply解决
        elem.attachEvent('on'+type, handler);
    }else{
        elem['on'+type] = handler;
    }
}

function getByClassName(className, context, tagName){
    context = context || document;
    //检测当前浏览器的版本
    if(    document.getElementsByClassName  ){
        return context.getElementsByClassName(className);
    }else{
        var result = [];
        tagName = tagName || "*";
        var arr = context.getElementsByTagName(tagName);
        for(var i=0; i<arr.length; i++){
            // "aa bb" == "aa"
            // 此处最好的处理方式是引用正则表达式
            if(arr[i].className.indexOf(className) != -1){
                result.push(arr[i]);
            }
        }
        return result;
    }
}

function getStyle(elem, propName){
    if(elem.currentStyle){//IE
        return elem.currentStyle[propName];
    }else{//标准浏览器
        return window.getComputedStyle(elem, false)[propName];
    }
}


function $(selector, context){
    // 处理context上下文，默认是document
    context = context || document;
    var result = []; //将所有selector选中的元素存放该数组
    switch(typeof selector){
        case "function": // "function" => 作为文档就绪函数
            // window.addEventListener('load', selector, false);
            addEvent(window, 'load', selector);
            break;
        case "string":// "string" => 作为选择器
            switch(selector.charAt(0)){
                case '#': //id选择器
                    result.push(document.getElementById(selector.substr(1)));
                    break;
                case '.': //class选择器
                    result = getByClassName(selector.substr(1), context);
                    break;
                default: //标签选择器
                    result = context.getElementsByTagName(selector);
            }
            break;
        default: // "object"
            result.push(selector);
    }

    return {
        click: function(handler){
            for(var i=0; i<result.length; i++){
                addEvent(result[i], 'click', handler);
            }
            return this;
        },
        mouseover: function(handler){
            for(var i=0; i<result.length; i++){
                addEvent(result[i], 'mouseover', handler);
            }
            return this;
        },
        mouseout: function(handler){
            for(var i=0; i<result.length; i++){
                addEvent(result[i], 'mouseout', handler);
            }
            return this;
        },
        css: function(propName, propVal){
            if(propVal){
                for(var i=0; i<result.length; i++){
                    result[i].style[propName] = propVal;
                }
                return this;
            }else{
                // return result[0].style[propName];
                return getStyle(result[0], propName);
            }
        }
    };
}