import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg'

export default {
  title: 'Components/Forms'
}

const input_email_html = `
<form>
  <div class="mb-4">
    <label for="email" class="form-label">Email<span class="text-muted fw-normal ms-1">(required)</span></label>
    <div id="emailHelpBlock" class="form-text">Please enter an email (not school)</div>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" aria-describedby="emailHelpBlock">
  </div>
</form>
<br><br>
<form>
  <div class="mb-4 is-invalid">
    <label for="email2" class="form-label">Email<span class="text-danger fw-normal ms-1">(required)</span></label>
    <div class="invalid-feedback">
      <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
        <use xlink:href="${iconSprite}#tabler-alert-circle" />
      </svg>This field is required.
    </div>
    <div id="email2HelpBlock" class="form-text">Please enter an email (not school)</div>
    <input type="email" class="form-control is-invalid" id="email2" placeholder="name@example.com" aria-describedby="email2HelpBlock">
  </div>
</form>
`

export const InputEmail = () => `<div>${input_email_html}</div>`

InputEmail.storyName = '[type="email"]'

InputEmail.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${input_email_html}
  \`\`\`

  `
}

const select_html = `
<form>
  <div class="mb-4">
    <label for="select" class="form-label">Select<span class="text-muted fw-normal ms-1">(required)</span></label>
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</form>
<br><br>
<form>
  <div class="mb-4 is-invalid">
    <label for="select2" class="form-label">Select<span class="text-danger fw-normal ms-1">(required)</span></label>
    <div class="invalid-feedback">
      <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
        <use xlink:href="${iconSprite}#tabler-alert-circle" />
      </svg>This field is required.
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</form>
`

export const Select = () => `<div>${select_html}</div>`

Select.storyName = '<select>'

Select.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${select_html}
  \`\`\`

  `
}

const textarea_html = `
<form>
<div class="mb-4">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea<span class="text-muted fw-normal ms-1">(required)</span></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
</form>
<br><br>
<form>
  <div class="mb-4 is-invalid">
    <label for="exampleFormControlTextarea2" class="form-label">Example textarea<span class="text-danger fw-normal ms-1">(required)</span></label>
    <textarea class="form-control" id="exampleFormControlTextarea2" rows="5"></textarea>
  </div>
</form>
`

export const Textarea = () => `<div>${textarea_html}</div>`

Textarea.storyName = '<textarea>'

Textarea.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${textarea_html}
  \`\`\`

  `
}

const input_checkbox_html = `
<form>
  <div class="mb-4">
    <fieldset>
      <legend>Checkbox Group<span class="text-muted fw-normal ms-1">(required)</span></legend>
      <div id="checkboxHelpBlock" class="form-text">Select ones that apply to you</div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck1">
        <label class="form-check-label" for="flexCheck1">
          Andre Clayton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck2">
        <label class="form-check-label" for="flexCheck2">
          Jimmy Briggs      
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck3" checked>
        <label class="form-check-label" for="flexCheck3">
          Rosalie Jacobs 
        </label>
      </div>
    </fieldset>
  </div>
</form>
<br><br>
<form>
  <div class="mb-4 is-invalid">
    <fieldset>
      <legend>Checkbox Group<span class="text-danger fw-normal ms-1">(required)</span></legend>
      <div class="invalid-feedback">
        <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
          <use xlink:href="${iconSprite}#tabler-alert-circle" />
        </svg>This field is required.
      </div>
      <div id="checkbox2HelpBlock" class="form-text">Please enter an email (not school)</div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck4">
        <label class="form-check-label" for="flexCheck4">
          Andre Clayton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck5">
        <label class="form-check-label" for="flexCheck5">
          Jimmy Briggs      
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheck6">
        <label class="form-check-label" for="flexCheck6">
          Rosalie Jacobs 
        </label>
      </div>
    </fieldset>
  </div>
</form>
`

export const InputCheckbox = () => `<div>${input_checkbox_html}</div>`

InputCheckbox.storyName = '[type="checkbox"]'

InputCheckbox.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${input_checkbox_html}
  \`\`\`

  `
}

const input_radio_html = `
<form>
  <div class="mb-4">
    <fieldset>
      <legend>Radio Group<span class="text-muted fw-normal ms-1">(required)</span></legend>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          Andre Clayton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
          Jimmy Briggs      
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
        <label class="form-check-label" for="flexRadioDefault3">
          Rosalie Jacobs 
        </label>
      </div>
    </fieldset>
  </div>
</form>
<br><br>
<form>
  <div class="mb-4 is-invalid">
    <fieldset>
      <legend>Radio Group<span class="text-danger fw-normal ms-1">(required)</span></legend>
      <div class="invalid-feedback">
        <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
          <use xlink:href="${iconSprite}#tabler-alert-circle" />
        </svg>This field is required.
      </div>
      <div id="radioHelpBlock" class="form-text">Please enter an email (not school)</div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
        <label class="form-check-label" for="flexRadioDefault4">
          Andre Clayton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5">
        <label class="form-check-label" for="flexRadioDefault5">
          Jimmy Briggs      
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6">
        <label class="form-check-label" for="flexRadioDefault6">
          Rosalie Jacobs 
        </label>
      </div>
    </fieldset>
  </div>
</form>
`

export const InputRadio = () => `<div>${input_radio_html}</div>`

InputRadio.storyName = '[type="radio"]'

InputRadio.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${input_radio_html}
  \`\`\`

  `
}

const input_file_html = `
<form>
  <div class="mb-4">
    <fieldset>
      <div class="form-file">
        <label class="form-label" for="inputGroupFile01">
          Simple File Upload<span class="text-muted fw-normal ms-1">(required)</span>
        </label>
        <input type="file" class="form-control" id="inputGroupFile01">
      </div>
    </fieldset>
  </div>
</form>
<br><br>
<form>
  <div class="mb-4 is-invalid">
    <fieldset>
      <div class="form-file">
        <label class="form-label" for="inputGroupFile02">
          Simple File Upload<span class="text-danger fw-normal ms-1">(required)</span>
        </label>
        <div class="invalid-feedback">
          <svg width="1.25rem" height="1.25rem" class="mt-n1 me-1">
            <use xlink:href="${iconSprite}#tabler-alert-circle" />
          </svg>This field is required.
        </div>
        <input type="file" class="form-control" id="inputGroupFile02">
      </div>
    </fieldset>
  </div>
</form>
`

export const InputFile = () => `<div>${input_file_html}</div>`

InputFile.storyName = '[type="file"]'

InputFile.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${input_file_html}
  \`\`\`

  `
}
