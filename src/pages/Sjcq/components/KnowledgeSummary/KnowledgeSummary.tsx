import React, { useState } from "react";
import styles from "./KnowledgeSummary.module.scss";
import { Button, Space, Select } from "antd";
import { ExtractionResult } from "../InfoExtract/InfoExtract";

const KnowledgeSummary: React.FC = () => {
    const [extractionResultIndex, setExtractionResultIndex] = useState(-1);

    return (
        <div className={styles.divContentWrapper}>
            <Space size={35}>
                <Select
                    className={styles.select}
                    defaultValue=""
                    options={[
                        {
                            value: "KnowledgeSummary1.txt",
                            label: "KnowledgeSummary1.txt"
                        },
                        {
                            value: "KnowledgeSummary2.txt",
                            label: "KnowledgeSummary2.txt"
                        }
                    ]}
                />

                <Button
                    className={styles.btnKnowledgeSummary}
                    type="primary"
                    onClick={() => setExtractionResultIndex(0)}>
                    确认
                </Button>
            </Space>

            <div className={styles.divTextWrapper}>
                {extractionResultIndex === 0 && <ExtractionResult />}
            </div>
        </div>
    );
};

export default KnowledgeSummary;
