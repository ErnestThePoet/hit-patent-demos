import { Space } from "antd";
import React from "react";
import SingleAlgo from "../SingleAlgo/SingleAlgo";

interface SelectAlgo2Props {
    onSelect: (name: string) => void;
}

const SelectAlgo2: React.FC<SelectAlgo2Props> = (props: SelectAlgo2Props) => {
    return (
        <Space direction="vertical" size={50}>
            {[
                {
                    name: "DSPR",
                    description: "DSPR算法是一种基于数据集相似度的初值推荐算法"
                },
                {
                    name: "MAMLPR",
                    description:
                        "MAMLPR算法是一种基于与模型无关的元学习的初值推荐算法"
                },
                {
                    name: "BOPR",
                    description: "BOPR算法是一种基于贝叶斯优化的初值推荐算法"
                }
            ].map(x => (
                <SingleAlgo
                    title={x.name}
                    description={x.description}
                    onClick={() => props.onSelect(x.name)}
                />
            ))}
        </Space>
    );
};

export default SelectAlgo2;
