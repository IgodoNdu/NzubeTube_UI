import React from 'react'
//import for styling
import styled from 'styled-components';
//import avatar_image
import avatarImage from '../img/avatar.jpg';
import Comment from './Comment';

//styling building components
const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={avatarImage} />
        <Input placeholder='Add your opinion...' />
      </NewComment>
      {/**Comment component Called */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}

export default Comments
