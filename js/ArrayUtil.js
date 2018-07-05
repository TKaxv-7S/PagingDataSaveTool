/*
* @Author TKaxv_7S
*
*/
//当前页
var thisPage;
//提交对象
var postData = {};
//当前页是否存在
var isPage;
//生成条件
var selArgs = {};

var setArgs = function (ALL, LID, LTYP, OSCR, OTYP) {
    selArgs.ALL = ALL;
    selArgs.LID = LID;
    selArgs.LTYP = LTYP;
    selArgs.OSCR = OSCR;
    selArgs.OTYP = OTYP;
    //全选
    $(selArgs.ALL).click(function () {
        $(selArgs.LID).find("input[type='checkbox']").prop("checked", $(this).is(":checked"));
    });
};

//生成JSON对象
var setData = function () {
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
    return postData;
};

//获得JSON对象数组
var getData = function () {
    setData();
    var List = [];
    for (var thePage in postData) {
        $(postData[thePage]).each(function (i, dom) {
            dom != null && List.push(dom);
        })
    }
    return List;
};

//更新当前页
function savePage(savePage) {
    //记录当前页
    thisPage = savePage;
    //判断是否存在
    isPage = thisPage in postData;
    return isPage && postData[thisPage] || [];
};

//获取某页数据
function getPageData(Page) {
    //判断是否存在
    isPage = Page in postData;
    return isPage && postData[Page] || [];
};

//是否取消全选
function cancelAll(cx) {
    $(selArgs.ALL).prop("checked", !cx);
};

//重置
function Reset() {
    postData = {};
    // setData();
};

//全部重置
function refresh() {
    $(selArgs.ALL).prop("checked", false);
    $(selArgs.LID).find("input[type='checkbox']").prop("checked", false);
    Reset();
};