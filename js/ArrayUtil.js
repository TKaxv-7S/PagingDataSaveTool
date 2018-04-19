/*
* @Author TKaxv_7S
*/
//当前页
var thisPage;
//提交对象
var postData = {};
//当前页是否存在
var isPage;
//生成条件
var selArgs = {};

function setArgs(LID, LTYP, OSCR, OTYP) {
    selArgs.LID = LID;
    selArgs.LTYP = LTYP;
    selArgs.OSCR = OSCR;
    selArgs.OTYP = OTYP;
}

//生成JSON对象
function setData(selArgs) {
    //判断是否存在
    isPage = thisPage in postData;
    var List = MarkSaveList(selArgs);
    if (List == null) {
        if (isPage) {
            delete postData[thisPage];
        }
    } else {
        postData[thisPage] = List;
    }
}

//获得JSON对象数组
function getData() {
    var List = [];
    for (thePage in postData) {
        $(postData[thePage]).each(function (i, dom) {
            dom != null && List.push(dom);
        })
    }
    return List;
}

//重置
function Reset() {
    postData = {};
    setData(selArgs);
}

//是否需要全选
/*
function isChkAll(selector) {
    $(selector).each(function (i, dom) {
        if (!$(dom).is(":checked")) {
            return false;
        }
    });
    return true;
}
*/