import React from 'react';
import Employee from '../pages/employee';
import Button from '../component/Button';

export interface TableProps<T> {
    data: {
        header: { [key: string]: string };
        rows: T[];
    }
};

/**
 * 汎用テーブルコンポーネント
 * 
 * テーブルのデータは、ヘッダーとデータのオブジェクトを受け取り、テーブルを表示する。
 * @param props テーブルのデータ
 * @returns テーブル
 */
const Table = <T extends { [key: string]: any }>(props: TableProps<T>) => {
  return (
    <table className="list-table">
          <thead className="list-table-header">
            <tr>
                {Object.keys(props.data.header).map((key, index) => (
                    key === 'id' ? <th key={index} className="list-table-id">{props.data.header[key]}</th> :
                    key === 'operation' ? <th key={index} className="list-table-operation">{props.data.header[key]}</th> :
                    <th key={index} className="list-table-data">{props.data.header[key]}</th>
                ))}
            </tr>
          </thead>
          <tbody className="list-table-body">
            {props.data.rows.map((row) => (
            <tr>
                {Object.keys(row).map((key, index) => (
                    key === 'id' ?
                    <td key={index} className="list-table-id">{(row as any)[key]}</td> :
                    <td key={index} className="list-table-data">{(row as any)[key]}</td>
                ))}
              <td className="list-table-operation">
                <Button className="thirdry" label="編集" />
                <Button className="thirdry" label="削除" />
              </td>
            </tr>
            ))}
        </tbody>
    </table>
  );
};

export default Table;