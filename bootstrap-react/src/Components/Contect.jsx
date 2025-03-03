import React from 'react'

function Contect() {
  return (
    <div className='container mt-4 p-3 '>
        <form className="row g-3 needs-validation border p-2 rounded" novalidate>
        <div className="col-md-4 position-relative">
            <label for="validationTooltip01" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationTooltip01" value="Mark" required/>
            <div className="valid-tooltip">
            Looks good!
            </div>
        </div>
        <div className="col-md-4 position-relative">
            <label for="validationTooltip02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationTooltip02" value="Otto" required/>
            <div className="valid-tooltip">
            Looks good!
            </div>
        </div>
        <div className="col-md-4 position-relative">
            <label for="validationTooltipUsername" className="form-label">Username</label>
            <div className="input-group has-validation">
            <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
            <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
            <div className="invalid-tooltip">
                Please choose a unique and valid username.
            </div>
            </div>
        </div>
        <div className="col-md-6 position-relative">
            <label for="validationTooltip03" className="form-label">City</label>
            <input type="text" className="form-control" id="validationTooltip03" required/>
            <div className="invalid-tooltip">
            Please provide a valid city.
            </div>
        </div>
        <div className="col-md-3 position-relative">
            <label for="validationTooltip04" className="form-label">State</label>
            <select className="form-select" id="validationTooltip04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
            </select>
            <div className="invalid-tooltip">
            Please select a valid state.
            </div>
        </div>
        <div className="col-md-3 position-relative">
            <label for="validationTooltip05" className="form-label">Zip</label>
            <input type="text" className="form-control" id="validationTooltip05" required/>
            <div className="invalid-tooltip">
            Please provide a valid zip.
            </div>
        </div>
        <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
        </form>

    </div>
  )
}

export default Contect