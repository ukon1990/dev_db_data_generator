/**
 * This code is based off michalbe's sql-create-table-to-json.
 * GitHub: https://github.com/michalbe/sql-create-table-to-json/blob/master/index.js
 * Datatypes from: https://www.tutorialspoint.com/mysql/mysql-data-types.htm
 */
export class CreateToJson {
    static readonly getColumnName = /`(.*)`/;
    static readonly validDataTypes: string[] = [
        // Numbers
        'TINYINT', 'SMALLINT', 'MEDIUMINT', 'BIGINT', 'INT', 'FLOAT', 'DOUBLE', 'DECIMAL',
        // Time
        'DATE', 'DATETIME', 'TIMESTAMP', 'TIME', 'YEAR',
        // Strings
        'VARCHAR', 'CHAR', 'BLOB', 'TINYBLOB', 'LONGBLOB', 'TEXT', 'TINYTEXT', 'LONGTEXT', 'ENUM'
    ].sort( (a, b) => a.length > b.length ? 1 : -1);

    public static convert(data: string): any {
        const output = { schema: '', tables: []};
        data = this.removeComments(data);
        const chunks = data.split('\n\n');
        chunks.forEach((chunk) => {
            const tableString = this.match(chunk) ? this.match(chunk)[1] : '';
            if (tableString) {
                const lines = tableString.split('\n');
                const table = {tableName: lines[0].match(this.getColumnName)[0]};
                for (let i = 1, size = lines.length; i < size; i++) {
                    if (
                        lines[i].match(this.getColumnName) !== null &&
                        !table[lines[i].match(this.getColumnName)[0]]
                    ) {
                        table[lines[i].match(this.getColumnName)[0]] = this.tableColumnToJson(lines[i]);
                    } else if (
                        lines[i].match(this.getColumnName) !== null &&
                        this.isPK(lines[i])) {
                            table[lines[i].match(this.getColumnName)[0]].pk = true;
                    } else if (
                        lines[i].match(this.getColumnName) !== null &&
                        this.isFK(lines[i])) {
                            table[lines[i].match(this.getColumnName)[0]].fk = true;
                    }
                }
                output.tables.push(table);
            }
        });
        return output;
    }

    private static removeComments(data) {
        return data.replace(/\/\*(.*)/g, '').replace(/([ \t]*\n){3,}/g, '\n\n');
    };

    private static match(data: string): any {
        if (data === null || !data) {
            return false;
        }
        return data.match(/CREATE TABLE ((.|\n)*);/);
    }

    private static tableColumnToJson(column: string): any {
        console.log(column);
        return {
            name: column.match(this.getColumnName)[0],
            dataType: this.getColumnDataType(column),
            pk: this.isPK(column),
            fk: this.isFK(column),
            notNull: this.isNullable(column),
            unique: false,
            binary: false,
            unsigned: false,
            zerofill: false,
            autoIncrement: false,
            generatedColumn: false,
            default: undefined
        };
    }

    private static getColumnDataType(column: string): string {
        let type;
        this.validDataTypes.forEach(d => {
            if (column.toUpperCase().indexOf(d) > -1) {
                type = d;
                return;
            }
        });
        if (!type) {
            console.log('Failed for -> ' + column);
        }
        return type ? type : 'Unknown datatype';
    }

    private static isPK(column: string): boolean {
        return column.toUpperCase().match(/PRIMARY KEY \(`(.*)`\)/) !== null;
    }

    private static isFK(column: string): boolean {
        console.log('FK', column);
        return column.toUpperCase().match(/FOREIGN KEY \(`(.*)`\)/) !== null;
    }

    private static isNullable(column: string): boolean {
        return column.toUpperCase().indexOf('NOT NULL') > -1;
    }
}
