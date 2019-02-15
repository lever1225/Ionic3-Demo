import { Injectable } from '@angular/core';
import { DataBaseProvider } from '../data-base/data-base';
import { CommonHelper } from '../../common/commonHelper';
/*
  Generated class for the AppSettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppSettingProvider {
    helper: CommonHelper;

    constructor(private dbSvr: DataBaseProvider) {
        this.helper = CommonHelper.getInstance();
        this.initDb();
    }

    /**初始化数据库表 */
    initDb() {
        if (this.dbSvr.Ins) {
            this.initTable();
        } else {
            this.dbSvr.openDB().then(() => {
                this.initTable();
            });
        }
    }

    private tbName = 'T_AppCfg';
    /**初始化用户信息表 */
    initTable() {
        let sql = 'CREATE TABLE IF NOT EXISTS T_AppCfg ( AppCfgId integer primary key ,CfgValue text NOT NULL ,CfgKey text ,UserId integer  NOT NULL, UserName text NOT NULL, LoginName text NOT NULl, ImgPath text, PatternPwd text, CTime text , LoginTime text, DownTimeSpan text, ExecuteCyc text) ';
        return this.dbSvr.execute(this.dbSvr.Ins, sql, []);
    }

    /**
     * 获取用户信息
     * @param userid 用户Id,主键
     */
    public getByUserId(userid: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let sql = `select * from ${this.tbName} where UserId=?`;
            this.dbSvr.execute(this.dbSvr.Ins, sql, [userid]).then((res) => {
                let rdata = this.helper.copyRows(res);
                resolve(rdata);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * 更新用户头像
     * @param userid 用户ID
     * @param imageData 图片base64字符串
     */
    public updateUsrImg(userid: number, imageData: String): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let sql = "update T_AppCfg set ImgPath=? where UserId=?";
            this.dbSvr.execute(this.dbSvr.Ins, sql, [imageData, userid]).then((res) => {
                resolve(true);
            }, (err) => {
                reject(err);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
