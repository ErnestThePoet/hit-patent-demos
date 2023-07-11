import { Button, Space } from "antd";
import { FundProjectionScreenOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./SingleAlgo.module.scss";

interface SingleAlgoProps {
    title: string;
    description: string;
    onClick: () => void;
}

const SingleAlgo: React.FC<SingleAlgoProps> = (props: SingleAlgoProps) => {
    return (
        <Space direction="vertical">
            <Button
                type="primary"
                shape="round"
                size="large"
                icon={<FundProjectionScreenOutlined />}
                onClick={props.onClick}>
                {props.title}
            </Button>

            <div className={styles.divAlgoDescription}>{props.description}</div>
        </Space>
    );
};

export default SingleAlgo;
