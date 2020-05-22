



module.exports = {

    /**
     *  自定义时间filter
     */
    dateFormat: function (format, date) {
        if (!date) return ''
        var formatDate = date.replace(getRegExp('-', 'g'), '/')
        var curFromat = format.split(' ');
        var year, month, day, hour, hour, minute, week, returnInfo = "";
        year = getDate(formatDate).getFullYear() + '年';
        month = getDate(formatDate).getMonth() + 1 + '月'
        day = getDate(formatDate).getDate() + '日'
        hour = getDate(formatDate).getHours()
        minute = getDate(formatDate).getMinutes()
        var curDay = getDate(formatDate).getDay();
        switch (curDay) {
            case 1:
                curDay = '周一'
                break;
            case 2:
                curDay = '周二'
                break;
            case 3:
                curDay = '周三'
                break;
            case 4:
                curDay = '周四'
                break;
            case 5:
                curDay = '周五'
                break;
            case 6:
                curDay = '周六'
                break;
            case 0:
                curDay = '周日'
                break;
        }
        week = curDay
        if (minute < 10) {
            minute = '0' + parseInt(minute)
        }
        if (hour < 10) {
            hour = '0' + parseInt(hour)
        }
        curFromat.forEach(function (item) {
            switch (item) {
                case "YY":
                    returnInfo += year;
                    break;
                case "MM":
                    returnInfo += month;
                    break;
                case "DD":
                    returnInfo += day;
                    break;
                case "HH":
                    returnInfo += hour;
                    break;
                case "mm":
                    returnInfo += minute;
                    break;
                case "week":
                    returnInfo += week;
                    break;
                case ":":
                    returnInfo += ":";
                    break;
                case "-":
                    returnInfo += "-";
                case "n":
                    returnInfo += " ";
                    break;
            }
        })
        return returnInfo
    },

    /** 
     * decode 解码
     */
    deCode: function (src) {
        return decodeURIComponent(src)
    },

    /** 
     * parseInt整型转换
     */
    parseInt: function (num) {
        return parseInt(num)
    },

    /** 
     * string 序列化
     */
    jsonStringify: function (str) {
        return JSON.stringify(str)
    },

    /**
     * 业务类型转文字
     */
    bizTypeFilter: function (bizType) {
        switch (bizType) {
            case "AIRPORT_PICK_UP":
                return "接机"
            case "TRAIN_PICK_UP":
                return "接站"
            case "AIRPORT_DROP_OFF":
                return "送机"
            case "TRAIN_DROP_OFF":
                return "送站"
            case "SELF_DRIVING":
                return "自驾租车"
            case "WITH_DRIVER_CHARTERD_CAR":
                return "带驾包车"
            case "INSTEAD_OF_DRIVING":
                return "代驾"
        }
    },

    /**
     * 数字保留小数位数
     */
    numberToFix: function (value, length) {
        return Number(value).toFixed(length)
    },

    /**
     * 业务类型是否为接送服务  
     */
    isTransfer: function (bizType) {
        switch (bizType) {
            case "AIRPORT_PICK_UP":
            case "AIRPORT_DROP_OFF":
            case "TRAIN_PICK_UP":
            case "TRAIN_DROP_OFF":
                return true
            default:
                return false
        }
    },

    /**
     * 业务类型是否为接送机
     */
    isAirport: function (bizType) {
        switch (bizType) {
            case "AIRPORT_PICK_UP":
            case "AIRPORT_DROP_OFF":
                return true
            default:
                return false
        }
    },

    /**
     * 业务类型是否为接送站
     */
    isTrain: function (bizType) {
        switch (bizType) {
            case "TRAIN_PICK_UP":
            case "TRAIN_DROP_OFF":
                return true
            default:
                return false
        }
    },
}