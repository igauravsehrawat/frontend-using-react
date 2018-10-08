import React, { Component } from 'react';
import {
  Upload, Button, Icon, message,
} from 'antd';
import axios from 'axios';
class UploadWorkLogReport extends Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      uploading: false,
    };
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    formData.append('workLogReport', fileList[0]);

    this.setState({
      uploading: true,
    });

    axios.post('http://localhost:4242/workLogReports', formData)
      .then((res) => {
        console.log('fklj');
        message.success(res.data.message);
        this.setState({
          fileList: [],
          uploading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        message.error(err.data && err.data.message);
        this.setState({
          uploading: false,
        });
      });
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
