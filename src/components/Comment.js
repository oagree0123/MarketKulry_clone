import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { actionCreators as commentActions } from "../redux/modules/comment";

const Comment = (props) => {
  const dispatch = useDispatch();

  const [check_detail, setCheckDetail] = useState(false);

  const delReview = () => {
    dispatch()
  }

  return (
    <>
      <CommentCard onClick={() => {
        setCheckDetail(!check_detail);
      }}>
        <CommentItem
          style={{
            width: "70px",
            textAlign: "center",
          }}
        >
          {props.commentId}
        </CommentItem>
        <CommentItem
          style={{
            paddingLeft: "50px",
            paddingRight: "250px",
            width: "592px",
            textAlign: "left",
          }}
        >
          {props.title}
        </CommentItem>
        <CommentItem
          style={{
            width: "51px",
            textAlign: "center",
          }}
        ></CommentItem>
        <CommentItem
          style={{
            width: "77px",
            textAlign: "left",
          }}
        >
          {props.name}
        </CommentItem>
        <CommentItem
          style={{
            width: "100px",
            textAlign: "center",
          }}
        >
          {moment(props.createdAt).format("YY-MM-DD")}
        </CommentItem>
        <CommentItem
          style={{
            width: "40px",
            textAlign: "center",
          }}
        >
          0
        </CommentItem>
        <CommentItem
          style={{
            width: "80px",
            textAlign: "center",
          }}
        >
          0123
        </CommentItem>
      </CommentCard>
      { check_detail &&
        <CommentDetail>
          <ReviewWrap>
            <ReviewTitle>{props.product_name}</ReviewTitle>
            <ReviewImg src={props.img} />
            <ReviewContent>{props.content}</ReviewContent>
          </ReviewWrap>
          <ReviewDelWrap>
            <ReviewDelBtn 
              onClick={delReview}
            >삭제하기</ReviewDelBtn>
          </ReviewDelWrap>
        </CommentDetail>
      }
    </>
  );
};

const CommentCard = styled.div`
  width: 100%;
  height: 65.8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
`;

const CommentItem = styled.div`
  padding: 25px 0px 23px 0;
  color: #4c4c4c;
  font-size: 12px;
  line-height: 140%;
  font-weight: 300;
  letter-spacing: 0px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CommentDetail = styled.div`
  padding: 10px 10px 11px 10px;
  border-bottom: 1px solid #e3e3e3;
`;

const ReviewWrap = styled.div`
  padding: 20px 9px 9px 9px;
`;

const ReviewTitle = styled.p`
  margin: 0;
  margin-bottom: 30px;
  color: #514859;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
`;

const ReviewImg = styled.img`
  margin: 0 auto;
  margin-bottom: 30px;
  display: block;
  max-width: 50%;
  max-height: 50%;
`;

const ReviewContent = styled.p`
  padding-right: 240px;
  color: #4c4c4c;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
`;

const ReviewDelWrap = styled.div`
  text-align: right;
`;

const ReviewDelBtn = styled.button`
  padding: 0px 15px;
  min-width: 105px;
  height: 30px;
  font-size: 12px;
  font-weight: 300;
  line-height: 28px;
  color: #5f0080;
  border: 1px solid #5f0080;
  background: none;
`;

export default Comment;
