import * as d3 from "d3";
import type { ColumnsType } from "antd/es/table";

export function readCsvFileToTable(
    csvFile: File,
    onload: (result: { columns: ColumnsType<object>; data: object[] }) => void
) {
    const fileReader = new FileReader();
    fileReader.onload = res => {
        readCsvStringToTable(res.target?.result as string, onload);
    };

    fileReader.readAsText(csvFile);
}

export function readCsvStringToTable(
    csvString: string,
    onload: (result: { columns: ColumnsType<object>; data: object[] }) => void
) {
    const parseResult = d3.csvParse(csvString);
    if (parseResult.length === 0) {
        onload({ columns: [], data: [] });
    }

    const columns: ColumnsType<object> = [];

    for (const key in parseResult[0]) {
        columns.push({
            title: key,
            dataIndex: key,
            key
        });
    }

    onload({ columns, data: parseResult });
}
