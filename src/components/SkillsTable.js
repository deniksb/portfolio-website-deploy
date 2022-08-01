import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import {Table} from 'react-bootstrap'

const Styles = styled.div`
.skills-table{
    background-color: #dddae2;
    table-layout: auto;
}
`;

export const SkillsTable = () => (
    <Styles>
  <Table className='skills-table'  wrapperClasses="table-responsive" striped bordered hover>
      <thead>
        <tr>
          <th>Technology</th>
          <th>Skill Level</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Java</td>
          <td>Intermediate</td>
          
        </tr>
        <tr>
          
          <td>Java Spring Boot</td>
          <td>Intermediate</td>
          
        </tr>
        <tr>
          
          <td>JavaScript</td>
          <td>Intermediate</td>
        </tr>
        <tr>
          
          <td>MySQL</td>
          <td>Intermediate</td>
        </tr>
        <tr>
          
          <td>HTML</td>
          <td>Intermediate</td>
        </tr>
        <tr>
          
          <td>CSS</td>
          <td>Intermediate</td>
        </tr>
        <tr>
          
          <td>Bootstrap</td>
          <td>Intermediate</td>
        </tr>
        <tr>
          
          <td>React</td>
          <td>Intermediate</td>
        </tr>
        <tr>
          
          <td>PHP</td>
          <td>Beginner</td>
        </tr>
        <tr>
          
          <td>Python</td>
          <td>Beginner</td>
        </tr>
        <tr>
          
          <td>SCRUM</td>
          <td>Beginner</td>
        </tr>
        <tr>
          
          <td>Agile</td>
          <td>Beginner</td>
        </tr>
      </tbody>
    </Table>
    </Styles>
)