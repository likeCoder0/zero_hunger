import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Col, Row } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";

const DashBoard = () => {
  const firebase = useUserAuth();
  const [cook, setCook] = useState([]);
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
      firebase.fetchMydonor("foodType","Cooked")?.then((cook) => setCook(cook.docs));
      firebase.fetchMydonor("foodType","Grocery")?.then((grocery) => setGrocery(grocery.docs));
  }, [firebase]);

  // console.log(firebase.user)

  return (
    <React.Fragment>
        <Navbar></Navbar>
      <div className="container-fluid mb-3">
        {/* <h2>{foods.length}</h2> */}
        <Row>
          <Col >
        <Chart
          type="pie"
          width={1349}
          height={550}
          series={[cook.length,grocery.length]}
          options={{
            title: { text: "Food type donation PieChart" },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ['cooked','grocery'],
          }}
        ></Chart>
          </Col>
          <Col>
          <h4>Total Number of donor: {cook.length+grocery.length}</h4>
          <h4>Total Number of user: {4}</h4>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
