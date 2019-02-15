webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiHelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UiHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UiHelperProvider = /** @class */ (function () {
    function UiHelperProvider(loadingCtrl, alertCtrol, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrol = alertCtrol;
        this.toastCtrl = toastCtrl;
    }
    /**
      * loading提示 执行一个promise后关闭
      * @param promise
      * @param strTip 提示内容 default:数据加载中,请稍等...
      * @param onSucceedCallback
      * @param onFailedCallback
    */
    UiHelperProvider.prototype.loading = function (promise, strTip, onSucceedCallback, onFailedCallback) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: strTip ? strTip : "数据加载中,请稍等..."
        });
        loader.present();
        promise.then(function (msg) {
            if (msg)
                _this.alert(msg);
            setTimeout(function () {
                loader.dismiss();
                if (onSucceedCallback)
                    onSucceedCallback();
            }, 500);
        }).catch(function (error) {
            loader.setContent(error);
            setTimeout(function () {
                loader.dismiss();
                if (onFailedCallback)
                    onFailedCallback();
            }, 500);
        });
    };
    /**
     * 显示loading窗口并自动关闭
     * @param content 显示的文本内容
     * @param duration 加载时间,默认1s
     */
    UiHelperProvider.prototype.showLoading = function (content, duration, callback) {
        var load = this.loadingCtrl.create({
            content: content,
            duration: duration ? duration : 1000
        });
        load.present().then(function () {
            if (callback)
                callback();
        });
    };
    /**
     * 弹出提示窗口
     * @param title 标题
     * @param subTitle 副标题（可选）
     */
    UiHelperProvider.prototype.alert = function (title, subTitle) {
        var alert = this.alertCtrol.create({
            title: title,
            subTitle: subTitle ? subTitle : '',
            buttons: ['确定']
        });
        alert.present();
    };
    /**
     * 带回调函数的确认窗口
     * @param title 标题
     * @param subTitle 副标题
     * @param callback
     */
    UiHelperProvider.prototype.confirm = function (title, subTitle, callback) {
        var alert = this.alertCtrol.create({
            title: title,
            subTitle: subTitle ? subTitle : '',
            buttons: [{ text: '取消' }, {
                    text: '确定',
                    handler: function () {
                        callback();
                    }
                }]
        });
        alert.present();
    };
    /**
     * 展示toast通知
     * @param mes 提示消息
     * @param duration 持续时间,默认1500ms
     * @param position 显示位置,top,middle,bottom,默认为middle
     * @param dismissCallback 销毁后的回调函数
     */
    UiHelperProvider.prototype.showToast = function (mes, duration, position, dismissCallback) {
        var toast = this.toastCtrl.create({
            message: mes,
            duration: duration ? duration : 1500,
            position: position ? position : 'middle'
        });
        if (dismissCallback) {
            toast.onDidDismiss(function () {
                dismissCallback();
            });
        }
        toast.present();
    };
    /**
       * 简单的提示框
       * @param strTip 提示信息
       * @param iTime 提示显示时间 单位:秒,默认1.5秒
       * @param spinner 提示图标 默认没有
       */
    UiHelperProvider.prototype.simpleTip = function (strTip, iTime, spinner) {
        if (iTime === void 0) { iTime = 1.5; }
        if (spinner === void 0) { spinner = 'hide'; }
        var showTime = iTime * 1000;
        var loader = this.loadingCtrl.create({
            content: strTip ? strTip : "数据加载中,请稍等...",
            duration: showTime,
            spinner: spinner
        });
        loader.present();
    };
    UiHelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], UiHelperProvider);
    return UiHelperProvider;
}());

