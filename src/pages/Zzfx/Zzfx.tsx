import React, { useState } from "react";
import styles from "./Zzfx.module.scss";
import { Button, Layout, Space } from "antd";
import { ConfigProvider } from "antd";

const { Header, Content } = Layout;

type FragmentId = 0 | 1 | 2 | 3;

const Zzfx: React.FC = () => {
    const [fragmentId, setFragmentId] = useState<FragmentId>(0);

    const getFragmentById = (id: FragmentId) => {
        switch (id) {
            case 0:

            case 1:

            case 2:

            case 3:
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

                        {getFragmentById(fragmentId)}
                    </Space>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default Zzfx;
