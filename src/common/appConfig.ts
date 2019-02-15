
/**
 * 用于定义App的全局参数
 */
export class AppConfig {

    /********** Singleton Mode **********/
    private static _instance: AppConfig;
    private constructor() { }
    /**获取单例模式实例*/
    public static getInstance(): AppConfig {
        if (!this._instance){
            this._instance= new AppConfig();
        }
        return this._instance;
    }

    /************* Params **************/
    private _isMobile: boolean;
    private _isAndroid: boolean;
    private _isIOS: boolean;
    private _appServiceUrl: string;//服务器地址配置
    private _strLoginName: string //当前登录名;
    private _iUserId: number;//当前登录的用户id
    private _strUserName: string;//用户姓名

    /*是否为移动设备*/
    public get isMobile(): boolean {
        return this._isMobile;
    }
    public setIsMobile(bIsMobile: boolean) {
        this._isMobile = bIsMobile;
    }

    /**是否为安卓设备 */
    public get isAndroid(): boolean {
        return this._isAndroid;
    }
    public setIsAndroid(bIsAndroid: boolean) {
        this._isAndroid = bIsAndroid;
    }

    /**是否为iOS设备 */
    public get isIOS(): boolean {
        return this._isIOS;
    }
    public setIsIOS(bIsIOS: boolean) {
        this._isIOS = bIsIOS;
    }

    /**App服务器访问地址 */
    public get appServiceUrl(): string {
        return this._appServiceUrl;
    }
    public setServiceUrl(strUrl: string) {
        this._appServiceUrl = strUrl;
    }

    /*获取当前登录用户的登录名 */
    public get LoginName(): string {
        return this._strLoginName;
    }
    public setLoginName(strLoginName: string) {
        this._strLoginName = strLoginName;
    }

    /**获取当前登录用户的用户姓名 */
    public get UserName(): string {
        return this._strUserName;
    }
    public setUserName(strUserName: string) {
        this._strUserName = strUserName;
    }

    /**登录用户的对应数据库表中的id */
    public get UserId(): number {
        return this._iUserId;
    }
    public setUserId(userid: number | string) {
        if (typeof userid === 'number') {
            this._iUserId = userid;
        }
        else {
            this._iUserId = parseInt(userid);
        }
    }
}