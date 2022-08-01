import "../../Css/shiftleft.css";
import "../../Css/settings.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";

const Settings = () => {
  return (
    <div className="shiftleft">
      <div className="container">
        
        {/* <p>Update your photo and personal details here</p> */}

        {/* <div className="buttons">
          <h4> Every change automaticly saved</h4>
          <Button>Preview</Button>
          <Button>Cancel</Button>
        </div> */}
        {/* <div className="userinfo">
          <h3>Your photo</h3>
          <hr />
          <Avatar /> <h4>Edit Your Photo</h4>
          <Button>Delete</Button>
          <Button>Update</Button>
          <h2>Drop box</h2>
        </div> */}

        <div className="personalinfo">
        <h3>Edit Your Profile</h3>
          <hr />
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Full Name"
            variant="filled"
          />
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Email"
            variant="filled"
          />
          <br />
          <TextField
          required
            id="filled-helperText"
            label="required"
            defaultValue="Username"
            variant="filled"
          />
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Details"
            variant="filled"
          />
          
          <br />
          <TextField
             required
             id="filled-helperText"
             label="required"
            defaultValue="Website"
            variant="filled"
          />
          {/* <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Biography"
            variant="filled"
          /> */}
          <Button            variant="contained">Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
