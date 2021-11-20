import * as React from 'react';
import {Table, Thead, TbodyTr} from './TabelaPura.style'


 const TabelaPura = () => {
    return (
        <Table>
            <Thead>
                <tr>
                    <td>Modeda</td>
                    <td>Investimento</td>
                    <td scope="col" >Lucro</td>
                </tr>
            </Thead>
            <tbody>
                <TbodyTr>
                   <td>aa</td>
                   <td>bbb</td>
                   <td>cc</td>
                </TbodyTr>
                <TbodyTr>
                    <td>dd</td>
                   <td>eee</td>
                   <td>fff</td>
                </TbodyTr>
            </tbody>
        </Table>
    )
}

export default TabelaPura;
