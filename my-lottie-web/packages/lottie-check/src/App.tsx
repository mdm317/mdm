import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import LottiePlayer from "./component/LottiePlayer";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,

  action: "",
  onChange(info) {
    const { status } = info.file;
    console.log(info.file);

    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const App: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);
  const beforeUpload = async (file: RcFile) => {
    const obj = await file.text();
    setAnimationData(JSON.parse(obj));
    return false;
  };

  return (
    <>
      <Dragger {...props} beforeUpload={beforeUpload}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      {animationData && (
        <LottiePlayer lottieInformation={animationData} renderer="svg" />
      )}
    </>
  );
};

export default App;
