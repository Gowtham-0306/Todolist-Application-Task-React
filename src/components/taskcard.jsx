import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
export default function Taskcard({
  tasktitle = String,
  taskdesc = String,
  handleedit = {},
  handledelete = {},
  taskid = Number,
  status = String,
  handlestatus = () =>{}
}) {
 
  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h6>Task title:{tasktitle}</h6>
              <h6> Task desc: {taskdesc}</h6>
              <label htmlFor="dropdown">Status:</label>
              <select
                name="select"
                id="selecttt"
                value={status} 
                onChange={(e) =>{ handlestatus(taskid , e.target.value);}}
              >
               
                <option value="Not completed">Not completed</option>
                <option value="completed"> completed</option>
              </select>
              <div className="editdelbuttons">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  id="editbutton"
                  onClick={() => {
                    handleedit(tasktitle, taskdesc, taskid);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  id="deletebutton"
                  onClick={() => {
                    handledelete(tasktitle, taskdesc, taskid);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


Taskcard.propTypes = {
  tasktitle: PropTypes.string,
  taskdesc: PropTypes.string,
  handleedit: PropTypes.func,
  handledelete: PropTypes.func,
  taskid: PropTypes.number,
  status: PropTypes.string,
  handlestatus: PropTypes.func
};