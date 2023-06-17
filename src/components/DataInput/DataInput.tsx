import React, { useState } from "react";
import { Space, Button, Table, Radio } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./DataInput.module.scss";

type FragmentId = "READ_DATA" | "CONFIG_ALGORITHM" | "CONFIG_PARAMS";

const ReadData: React.FC = () => {
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

interface ConfigAlgorithmProps {
    value: number;
    onChange: (value: number) => void;
}
interface SingleAlgorithmProps {
    title: string;
    name: string;
    description: string;
    value: number;
}

const SingleAlgorithm: React.FC<SingleAlgorithmProps> = (
    props: SingleAlgorithmProps
) => (
    <Space direction="vertical">
        <Space size={30}>
            <div className={styles.divAlgorithmTitle}>{props.title}</div>
            <Radio value={props.value}>{props.name}</Radio>
        </Space>
        <div className={styles.divAlgorithmDescription}>
            {props.description}
        </div>
    </Space>
);

const ConfigAlgorithm: React.FC<ConfigAlgorithmProps> = (
    props: ConfigAlgorithmProps
) => {
    return (
        <Radio.Group
            onChange={e => props.onChange(e.target.value)}
            value={props.value}>
            <Space direction="vertical" size={20}>
                <SingleAlgorithm
                    title="算法1"
                    name="IATD"
                    description="IATD算法是一种关注数据源影响的数据融合算法"
                    value={0}
                />

                <SingleAlgorithm
                    title="算法2"
                    name="CTD"
                    description="IATD算法是一种关注数据源影响的数据融合算法"
                    value={1}
                />

                <SingleAlgorithm
                    title="算法3"
                    name="DART"
                    description="IATD算法是一种关注数据源影响的数据融合算法"
                    value={2}
                />
            </Space>
        </Radio.Group>
    );
};

const DataInput: React.FC = () => {
    const [fragmentId, setFragmentId] = useState<FragmentId>("READ_DATA");

    const [currentAlgorithm, setCurrentAlgorithm] = useState(0);

    const getDataInputFragment = () => {
        switch (fragmentId) {
            case "READ_DATA":
                return <ReadData />;
            case "CONFIG_ALGORITHM":
                return (
                    <ConfigAlgorithm
                        value={currentAlgorithm}
                        onChange={e => setCurrentAlgorithm(e)}
                    />
                );
            case "CONFIG_PARAMS":
                return 0;
        }
    };

    return (
        <Space direction="vertical" className={styles.spaceWrapper}>
            <Space size={50} className={styles.spaceButtonsWrapper}>
                <Button
                    type={fragmentId === "READ_DATA" ? "default" : "primary"}
                    className={styles.btnFragmentSelector}
                    onClick={() => setFragmentId("READ_DATA")}>
                    读取数据
                </Button>

                <Button
                    type={
                        fragmentId === "CONFIG_ALGORITHM"
                            ? "default"
                            : "primary"
                    }
                    className={styles.btnFragmentSelector}
                    onClick={() => setFragmentId("CONFIG_ALGORITHM")}>
                    配置算法
                </Button>

                <Button
                    type={
                        fragmentId === "CONFIG_PARAMS" ? "default" : "primary"
                    }
                    className={styles.btnFragmentSelector}
                    onClick={() => setFragmentId("CONFIG_PARAMS")}>
                    配置参数
                </Button>

                <Button type="primary" className={styles.btnFragmentSelector}>
                    保存
                </Button>

                <Button type="primary" className={styles.btnFragmentSelector}>
                    另存为
                </Button>
            </Space>

            {getDataInputFragment()}
        </Space>
    );
};

export default DataInput;