//# sourceMappingURL=ui-helper.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_appConfig__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DataBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataBaseProvider = /** @class */ (function () {
    function DataBaseProvider(sqlite) {
        this.sqlite = sqlite;
        this.sqlite = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
        this.appCfg = __WEBPACK_IMPORTED_MODULE_2__common_appConfig__["a" /* AppConfig */].getInstance();
        // if(!this.Ins) this.openDB();
    }
    /**
     * 创建/打开数据库
     * if is run on a mobile device, then create a sqlite object, otherwise, create a websql object.
     */
    DataBaseProvider.prototype.openDB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isMobile = _this.appCfg.isMobile;
            if (!isMobile) {
                _this.Ins = window.openDatabase(__WEBPACK_IMPORTED_MODULE_3__common_constants__["d" /* dbName */], '1.0', 'my first database', 1 * 1024 * 1024);
                console.log('db has opened');
                resolve(_this.Ins);
            }
            else {
                _this.sqlite.create({ name: __WEBPACK_IMPORTED_MODULE_3__common_constants__["d" /* dbName */], location: 'default' }).then(function (db) {
                    _this.Ins = db;
                    console.log('mobile db has opened');
                    resolve(_this.Ins);
                }, function (err) { reject(err); });
            }
        });
    };
    /**
     * 删除数据库
     * @param dbname 数据库名称
     */
    DataBaseProvider.prototype.deleteDB = function (dbname) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.appCfg.isMobile) {
                _this.sqlite.deleteDatabase({ name: dbname, location: 'default' }).then(function () {
                    _this.Ins = false;
                    resolve('database has benn deleted.');
                }, function (err) {
                    reject(err);
                });
            }
            else {
                resolve('ok');
            }
        });
    };
    /**
     * 执行单个sql,返回执行的结果
     * @param db Websqldb或者SqliteObject._objectInstance 对象
     * @param query 执行的sql
     * @param binding 传递的参数,array
     */
    DataBaseProvider.prototype.execute = function (db, query, binding) {
        return new Promise(function (resolve, reject) {
            db.transaction(function (tx) {
                tx.executeSql(query, binding, function (tx, result) {
                    return resolve(result);
                }, function (transaction, error) {
                    reject(error);
                });
            }, function (terr) {
                console.log(terr);
            });
        });
    };
    /**
     * 依次执行两条sql语句,返回最后的结果
     * @param db Websqldb或者SqliteObject._objectInstance 对象
     * @param query1 执行的sql1
     * @param query2 执行的sql2
     * @param binding1 传递的参数1,array
     * @param binding2 传递的参数2,array
     */
    DataBaseProvider.prototype.nestedExecute = function (db, query1, query2, binding1, binding2) {
        return new Promise(function (resolve, reject) {
            db.transaction(function (tx) {
                tx.executeSql(query1, binding1, function (tx, result) {
                    resolve(result);
                    tx.executeSql(query2, binding2, function (tx, res) {
                        return resolve(res);
                    });
                });
            }, function (transaction, error) {
                return reject(error);
            });
        });
    };
    /**
     * 批量插入数据库
     * @param db
     * @param query
     * @param bindings
     */
    DataBaseProvider.prototype.insertCollection = function (db, query, bindings) {
        return new Promise(function (resolve, reject) {
            var coll = bindings.slice(0); // clone collection 
            db.transaction(function (tx) {
                (function insertOne() {
                    var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
                    try {
                        tx.executeSql(query, record, function (tx, result) {
                            if (coll.length === 0) {
                                return resolve(result);
                            }
                            else {
                                return insertOne();
                            }
                        }, function (transaction, error) {
                            return reject(error);
                        });
                    }
                    catch (exception) {
                        return reject(exception);
                    }
                })();
            });
        });
    };
    /**
     * 对数据表进行新增字段
     * @param tbName
     * @param colName
     * @param defaultValue
     */
    DataBaseProvider.prototype.addColumn = function (tbName, colName, defaultValue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.Ins) {
                _this.Ins.transaction(function (tx) {
                    var sql = "select * from sqlite_master where name = ? and sql like ?";
                    tx.executeSql(sql, [tbName, '%' + colName + '%'], function (tx, res) {
                        if (res.rows.length == 0) {
                            var insSql = "alter table " + tbName + " add column " + colName + " text ";
                            if (defaultValue) {
                                insSql += " default " + defaultValue;
                            }
                            tx.executeSql(insSql, [], function (tx, res1) {
                                resolve(res1);
                            }, function (tx, err) {
                                reject(err);
                            });
                        }
                        else {
                            resolve(0);
                        }
                    }, function (tx, err) {
                        reject(err);
                    });
                });
            }
            resolve(0);
        });
    };
    DataBaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DataBaseProvider);
    return DataBaseProvider;
}());

