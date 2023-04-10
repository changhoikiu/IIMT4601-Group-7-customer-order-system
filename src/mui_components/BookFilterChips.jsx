import * as React from 'react';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/joy/Typography';

// const filterCriteria = ["二手書架", "電影/戲劇", "城市地理", "雜誌/期刊", "文學", "文化 藝術理論", "中國研究", "台灣研究", "亞太研所", "香港研究", "宗教 神學", "哲學", "精神分析", "中國哲學", "政治 哲學", "性別研究", "次文化", "同人誌", "歷史與政治", "社會 文化 經濟", "Literature", "Hong Kong Studies", "Social science and history", "Philosophy", "Urban studies"];
const filterCriteria = [
  { "id": 0, "label": "二手書架" },
  { "id": 1, "label": "電影/戲劇" },
  { "id": 2, "label": "城市地理" },
  { "id": 3, "label": "雜誌/期刊" },
  { "id": 4, "label": "文學" },
  { "id": 5, "label": "文化 藝術理論" },
  { "id": 6, "label": "中國研究" },
  { "id": 7, "label": "台灣研究" },
  { "id": 8, "label": "亞太研所" },
  { "id": 9, "label": "香港研究" },
  { "id": 10, "label": "宗教 神學" },
  { "id": 11, "label": "哲學" },
  { "id": 12, "label": "精神分析" },
  { "id": 13, "label": "中國哲學" },
  { "id": 14, "label": "政治哲學" },
  { "id": 15, "label": "性別研究" },
  { "id": 16, "label": "次文化" },
  { "id": 17, "label": "同人誌" },
  { "id": 18, "label": "歷史與政治" },
  { "id": 19, "label": "社會 文化 經濟" },
  { "id": 20, "label": "Literature" },
  { "id": 21, "label": "Hong Kong Studies" },
  { "id": 22, "label": "Social science and history" },
  { "id": 23, "label": "Philosophy" },
  { "id": 24, "label": "Urban studies" }
];

export default function FilterChips({selected, setSelected}) {

  const handleChipClick = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((v) => v !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flexbox',
        flexWrap: 'wrap',
      }}
    >
      <Typography level="h4" fontSize="lg" id="card-description" my={1}>
        Filter
      </Typography>
      {filterCriteria.map((criterion) => {
        const chipSelected = selected.includes(criterion.id);
        return (
          <Chip
            key={criterion.id}
            selected={chipSelected}
            onClick={() => handleChipClick(criterion.id)}
            variant={chipSelected ? 'solid' : 'soft'}
            sx={{ 
              m: 0.5,
            }}
            endDecorator={chipSelected && <CloseRoundedIcon />}
          >
            {criterion.label}
          </Chip>
        );
      })}
    </Box>
  );
}