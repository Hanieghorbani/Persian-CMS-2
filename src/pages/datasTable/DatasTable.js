import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import "./DatasTable.css"
import { rowsMUI,columnsMUI } from "../../datas"
import SearchBox from "../../components/searchBox/SearchBox"
export default function DatasTable() {
  return (
    <div className="datasTable m-3">
      <div className="rounded p-4 bgMain text-secondary">
      <SearchBox/>
        <DataGrid
          rows={rowsMUI}
          columns={columnsMUI}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          style={{ color: "gray" ,fontSize:'19px',marginTop:'2rem'}}
        />
      </div>
    </div>
  )
}
