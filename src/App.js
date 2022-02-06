import { Container } from "@chakra-ui/react";
import Employee from "./components/Employee";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import { Grid } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import myData from "./data.json";

function App() {
  const [employeeData, setEmployeeData] = useState(null);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [stringVal, setStringVal] = useState(null);
  const salaryRange = (index) => {
    setSelectedSalaryRange(index);
  };
  const ageRange = (index) => {
    setSelectedAgeRange(index);
  };
  const reset = (state) => {
    setFilteredData(null);
  };
  const handleItChange = (event) => {
    setStringVal(event.target.value);
  };
  useEffect(() => {
    // fetch("http://dummy.restapiexample.com/api/v1/employees", {
    //   method: "GET",
    //   redirect: "follow",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setEmployeeData(response);
    //     localStorage.setItem("fetchedData", JSON.stringify(response));
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
    setEmployeeData(myData.data);
  }, []);
  useEffect(() => {
    // if (selectedSalaryRange && selectedAgeRange) {
    //   const resSalary = employeeData.filter(function (oneEmployee) {
    //     return (
    //       oneEmployee.employee_salary >= selectedSalaryRange.start &&
    //       oneEmployee.employee_salary < selectedSalaryRange.end
    //     );
    //   });
    //   const resAge = employeeData.filter(function (oneEmployee) {
    //     return (
    //       oneEmployee.employee_age >= selectedAgeRange.start &&
    //       oneEmployee.employee_age < selectedAgeRange.end
    //     );
    //   });
    //   setFilteredData(resSalary.filter((value) => resAge.includes(value)));
    // }
    if (
      selectedSalaryRange &&
      selectedSalaryRange.start &&
      selectedSalaryRange.end
    ) {
      const res = employeeData.filter(function (oneEmployee) {
        return (
          oneEmployee.employee_salary >= selectedSalaryRange.start &&
          oneEmployee.employee_salary < selectedSalaryRange.end
        );
      });
      setFilteredData(res);
    }
    if (selectedAgeRange && selectedAgeRange.start && selectedAgeRange.end) {
      const res = employeeData.filter(function (oneEmployee) {
        return (
          oneEmployee.employee_age >= selectedAgeRange.start &&
          oneEmployee.employee_age < selectedAgeRange.end
        );
      });
      setFilteredData(res);
    }
    if (stringVal) {
      const res = employeeData.filter(function (oneEmployee) {
        return oneEmployee.employee_name.toLowerCase().match(stringVal);
      });
      setFilteredData(res);
    }
    return () => {
      // if (selectedSalaryRange && selectedAgeRange) {
      //   setSelectedSalaryRange(null);
      //   setSelectedAgeRange(null);
      // }
      if (selectedSalaryRange) setSelectedSalaryRange(null);
      if (selectedAgeRange) setSelectedAgeRange(null);
      // if (stringVal) setStringVal(null);
    };
  }, [selectedSalaryRange, selectedAgeRange, employeeData, stringVal]);
  console.log(filteredData);
  return (
    <Container padding="8" maxW="container.xl">
      <Nav handleItChange={handleItChange} />
      <Filter salaryRange={salaryRange} ageRange={ageRange} reset={reset} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {filteredData
          ? filteredData?.map((data) => <Employee data={data} key={data.id} />)
          : employeeData?.map((data) => <Employee data={data} key={data.id} />)}
      </Grid>
    </Container>
  );
}

export default App;
