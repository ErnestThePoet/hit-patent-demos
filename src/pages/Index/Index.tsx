import { Card, Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Index.module.scss";

const Index: React.FC = () => {
    return (
        <div className={styles.divIndexWrapper}>
            <Card title="选择展示界面">
                <Space>
                    <Link to="/s3td">
                        <Button className={styles.divLink} type="primary">
                            S3TD
                        </Button>
                    </Link>

                    <Link to="/sjcq">
                        <Button className={styles.divLink} type="primary">
                            数据抽取系统
                        </Button>
                    </Link>

                    <Link to="/zzfx">
                        <Button className={styles.divLink} type="primary">
                            真值发现参数选择系统
                        </Button>
                    </Link>
                </Space>
            </Card>
        </div>
    );
};

export default Index;