//# sourceMappingURL=data-base.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/**
 * 用于定义App的全局参数
 */
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    /**获取单例模式实例*/
    AppConfig.getInstance = function () {
        if (!this._instance) {
            this._instance = new AppConfig();
        }
        return this._instance;
    };
    Object.defineProperty(AppConfig.prototype, "isMobile", {
        /*是否为移动设备*/
        get: function () {
            return this._isMobile;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.setIsMobile = function (bIsMobile) {
        this._isMobile = bIsMobile;
    };
    Object.defineProperty(AppConfig.prototype, "isAndroid", {
        /**是否为安卓设备 */
        get: function () {
            return this._isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.setIsAndroid = function (bIsAndroid) {
        this._isAndroid = bIsAndroid;
    };
    Object.defineProperty(AppConfig.prototype, "isIOS", {
        /**是否为iOS设备 */
        get: function () {
            return this._isIOS;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.setIsIOS = function (bIsIOS) {
        this._isIOS = bIsIOS;
    };
    Object.defineProperty(AppConfig.prototype, "appServiceUrl", {
        /**App服务器访问地址 */
        get: function () {
            return this._appServiceUrl;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.setServiceUrl = function (strUrl) {
        this._appServiceUrl = strUrl;
    };
    Object.defineProperty(AppConfig.prototype, "LoginName", {
        /*获取当前登录用户的登录名 */
        get: function () {
            return this._strLoginName;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.setLoginName = function (strLoginName) {
        this._strLoginName = strLoginName;
    };
    Object.defineProperty(AppConfig.prototype, "UserName", {
        /**获取当前登录用户的用户姓名 */
        get: function () {
            return this._strUserName;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.setUserName = function (strUserName) {
        this._strUserName = strUserName;
    };
    Object.defineProperty(AppConfig.prototype, "UserId", {
        /**登录用户的对应数据库表中的id */
        get: function () {
            return this._iUserId;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.setUserId = function (userid) {
        if (typeof userid === 'number') {
            this._iUserId = userid;
        }
        else {
            this._iUserId = parseInt(userid);
        }
    };
    return AppConfig;
}());

//# sourceMappingURL=appConfig.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(http) {
        this.http = http;
    }
    /**
       * get请求,获取返回内容
       * @param url 请求的url
       * @param params 请求传递的参数
       * @param timeout 超时设置,默认15000
       */
    HttpServiceProvider.prototype.get = function (url, params, timeout) {
        var _this = this;
        return this.http.get(url + '?' + this.toQueryString(params))
            .timeout(timeout ? timeout : 15000)
            .toPromise()
            .then(function (res) { return _this.handlerSuccess(res.json()); })
            .catch(function (error) { return _this.handlerFailure(error); });
    };
    /**
     * get 请求,获取xml内容
     * @param url
     * @param params
     * @param timeout 超时设置,默认15000
     */
    HttpServiceProvider.prototype.getXml = function (url, params, timeout) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(url + '?' + this.toQueryString(params), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .timeout(timeout ? timeout : 15000)
            .toPromise()
            .then(function (res) { return _this.handlerXml(res); })
            .catch(function (error) { return _this.handlerFailure(error); });
    };
    /**
     * post请求,获取返回的json字符串,返回值必须为标准的json格式,否则无法解析
     * @param url 请求url
     * @param params 请求传递的参数对象
     * @param timeout 超时设置,默认15000
     */
    HttpServiceProvider.prototype.postBody = function (url, params, timeout) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.post(url, params, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .timeout(timeout ? timeout : 15000)
            .toPromise()
            .then(function (res) { return _this.handlerSuccess(res.json()); })
            .catch(function (error) { return _this.handlerFailure(error); });
    };
    /**
     * post请求,获取返回的值的全部内容(必须是标准json字符串格式)
     * @param url 请求url
     * @param params 请求传递的参数对象
     * @param timeout 超时设置,默认15000
     */
    HttpServiceProvider.prototype.post = function (url, params, timeout) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, this.toQueryString(params), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .timeout(timeout ? timeout : 15000)
            .toPromise()
            .then(function (res) { return _this.handlerSuccess(res.json()); })
            .catch(function (error) { return _this.handlerFailure(error); });
    };
    /**
     * http请求成功处理
     * @param response 请求响应值
     */
    HttpServiceProvider.prototype.handlerSuccess = function (response) {
        return { success: true, msg: response.Msg, data: response };
    };
    /**
     * 处理xml,转换为json
     * @param response
     */
    HttpServiceProvider.prototype.handlerXml = function (response) {
        var rdata = new Object();
        __WEBPACK_IMPORTED_MODULE_4_xml2js__["parseString"](response._body, function (err, result) {
            rdata = result;
        });
        var result = new Array();
        result.push(rdata);
        return { success: true, msg: response.Msg, data: result };
    };
    /**
     * http请求失败处理
     * @param error 请求响应值
     */
    HttpServiceProvider.prototype.handlerFailure = function (error) {
        var msg = "请求超时";
        if (error.status == 0) {
            msg = "与服务器连接失败";
        }
        if (error.status == 400) {
            msg = "请求无效";
        }
        if (error.status == 404) {
            msg = "请求资源不存在";
        }
        if (error.status == 500) {
            msg = "服务器内部错误";
        }
        return { success: false, msg: msg, data: [] };
    };
    /**
     * 将参数对象转换为请求query字符串
     * @param obj 参数对象
     */
    HttpServiceProvider.prototype.toQueryString = function (obj) {
        var result = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                result = result.concat(queryValues);
            }
            else {
                result.push(this.toQueryPair(key, values));
            }
        }
        return result.join('&');
    };
    /**
     * 将键值对转换为字符串
     * @param key
     * @param value
     */
    HttpServiceProvider.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dbName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QUALITY_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_URL; });
/**
 * 定义静态常量
 */
var dbName = "lever.db";
var IMAGE_SIZE = 1024; //拍照/从相册选择照片压缩大小
var QUALITY_SIZE = 94; //图像压缩质量，范围为0 - 100
/*App更新地址*/
var UPDATE_URL = "http://192.168.1.6/PmsApp/update.xml";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mine_mine__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__mine_mine__["a" /* MinePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Demo" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="关于" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ui_helper_ui_helper__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_base_data_base__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpSvr, uiHelper, dbSvr) {
        this.navCtrl = navCtrl;
        this.httpSvr = httpSvr;
        this.uiHelper = uiHelper;
        this.dbSvr = dbSvr;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (!this.dbSvr.Ins) {
            this.dbSvr.openDB().then(function (res) {
                _this.uiHelper.alert("Database has been opened.1.");
            }, function (error) {
                _this.uiHelper.alert("Database initialization failed.", error);
            });
        }
        else {
            this.uiHelper.alert("Database has been opened.2.");
        }
    };
    HomePage.prototype.getXmlCont = function () {
        // this.httpSvr.getXml(UPDATE_URL, null).then((res) => {
        //   if (res.success) {
        //     debugger;
        //     let svrVer = res.data[0].android.version;
        //     this.uiHelper.alert("服务器最新版本号:" + svrVer);
        //   } else {
        //     this.uiHelper.alert(res.msg);
        //   }
        // });
        this.uiHelper.loading(this.getVerId(), '数据加载中,请稍等...');
    };
    HomePage.prototype.getVerId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpSvr.getXml(__WEBPACK_IMPORTED_MODULE_3__common_constants__["c" /* UPDATE_URL */], null).then(function (res) {
                if (res.success) {
                    var svrVer = res.data[0].android.version;
                    resolve("服务器最新版本号:" + svrVer);
                }
                else {
                    _this.uiHelper.alert(res.msg);
                    reject(res.msg);
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n  <button ion-button color="primary" (click)="getXmlCont()" >\n    获取服务器版本\n  </button>\n</ion-content>\n'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ui_helper_ui_helper__["a" /* UiHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_base_data_base__["a" /* DataBaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_appConfig__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_nfc__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_native_providers_native_providers__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ui_helper_ui_helper__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_setting_app_setting__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_demo_modal_demo__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MinePage = /** @class */ (function () {
    function MinePage(nfc, nativeSvr, uiHelper, appSet, act, navCtrl) {
        this.nfc = nfc;
        this.nativeSvr = nativeSvr;
        this.uiHelper = uiHelper;
        this.appSet = appSet;
        this.act = act;
        this.navCtrl = navCtrl;
        this.appCfg = __WEBPACK_IMPORTED_MODULE_2__common_appConfig__["a" /* AppConfig */].getInstance();
        this.user = new UserModel();
        this.user.ImgPath = './assets/imgs/user.png';
    }
    MinePage.prototype.ionViewWillEnter = function () {
        if (this.appCfg.UserId > 0) {
            this.getCurUser(this.appCfg.UserId);
        }
        else {
            this.clearCurUsr();
        }
    };
    /**重置当前登录用户 */
    MinePage.prototype.clearCurUsr = function () {
        this.user.UserId = 0;
        this.user.UserName = "未登录";
        this.user.ImgPath = './assets/imgs/user.png';
        this.user.LoginName = "";
        this.user.PatternPwd = "";
    };
    MinePage.prototype.getCurUser = function (userid) {
        var _this = this;
        this.appSet.getByUserId(userid).then(function (res) {
            if (res && res.length == 1) {
                _this.user.UserId = userid;
                _this.user.UserName = res[0].UserName;
                _this.user.ImgPath = res[0].ImgPath ? res[0].ImgPath : './assets/imgs/user.png';
                _this.user.LoginName = res[0].LoginName;
                _this.user.PatternPwd = res[0].PatternPwd;
            }
        });
    };
    /**修改头像 */
    MinePage.prototype.changeImg = function () {
        var _this = this;
        var acts = this.act.create({
            buttons: [
                {
                    text: '从相册选择',
                    handler: function () {
                        _this.getPicture(0);
                    }
                }, {
                    text: '拍照',
                    handler: function () {
                        _this.getPicture(1);
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        acts.present();
    };
    MinePage.prototype.getPicture = function (ptype) {
        var _this = this;
        var options = {
            targetWidth: 400,
            targetHeight: 400,
            quality: 100,
            allowEdit: true
        };
        if (ptype === 1) {
            this.nativeSvr.getPictureByCamera(options).subscribe(function (imageBase64) {
                _this.appSet.updateUsrImg(_this.appCfg.UserId, imageBase64);
                _this.user.ImgPath = imageBase64;
            }, function (err) {
                _this.uiHelper.simpleTip(err);
            });
        }
        else {
            this.nativeSvr.getPictureByPhotoLibrary(options).subscribe(function (imageBase64) {
                _this.appSet.updateUsrImg(_this.appCfg.UserId, imageBase64);
                _this.user.ImgPath = imageBase64;
            }, function (err) {
                _this.uiHelper.simpleTip(err);
            });
        }
    };
    /**检查更新 */
    MinePage.prototype.checkUpdate = function () {
        this.nativeSvr.checkUpdate();
    };
    MinePage.prototype.touchTag = function () {
        var _this = this;
        this.nfc.enabled().then(function (resolve) {
            _this.nativeSvr.nfcTouch().subscribe(function (data) {
                _this.uiHelper.alert(data);
            }, function (err) {
                _this.uiHelper.alert(err);
            });
        }).catch(function (error) {
            _this.uiHelper.alert(error);
        });
    };
    MinePage.prototype.showModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__modal_demo_modal_demo__["a" /* ModalDemoPage */]);
    };
    MinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\mine.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Demo\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list class="mine-header">\n\n        <button ion-item (click)="changeImg()">\n\n            <ion-avatar item-left>\n\n                <img [src]="user.ImgPath" />\n\n            </ion-avatar>\n\n            <div>拍照/相册\n\n            </div>\n\n        </button>\n\n    </ion-list>\n\n    <ion-list>\n\n        <button ion-item (click)="checkUpdate()" detail-none>\n\n            <ion-icon name="sync" item-left color="secondary"></ion-icon>\n\n            在线升级\n\n        </button>\n\n        <button ion-item (click)="touchTag()">\n\n            <ion-icon name="radio-outline" item-left color="primary"></ion-icon>\n\n            NFC测试\n\n        </button>\n\n    </ion-list>\n\n    <ion-list>\n\n        <button ion-item (click)="showModal()" >\n\n            自定义动画\n\n        </button>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\mine.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_nfc__["a" /* NFC */],
            __WEBPACK_IMPORTED_MODULE_4__providers_native_providers_native_providers__["a" /* NativeProvidersProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ui_helper_ui_helper__["a" /* UiHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_setting_app_setting__["a" /* AppSettingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], MinePage);
    return MinePage;
}());

var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());
//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeProvidersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_constants__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_appConfig__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_service_http_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_helper_ui_helper__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/*
  Generated class for the NativeProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NativeProvidersProvider = /** @class */ (function () {
    function NativeProvidersProvider(bcScan, camera, httpService, appver, alertCtrl, uiHelper, transfer, file, fileOpener, nfc) {
        this.bcScan = bcScan;
        this.camera = camera;
        this.httpService = httpService;
        this.appver = appver;
        this.alertCtrl = alertCtrl;
        this.uiHelper = uiHelper;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.nfc = nfc;
        this.appCfg = __WEBPACK_IMPORTED_MODULE_5__common_appConfig__["a" /* AppConfig */].getInstance();
        this.updateProgress = -1; //下载进度
    }
    /**条码/二维码扫描 */
    NativeProvidersProvider.prototype.barcodeScan = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.bcScan.scan({
                prompt: '请将矩形扫描框对准二维码/条码',
                showTorchButton: true,
                showFlipCameraButton: true,
                resultDisplayDuration: 0 //显示扫描文本的时间,0表示禁用,仅支持安卓
            }).then(function (res) {
                if (res.cancelled) {
                    return; //手动取消
                }
                observer.next(res.text);
            }).catch(function (err) {
                observer.error(err);
            });
        });
    };
    /**
     * 使用cordova-plugin-camera获取照片,返回base64字符串
     * @param options
     */
    NativeProvidersProvider.prototype.getPicture = function (options) {
        var _this = this;
        var opts = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: __WEBPACK_IMPORTED_MODULE_4__common_constants__["b" /* QUALITY_SIZE */],
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* IMAGE_SIZE */],
            targetHeight: __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* IMAGE_SIZE */],
            saveToPhotoAlbum: false,
            correctOrientation: true //设置相机拍摄的图像是否为正确的方向
        }, options);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.camera.getPicture(opts).then(function (imgData) {
                if (opts.destinationType === _this.camera.DestinationType.DATA_URL) {
                    observer.next('data:image/jpg;base64,' + imgData);
                }
                else {
                    observer.next(imgData);
                }
            }).catch(function (err) {
                if (err == 20) {
                    observer.error('没有权限,请在设置中开启相机权限');
                    return;
                }
                if (String(err).indexOf('cancel') > -1) {
                    return;
                }
                if (String(err).indexOf('No Image Selected') > -1) {
                    return;
                }
                observer.error(err);
            });
        });
    }; //end getPicture
    /**
     * 通过拍照获取图片
     * @param options
     */
    NativeProvidersProvider.prototype.getPictureByCamera = function (options) {
        if (options === void 0) { options = {}; }
        var opts = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL //DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(opts);
    };
    /**
     * 通过相册选图图片
     * @param options
     */
    NativeProvidersProvider.prototype.getPictureByPhotoLibrary = function (options) {
        if (options === void 0) { options = {}; }
        var opts = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL //DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(opts);
    };
    /********************* 在线升级App ************************* */
    /**检查更新 */
    NativeProvidersProvider.prototype.checkUpdate = function () {
        var _this = this;
        if (this.updateProgress > -1 && this.updateProgress < 100) {
            var alert_1 = this.alertCtrl.create({
                title: "\u4E0B\u8F7D\u8FDB\u5EA6:" + this.updateProgress + "%",
                buttons: [{ text: '后台下载' }]
            });
            alert_1.present();
            var interval_1 = setInterval(function () {
                alert_1.setTitle("\u4E0B\u8F7D\u8FDB\u5EA6:" + _this.updateProgress);
                if (_this.updateProgress == 100) {
                    clearInterval(interval_1);
                    alert_1 && alert_1.dismiss();
                }
            }, 500);
        }
        else {
            this.httpService.getXml(__WEBPACK_IMPORTED_MODULE_4__common_constants__["c" /* UPDATE_URL */], null).then(function (res) {
                if (res.success) {
                    var svrVer_1 = res.data[0].android.version;
                    var apkUrl_1 = res.data[0].android.url;
                    _this.getAppVerNum().subscribe(function (ver) {
                        if (ver < svrVer_1) {
                            _this.alertCtrl.create({
                                title: '升级',
                                subTitle: '发现新版本 ' + svrVer_1 + ',是否立即升级？',
                                buttons: [{ text: '忽略' },
                                    {
                                        text: '立即升级',
                                        handler: function () {
                                            _this.downloadApp(apkUrl_1);
                                        }
                                    }
                                ]
                            }).present();
                        }
                        else {
                            _this.uiHelper.alert("已更新到最新版本!");
                        }
                    }, function (err) {
                        _this.uiHelper.alert(err);
                    });
                }
            });
        }
    }; //checkupdate
    /**获取当前App的版本号 */
    NativeProvidersProvider.prototype.getAppVerNum = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observe) {
            _this.appver.getVersionNumber().then(function (res) {
                observe.next(res);
            }, function (err) {
                observe.error(err);
            });
        });
    };
    /**
     * 下载App,目前仅实现安卓设备
     * @param url
     */
    NativeProvidersProvider.prototype.downloadApp = function (url) {
        var _this = this;
        if (this.appCfg.isAndroid) {
            var backgroundProgress_1 = false; //是否后台下载
            var alert_2 = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: [{
                        text: '后台下载', handler: function () {
                            backgroundProgress_1 = true;
                        }
                    }]
            });
            alert_2.present();
            var fileTransfer = this.transfer.create();
            var apk = this.file.externalRootDirectory + 'download/android.apk'; //apk保存的目录
            fileTransfer.download(url, apk).then(function (entry) {
                alert_2 && alert_2.dismiss();
                _this.fileOpener.open(entry.toURL(), 'application/vnd.android.package-archive').then(function () {
                    console.log('success');
                }, function (err) {
                    _this.uiHelper.alert("应用安装失败", err);
                });
            }, function (err) {
                _this.updateProgress = -1;
                alert_2 && alert_2.dismiss();
                _this.uiHelper.alert("本地升级失败", err);
            }).catch(function (err) {
                alert_2 && alert_2.dismiss();
                _this.uiHelper.alert("本地升级失败", err);
            });
            var timer_1 = null;
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                _this.updateProgress = num;
                if (!timer_1) {
                    timer_1 = setTimeout(function () {
                        if (num === 100) {
                            alert_2.dismiss();
                        }
                        else {
                            if (!backgroundProgress_1)
                                alert_2.setTitle("\u4E0B\u8F7D\u8FDB\u5EA6\uFF1A" + num + "%");
                        }
                        clearTimeout(timer_1);
                        timer_1 = null;
                    }, 500);
                }
            });
        }
    }; //downloadApp
    NativeProvidersProvider.prototype.nfcTouch = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.nfc.addTagDiscoveredListener(function () {
                console.log('successfully attached ndef listener');
            }, function (err) {
                observer.error(err);
            }).subscribe(function (data) {
                if (data && data.tag && data.tag.id) {
                    var tagId = _this.nfc.bytesToHexString(data.tag.id);
                    observer.next(tagId);
                }
                else {
                    observer.error('NFC_NOT_DETECTED');
                }
            }, function (err) {
                observer.error(err);
            });
        });
    };
    NativeProvidersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_12__http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_13__ui_helper_ui_helper__["a" /* UiHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__["a" /* NFC */]])
    ], NativeProvidersProvider);
    return NativeProvidersProvider;
}());

