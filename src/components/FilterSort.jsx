import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { filter } from '@chakra-ui/react';

// const filterCriteria = ["二手書架", "電影/戲劇", "城市地理", "雜誌/期刊", "文學", "文化 藝術理論", "中國研究", "台灣研究", "亞太研所", "香港研究", "宗教 神學", "哲學", "精神分析", "中國哲學", "政治哲學", "性別研究", "次文化", "同人誌", "歷史與政治", "社會 文化 經濟", "Literature", "Hong Kong Studies", "Social science and history", "Philosophy", "Urban studies"];
const filterCriteria = [{ "value": 0, "label": "二手書架" }, { "value": 1, "label": "電影/戲劇" }, { "value": 2, "label": "城市地理" }, { "value": 3, "label": "雜誌/期刊" }, { "value": 4, "label": "文學" }, { "value": 5, "label": "文化 藝術理論" }, { "value": 6, "label": "中國研究" }, { "value": 7, "label": "台灣研究" }, { "value": 8, "label": "亞太研所" }, { "value": 9, "label": "香港研究" }, { "value": 10, "label": "宗教 神學" }, { "value": 11, "label": "哲學" }, { "value": 12, "label": "精神分析" }, { "value": 13, "label": "中國哲學" }, { "value": 14, "label": "政治哲學" }, { "value": 15, "label": "性別研究" }, { "value": 16, "label": "次文化" }, { "value": 17, "label": "同人誌" }, { "value": 18, "label": "歷史與政治" }, { "value": 19, "label": "社會 文化 經濟" }, { "value": 20, "label": "Literature" }, { "value": 21, "label": "Hong Kong Studies" }, { "value": 22, "label": "Social science and history" }, { "value": 23, "label": "Philosophy" }, { "value": 24, "label": "Urban studies" }];
const sortingCriteria = {
  1: 'Latest',
  2: 'Oldest',
  3: 'Price (ascending)',
  4: 'Price (descending)'
}

export default function CheckboxesGroup() {

  const [state, setState] = React.useState({
    二手書架: false,
    電影戲劇: false,
    城市地理: false,
    雜誌期刊: false,
    文學: false,
    文化藝術理論: false,
    中國研究: false,
    台灣研究: false,
    亞太研究: false,
    香港研究: false,
    宗教神學: false,
    哲學: false,
    精神分析: false,
    中國哲學: false,
    政治哲學: false,
    性別研究: false,
    次文化: false,
    同人誌: false,
    歷史與政治: false,
    社會文化經濟: false,
    Literature: false,
    HongKongStudies: false,
    Socialscienceandhistory: false,
    Philosophy: false,
    Urbanstudies: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    二手書架,
    電影戲劇,
    城市地理,
    雜誌期刊,
    文學,
    文化藝術理論,
    中國研究,
    台灣研究,
    亞太研究,
    香港研究,
    宗教神學,
    哲學,
    精神分析,
    中國哲學,
    政治哲學,
    性別研究,
    次文化,
    同人誌,
    歷史與政治,
    社會文化經濟,
    Literature,
    HongKongStudies,
    Socialscienceandhistory,
    Philosophy,
    Urbanstudies
  } = state;

  return (
    <FormControl sx={{ml: 3}} component="fieldset" variant="standard">
      <FormLabel component="legend" sx={{my:3}}>Filter</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={電影戲劇} onChange={handleChange} name="電影戲劇" />
          }
          label="電影戲劇"
        />
        <FormControlLabel
          control={
            <Checkbox checked={城市地理} onChange={handleChange} name="城市地理" />
          }
          label="城市地理"
        />
        <FormControlLabel
          control={
            <Checkbox checked={雜誌期刊} onChange={handleChange} name="雜誌期刊" />
          }
          label="雜誌期刊"
        />
        <FormControlLabel
          control={
            <Checkbox checked={文學} onChange={handleChange} name="文學" />
          }
          label="文學"
        />
        <FormControlLabel
          control={
            <Checkbox checked={文化藝術理論} onChange={handleChange} name="文化藝術理論" />
          }
          label="文化藝術理論"
        />
        <FormControlLabel
          control={
            <Checkbox checked={中國研究} onChange={handleChange} name="中國研究" />
          }
          label="中國研究"
        />
        <FormControlLabel
          control={
            <Checkbox checked={台灣研究} onChange={handleChange} name="台灣研究" />
          }
          label="台灣研究"
        />
        <FormControlLabel
          control={
            <Checkbox checked={亞太研究} onChange={handleChange} name="亞太研究" />
          }
          label="亞太研究"
        />
        <FormControlLabel
          control={
            <Checkbox checked={香港研究} onChange={handleChange} name="香港研究" />
          }
          label="香港研究"
        />
        <FormControlLabel
          control={
            <Checkbox checked={宗教神學} onChange={handleChange} name="宗教神學" />
          }
          label="宗教神學"
        />
        <FormControlLabel
          control={
            <Checkbox checked={哲學} onChange={handleChange} name="哲學" />
          }
          label="哲學"
        />
        <FormControlLabel
          control={
            <Checkbox checked={精神分析} onChange={handleChange} name="精神分析" />
          }
          label="精神分析"
        />
        <FormControlLabel
          control={
            <Checkbox checked={中國哲學} onChange={handleChange} name="中國哲學" />
          }
          label="中國哲學"
        />
        <FormControlLabel
          control={
            <Checkbox checked={政治哲學} onChange={handleChange} name="政治哲學" />
          }
          label="政治哲學"
        />
        <FormControlLabel
          control={
            <Checkbox checked={性別研究} onChange={handleChange} name="性別研究" />
          }
          label="性別研究"
        />
        <FormControlLabel
          control={
            <Checkbox checked={次文化} onChange={handleChange} name="次文化" />
          }
          label="次文化"
        />
        <FormControlLabel
          control={
            <Checkbox checked={同人誌} onChange={handleChange} name="同人誌" />
          }
          label="同人誌"
        />
        <FormControlLabel
          control={
            <Checkbox checked={歷史與政治} onChange={handleChange} name="歷史與政治" />
          }
          label="歷史與政治"
        />
        <FormControlLabel
          control={
            <Checkbox checked={社會文化經濟} onChange={handleChange} name="社會文化經濟" />
          }
          label="社會文化經濟"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Literature} onChange={handleChange} name="Literature" />
          }
          label="Literature"
        />
        <FormControlLabel
          control={
            <Checkbox checked={HongKongStudies} onChange={handleChange} name="HongKongStudies" />
          }
          label="Hong Kong Studies"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Socialscienceandhistory} onChange={handleChange} name="Socialscienceandhistory" />
          }
          label="Social Science and History"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Philosophy} onChange={handleChange} name="Philosophy" />
          }
          label="Philosophy"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Urbanstudies} onChange={handleChange} name="Urbanstudies" />
          }
          label="Urban Studies"
        />
      </FormGroup>
    </FormControl>
  );
}