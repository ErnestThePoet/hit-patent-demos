import React, { useState } from "react";
import styles from "./Sjcq.module.scss";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { ConfigProvider } from "antd";
import DataInput from "./components/DataInput/DataInput";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import InfoExtract from "./components/InfoExtract/InfoExtract";
import KnowledgeSummary from "./components/KnowledgeSummary/KnowledgeSummary";

const { Header, Content, Sider } = Layout;

const navItems: MenuProps["items"] = [
    "数据输入",
    "类别选择",
    "信息提取",
    "知识汇总"
].map((x, i) => ({
    key: i.toString(),
    label: x
}));

type NavItemKey = "0" | "1" | "2" | "3";

const Sjcq: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState<NavItemKey>("0");

    const getFragmentByKey = (key: NavItemKey) => {
        switch (key) {
            case "0":
                return <DataInput />;
            case "1":
                return <CategorySelect />;
            case "2":
                return <InfoExtract />;
            case "3":
                return <KnowledgeSummary />;
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#49b804"
                }
            }}>
            <Layout className={styles.layoutWrapper}>
                <Header className={styles.header}>
                    <div className={styles.divHeaderText}>
                        IE：多源数据信息抽取系统
                    </div>
                </Header>
                <Layout>
                    <Sider width={300}>
                        <Menu
                            className={styles.menuNav}
                            mode="inline"
                            selectedKeys={[selectedKey]}
                            onClick={e => setSelectedKey(e.key as NavItemKey)}
                            items={navItems}
                        />
                    </Sider>
                    <Layout>
                        <Content className={styles.contentContent}>
                            {getFragmentByKey(selectedKey)}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default Sjcq;
