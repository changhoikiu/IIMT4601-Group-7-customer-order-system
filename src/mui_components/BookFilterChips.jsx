import * as React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/joy/Box";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Typography from "@mui/joy/Typography";

const filterCriteria = [
  { id: 0, label: "二手書架" },
  { id: 1, label: "電影/戲劇" },
  { id: 2, label: "城市地理" },
  { id: 3, label: "雜誌/期刊" },
  { id: 4, label: "文學" },
  { id: 5, label: "文化/藝術理論" },
  { id: 6, label: "中國研究" },
  { id: 7, label: "台灣研究" },
  { id: 8, label: "亞太研所" },
  { id: 9, label: "香港研究" },
  { id: 10, label: "宗教/神學" },
  { id: 11, label: "哲學" },
  { id: 12, label: "精神分析" },
  { id: 13, label: "中國哲學" },
  { id: 14, label: "政治哲學" },
  { id: 15, label: "性別研究" },
  { id: 16, label: "次文化" },
  { id: 17, label: "同人誌" },
  { id: 18, label: "歷史與政治" },
  { id: 19, label: "社會/文化/經濟" },
  { id: 20, label: "邏輯/思維" },
  { id: 21, label: "Hong Kong Studies" },
  { id: 22, label: "Social science and history" },
  { id: 23, label: "Philosophy" },
  { id: 24, label: "Urban studies" },
  { id: 25, label: "Novel" },
  { id: 26, label: "Literature" },
];

export default function FilterChips({ selected, setSelected }) {
  const handleChipClick = (label) => {
    if (selected.includes(label)) {
      setSelected(selected.filter((v) => v !== label));
    } else {
      setSelected([...selected, label]);
    }
  };

  return (
    <Box
      className='filter-box'
      sx={{
        display: "flexbox",
        flexWrap: "wrap",
        marginTop: 2,
      }}
    >
      <Typography>
        Filter
      </Typography>
      {filterCriteria.map((criterion) => {
        const chipSelected = selected.includes(criterion.label);
        return (
          <Chip
            key={criterion.id}
            label={criterion.label}
            onClick={() => handleChipClick(criterion.label)}
            color={chipSelected ? "primary" : "default"}
            variant={chipSelected ? "soft" : "outlined"}
            sx={{ m: 0.5 }}
          />
        );
      })}
    </Box>
  );
}
