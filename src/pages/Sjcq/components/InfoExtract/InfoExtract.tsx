import React, { useState } from "react";
import styles from "./InfoExtract.module.scss";
import { Button, Space } from "antd";

export const ExtractionResult: React.FC = () => (
    <>
        <div>标题：中华人民共和国生物两用品及相关设备和技术出口管制条例</div>
        <div>别名：现行有效</div>
        <div>发布机构：中华人民共和国国务院</div>
        <div>发文字号：中华人民共和国国务院令第365号</div>
        <div>发布日期：2002年10月14日</div>
        <div>实施日期：2002年12月1日</div>
        <div>有效性：现行有效</div>
        <div>
            正文：第一条
            为了加强对生物两用品及相关设备和技术出口的管制，维护国家安全和社会公共利益，制定本条例。
        </div>
        <div>
            第二条
            本条例所称生物两用品及相关设备和技术出口，是指本条例附件《生物两用品及相关设备和技术出口管制清单》(以下简称《管制清单》)所列的生物两用品及相关设备和技术的贸易性出口以及对外交流、交换、赠送、展览、援助、服务和以其他方式进行的技术转移。
        </div>
        <div>第三条 生物两用品及相关设备……</div>
    </>
);

const InfoExtract: React.FC = () => {
    const [shouldShowExtractionResult, setShouldShowExtractionResult] =
        useState(false);

    return (
        <div className={styles.divContentWrapper}>
            <Space
                className={styles.spaceLeftRight}
                direction="vertical"
                size={20}>
                <Button className={styles.btnLeftRight} type="primary">
                    展示原文
                </Button>
                <div className={styles.divTextWrapper}>
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

                <Space className={styles.spaceLeftRightBottom}>
                    <Button
                        className={styles.btnLeftRight}
                        type="primary"
                        onClick={() => setShouldShowExtractionResult(true)}>
                        提取
                    </Button>
                    <Button className={styles.btnLeftRight} type="primary">
                        确认
                    </Button>
                </Space>
            </Space>

            <Space
                className={styles.spaceLeftRight}
                direction="vertical"
                size={20}>
                <div className={styles.divRightTitle}>提取结果</div>
                <div className={styles.divTextWrapper}>
                    {shouldShowExtractionResult && <ExtractionResult />}
                </div>

                <Space className={styles.spaceLeftRightBottom}>
                    <Button
                        className={styles.btnLeftRight}
                        type="primary"
                        onClick={() => {
                            const stringUrl = URL.createObjectURL(
                                new Blob(
                                    [
                                        "标题：中华人民共和国生物两用品及相关设备和技术出口管制条例别名：现行有效\n发布机构：中华人民共和国国务院\n发文字号：中华人民共和国国务院令第365号\n发布日期：2002年10月14日\n实施日期：2002年12月1日\n有效性：现行有效\n正文：第一条　为了加强对生物两用品及相关设备和技术出口的管制，维护国家安全和社会公共利益，制定本条例。\n第二条　本条例所称生物两用品及相关设备和技术出口，是指本条例附件《生物两用品及相关设备和技术出口管制清单》(以下简称《管制清单》)所列的生物两用品及相关设备和技术的贸易性出口以及对外交流、交换、赠送、展览、援助、服务和以其他方式进行的技术转移。\n第三条　生物两用品及相关设备……"
                                    ],
                                    { type: "text/plain" }
                                )
                            );

                            const anchor = document.createElement("a");
                            anchor.href = stringUrl;
                            anchor.download = "ExtractionResults.txt";

                            anchor.click();

                            URL.revokeObjectURL(stringUrl);
                        }}>
                        另存
                    </Button>
                    <Button
                        className={styles.btnLeftRight}
                        type="primary"
                        onClick={() => setShouldShowExtractionResult(false)}>
                        删除
                    </Button>
                </Space>
            </Space>
        </div>
    );
};

export default InfoExtract;
