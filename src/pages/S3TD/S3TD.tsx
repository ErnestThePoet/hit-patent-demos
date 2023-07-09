import React from "react";
import styles from "./S3TD.module.scss";
import { Layout, Tabs } from "antd";
import type { TabsProps } from "antd";
import DataInput from "./components/DataInput/DataInput";
import Evaluation from "./components/Evaluation/Evaluation";
import { ConfigProvider } from "antd";

const { Header, Content } = Layout;

const tabItems: TabsProps["items"] = [
    {
        key: "0",
        label: "输入",
        children: <DataInput />
    },
    {
        key: "1",
        label: "评价",
        children: <Evaluation />
    }
];

const S3TD: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "rgb(132, 122, 244)"
                }
            }}>
            <Layout className="layout">
                <Header className={styles.header}>
                    <div className={styles.divHeaderText}>
                        S3TD：基于语义表征的多源数据融合分析系统
                    </div>
                </Header>
                <Content className={styles.content}>
                    <Tabs defaultActiveKey="0" items={tabItems} />
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default S3TD;
