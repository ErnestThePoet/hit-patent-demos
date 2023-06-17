import React, { useState } from "react";
import { Space, Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./Evaluation.module.scss";

type FragmentId = "EXECUTION_RESULTS" | "PARAM_EFFECTS";

const ExecutionResults: React.FC = () => {
    const columns: ColumnsType<object> = [
        {
            title: "A",
            dataIndex: "a",
            key: "a"
        }
    ];

    const data = [{ a: 123 }];

    return <Table columns={columns} dataSource={data} />;
};

const ParamEffects: React.FC = () => {
    return <Space></Space>;
};

const Evaluation: React.FC = () => {
    const [fragmentId, setFragmentId] =
        useState<FragmentId>("EXECUTION_RESULTS");

    const getDataInputFragment = () => {
        switch (fragmentId) {
            case "EXECUTION_RESULTS":
                return <ExecutionResults />;
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
