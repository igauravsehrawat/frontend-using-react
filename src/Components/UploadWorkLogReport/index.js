import React, { Component } from 'react';
import {
  Button, Icon, message, Table, Upload,
} from 'antd';
import { uploadWorkLogReport } from '../../data/config/api/apiCalls';
import { columns } from './data';

class UploadWorkLogReport extends Component {
  constructor() {
    super();
    this.state = {
      reportId: null,
      report: [],
      fileList: [],
      uploading: false,
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }


  handleUpload() {
    const { fileList } = this.state;
    const formData = new FormData();
    formData.append('workLogReport', fileList[0]);
    this.setState({
      uploading: true,
    });

    uploadWorkLogReport(formData, this.renderTable);
  }

  renderTable(err, data) {
    if (err) {
      this.setState({
        uploading: false,
      });
    } else {
      this.setState({
        fileList: [],
        uploading: false,
        report: data.data,
        reportId: data.data && data.data[0] && data.data[0].reportId,
      });
    }
  }

  render() {
    const { uploading } = this.state;
    const props = {
      accept: 'text/csv',
      action: '//', // dummy
      beforeUpload: (file) => {
        this.setState({
          fileList: [file],
        });
        return false;
      },
      fileList: this.state.fileList,
      onRemove: (file) => {
        this.setState({
          fileList: [],
        });
      },
    };

    return (
      <div>
        <p>Please choose a csv file and click upload.</p>
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
        {this.state.reportId
          && (
<div>
            <p>
Uploaded report with report id:
{' '}
{this.state.reportId}
{' '}
is shown below
</p>
            <Table rowKey={record => `${record.date}${record.employeeId}`} dataSource={this.state.report} columns={columns} />
          </div>
)
        }
      </div>
    );
  }
}

export default UploadWorkLogReport;