//# sourceMappingURL=native-providers.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_base_data_base__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_commonHelper__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AppSettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppSettingProvider = /** @class */ (function () {
    function AppSettingProvider(dbSvr) {
        this.dbSvr = dbSvr;
        this.tbName = 'T_AppCfg';
        this.helper = __WEBPACK_IMPORTED_MODULE_2__common_commonHelper__["a" /* CommonHelper */].getInstance();
        this.initDb();
    }
    /**初始化数据库表 */
    AppSettingProvider.prototype.initDb = function () {
        var _this = this;
        if (this.dbSvr.Ins) {
            this.initTable();
        }
        else {
            this.dbSvr.openDB().then(function () {
                _this.initTable();
            });
        }
    };
    /**初始化用户信息表 */
    AppSettingProvider.prototype.initTable = function () {
        var sql = 'CREATE TABLE IF NOT EXISTS T_AppCfg ( AppCfgId integer primary key ,CfgValue text NOT NULL ,CfgKey text ,UserId integer  NOT NULL, UserName text NOT NULL, LoginName text NOT NULl, ImgPath text, PatternPwd text, CTime text , LoginTime text, DownTimeSpan text, ExecuteCyc text) ';
        return this.dbSvr.execute(this.dbSvr.Ins, sql, []);
    };
    /**
     * 获取用户信息
     * @param userid 用户Id,主键
     */
    AppSettingProvider.prototype.getByUserId = function (userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "select * from " + _this.tbName + " where UserId=?";
            _this.dbSvr.execute(_this.dbSvr.Ins, sql, [userid]).then(function (res) {
                var rdata = _this.helper.copyRows(res);
                resolve(rdata);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * 更新用户头像
     * @param userid 用户ID
     * @param imageData 图片base64字符串
     */
    AppSettingProvider.prototype.updateUsrImg = function (userid, imageData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "update T_AppCfg set ImgPath=? where UserId=?";
            _this.dbSvr.execute(_this.dbSvr.Ins, sql, [imageData, userid]).then(function (res) {
                resolve(true);
            }, function (err) {
                reject(err);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AppSettingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_base_data_base__["a" /* DataBaseProvider */]])
    ], AppSettingProvider);
    return AppSettingProvider;
}());

