import {styled} from "@mui/material";


export const Table = styled('table')`
    min-width: 1000px;
    border-collapse: collapse;
    color:  ${props => props.theme.palette.text.primary};
    background: ${props => props.theme.palette.divider};
    margin: 0 auto;
`;


export const Thead = styled('thead')`
    height: 2.5rem;
    border: 1px solid red;
`;


export const TbodyTr = styled('tr')`
    height: 2rem;
    border-bottom: 1px solid blue;
    &:hover {
    background-color: ${props => props.theme.palette.background.paper};
  }
`;