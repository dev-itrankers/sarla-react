import React, { Component } from "react";
// import TableHeading from "./table-heading/TabelHeading";
import TableData from "./table-data/TableData";
import "./Table.css";

class Tables extends Component {
  state = {};
  render() {
    return (
      <table
        className={
          "table det-none is-bordered is-striped is-hoverable is-fullwidth " +
          this.props.closeClass +
          "4"
        }
      >
        <thead>
          <tr className="heading-color">
            <th>Products</th>
            <th>Denier</th>
            <th>Denier</th>
            <th>Elastane Type Lycra/Spandex</th>
            <th>Yarn Type Nylon (Denier)</th>
            <th>Air Covered</th>
            <th>Single Covered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData value="10/30X1" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="30" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X1" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X2" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X1" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X2" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X1" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X2" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X2" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X2" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X2" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>

          <tr>
            <TableData value="10/70X2" />
            <TableData value="10" />
            <TableData value="11" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="70X2" />
            <TableData value="fas" className="fa-square-root-alt" />
            <TableData value="single covered" />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Tables;
