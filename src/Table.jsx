import React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ThemeProvider, createTheme } from "@mui/material";

const Tables = ({users}) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Exo 2"].join(",")
    }
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // fontFamily: `Inter sans-serif`,
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "13px",
      // fontFamily: "Exo 2, !important",
      /* identical to box height, or 150% */
      alignItems: "center",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "#1E1B39",
      borderBottom: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      backgroundColor: "#F3F6FF",
      fontFamily: theme?.typography?.fontFamily
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "12px",
      fontWeight: 400,
      fontFamily: theme?.typography?.fontFamily,
      border: 0,
      color: "#1E1B39",
      flexWrap: "wrap"
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#ffffff",
      cursor: "pointer",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    "&:nth-of-type(odd)": {
      cursor: "pointer",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));
  return (
    <TableContainer
      // component={Paper}
      style={{ boxShadow: "none" }}
    >
      <Table
        sx={{ minWidth: 700, tableLayout: "auto" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow style={{ paddingRight: "0px" }}>
            <StyledTableCell style={{ width: "20%" }}>EMAIL</StyledTableCell>
            <StyledTableCell style={{ width: "20%" }}>GENDER</StyledTableCell>
            <StyledTableCell style={{ width: "20%" }}>
             NAMES
            </StyledTableCell>
            <StyledTableCell style={{ width: "20%" }}>
              AGE
            </StyledTableCell>
            <StyledTableCell style={{ width: "20%" }}>
              NATIONALITY
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users?.map((item) =>
                <StyledTableRow>
                    <StyledTableCell style={{ width: "20%" }}>{item?.email}</StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>{item?.gender}</StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>{item?.name?.first}{item?.name?.last}</StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>{item?.dob?.age}</StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>{item?.location?.country}</StyledTableCell>
                </StyledTableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
