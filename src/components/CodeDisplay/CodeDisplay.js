import React from 'react'
import styled from 'styled-components'
import CodeHighlight from 'code-highlight'
import './code-styles.css'

const CodeWrapper = styled(CodeHighlight)`
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 4px;
`

export default class CodeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileText: ''
    }
  }

  componentWillMount() {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", this.props.fileUrl, false);
    rawFile.onreadystatechange = () => {
      if(rawFile.readyState === 4 &&
        (rawFile.status === 200 ||  rawFile.status === 0)
      ) {
        this.setState({ fileText: rawFile.responseText });
      }
    }
    rawFile.send(null);
  }

  render() {
    return (
      <CodeWrapper language={this.props.language}>
        {this.state.fileText || '// No code sample available for this pattern'}
      </CodeWrapper>
    )
  }
}
