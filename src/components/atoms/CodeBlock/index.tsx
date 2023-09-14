import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { styled } from "styled-components";

type Props = {
  children: string;
};
const CodeBlock: React.FC<Props> = ({ children }) => (
  <Container
    language="javascript"
    style={darcula}
    customStyle={{ padding: "30px", margin: "15px 0" }}
  >
    {children}
  </Container>
);

const Container = styled(SyntaxHighlighter)`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
`;

export default CodeBlock;
