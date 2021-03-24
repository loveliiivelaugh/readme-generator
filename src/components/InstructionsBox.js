
const InstructionsBox = (props) => {
  return (
    <div>
      <h6>Markdown Tips:</h6>
      <ul>
        <li>To <strong>bolden</strong> the text, wrap it with two asterisks (**) (<strong>**word**</strong>)</li>
        <li>To <i>italisize</i> the text, wrap it with one asterisk (*) (<i>*word*</i>)</li>
        <li>To <s>strikethrough</s> the text, wrap it with two tildes (~~) (<s>~~word~~</s>)</li>
        <li>To make a <a href="#">link</a>, place the link text in brackets and the url in parentheses ([<a href="#">link</a>](<a href="#">http://example.com</a>))</li>
        <li>To make an example icon image, place an !, the alt text in brackets, and the url in parentheses (![github](<a href="#">/images/icon.png</a>))</li>
      </ul>
    </div>
  )
}

export default InstructionsBox;