//# sourceMappingURL=app-setting.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_right_modal_right__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_scale_modal_scale__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalDemoPage = /** @class */ (function () {
    function ModalDemoPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ModalDemoPage.prototype.showModal1 = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_right_modal_right__["a" /* ModalRightPage */], {}, {
            enterAnimation: 'modal-from-right-enter',
            leaveAnimation: 'modal-from-right-leave'
        }).present();
    };
    ModalDemoPage.prototype.showModal2 = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_scale_modal_scale__["a" /* ModalScalePage */], {}, {
            enterAnimation: 'modal-scale-enter',
            leaveAnimation: 'modal-scale-leave'
        }).present();
    };
    ModalDemoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\modal-demo\modal-demo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            自定义动画\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <button ion-button block color="primary" (click)="showModal1()" >\n\n        自定义动画效果1\n\n    </button>\n\n\n\n    <button ion-button block color="secondary" (click)="showModal2()">\n\n        自定义动画效果2\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\modal-demo\modal-demo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ModalDemoPage);
    return ModalDemoPage;
}());

//# sourceMappingURL=modal-demo.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalRightPage = /** @class */ (function () {
    function ModalRightPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ModalRightPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalRightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\modal-right\modal-right.html"*/'<ion-content>\n\n    <ion-item-divider>\n\n        <ion-label>Modal 1</ion-label>\n\n    </ion-item-divider>\n\n    <button ion-button (click)="dismiss()">Dismiss</button>\n\n</ion-content>'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\modal-right\modal-right.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ModalRightPage);
    return ModalRightPage;
}());

