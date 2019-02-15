import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { AppConfig } from '../../common/appConfig';
import { dbName } from '../../common/constants';

/*
  Generated class for the DataBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataBaseProvider {
  public Ins: any;
  private appCfg: AppConfig;

  constructor(private sqlite: SQLite) {
    this.sqlite = new SQLite();
    this.appCfg = AppConfig.getInstance();
    // if(!this.Ins) this.openDB();
  }

  /**
   * 创建/打开数据库
   * if is run on a mobile device, then create a sqlite object, otherwise, create a websql object.
   */
  openDB(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let isMobile = this.appCfg.isMobile;
      if (!isMobile) {
        this.Ins = (<any>window).openDatabase(dbName, '1.0', 'my first database', 1 * 1024 * 1024);
        console.log('db has opened');
        resolve(this.Ins);
      }
      else {
        this.sqlite.create({ name: dbName, location: 'default' }).then((db: SQLiteObject) => {
          this.Ins = db;
          console.log('mobile db has opened');
          resolve(this.Ins);
        }, (err) => { reject(err); });
      }
    });
  }

  /**
   * 删除数据库
   * @param dbname 数据库名称
   */
  deleteDB(dbname: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.appCfg.isMobile) {
        this.sqlite.deleteDatabase({ name: dbname, location: 'default' }).then(() => {
          this.Ins = false;
          resolve('database has benn deleted.');
        }, (err) => {
          reject(err);
        });
      } else {
        resolve('ok');
      }
    });
  }


  /**
   * 执行单个sql,返回执行的结果
   * @param db Websqldb或者SqliteObject._objectInstance 对象
   * @param query 执行的sql
   * @param binding 传递的参数,array
   */
  execute(db: any, query: string, binding: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(query, binding, function (tx, result) {
          return resolve(result);
        }, function (transaction, error) {
          reject(error);
        });
      }, (terr) => {
        console.log(terr);
      });
    });
  }

  /**
   * 依次执行两条sql语句,返回最后的结果
   * @param db Websqldb或者SqliteObject._objectInstance 对象
   * @param query1 执行的sql1
   * @param query2 执行的sql2
   * @param binding1 传递的参数1,array
   * @param binding2 传递的参数2,array
   */
  nestedExecute(db: any, query1: string, query2: string, binding1: any, binding2: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
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
  }

  /**
   * 批量插入数据库
   * @param db 
   * @param query 
   * @param bindings 
   */
  insertCollection(db: any, query: string, bindings: Array<any>): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      var coll = bindings.slice(0); // clone collection 
      db.transaction((tx) => {
        (function insertOne() {
          var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
          try {
            tx.executeSql(query, record, function (tx, result) {
              if (coll.length === 0) {
                return resolve(result);
              } else {
                return insertOne();
              }
            }, function (transaction, error) {
              return reject(error);
            });
          } catch (exception) {
            return reject(exception);
          }
        })();
      });
    });
  }

  /**
   * 对数据表进行新增字段
   * @param tbName 
   * @param colName 
   * @param defaultValue 
   */
  addColumn(tbName: string, colName: string, defaultValue?: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.Ins) {
        this.Ins.transaction(function (tx) {
          let sql = `select * from sqlite_master where name = ? and sql like ?`;
          tx.executeSql(sql, [tbName, '%' + colName + '%'], function (tx, res) {
            if (res.rows.length == 0) {
              let insSql = `alter table ${tbName} add column ${colName} text `;
              if (defaultValue) {
                insSql += ` default ${defaultValue}`;
              }
              tx.executeSql(insSql, [], function (tx, res1) {
                resolve(res1);
              }, function (tx, err) {
                reject(err);
              });
            } else {
              resolve(0);
            }
          },
            function (tx, err) {
              reject(err);
            });
        })
      }
      resolve(0);
    });
  }


}
