import React from "react";
import styles from "./CategorySelect.module.scss";
import { Button, Space, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [
    "主题",
    "事件",
    "产品",
    "人物",
    "司法案例",
    "地点",
    "失效模式",
    "技术",
    "数据源",
    "材料",
    "生物",
    "科学数据",
    "科学研究",
    "科研成果",
    "科研装置",
    "组织机构",
    "细胞治疗",
    "行业",
    "规范性文件",
    "设备",
    "风险因子"
].map(x => ({
    value: x,
    label: x
}));

interface DataType {
    level: string;
    fieldName: string;
    fieldMeaning: string;
    wikiType: string;
    wikiList: string;
    freeText: string;
    infoBox: string;
    sqlType: string;
    propertyFeatures: string;
    transpositionProperties: string;
    detailedRevision: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "数据层级",
        dataIndex: "level"
    },
    {
        title: "字段名",
        dataIndex: "fieldName",
        render: x => <a>{x}</a>
    },
    {
        title: "字段含义",
        dataIndex: "fieldMeaning"
    },
    {
        title: "Wiki属性类型",
        dataIndex: "wikiType",
        render: x => <a>{x}</a>
    },
    {
        title: "Wiki值列表",
        dataIndex: "wikiList"
    },
    {
        title: "Freetext(非结构化)字段",
        dataIndex: "freeText"
    },
    {
        title: "InfoBox(结构化)字段",
        dataIndex: "infoBox"
    },
    {
        title: "SQL类型",
        dataIndex: "sqlType"
    },
    {
        title: "属性特征",
        dataIndex: "propertyFeatures"
    },
    {
        title: "转置属性",
        dataIndex: "transpositionProperties",
        render: x => <a>{x}</a>
    },
    {
        title: "修订详细描述",
        dataIndex: "detailedRevision"
    }
];

const data: DataType[] = [
    {
        level: "主表",
        fieldName: "Ailas",
        fieldMeaning: "别名",
        wikiType: "Text",
        wikiList: "否",
        freeText: "否",
        infoBox: "是",
        sqlType: "VARCHAR",
        propertyFeatures: "",
        transpositionProperties: "无",
        detailedRevision: "无"
    },
    {
        level: "主表",
        fieldName: "Description",
        fieldMeaning: "实体描述或摘要",
        wikiType: "Text",
        wikiList: "否",
        freeText: "是",
        infoBox: "否",
        sqlType: "VARCHAR",
        propertyFeatures: "",
        transpositionProperties: "无",
        detailedRevision: "无"
    },
    {
        level: "主表",
        fieldName: "Name",
        fieldMeaning: "姓名或名称",
        wikiType: "Text",
        wikiList: "否",
        freeText: "否",
        infoBox: "是",
        sqlType: "VARCHAR",
        propertyFeatures: "",
        transpositionProperties: "无",
        detailedRevision: "无"
    },
    {
        level: "主表",
        fieldName: "Definition",
        fieldMeaning: "义项",
        wikiType: "Text",
        wikiList: "否",
        freeText: "否",
        infoBox: "是",
        sqlType: "VARCHAR",
        propertyFeatures: "",
        transpositionProperties: "无",
        detailedRevision: "无"
    }
];

const CategorySelect: React.FC = () => {
    return (
        <div className={styles.divContentWrapper}>
            <Space size={35}>
                <Space>
                    <div>选择文件所属类别</div>
                    <Select
                        className={styles.selectCategories}
                        mode="tags"
                        placeholder="选择文件所属类别"
                        onChange={(e1, e2) => console.log(e1, e2)}
                        options={options}
                    />
                </Space>

                <Button className={styles.btnCategorySelect} type="primary">
                    确认
                </Button>
            </Space>

            <Table className={styles.table} columns={columns} dataSource={data} pagination={false} />
        </div>
    );
};

export default CategorySelect;
