(() => {
  //   const num = new Number(5);
  //   let num2 = 5;
  //   let num3 = Number(5);

  const num = 5;
  const strNum: string = num.toString();
  const str = "5";
  const numStr: number = +str;

  interface Department {
    name: string;
    budget: number;
  }

  const department: Department = {
    name: "web-dev",
    budget: 50000,
  };

  interface Project {
    name: string;
    projectBudget: number;
  }

  // const mainProject: Project = {
  //   ...department,
  //   projectBudget: 5000,
  // };

  function transfromDepartment(
    Department: Department,
    amount: number
  ): Project {
    return {
      name: department.name,
      projectBudget: amount,
    };
  }

  const mainProject = transfromDepartment(department, 40000);
})();
