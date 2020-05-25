// components/pickerViewDate/pickerViewDate.js
const app = getApp();//获取应用实例
import moment from "moment";
Component({
    properties: {
        //picker open/close
        pickerShow: {
            type: Boolean,
            observer (val) {
                this.triggerEvent('visibleFlag',val)
                if (val) {
                    this.initOn()
                }
            }
        },
        bizTypeFlag:{
            type: Boolean,
            value: true
        },
        /* 时间显示类型 date dateTime */
        dateType: {
            type: String,
            value: 'dateTime'
        },
        /* start / end */
        pickerType: {
            type: String,
            value: "onTime"
        },
        onTitle: {
            type: String,
            value: "开始时间"
        },
        endTitle: {
            type: String,
            value: "结束时间"
        },
        /* 是否显示前后选择的时间天数 */
        showDay: {
            type: Boolean,
            value: false
        },
        /* 渲染的开始时间和结束时间 */
        minTime: {
            type: null,
            value: moment().format("YYYY-MM-DD HH:mm"),
            observers (val) {
                console.log('minTime',val)
                this.data.minTime = app.dateMinuteParse(this.data.minTime)
            }
        },
        maxTime: {
            type: null,
            value: moment().add(30, 'day').format("YYYY-MM-DD HH:mm"),
            observers (val) {
                console.log('maxTime',val)
                this.data.maxTime = app.dateMinuteParse(this.data.maxTime)
            }
        },
        //当前选择的时间
        onCurrent: {
            type: null,
            observers () {
                this.data.onCurrent = app.dateMinuteParse(this.data.onCurrent)
            }
        },
        endCurrent: {
            type: null,
            observers () {
                this.data.endCurrent = app.dateMinuteParse(this.data.endCurrent)
            }
        },
    },
    data: {
        startValue: [0, 0, 0],
        endValue: [0, 0, 0],
        startDate: '', //当前选择的开始时间
        endDate: '',// 当前选择的结束时间
        /* 是否结束滚动 */
        pickerSlide: false,
        /* 开始/结束时间 */
        pickerType: "",
        /* 选择总天数 */
        pickerDay: "",
        /* picker 渲染数据 */
        onMains: [],
        onHours: [],
        onMinutes: [],

        endMains: [],
        endHours: [],
        endMinutes: [],

        /* 计算天数计时器 */
        timer: null
    },
    methods: {

        /**
         * 确定
         * method submit
         */
        submit () {
            /* 滚动结束才进行回调赋值 */
            let obj;
            if (this.data.pickerSlide) return
            if (app.currentType) {
                obj = {
                    startDate: this.data.startDate,
                    endDate: this.data.endDate,
                }
            } else {
                obj = {
                    date: this.data.startDate
                }
            }
            this.triggerEvent('pickerSure', {
                ...obj,
                type: this.data.pickerType,
            })
            this.setData({ pickerShow: false })
        },

        /**
         * 初始化开始时间
         * method initOn
         */
        initOn () {
            //没有默认选择时间时 为当前最小渲染时间
            if (!this.data.onCurrent) {
                this.data.onCurrent = this.data.minTime
            }
            //最大渲染时间要预留出结束时间的可选范围
            if (this.data.bizTypeFlag) {
                if (app.currentType == 'WITH_DRIVER_CHARTERD_CAR' && app.WITH_DRIVER_CHARTERD_CAR.halfDay == 'halfDay') {
                    this.data.maxTime = moment(this.data.maxTime).subtract(4, 'hour').format('YYYY-MM-DD HH:mm')
                } else {
                    this.data.maxTime = moment(this.data.maxTime).subtract(app[app.currentType].intervalTime, 'hour').format('YYYY-MM-DD HH:mm')
                }
            }
            //时间计算方法options
            const computeOptions = {
                type: 'on',
                minTime: this.data.minTime,
                maxTime: this.data.maxTime,
                currentTime: this.data.onCurrent
            }
            /* 主要时间 */
            let onMains = this.computeDateMain(computeOptions);
            let mainIndex = onMains.indexOf(moment(this.data.onCurrent).format('YYYY-MM-DD'))
            /* 小时 */
            let onHours = this.computeDateHour(computeOptions);
            let hourIndex = onHours.indexOf(moment(this.data.onCurrent).format('HH'))
            /* 分钟 */
            let onMinutes = this.computeDateMinute(computeOptions);
            let minuteIndex = onMinutes.indexOf(moment(this.data.onCurrent).format('mm'))
            this.setData({
                onMains: onMains,
                onHours: onHours,
                onMinutes: onMinutes,
                startDate: this.data.onCurrent,
                endDate: this.data.endCurrent
            }, () => {
                this.setData({ startValue: [mainIndex, hourIndex, minuteIndex] })
                this.computedDayNum();
                this.initEnd();
            })
        },

        /**
         * 初始化结束时间
         * method initEnd
         */
        initEnd () {
            if (!this.data.endCurrent) return
            //时间计算方法options
            const computeOptions = {
                type: 'end',
                minTime: moment(this.data.startDate).add(app[app.currentType].intervalTime, 'hour').format("YYYY-MM-DD HH:mm"),
                maxTime: moment(this.data.minTime).add(app[app.currentType].endMaxDay, 'day').format("YYYY-MM-DD HH:mm"),
                currentTime: this.data.endDate
            }
            /* 主要时间 */
            let endMains = this.computeDateMain(computeOptions);
            let mainIndex = endMains.indexOf(moment(this.data.endDate).format('YYYY-MM-DD'))

            /* 小时 */
            let endHours = this.computeDateHour(computeOptions);
            let hourIndex = endHours.indexOf(moment(this.data.endDate).format('HH'))
            /* 分钟 */
            let endMinutes = this.computeDateMinute(computeOptions);
            let minuteIndex = endMinutes.indexOf(moment(this.data.endDate).format('mm'))
            this.setData({
                endMains: endMains,
                endHours: endHours,
                endMinutes: endMinutes,
                endDate: this.data.endDate,
            }, () => {
                this.setData({
                    endValue: [mainIndex, hourIndex, minuteIndex]
                })
            })
        },

        /**
         * 计算主要时间部分
         * method computeDateMian
         * param {Object} options 配置 {type,minTime,maxTime}
         * return {Array} 主要时间 
         */
        computeDateMain (options) {
            let mains = [];
            let today = 0;
            while (moment(moment(options.minTime).add(today, 'day').format('YYYY-MM-DD')).valueOf() <= moment(moment(options.maxTime).format('YYYY-MM-DD')).valueOf()) {
                mains.push(moment(options.minTime).add(today, 'day').format('YYYY-MM-DD'))
                ++today;
            }
            return mains
        },

        /**
         *计算小时
         * method computeDateHour
         * param {Object} options 配置 {type,minTime,maxTime,currentTime}
         * return {Array} 小时 
         */
        computeDateHour (options) {
            let hours = []
            if (options.type == 'on') {
                /* 当前选择时间等于最小渲染时间 */
                let curEqMinTime = moment(options.currentTime).format('YYYY-MM-DD') == moment(options.minTime).format('YYYY-MM-DD')
                /* 当前选择时间等于最大渲染时间 */
                let curEqMaxTime = moment(options.currentTime).format('YYYY-MM-DD') == moment(options.maxTime).format('YYYY-MM-DD')
                if (curEqMinTime) {
                    for (var i = parseInt(moment(options.minTime).format('HH')); i <= 23; i++) {
                        if (i < 10) {
                            hours.push('0' + parseInt(i))
                        } else {
                            hours.push(i.toString())
                        }
                    }
                } else {
                    if (curEqMaxTime) {
                        for (var i = 0; i <= parseInt(moment(options.maxTime).format("HH")); i++) {
                            if (i < 10) {
                                hours.push('0' + parseInt(i))
                            } else {
                                hours.push(i.toString())
                            }
                        }
                    } else {
                        for (var i = 0; i < 24; i++) {
                            if (i < 10) {
                                hours.push('0' + parseInt(i))
                            } else {
                                hours.push(i.toString())
                            }
                        }
                    }
                }
            } else {
                /* 当前选择时间等于最小渲染时间 */
                let curEqMinTime = moment(options.currentTime).format('YYYY-MM-DD') == moment(options.minTime).format('YYYY-MM-DD')
                /* 当前选择时间等于最大渲染时间 */
                let curEqMaxTime = moment(options.currentTime).format('YYYY-MM-DD') == moment(options.maxTime).format('YYYY-MM-DD')
                if (curEqMinTime) {
                    let curEndHour = 23;
                    if (moment(options.minTime).format('YYYY-MM-DD') == moment(options.maxTime).format('YYYY-MM-DD')) {
                        curEndHour = parseInt(moment(options.maxTime).format('HH'))
                    }
                    for (var i = parseInt(moment(options.minTime).format('HH')); i <= curEndHour; i++) {
                        if (i < 10) {
                            hours.push('0' + parseInt(i))
                        } else {
                            hours.push(i.toString())
                        }
                    }
                } else {
                    if (curEqMaxTime) {
                        for (var i = 0; i <= parseInt(moment(options.maxTime).format('HH')); i++) {
                            if (i < 10) {
                                hours.push('0' + parseInt(i))
                            } else {
                                hours.push(i.toString())
                            }
                        }
                    } else {
                        for (var i = 0; i <= 23; i++) {
                            if (i < 10) {
                                hours.push('0' + parseInt(i))
                            } else {
                                hours.push(i.toString())
                            }
                        }
                    }
                }
            }
            return hours
        },

        /**
         * 计算分钟
         * method computeDateMinute
         * param {Object} options 配置 {type,minTime,maxTime,currentTime}
         * return {Array} 分钟 
         */
        computeDateMinute (options) {
            let minutes = [], curDate;
            if (options.type == 'on') {
                /* 当前选择时间等于最小渲染时间 */
                let curEqMinTime = moment(options.currentTime).format('YYYY-MM-DD HH') == moment(options.minTime).format('YYYY-MM-DD HH')
                /* 当前选择时间等于最大渲染时间 */
                let curEqMaxTime = moment(options.currentTime).format('YYYY-MM-DD HH') == moment(options.maxTime).format('YYYY-MM-DD HH')
                if (curEqMinTime) {
                    for (var i = parseInt(moment(options.minTime).format('mm').slice(0, 1)); i <= 5; i++) {
                        minutes.push(parseInt(i) + '0')
                    }
                } else {
                    if (curEqMaxTime) {
                        for (var i = 0; i <= parseInt(moment(options.maxTime).format('mm').slice(0, 1)); i++) {
                            minutes.push(parseInt(i) + '0')
                        }
                    } else {
                        for (var i = 0; i <= 5; i++) {
                            minutes.push(parseInt(i) + '0')
                        }
                    }
                }
            } else {
                /* 当前选择时间等于最小渲染时间 */
                let curEqMinTime = moment(options.currentTime).format('YYYY-MM-DD HH') == moment(options.minTime).format('YYYY-MM-DD HH')
                /* 当前选择时间等于最大渲染时间 */
                let curEqMaxTime = moment(options.currentTime).format('YYYY-MM-DD HH') == moment(options.maxTime).format('YYYY-MM-DD HH')
                if (curEqMinTime) {
                    if (curEqMaxTime) {
                        for (var i = parseInt(moment(options.minTime).format('mm').slice(0, 1)); i <= parseInt(moment(options.maxTime).format('mm').slice(0, 1)); i++) {
                            minutes.push(parseInt(i) + '0')
                        }
                    } else {
                        for (var i = parseInt(moment(options.minTime).format('mm').slice(0, 1)); i <= 5; i++) {
                            minutes.push(parseInt(i) + '0')
                        }
                    }
                } else {
                    if (curEqMaxTime) {
                        for (var i = 0; i <= parseInt(moment(options.maxTime).format('mm').slice(0, 1)); i++) {
                            minutes.push(parseInt(i) + '0')
                        }
                    } else {
                        for (var i = 0; i <= 5; i++) {
                            minutes.push(parseInt(i) + '0')
                        }
                    }
                }
            }
            return minutes
        },

        /**
         * picker change 事件
         * method bindChange
         * param {Object} e
         */
        bindChange (e) {
            let curType = e.currentTarget.dataset.type;
            let curValue = e.detail.value;
            curValue = curValue.map(item => {
                if (item == -1) {
                    return item = 0;
                } else {
                    return item
                }
            })
            switch (curType) {
                case "onTime":
                    //时间计算方法options
                    const onComputeOptions = {
                        type: 'on',
                        minTime: this.data.minTime,
                        maxTime: this.data.maxTime,
                        currentTime: this.data.onMains[curValue[0]] + " " + this.data.onHours[curValue[1]] + ":" + this.data.onMinutes[curValue[2]]
                    }
                    /* 小时 */
                    let onHours = this.computeDateHour(onComputeOptions);
                    curValue[1] = onHours[curValue[1]] ? curValue[1] : 0;
                    /* 分钟 */
                    let onMinutes = this.computeDateMinute(onComputeOptions);
                    curValue[2] = onMinutes[curValue[2]] ? curValue[2] : 0;
                    /* * */
                    if (app.currentType) {
                        this.data.endDate = moment(this.data.onMains[curValue[0]] + " " + onHours[curValue[1]] + ":" + onMinutes[curValue[2]]).add(app[app.currentType].intervalTime, 'hour').format('YYYY-MM-DD HH:mm');
                    }
                    this.setData({
                        onHours: onHours,
                        onMinutes: onMinutes,
                        startValue: curValue,
                        startDate: this.data.onMains[curValue[0]] + " " + onHours[curValue[1]] + ":" + onMinutes[curValue[2]],
                    }, () => {
                        this.initEnd()
                    })
                    break;
                case "endTime":
                    if (!this.data.pickerSlide) return

                    //时间计算方法options
                    const endComputeOptions = {
                        type: 'end',
                        minTime: moment(this.data.startDate).add(app[app.currentType].intervalTime, 'hour').format("YYYY-MM-DD HH:mm"),
                        maxTime: moment(this.data.minTime).add(app[app.currentType].endMaxDay, 'day').format("YYYY-MM-DD HH:mm"),
                        currentTime: this.data.endMains[curValue[0]] + " " + this.data.endHours[curValue[1]] + ":" + this.data.endMinutes[curValue[2]]
                    }
                    /* 小时 */
                    let endHours = this.computeDateHour(endComputeOptions);
                    curValue[1] = endHours[curValue[1]] ? curValue[1] : 0;
                    /* 分钟 */
                    let endMinutes = this.computeDateMinute(endComputeOptions);
                    curValue[2] = endMinutes[curValue[2]] ? curValue[2] : 0;
                    /* * */
                    this.setData({
                        endHours: endHours,
                        endMinutes: endMinutes,
                        endValue: curValue,
                        endDate: this.data.endMains[curValue[0]] + " " + endHours[curValue[1]] + ":" + endMinutes[curValue[2]],
                    })
                    break;
            }
            this.computedDayNum()
        },

        /**
         * 计算时间总天数
         * method computedDayNum
         */
        computedDayNum () {
            if (!this.data.showDay) return
            clearTimeout(this.data.timer);
            let params = {
                bizType: app.currentType,
                startTime: this.data.startDate,
                endTime: this.data.endDate ? this.data.endDate : '',
            }
            this.data.timer = setTimeout(() => {
                app.$http.other.getUsedDay(params).then(res => {
                    this.setData({ pickerDay: res.dayName })
                })
            }, 500)
        },

        /**
         * 选择时间类型
         * method pickerDateTypeChoose
         * param {object} currentTarget 
         */
        pickerDateTypeChoose ({ currentTarget }) {
            if (this.data.pickerSlide) return
            this.setData({
                pickerType: currentTarget.dataset.pickertype,
            })
        },

        /**
         * 遮罩层
         * method overlay
         */
        overlay () {
            if (this.data.pickerSlide) return
            this.setData({
                pickerShow: false,
            })
        },

        /**
         * 触发滚动
         * method startSlide
         */
        startSlide () {
            this.data.pickerSlide = true
        },

        /**
         * 结束滚动
         * method endSlide
         */
        endSlide () {
            this.data.pickerSlide = false
        },
    }
})
