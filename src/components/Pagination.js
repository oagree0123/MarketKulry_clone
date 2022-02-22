import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PageWrap>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi
              key={number}
              className="page-item"
              onClick={() => paginate(number)}
            >
              <PageSpan className="page-link">{number}</PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </PageWrap>
  );
};

const PageUl = styled.ul`
  margin-bottom: 100px;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  vertical-align: center;
  border-radius: 3px;
  color: white;
  background-color: rgba(255, 255, 255, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  padding: 6px 0px;
  width: 34px;
  height: 34px;
  color: #4c4c4c;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #ddd;
  border-radius: 2px;

  &:hover {
    color: #5f0080;
    background-color: #eee;
    cursor: pointer;
  }
  &:focus::after {
    color: #5f0080;
    background-color: #eee;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

const PageWrap = styled.div`
  width: 200px;
  margin: 0 auto;
`;

export default Pagination;
