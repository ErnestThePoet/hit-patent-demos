import React, { useState } from "react";
import styles from "./Zzfx.module.scss";
import { Button, Layout, Space, Descriptions, Select, Empty } from "antd";
import { ConfigProvider } from "antd";
import SelectDataset from "./components/SelectDataset/SelectDataset";
import InitialValues from "./components/InitialValues/InitialValues";
import SelectAlgo1 from "./components/SelectAlgo1/SelectAlgo1";
import SelectAlgo2 from "./components/SelectAlgo2/SelectAlgo2";

const { Header, Content } = Layout;

type FragmentId = 0 | 1 | 2 | 3;

const Zzfx: React.FC = () => {
    const [fragmentId, setFragmentId] = useState<FragmentId>(0);

    const [dataset, setDataset] = useState("");
    const [initialValues, setInitialValues] = useState("");
    const [algo1, setAlgo1] = useState("");
    const [algo2, setAlgo2] = useState("");

    const getFragmentById = (id: FragmentId) => {
        switch (id) {
            case 0:
                return dataset === "" ? (
                    <div className={styles.divEmptyWrapper}>
                        <Empty description="暂无数据集预览" />
                    </div>
                ) : (
                    <SelectDataset />
                );
            case 1:
                return (
                    <InitialValues
                        onParamsConfirm={e => {
                            if (e.some(x => x === -1)) {
                                setInitialValues("");
                                return;
                            }

                            setInitialValues(e.join("/"));
                        }}
                    />
                );
            case 2:
                return <SelectAlgo1 onSelect={e => setAlgo1(e)} />;
            case 3:
                return <SelectAlgo2 onSelect={e => setAlgo2(e)} />;
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#55adff"
                }
            }}>
            <Layout className="layout">
                <Header className={styles.header}>
                    <div className={styles.divHeaderText}>
                        多源数据真值发现初值推荐系统
                    </div>
                </Header>
                <Content className={styles.content}>
                    <Space direction="vertical" className={styles.spaceWrapper}>
                        <Space className={styles.spaceFragmentButtons}>
                            {[
                                "选择数据集",
                                "选择初值",
                                "选择真值发现算法",
                                "选择初值推荐算法"
                            ].map((x, i) => (
                                <Button
                                    className={styles.btnFragment}
                                    type={
                                        fragmentId === i ? "default" : "primary"
                                    }
                                    onClick={() =>
                                        setFragmentId(i as FragmentId)
                                    }>
                                    {x}
                                </Button>
                            ))}
                        </Space>

                        <div className={styles.divLowerWrapper}>
                            <div className={styles.divFragmentWrapper}>
                                {getFragmentById(fragmentId)}
                            </div>

                            <Space direction="vertical">
                                <Descriptions
                                    className={styles.descriptions}
                                    bordered
                                    column={1}>
                                    <Descriptions.Item label="数据集">
                                        <Select
                                            className={styles.select}
                                            defaultValue=""
                                            value={dataset}
                                            onChange={e => setDataset(e)}
                                            options={[
                                                {
                                                    value: "",
                                                    label: "未选择"
                                                },
                                                {
                                                    value: "camera",
                                                    label: "camera"
                                                },
                                                {
                                                    value: "films",
                                                    label: "films"
                                                }
                                            ]}
                                        />
                                    </Descriptions.Item>

                                    <Descriptions.Item label="初值">
                                        {initialValues === ""
                                            ? "未选择"
                                            : initialValues}
                                    </Descriptions.Item>

                                    <Descriptions.Item label="真值发现算法">
                                        {algo1 === "" ? "未选择" : algo1}
                                    </Descriptions.Item>

                                    <Descriptions.Item label="初值推荐算法">
                                        {algo2 === "" ? "未选择" : algo2}
                                    </Descriptions.Item>
                                </Descriptions>

                                <Descriptions
                                    className={styles.descriptions}
                                    bordered
                                    layout="vertical"
                                    column={1}>
                                    <Descriptions.Item label="推荐初值效果展示">
                                        {dataset === "" ||
                                        initialValues === "" ||
                                        algo1 === "" ||
                                        algo2 === "" ? (
                                            <Empty
                                                className={styles.resultsEmpty}
                                                description="请完成上方参数选择"
                                            />
                                        ) : (
                                            <img
                                                className={styles.resultsImg}
                                                src="./Zzfx/results.png"
                                            />
                                        )}
                                    </Descriptions.Item>
                                </Descriptions>
                            </Space>
                        </div>
                    </Space>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default Zzfx;
