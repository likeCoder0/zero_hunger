import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Col, Row, Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";

const DashBoard = () => {
  const firebase = useUserAuth();
  const [cook, setCook] = useState([]);
  const [grocery, setGrocery] = useState([]);
  const [numberOfUser, setNumberOfUser] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    firebase
      .fetchMydonor("foodType", "Cooked")
      ?.then((cook) => setCook(cook.docs));
    firebase
      .fetchMydonor("foodType", "Grocery")
      ?.then((grocery) => setGrocery(grocery.docs));
    firebase
      .getNumberOfUser()
      ?.then((value) => setNumberOfUser(value));
    firebase
      .listAllUser()
      ?.then((value) => setAllUser(value.docs));
      // console.log(allUser.id)
  }, [firebase]);

  // console.log(firebase.user)

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="container-fluid m-3">
        {/* <h2>{foods.length}</h2> */}
        <Row>
          <Col>
            <Chart
              type="pie"
              width={550}
              height={550}
              series={[cook.length, grocery.length]}
              options={{
                title: { text: "Food type donation PieChart" },
                noData: { text: "Empty Data" },
                // colors:["#f90000","#f0f"],
                labels: ["cooked", "grocery"],
              }}
            ></Chart>
          </Col>
          <Col>
            <div class="card">
              <div class="card-header">Total Number of donor</div>
              <div class="card-body">
                <h5 class="card-title">{cook.length + grocery.length}</h5>
              </div>
            </div>
          </Col>
          <Col>
            <div class="card">
              <div class="card-header">Total Number of user</div>
              <div class="card-body">
                <h5 class="card-title">{numberOfUser}</h5>
              </div>
            </div>
          </Col>
        </Row>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>userID</th>
        </tr>
      </thead>
      <tbody>
      {allUser.map((user) => (
          
        <tr>
          <td>{user.id}</td>
        </tr>)
          )}
      </tbody>
    </Table>
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
