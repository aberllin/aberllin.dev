/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Body } from "../../../components/atoms/Typography";
import CodeBlock from "../../../components/atoms/CodeBlock";

type Post = {
  date: string;
  title: string;
  body: React.ReactNode;
};

const Highlighter = styled.code`
  color: #1ccbb1;
`;

export const posts: Array<Post> = [
  {
    title:
      "- Did you know you can apply styles in the console.log? Here’s how: ",
    body: (
      <>
        <Body>
          In JavaScript, the <Highlighter>&#x25;c</Highlighter> is a format
          specifier used in the <Highlighter>console.log()</Highlighter>{" "}
          function to apply CSS styles to the output in some web browsers.
        </Body>
        <Body>
          The <Highlighter>&#x25;c</Highlighter> format specifier is followed by
          a CSS style declaration as a second argument to{" "}
          <Highlighter>console.log()</Highlighter>. The CSS styles specified
          will be applied to the subsequent message logged to the console.
        </Body>
        <Highlighter>Here is an example of usage:</Highlighter>
        <CodeBlock>
          {`console.log(<span style={{color: 'blue', fontSize: '20px'}}>Hello, World!</span>);`}
        </CodeBlock>
        <Body>
          In this example, the <Highlighter>&#x25;c</Highlighter> format
          specifier is used to define a CSS style for the message "Hello,
          World!". The style declaration{" "}
          <Highlighter>color: blue; font-size: 20px;</Highlighter> is applied to
          the message, making it appear in blue color and with a font size of 20
          pixels when logged to the console.
        </Body>
        <Body>
          Note that <Highlighter>&#x25;c</Highlighter> is specific to some web
          browsers, like Chrome and Firefox, and may not be supported in all
          environments or console implementations. If the browser or console
          does not support this feature, the <Highlighter>&#x25;c</Highlighter>{" "}
          specifier will be treated as a regular string literal.
        </Body>
      </>
    ),
    date: "07-16-2023",
  },

  {
    date: "07-16-2023",
    title: "- Codewars: convert arabic numerals to Roman numerals",
    body: (
      <>
        <Body>
          First, I needed to understand how it even worked. I vaguely recalled
          the basics from school, but when it came to large numbers, I was not
          quite sure. So, after spending some time reading about it, I came up
          with the following function to convert the numerals:
        </Body>

        <CodeBlock>
          {`const thousandsMap = {
  1: 'M',
  2: 'MM',
  3: 'MMM'
};

const hundredsMap = {
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM'
};

const dozensMap = {
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC',
};

const below10Map = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
};

function solution(number) {
  const numberLength = number.toString().length;
  const splitted = number.toString().split('');

  if (numberLength === 4) {
    const result = [thousandsMap[splitted[0]], hundredsMap[splitted[1]], dozensMap[splitted[2]], below10Map[splitted[3]]];
    return result.join('');
  }

  if (numberLength === 3) {
    const result = [hundredsMap[splitted[0]], dozensMap[splitted[1]], below10Map[splitted[2]]];
    return result.join('');
  }

  if (numberLength === 2) {
    const result = [dozensMap[splitted[0]], below10Map[splitted[1]]];
    return result.join('');
  }

  return below10Map[splitted[0]];
}`}
        </CodeBlock>
        <Body>
          I was quite satisfied with the result and the fact that I managed to
          avoid multiple if-else conditions. However, after submitting it, I
          discovered even cleaner and more clever solutions. There is still so
          much more to learn!
        </Body>

        <Body>
          Stay tuned for more exciting discoveries and coding adventures!
        </Body>
      </>
    ),
  },
];
