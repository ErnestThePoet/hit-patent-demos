import React, { useState } from "react";
import styles from "./InitialValues.module.scss";
import { Button, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
    initialValue: string;
    effects: string;
    value: number;
    valuePresets: number[];
    setState: React.Dispatch<React.SetStateAction<number>>;
}

interface InitialValuesProps {
    onParamsConfirm: (params: number[]) => void;
}

const InitialValues: React.FC<InitialValuesProps> = (
    props: InitialValuesProps
) => {
    const [alpha, setAlpha] = useState(-1);
    const [theta, setTheta] = useState(-1);
    const [rho, setRho] = useState(-1);
    const [deltaV, setDeltaV] = useState(-1);

    const columns: ColumnsType<DataType> = [
        {
            title: "初值",
            dataIndex: "initialValue"
        },
        {
            title: "作用",
            dataIndex: "effects"
        },
        {
            title: "设置值",
            render: (_, r) => (
                <Select
                    className={styles.select}
                    defaultValue={-1}
                    value={r.value}
                    onChange={e => r.setState(e)}
                    options={[
                        {
                            value: -1,
                            label: "未选择"
                        },
                        ...r.valuePresets.map(x => ({
                            value: x,
                            label: x.toString()
                        }))
                    ]}
                />
            )
        }
    ];

    const data: DataType[] = [
        {
            initialValue: "𝛂",
            effects: "基于域百分比分布的调整因子",
            value: alpha,
            valuePresets: [0.1, 0.3, 0.5, 0.7, 0.9],
            setState: setAlpha
        },
        {
            initialValue: "𝛉",
            effects: "判断观测值是否为真值的阈值",
            value: theta,
            valuePresets: [0.1, 0.3, 0.5, 0.7, 0.9],
            setState: setTheta
        },
        {
            initialValue: "𝛒",
            effects: "控制相关域的影响",
            value: rho,
            valuePresets: [0.1, 0.3, 0.5, 0.7, 0.9],
            setState: setRho
        },
        {
            initialValue: "𝛔(𝐯)",
            effects: "观测值𝐯的可信度",
            value: deltaV,
            valuePresets: [0.1, 0.3, 0.5, 0.7, 0.9],
            setState: setDeltaV
        }
    ];

    return (
        <div className={styles.divContentWrapper}>
            <Table
                className={styles.table}
                columns={columns}
                dataSource={data}
                pagination={false}
            />

            <Button
                className={styles.btnConfirm}
                type="primary"
                onClick={() =>
                    props.onParamsConfirm([alpha, theta, rho, deltaV])
                }>
                确定
            </Button>
        </div>
    );
};

export default InitialValues;
