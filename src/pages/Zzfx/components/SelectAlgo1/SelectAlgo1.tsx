import { Space } from "antd";
import React from "react";
import SingleAlgo from "../SingleAlgo/SingleAlgo";

interface SelectAlgo1Props {
    onSelect: (name: string) => void;
}

const SelectAlgo1: React.FC<SelectAlgo1Props> = (props: SelectAlgo1Props) => {
    return (
        <Space direction="vertical" size={80}>
            {[
                {
                    name: "IATD",
                    description:
                        "IATD算法是一种基于无监督模型的影响感知的真值发现算法"
                },
                {
                    name: "DART",
                    description:
                        "DART算法是一种处理多真值问题的领域感知的真值发现算法"
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

export default SelectAlgo1;
