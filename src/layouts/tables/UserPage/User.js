/* eslint-disable prettier/prettier */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { DataGrid} from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'S.N.', width: 100 },
    { field: 'UserName', headerName: 'UserName ', width: 180 },
    { field: 'Email', headerName: ' Email ', width: 250 },
    { field: 'Status', headerName: ' Status ', width: 150 },
  ];
  const rows = [
    { id: 1, Email: 'test@gmail.com', UserName: 'Test', Status: "Active"},
    { id: 2, Email: 'anas@gmail.com', UserName: 'Anas', Status: "InActive" },
    { id: 3, Email: 'jon@gmail.com', UserName: 'Jon' , Status: "Active"},
    { id: 4, Email: 'jaime@gmail.com', UserName: 'jaime', Status: "InActive" },
    { id: 5, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 6, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 7, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 8, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 9, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 10, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 11, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 12, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 13, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 14, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 15, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 16, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 17, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
    { id: 18, Email: 'Arya@gmail.com', UserName: 'Arya', Status: "Active" },
   ];

function User() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <>
        <div style={{ height: 400, width: "80%", marginLeft: "2rem"}}>
          <DataGrid style={{paddingTop: "10px"}}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>

        
      </>
      <Footer />
    </DashboardLayout>
  );
}
export default User;