//# sourceMappingURL=modal-right.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalScalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalScalePage = /** @class */ (function () {
    function ModalScalePage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ModalScalePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalScalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\modal-scale\modal-scale.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Modal 2\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <button ion-button (click)="dismiss()" >Dismiss</button>\n\n</ion-content>'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\mine\modal-scale\modal-scale.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ModalScalePage);
    return ModalScalePage;
}());

//# sourceMappingURL=modal-scale.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_nfc__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_native_providers_native_providers__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_data_base_data_base__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_http_service_http_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_ui_helper_ui_helper__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_mine_mine_module__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_app_setting_app_setting__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modal_transitions__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var AppModule = /** @class */ (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    /**自定义模态窗动画 */
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-scale-enter', __WEBPACK_IMPORTED_MODULE_27__modal_transitions__["c" /* ModalScaleEnter */]);
        this.config.setTransition('modal-scale-leave', __WEBPACK_IMPORTED_MODULE_27__modal_transitions__["d" /* ModalScaleLeave */]);
        this.config.setTransition('modal-from-right-enter', __WEBPACK_IMPORTED_MODULE_27__modal_transitions__["a" /* ModalFromRightEnter */]);
        this.config.setTransition('modal-from-right-leave', __WEBPACK_IMPORTED_MODULE_27__modal_transitions__["b" /* ModalFromRightLeave */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '返回',
                    mode: 'ios',
                    tabsHideOnSubPages: true
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_25__pages_mine_mine_module__["a" /* MineModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_nfc__["b" /* Ndef */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_21__providers_native_providers_native_providers__["a" /* NativeProvidersProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_22__providers_data_base_data_base__["a" /* DataBaseProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_ui_helper_ui_helper__["a" /* UiHelperProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_app_setting_app_setting__["a" /* AppSettingProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_base_data_base__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_appConfig__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbSvr, events, keyboard, ionicApp, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.dbSvr = dbSvr;
        this.events = events;
        this.keyboard = keyboard;
        this.ionicApp = ionicApp;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.backButtonPressed = false; //返回按钮是否点击
        this.appCfg = __WEBPACK_IMPORTED_MODULE_6__common_appConfig__["a" /* AppConfig */].getInstance();
        this.initializeApp();
    }
    /*初始化App*/
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        var isMobile = this.platform.is('mobile'); //是否为移动设备
        this.appCfg.setIsMobile(isMobile);
        this.appCfg.setIsAndroid(this.platform.is('android'));
        this.appCfg.setIsIOS(this.platform.is('ios'));
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.dbSvr.openDB();
            _this.registerBackButtonAction();
        });
    };
    // 修改android返回按钮事件,逐级退出路由,而不是直接退出App,API仅支持android系统
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        if (!this.platform.is('android')) {
            return;
        }
        this.platform.registerBackButtonAction(function () {
            _this.events.publish('android:backButtonAction');
            if (_this.keyboard.isVisible) {
                _this.keyboard.hide();
                return;
            }
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
            var activePortal = _this.ionicApp._modalPortal.getActive() || _this.ionicApp._overlayPortal.getActive();
            if (activePortal) {
                activePortal.dismiss();
                return;
            }
            var tabs = _this.nav.getActiveChildNav(); //获取tabs导航,this.nav是总导航,tabs是子导航
            var tab = tabs.getSelected(); //获取选中的tab
            var activeVC = tab.getActive(); //通过当前选中的tab获取ViewController
            var activeNav = activeVC.getNav(); //通过当前视图的ViewController获取的NavController
            return activeNav.canGoBack() ? activeNav.pop() : _this.showExit(); //this.showExit()
        }, 1);
    };
    /**双击返回按钮退出确认 */
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
            return;
        }
        else {
            var toast = this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
            this.backButtonPressed = true;
            setTimeout(function () { _this.backButtonPressed = false; }, 2000); //2秒内没有再次点击返回则将触发标志重置
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_base_data_base__["a" /* DataBaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonHelper; });
/**
 * 公共帮助类
 * 进行数据转换等
 */
var CommonHelper = /** @class */ (function () {
    function CommonHelper() {
    }
    CommonHelper.getInstance = function () {
        if (!this._instance) {
            this._instance = new CommonHelper();
        }
        return this._instance;
    };
    /**
    * 将日期根据格式输出
    * @param dSource 需要转换的日期
    * @param strFormat 输出字符格式 例如yyyy/MM/dd hh:mm:ss等等
    */
    CommonHelper.prototype.dateFormat = function (dSource, strFormat) {
        var o = {
            "M+": dSource.getMonth() + 1,
            "d+": dSource.getDate(),
            "h+": dSource.getHours(),
            "m+": dSource.getMinutes(),
            "s+": dSource.getSeconds(),
            "q+": Math.floor((dSource.getMonth() + 3) / 3),
            "S": dSource.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(strFormat))
            strFormat = strFormat.replace(RegExp.$1, (dSource.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(strFormat))
                strFormat = strFormat.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return strFormat;
    };
    /**
     * 对比两个日期的差值,返回毫秒
     * @param dDate1 日期1
     * @param dDate2 日期2
     */
    CommonHelper.prototype.dateDiff = function (dDate1, dDate2) {
        var vdiff = dDate1.getTime() - dDate2.getTime();
        return vdiff;
    };
    /**
     * 将字符串格式字符转为日期
     * @param strDateTime 字符串格式 yyyy-MM-dd hh:mm:ss
     */
    CommonHelper.prototype.toDatetime = function (strDateTime) {
        if (strDateTime.indexOf('-') > 0)
            return this.toDatetime2(strDateTime);
        else
            return this.toDatetime1(strDateTime);
    };
    /**
     * 判断是否是整数
     * @param str
     */
    CommonHelper.prototype.isInt = function (str) {
        var reg = /^(-|\+)?\d+$/;
        return reg.test(str);
    };
    /**
     * 判断是否小数
     * @param str
     */
    CommonHelper.prototype.isFloat = function (str) {
        if (this.isInt(str))
            return false;
        var reg = /^(-|\+)?\d+\.\d*$/;
        return reg.test(str);
    };
    /**
     * 将字符串格式字符转为日期
     * @param strDateTime 字符串格式 年-月-日
     * Internet Explorer does not like dashes in dates when converting,
     * so lets use a regular expression to get the year, month, and day
     */
    CommonHelper.prototype.toDatetime1 = function (strDateTime) {
        //字符串格式 年-月-日
        // Internet Explorer does not like dashes in dates when converting,
        // so lets use a regular expression to get the year, month, and day
        var DateRegex = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
        var DateRegexResult = strDateTime.match(DateRegex);
        var DateResult;
        // try creating a new date in a format that both Firefox and Internet Explorer understand
        try {
            DateResult = new Date(parseInt(DateRegexResult[1]), parseInt(DateRegexResult[2]) - 1, parseInt(DateRegexResult[3]), parseInt(DateRegexResult[4]), parseInt(DateRegexResult[5]), parseInt(DateRegexResult[6]));
        }
        // if there is an error, catch it and try to set the date result using a simple conversion
        catch (err) {
            DateResult = new Date();
        }
        return DateResult;
    };
    /*
     * 将字符串格式字符转为日期
     * @param strDateTime 字符串格式 年-月-日
     * Internet Explorer does not like dashes in dates when converting,
     * so lets use a regular expression to get the year, month, and day
     */
    CommonHelper.prototype.toDatetime2 = function (strDateTime) {
        var DateRegex = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        var DateRegexResult = strDateTime.match(DateRegex);
        var DateResult;
        // try creating a new date in a format that both Firefox and Internet Explorer understand
        try {
            DateResult = new Date(parseInt(DateRegexResult[1]), parseInt(DateRegexResult[2]) - 1, parseInt(DateRegexResult[3]), parseInt(DateRegexResult[4]), parseInt(DateRegexResult[5]), parseInt(DateRegexResult[6]));
        }
        // if there is an error, catch it and try to set the date result using a simple conversion
        catch (err) {
            DateResult = new Date();
        }
        return DateResult;
    };
    /**将数据查询结果转换为json对象数组 */
    CommonHelper.prototype.copyRows = function (res) {
        var list = [];
        if (res) {
            for (var idx = 0; idx < res.rows.length; idx++) {
                list.push(Object.assign({}, res.rows.item(idx)));
            }
        }
        return list;
    };
    /**将单条数据查询结果转换为json对象 */
    CommonHelper.prototype.copySingle = function (res) {
        var item = null;
        if (res.rows.length) {
            item = Object.assign([], res.rows.item(0));
        }
        return item;
    };
    /**
     * 比较两个对象的大小,用于数组排序
     * @param property
     * @param isDesc 是否降序排列
     */
    CommonHelper.prototype.compare = function (property, isDesc) {
        return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            if (isDesc) {
                return value2 - value1;
            }
            return value1 - value2;
        };
    };
    /**
     * 是否为空字符串
     * @param str
     */
    CommonHelper.prototype.isNullOrEmpty = function (str) {
        if (str != undefined && str != "" && str != null) {
            return false;
        }
        return true;
    };
    return CommonHelper;
}());

//# sourceMappingURL=commonHelper.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n\n    <button ion-item >\n      <ion-icon name="ions-contact"></ion-icon>\n      个人信息\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\WorkDocument\MyDocument\Mobile Develop\Ionic\MyApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mine__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_demo_modal_demo__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_right_modal_right__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_scale_modal_scale__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MineModule = /** @class */ (function () {
    function MineModule() {
    }
    MineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mine__["a" /* MinePage */], __WEBPACK_IMPORTED_MODULE_4__modal_right_modal_right__["a" /* ModalRightPage */], __WEBPACK_IMPORTED_MODULE_5__modal_scale_modal_scale__["a" /* ModalScalePage */], __WEBPACK_IMPORTED_MODULE_3__modal_demo_modal_demo__["a" /* ModalDemoPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__mine__["a" /* MinePage */], __WEBPACK_IMPORTED_MODULE_4__modal_right_modal_right__["a" /* ModalRightPage */], __WEBPACK_IMPORTED_MODULE_5__modal_scale_modal_scale__["a" /* ModalScalePage */], __WEBPACK_IMPORTED_MODULE_3__modal_demo_modal_demo__["a" /* ModalDemoPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */]]
        })
    ], MineModule);
    return MineModule;
}());

