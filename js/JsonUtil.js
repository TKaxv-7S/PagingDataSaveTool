/*
@Author TKaxv_7S
生成JSON对象
OID:需要生成JSON对象所在的DOM或ID
OTYP:查找指定的DOM类型,数据以键值对存入JSON对象.例:'input','input,textarea'等
*/
function MarkJsonObj(OID, OTYP) {
    var JObj = {};
    $(OID).find(OTYP).each(function (i, dom) {
        JObj[$(dom).attr('name')] = $(dom).val();
    });
    return JObj;
}

/*
生成包含JSON对象的数组
LID:需要生成JSON数组所在的DOM或ID
LTYP:遍历指定的DOM类型,一般是很多重复的元素.例:'tr','td'等
OSCR:筛选对象的DOM判断条件,存在则生成JSON对象
OTYP:查找指定的DOM类型,数据以键值对存入JSON对象.例:'input','input,textarea'等
*/
function MarkJsonList(LID, LTYP, OSCR, OTYP) {
    var JList = [];
    $(LID).children(LTYP).each(function (i, dom) {
        if ($(dom).find(OSCR).length > 0) {
            JList.push(MarkJsonObj(dom, OTYP));
        }
    });
    return JList;
}

function MarkSaveList(selArgs) {
    var JList = [];
    var x = false;
    $(selArgs.LID).children(selArgs.LTYP).each(function (i, dom) {
        if ($(dom).find(selArgs.OSCR).length > 0) {
            JList.push(MarkJsonObj(dom, selArgs.OTYP));
            x = true;
        } else {
            JList.push(null);
        }
    });
    return x ? JList : null;
}