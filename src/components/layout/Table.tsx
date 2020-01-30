import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class Example extends React.Component {
  render() {
    return (
      <div className="col-12">
        <Table striped>
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark Smith (msmith@teslagovernment.com)</td>
            <td>Admin</td>
          </tr>
          <tr>
          <td>Robert Plant (rplant12@teslagovernment.com)</td>
            <td>Writer</td>
          </tr>
          <tr>
          <td>David Bowie (dbowie22@teslagovernment.com)</td>
            <td>Reader</td>
          </tr>

        </tbody>
      </Table>
      </div>

    );
  }
}