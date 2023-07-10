import React, { useState, useRef } from "react";
import styles from "./DataInput.module.scss";
import { Button, Space, Input } from "antd";

const DataInput: React.FC = () => {
    const [fileName, setFileName] = useState("1.txt");
    const inCsv = useRef<HTMLInputElement>(null);

    return (
        <>
            <div className={styles.divDataInputContentWrapper}>
                <Space size={35}>
                    <Input
                        className={styles.inFileName}
                        value={fileName}
                        onChange={e => setFileName(e.currentTarget.value)}
                    />

                    <Button
                        className={styles.btnDataInput}
                        type="primary"
                        onClick={() => {
                            inCsv?.current?.click();
                        }}>
                        浏览
                    </Button>
                    <Button className={styles.btnDataInput} type="primary">
                        确认
                    </Button>
                </Space>

                <div className={styles.divFileContent}>
                    <div style={{ textAlign: "center" }}>
                        中华人民共和国生物两用品及
                    </div>
                    <div style={{ textAlign: "center" }}>
                        相关设备和技术出口管制条例
                    </div>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        (2002年10月14日中华人民共和国国务院令第365号公布
                        自2002年12月1日起施行)
                    </div>
                    <br />
                    <div>
                        第一条
                        为了加强对生物两用品及相关设备和技术出口的管制，维护国家安全和社会公共利益，制定本条例。
                    </div>
                    <div>
                        第二条
                        本条例所称生物两用品及相关设备和技术出口，是指本条例附件《生物两用品及相关设备和技术出口管制清单》(以下简称《管制清单》)所列的生物两用品及相关设备和技术的贸易性出口以及对外交流、交换、赠送、展览、援助、服务和以其他方式进行的技术转移。
                    </div>
                    <div>
                        第三条
                        生物两用品及相关设备和技术出口应当遵守国家有关法律、行政法规和本条例规定，不得损害国家安全和社会公共利益。
                    </div>
                    <div>
                        第四条
                        国家对生物两用品及相关设备和技术出口实行严格管制，防止《管制清单》所列的生物两用品及相关设备和技术用于生物武器目的。
                    </div>
                    <div>
                        第五条
                        国家对《管制清单》所列的生物两用品及相关设备和技术出口实行许可制度。未经许可，任何单位或者个人不得出口《管制清单》所列的生物两用品及相关设备和技术。
                    </div>
                    <div>
                        第六条
                        从事生物两用品及相关设备和技术出口的经营者，须经国务院对外经济贸易主管部门(以下简称国务院外经贸主管部门)登记。未经登记，任何单位或者个人不得经营生物两用品及相关设备和技术出口。具体登记办法由国务院外经贸主管部门规定。
                    </div>
                </div>
            </div>

            <input
                ref={inCsv}
                style={{ display: "none" }}
                type="file"
                accept=".txt,.pdf"
                multiple
                onChange={e => {
                    if (
                        e.currentTarget === null ||
                        e.currentTarget.files === null ||
                        e.currentTarget.files.length === 0
                    ) {
                        return;
                    }

                    setFileName(e.currentTarget.files[0].name);

                    // clear file value to ensure onchange will be triggered again
                    // if we load the same file next time.
                    if (inCsv.current !== null) {
                        inCsv.current.value = "";
                    }
                }}
            />
        </>
    );
};

export default DataInput;