//# sourceMappingURL=mine.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalScaleEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalScaleLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFromRightEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalFromRightLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**********************自定义模态窗动画效果 start***********************************************/
//android 4.4下无法正常显示
//android 5.1下正常
/**重写modal展示动画(由中间向四周扩散) */
var ModalScaleEnter = /** @class */ (function (_super) {
    __extends(ModalScaleEnter, _super);
    function ModalScaleEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(0)', 'scale(1)');
        this.element(this.enteringView.pageRef())
            .duration(400)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

/**模态窗关闭动画效果 */
var ModalScaleLeave = /** @class */ (function (_super) {
    __extends(ModalScaleLeave, _super);
    function ModalScaleLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'scale(1)', 'scale(0)');
        this
            .element(this.leavingView.pageRef())
            .duration(100)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

/**重写模态窗展开动画样式(从右端滑出) */
var ModalFromRightEnter = /** @class */ (function (_super) {
    __extends(ModalFromRightEnter, _super);
    function ModalFromRightEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(20%)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'width': '80%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromRightEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

/**模态窗退出动画 */
var ModalFromRightLeave = /** @class */ (function (_super) {
    __extends(ModalFromRightLeave, _super);
    function ModalFromRightLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visiblity': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(20%)', 'translateX(100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromRightLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

/**********************************************end*************************************************/ 
//# sourceMappingURL=modal-transitions.js.map

/***/ })

},[403]);
//# sourceMappingURL=main.js.map