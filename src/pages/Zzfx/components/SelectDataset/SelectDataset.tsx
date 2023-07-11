import React from "react";
import styles from "./SelectDataset.module.scss";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
    entity: string;
    source: string;
    imageResolution: string;
    brand: string;
    externalMemory: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "entity",
        dataIndex: "entity"
    },
    {
        title: "source",
        dataIndex: "source"
    },
    {
        title: "Image Resolution",
        dataIndex: "imageResolution"
    },
    {
        title: "brand",
        dataIndex: "brand"
    },
    {
        title: "External Memory",
        dataIndex: "externalMemory"
    }
];

const data: DataType[] = [
    {
        entity: "e1",
        source: "eglobalcentral",
        imageResolution: "23.4 megapixels",
        brand: "Canon EOS 70D body",
        externalMemory: "Type I CF Card(UDMA 7-compatule),SD/SDHC/SDXC card"
    },
    {
        entity: "e1",
        source: "Shopmania",
        imageResolution: "22.3 MP",
        brand: "Canon EOS 70D Mark III kit 24-105mm",
        externalMemory: "CompactFlash /SD/ SDHC /SDXC"
    },
    {
        entity: "e1",
        source: "mypriceindia",
        imageResolution: "22.3 MP",
        brand: "Canon EOS 5D Mark III kit 24-105mm",
        externalMemory: "Dual card slots (CF card and SD)"
    },
    {
        entity: "e2",
        source: "eglobalcentral",
        imageResolution: "25 megapixels",
        brand: "Nikon",
        externalMemory: "SD/SDHC/SDXC"
    },
    {
        entity: "e2",
        source: "shopmania",
        imageResolution: "24 MP",
        brand: "Nikon D3300 kit 18-55mm +55-200mm",
        externalMemory: "SD/SDHC/SDXC"
    },
    {
        entity: "e2",
        source: "mypriceindia",
        imageResolution: "25.0 MP",
        brand: "Nikon",
        externalMemory: "SD/SDHC/SDXC card"
    }
];

const SelectDataset: React.FC = () => {
    return (
        <div className={styles.divContentWrapper}>
            <Table
                className={styles.table}
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
};

export default SelectDataset;
