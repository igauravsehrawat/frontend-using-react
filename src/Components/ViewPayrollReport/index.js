import React, { Component } from 'react';
import { Table, Spin } from 'antd';
import { getAllPayrollReport } from '../../data/config/api/apiCalls';
import { columns } from './data';

class ViewPayrollReport extends Component {
  constructor() {
    super();
    this.state = {
      payrollReport: [],
      loader: true,
    };
    this.setPayrollReport = this.setPayrollReport.bind(this);
  }

  componentWillMount() {
    getAllPayrollReport({}, this.setPayrollReport);
  }

  setPayrollReport(err, data) {
    if (!err) {
      this.setState({
        payrollReport: data.data,
        loader: false,
      });
    }
  }

  render() {
    const { payrollReport, loader } = this.state;
    return (
      <div className="fade-in-left wave-full-parent-height wave-flex wave-flex-jc">
        <Spin spinning={loader} size="large">
          <h3>This is payroll report page. Payroll is generated for all the data uploaded till yet.</h3>
          {payrollReport.length > 0
            && <Table rowKey={record => `${record.employeeId}${record.payPeriod}`} dataSource={payrollReport} columns={columns} />
          }
          {!loader && payrollReport.length === 0
            && <p>No data found</p>
          }
        </Spin>
      </div>
    );
  }
}

export default ViewPayrollReport;
