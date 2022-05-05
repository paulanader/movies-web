import ReactPaginate from "react-paginate";
import styled from "styled-components";

const AdminPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin: 0 4px;

    a {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 3px;

      text-decoration: none;
      background-color: #2c5282;
      color: var(--black10);
    }

    &.selected a {
      background-color: #0d6efd;
    }

    &.previous,
    &.next {
      display: none;
    }
  }
`;

export default AdminPagination;
