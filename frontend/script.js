const employees = [
    {
        name: "Santhosh",
        role: "Cloud Engineer"
    
    },
    {
        name: "Ganesh",
        role: "DevOps Engineer"
    }
];


function displayEmployees() {

    const list = document.getElementById("employeeList");

    list.innerHTML = "";

    employees.forEach(employee => {

        const div = document.createElement("div");

        div.className = "employee";

        div.innerHTML = `
            <strong>${employee.name}</strong>
            - ${employee.role}
            
        `;

        list.appendChild(div);

    });
}


function addEmployee() {

    const name =
        document.getElementById("name").value;

    const role =
        document.getElementById("role").value;

      if (name === "" || role === "") {

        alert("Please enter name and role");

        return;
    }

    employees.push({
        name: name,
        role: role,
        empid: empid,
    });

    displayEmployees();

    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
   
}


displayEmployees();