import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Stack, Chip } from "@mui/material";
import SearchBar from "./SearchBar";
import actions from "../../store/actions";

const  filters = ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"];

export default function Filters({ category }) {
  const [, dispatch] = useContext(AppContext);
  return (
    <>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        <SearchBar />
      </Stack>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        {filters?.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            color={category === filter ? "secondary" : "primary"}
            onClick={() => dispatch({ type: actions.setFilter, payload: filter })}
            variant={category === filter ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </>
  );
}