import styled from 'styled-components';

const List = styled.ul`
text-align: center;
width: 300px;
margin: 0 auto;
list-style:none;
& li:not(:last-child) {
margin-bottom: 20px;
}
`;
List.Container = styled.div`
text-align: center;
& h2 {
    margin: 30px 0;
    font-size: 40px;
    color: gray;
}
`;
export default List;