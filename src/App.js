import { useEffect, useState } from "react";
import Employee from "./components/Employee";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import { Grid, Container } from "@chakra-ui/react";

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
  const reset = () => {
    setStringVal("");
    setFilteredData(null);
  };
  const handleItChange = (event) => {
    setStringVal(event.target.value);
  };
  useEffect(() => {
    fetch("https://61ffc91d5e1c4100174f6f6b.mockapi.io/employee", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setEmployeeData(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  useEffect(() => {
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
        return oneEmployee.employee_name
          .toLowerCase()
          .match(stringVal.toLowerCase());
      });
      setFilteredData(res);
    }
    return () => {
      if (selectedSalaryRange) setSelectedSalaryRange(null);
      if (selectedAgeRange) setSelectedAgeRange(null);
    };
  }, [selectedSalaryRange, selectedAgeRange, employeeData, stringVal]);

  return (
    <Container padding="8" maxW="container.xl">
      <Nav
        handleItChange={handleItChange}
        defaultValue={stringVal}
        reset={reset}
      />
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
        {filteredData && !filteredData?.length ? <p>No results :/</p> : ""}
      </Grid>
    </Container>
  );
}

export default App;
