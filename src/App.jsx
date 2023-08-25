import { useState } from 'react';
import { marked } from 'marked';
import './App.css';
marked.setOptions({
  breaks: true
})
const renderer = new marked.Renderer()
function App() {
  const codeBlock =
    '`' +
    '`' +
    '`' +
    `
  function anotherExample(firstLine, lastLine) {
    if (firstLine == 'a' && lastLine == 'a') {
      return multiLineCode;
    }
  }
  ` +
    '`' +
    '`' +
    '`' +
    `
  `;
  const list = `
  - And of course there are lists.
  - Some are bulleted.
  - With different indentation levels.
  - That look like this.
  `;
  const heading = `
  # h1 Heading
  `;
  const heading2 = `
  ## h2 Heading
  `;
  const link = `
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  `;
  const code = 'Heres some code,  `<div></div>,` between 2 backticks.';
  const bold = `
  You can also make text **bold**... whoa!
  `;
  const image = `\n![freeCodeCamp Logo](https://thumbs.dreamstime.com/b/four-cute-cats-20650677.jpg)\n`;
  const initialValue = [heading, heading2, link, codeBlock, code, list, bold, image];
  console.log(list);
  const [textareaValue, setTextareaValue] = useState(initialValue.join(' '));
  return (
    <>
      <div className='container'>
        <textarea name='editor' className='editor' id='editor' cols={30} rows={10} onChange={e => setTextareaValue(e.target.value)} value={textareaValue}></textarea>
        <div className='preview' >
          <Preview markdown={textareaValue} />
        </div>
      </div>
    </>
  );
}

function Preview({ markdown }) {
  return (
    <div id='preview'
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }}
    >
    </div>
  )

}
export default App;
