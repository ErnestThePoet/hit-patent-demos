import React, { useState, useEffect, useRef } from "react";
import { Space, Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./Evaluation.module.scss";
import * as ECharts from "echarts";
import { readCsvStringToTable } from "../../../../utils/csv-table";

type FragmentId = "EXECUTION_RESULTS" | "PARAM_EFFECTS";

interface ExecutionResultsProps {
    columns: ColumnsType<object>;
    data: object[];
}
const ExecutionResults: React.FC<ExecutionResultsProps> = (
    props: ExecutionResultsProps
) => {
    return (
        <Table
            columns={props.columns}
            dataSource={props.data}
            pagination={false}
            size="small"
        />
    );
};

const ParamEffects: React.FC = () => {
    // const isChartsInitialized = useRef<boolean[]>([false, false, false]);
    // const charts = useRef<(ECharts.ECharts | null)[]>([null, null, null]);
    // const divChart1 = useRef<HTMLDivElement>(null);
    // const divChart2 = useRef<HTMLDivElement>(null);
    // const divChart3 = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (divChart1.current !== null) {
    //         charts.current[0]=ECharts.init();
    //     }
    // }, []);

    return (
        <Space>
            {/* <div ref={divChart1} />
            <div ref={divChart2} />
            <div ref={divChart3} /> */}

            <img src="./chart1.png" width={350} />
            <img src="./chart2.png" width={350} />
            <img src="./chart3.png" width={350} />
        </Space>
    );
};

const Evaluation: React.FC = () => {
    const [fragmentId, setFragmentId] =
        useState<FragmentId>("EXECUTION_RESULTS");

    const [tableColumns, setTableColumns] = useState<ColumnsType<object>>([]);
    const [tableData, setTableData] = useState<object[]>([]);

    useEffect(() => {
        const fetchCsv = async () => {
            const tableCsv = await fetch("./table.csv");
            const tableCsvString = await tableCsv.text();
            readCsvStringToTable(tableCsvString, ({ columns, data }) => {
                setTableColumns(columns);
                setTableData(data);
            });
        };

        fetchCsv();
    });

    const getDataInputFragment = () => {
        switch (fragmentId) {
            case "EXECUTION_RESULTS":
                return (
                    <ExecutionResults columns={tableColumns} data={tableData} />
                );
            case "PARAM_EFFECTS":
                return <ParamEffects />;
        }
    };

    return (
        <Space direction="vertical" className={styles.spaceWrapper}>
            <Space size={50} className={styles.spaceButtonsWrapper}>
                <Button
                    type={
                        fragmentId === "EXECUTION_RESULTS"
                            ? "default"
                            : "primary"
                    }
                    className={styles.btnFragmentSelector}
                    onClick={() => setFragmentId("EXECUTION_RESULTS")}>
                    运行结果
                </Button>

                <Button
                    type={
                        fragmentId === "PARAM_EFFECTS" ? "default" : "primary"
                    }
                    className={styles.btnFragmentSelector}
                    onClick={() => setFragmentId("PARAM_EFFECTS")}>
                    参数影响
                </Button>
            </Space>

            {getDataInputFragment()}
        </Space>
    );
};

export default Evaluation;
