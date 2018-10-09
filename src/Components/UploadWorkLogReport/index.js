import React, { Component } from 'react';
import {
  Upload, Button, Icon, message,
} from 'antd';
import axios from 'axios';
import { uploadWorkLogReport } from '../../data/config/api/apiCalls'
class UploadWorkLogReport extends Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      uploading: false,
    };
  }

  renderTable = (err, data) => {
    if (err) {
      this.setState({
        uploading: false,
      });
    } else {
      this.setState({
        fileList: [],
        uploading: false,
      });
    }
    console.log(data);
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    formData.append('workLogReport', fileList[0]);

    this.setState({
      uploading: true,
    });

    uploadWorkLogReport(formData, this.renderTable);
  };

  render() {
    const { uploading } = this.state;
    const props = {
      action: '//',
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
      fileList: this.state.fileList,
    };

    return (
      <div>
        <p>Please choose a file and click upload.</p>
        <Upload {...props}>
          <Button>
            <Icon type="upload" />
            Select File
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={this.state.fileList.length === 0}
          loading={uploading}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
    );
  }
}

export default UploadWorkLogReport;
