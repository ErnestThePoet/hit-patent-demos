import React from "react";
import styles from "./Zzfx.module.scss";
import { Layout } from "antd";
import { ConfigProvider } from "antd";

const { Header, Content } = Layout;

const Zzfx: React.FC = () => {

    const getFragmentByKey = (key: NavItemKey) => {
        switch (key) {
            case "0":

            case "1":

            case "2":
                
            case "3":
                return <></>;
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
                    
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default Zzfx;
