import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";

const DashBoard = () => {
  const [stdudentSubject, setStudentsubject] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);

  const firebase = useUserAuth();
  const [cook, setCook] = useState([]);
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
      firebase.fetchMydonor("foodType","Cooked")?.then((cook) => setCook(cook.docs));
      firebase.fetchMydonor("foodType","Grocery")?.then((grocery) => setGrocery(grocery.docs));
  }, [firebase]);

  useEffect(() => {
    const sSubject = [];
    const sMarks = [];
    const getStudentdata = async () => {
      const reqData = await fetch("http://localhost/reactgraphtutorial/marks");
      const resData = await reqData.json();
      for (let i = 0; i < resData.length; i++) {
        sSubject.push(resData[i].subject);
        sMarks.push(parseInt(resData[i].marks));
      }
      setStudentsubject(sSubject);
      setStudentMarks(sMarks);
      //console.log(resData);
    };

    getStudentdata();
  }, []);

  return (
    <React.Fragment>
        <Navbar></Navbar>
      <div className="container-fluid mb-3">
        {/* <h2>{foods.length}</h2> */}
        <Chart
          type="pie"
          width={1349}
          height={550}
          series={[cook.length,grocery.length]}
          options={{
            title: { text: "Student PieChart" },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ['cooked','grocery'],
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
