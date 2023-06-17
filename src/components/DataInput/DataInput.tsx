import React, { useState } from "react";
import { Space, Button, Table, Radio, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
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
                    description="CTD算法是一种关注函数依赖的数据融合算法"
                    value={1}
                />

                <SingleAlgorithm
                    title="算法3"
                    name="DART"
                    description="DART算法是一种关注多值属性的数据融合算法"
                    value={2}
                />
            </Space>
        </Radio.Group>
    );
};

interface ConfigParamsProps {
    valuesL: number[];
    valuesR: number[];
    onChangeL: (values: CheckboxValueType[]) => void;
    onChangeR: (values: CheckboxValueType[]) => void;
}

const ConfigParams: React.FC<ConfigParamsProps> = (
    props: ConfigParamsProps
) => {
    return (
        <Space size={20}>
            <Space direction="vertical">
                <div className={styles.divParamSelectionTitle}>参数选择</div>
                <Space className={styles.spaceParamsWrapper} size={60}>
                    <Space direction="vertical">
                        <div className={styles.divParamsGroupTitle}>
                            边连接参数
                        </div>
                        <Checkbox.Group
                            value={props.valuesL}
                            onChange={props.onChangeL}>
                            <Space direction="vertical">
                                <Checkbox value={0}>
                                    node "source" dropout
                                </Checkbox>
                                <Checkbox value={1}>
                                    node "entity" dropout
                                </Checkbox>
                            </Space>
                        </Checkbox.Group>
                    </Space>

                    <Space direction="vertical">
                        <div className={styles.divParamsGroupTitle}>
                            数值参数
                        </div>
                        <Checkbox.Group
                            value={props.valuesR}
                            onChange={props.onChangeR}>
                            <Space direction="vertical">
                                <Checkbox value={0}>随机游走长度</Checkbox>
                                <Checkbox value={1}>embedding维度</Checkbox>
                                <Checkbox value={2}>属性高斯分布均值</Checkbox>
                                <Checkbox value={3}>属性高斯分布方差</Checkbox>
                                <Checkbox value={4}>
                                    属性值高斯分布均值
                                </Checkbox>
                                <Checkbox value={5}>
                                    属性值高斯分布方差
                                </Checkbox>
                                <Checkbox value={6}>实体高斯分布均值</Checkbox>
                                <Checkbox value={7}>实体高斯分布方差</Checkbox>
                            </Space>
                        </Checkbox.Group>
                    </Space>
                </Space>
            </Space>

            <img
                src="./mutation.png"
                width={400}
                className={styles.imgMutation}
            />
        </Space>
    );
};

const DataInput: React.FC = () => {
    const [fragmentId, setFragmentId] = useState<FragmentId>("READ_DATA");

    const [currentAlgorithm, setCurrentAlgorithm] = useState(0);

    const [paramsOptionsL, setParamsOptionsL] = useState<number[]>([]);
    const [paramsOptionsR, setParamsOptionsR] = useState<number[]>([]);

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
                return (
                    <ConfigParams
                        valuesL={paramsOptionsL}
                        valuesR={paramsOptionsR}
                        onChangeL={e => setParamsOptionsL(e as number[])}
                        onChangeR={e => setParamsOptionsR(e as number[])}
                    />
                );
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
