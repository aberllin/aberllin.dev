import styled from "styled-components";
import { Body } from "../../components/atoms/Typography";
import { posts } from "./__posts__";

const Blog = () => {
  document.title = "Aberllin: Blog";
  return (
    <Container>
      <Body size="16px">
        <b>NOTE: </b> This is the beginning of my journey in writing blog posts.
        The posts you see here are the ideas I am getting at the moment, when I
        feel excited to write about. Some might find the topics to be simple
        things to tell about, but I am happy to start writing and sharing
        anyway.
      </Body>
      <PostsContainer>
        {posts.map((post) => (
          <PostWrapper key={post.title}>
            <Date>{post.date}</Date>
            <Heading>{post.title}</Heading>
            {post.body}
          </PostWrapper>
        ))}
      </PostsContainer>
    </Container>
  );
};

const PostsContainer = styled.div`
  margin-top: 30px;
`;

const Heading = styled.h2`
  margin-top: 0;
  font-size: 26px;
  color: #c95a89;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid #1ccbb1;
`;

const Date = styled.div`
  font-size: 18px;
  margin-bottom: 2px;
  font-weight: bold;
`;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    padding-top: 150px;
    overflow: auto;
  }

  @media screen and (max-width: 400px) {
    padding-top: 120px;
  }
`;

export default Blog;
