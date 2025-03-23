import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./basicTable.css";
import { DataContext } from "../../context/DataContextProvider";

export default function BasicTable() {
  const { trackData } = React.useContext(DataContext);
  const rows = trackData.data.trackings[0].events;
  return (
    <TableContainer component={Paper} className="basicTable">
      <Table
        stickyHeader
        sx={{ minWidth: 650, maxHeight: 800 }}
        aria-label="stucky table"
      >
        <TableHead>
          <TableRow>
            {[
              "EventId",
              "TrackingNumber",
              "EventTrackingNumber",
              "Status",
              "OccurrenceDatetime",
              "Order",
              "Location",
              "SourceCode",
              "CourierCode",
              "StatusCode",
              "StatusCategory",
              "StatusMilestone",
            ].map((header) => (
              <TableCell
                key={header}
                sx={{
                  fontWeight: "bold",
                  fontSize: 18,
                  whiteSpace: "nowrap",
                  width: "auto",
                }}
                align="right"
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.eventId}>
              <TableCell
                component="th"
                scope="row"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.eventId}
              </TableCell>
              <TableCell
                align="right"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.trackingNumber}
              </TableCell>
              <TableCell
                align="right"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.eventTrackingNumber}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", whiteSpace: "nowrap", width: "auto" }}
                align="right"
              >
                {row.status}
              </TableCell>
              <TableCell
                align="right"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.occurrenceDatetime}
              </TableCell>
              <TableCell
                align="right"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.order}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", whiteSpace: "nowrap", width: "auto" }}
                align="right"
              >
                {row.location}
              </TableCell>
              <TableCell
                align="right"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.sourceCode}
              </TableCell>
              <TableCell
                align="right"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.courierCode}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", whiteSpace: "nowrap", width: "auto" }}
                align="right"
              >
                {row.statusCode}
              </TableCell>
              <TableCell
                align="right"
                sx={{ whiteSpace: "nowrap", width: "auto" }}
              >
                {row.statusCategory}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", whiteSpace: "nowrap", width: "auto" }}
                align="right"
              >
                {row.statusMilestone}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
