import React from "react";
import "antd/dist/reset.css";
import styles from "./App.module.scss";

import { Layout, Tabs } from "antd";
import type { TabsProps } from "antd";

const { Header, Content } = Layout;

const tabItems: TabsProps["items"] = [
    {
        key: "0",
        label: "输入",
        children: `Content of Tab Pane 1`
    },
    {
        key: "1",
        label: "评价",
        children: `Content of Tab Pane 2`
    }
];

const App: React.FC = () => {
    return (
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
    );
};

export default App;
