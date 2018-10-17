import Popup from "reactjs-popup";
import React from 'react';
export default () => (
    <Popup trigger={<button>Trigger</button>} position="top left">
      {close => (
        <div>
          Content here
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  );