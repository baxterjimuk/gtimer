import './AllHTML5.css';
export default function AllHTML5() {
  return (
    <div>
      <div>
        <table>
          <caption>Table Caption</caption>
          <thead>
            <tr>
              <th>Table Heading 1</th>
              <th>Table Heading 2</th>
              <th>Table Heading 3</th>
              <th>Table Heading 4</th>
              <th>Table Heading 5</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Table Footer 1</th>
              <th>Table Footer 2</th>
              <th>Table Footer 3</th>
              <th>Table Footer 4</th>
              <th>Table Footer 5</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Table Cell 1</td>
              <td>Table Cell 2</td>
              <td>Table Cell 3</td>
              <td>Table Cell 4</td>
              <td>Table Cell 5</td>
            </tr>
            <tr>
              <td>Table Cell 1</td>
              <td>Table Cell 2</td>
              <td>Table Cell 3</td>
              <td>Table Cell 4</td>
              <td>Table Cell 5</td>
            </tr>
            <tr>
              <td>Table Cell 1</td>
              <td>Table Cell 2</td>
              <td>Table Cell 3</td>
              <td>Table Cell 4</td>
              <td>Table Cell 5</td>
            </tr>
            <tr>
              <td>Table Cell 1</td>
              <td>Table Cell 2</td>
              <td>Table Cell 3</td>
              <td>Table Cell 4</td>
              <td>Table Cell 5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p><a href="#!">This is a text link</a>.</p>
        <p><strong>Strong is used to indicate strong importance.</strong></p>
        <p><em>This text has added emphasis.</em></p>
        <p>The <b>b element</b> is stylistically different text from normal text, without any special importance.</p>
        <p>The <i>i element</i> is text that is offset from the normal text.</p>
        <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.</p>
        <p><del>This text is deleted</del> and <ins>This text is inserted</ins>.</p>
        <p><s>This text has a strikethrough</s>.</p>
        <p>Superscript<sup>®</sup>.</p>
        <p>Subscript for things like H<sub>2</sub>O.</p>
        <p><small>This small text is small for fine print, etc.</small></p>
        <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
        <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q></p>
        <p><cite>This is a citation.</cite></p>
        <p>The <dfn>dfn element</dfn> indicates a definition.</p>
        <p>The <mark>mark element</mark> indicates a highlight.</p>
        <p>The <var>variable element</var>, such as <var>x</var> = <var>y</var>.</p>
        <p>The time element: <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time></p>
      </div>
      <div>
        <header><h2>Form elements</h2></header>
        <form>
          <fieldset id="forms__input">
            <legend>Input fields</legend>
            <p>
              <label htmlFor="input__text">Text Input</label>
              <input id="input__text" type="text" placeholder="Text Input" />
            </p>
            <p>
              <label htmlFor="input__password">Password</label>
              <input id="input__password" type="password" placeholder="Type your Password" />
            </p>
            <p>
              <label htmlFor="input__webaddress">Web Address</label>
              <input id="input__webaddress" type="url" placeholder="https://yoursite.com" />
            </p>
            <p>
              <label htmlFor="input__emailaddress">Email Address</label>
              <input id="input__emailaddress" type="email" placeholder="name@email.com" />
            </p>
            <p>
              <label htmlFor="input__phone">Phone Number</label>
              <input id="input__phone" type="tel" placeholder="(999) 999-9999" />
            </p>
            <p>
              <label htmlFor="input__search">Search</label>
              <input id="input__search" type="search" placeholder="Enter Search Term" />
            </p>
            <p>
              <label htmlFor="input__text2">Number Input</label>
              <input id="input__text2" type="number" placeholder="Enter a Number" />
            </p>
            <p>
              <label htmlFor="input__file">File Input</label>
              <input id="input__file" type="file" />
            </p>
          </fieldset>
          <p><a href="#top">[Top]</a></p>
          <fieldset id="forms__select">
            <legend>Select menus</legend>
            <p>
              <label htmlFor="select">Select</label>
              <select id="select">
                <optgroup label="Option Group">
                  <option>Option One</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </optgroup>
              </select>
            </p>
            <p>
              <label htmlFor="select_multiple">Select (multiple)</label>
              <select id="select_multiple" multiple="multiple">
                <optgroup label="Option Group">
                  <option>Option One</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </optgroup>
              </select>
            </p>
          </fieldset>
          <p><a href="#top">[Top]</a></p>
          <fieldset id="forms__checkbox">
            <legend>Checkboxes</legend>
            <ul>
              <li><label htmlFor="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"/> Choice A</label></li>
              <li><label htmlFor="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"/> Choice B</label></li>
              <li><label htmlFor="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"/> Choice C</label></li>
            </ul>
          </fieldset>
          <p><a href="#top">[Top]</a></p>
          <fieldset id="forms__radio">
            <legend>Radio buttons</legend>
            <ul>
              <li><label htmlFor="radio1"><input id="radio1" name="radio" type="radio" checked="checked"/> Option 1</label></li>
              <li><label htmlFor="radio2"><input id="radio2" name="radio" type="radio"/> Option 2</label></li>
              <li><label htmlFor="radio3"><input id="radio3" name="radio" type="radio"/> Option 3</label></li>
            </ul>
          </fieldset>
          <p><a href="#top">[Top]</a></p>
          <fieldset id="forms__textareas">
            <legend>Textareas</legend>
            <p>
              <label htmlFor="textarea">Textarea</label>
              <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here"></textarea>
            </p>
          </fieldset>
          <p><a href="#top">[Top]</a></p>
          <fieldset id="forms__html5">
            <legend>HTML5 inputs</legend>
            <p>
              <label htmlFor="ic">Color input</label>
              <input type="color" id="ic" value="#000000" />
            </p>
            <p>
              <label htmlFor="in">Number input</label>
              <input type="number" id="in" min="0" max="10" value="5" />
            </p>
            <p>
              <label htmlFor="ir">Range input</label>
              <input type="range" id="ir" value="10" />
            </p>
            <p>
              <label htmlFor="idd">Date input</label>
              <input type="date" id="idd" value="1970-01-01" />
            </p>
            <p>
              <label htmlFor="idm">Month input</label>
              <input type="month" id="idm" value="1970-01" />
            </p>
            <p>
              <label htmlFor="idw">Week input</label>
              <input type="week" id="idw" value="1970-W01" />
            </p>
            <p>
              <label htmlFor="idt">Datetime input</label>
              <input type="datetime" id="idt" value="1970-01-01T00:00:00Z" />
            </p>
            <p>
              <label htmlFor="idtl">Datetime-local input</label>
              <input type="datetime-local" id="idtl" value="1970-01-01T00:00" />
            </p>
            <p>
              <label htmlFor="idl">Datalist</label>
              <input type="text" id="idl" list="example-list" />
              <datalist id="example-list">
                <option value="Example #1" />
                <option value="Example #2" />
                <option value="Example #3" />
              </datalist>
            </p>
          </fieldset>
          <p><a href="#top">[Top]</a></p>
          <fieldset id="forms__action">
            <legend>Action buttons</legend>
            <p>
              <input type="submit" value="<input type=submit>" />
              <input type="button" value="<input type=button>" />
              <input type="reset" value="<input type=reset>" />
              <input type="submit" value="<input disabled>" disabled/>
            </p>
            <p>
              <button type="submit">&lt;button type=submit&gt;</button>
              <button type="button">&lt;button type=button&gt;</button>
              <button type="reset">&lt;button type=reset&gt;</button>
              <button type="button" disabled>&lt;button disabled&gt;</button>
            </p>
          </fieldset>
          <p><a href="#top">[Top]</a></p>
        </form>
      </div>
    </div>
  )
}