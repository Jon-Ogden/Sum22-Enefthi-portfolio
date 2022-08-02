// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { useNavigate } from "react-router-dom";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import "../../../Css/newnft.css";
import { Button } from "@mui/material";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const NewNft = () => {
  const [title, setTitle] = useState("");
  const [for_sale, setFor_Sale] = useState("true");
  const [saleprice, setSalePrice] = useState(0);
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const [files, setFiles] = useState([]);
  let navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    console.log("cliked");
    if (files[0]) {
      data.append("file", files[0].file);
    }
    data.append("title", title);
    data.append("for_sale", for_sale);
    data.append("saleprice", saleprice);
    data.append("description", description);
    data.append("user_id", user.id);

    try {
      let res = await axios.post("/api/nfts", data);
      console.log(res.data);
      navigate("/myuser");
    } catch (err) {
      alert("err creating nft");
      console.log(err);
    }
  };

  const handleUpdateFiles = (fileItems) => {
    console.log("fileItems:", fileItems[0].file);
    setFiles(fileItems);
  };
  return (
    <div className="newnft">
      <form onSubmit={HandleSubmit}>
        <h3 className="inputtext">Title*</h3>
        <input
          className="inputnft"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3 className="inputtext">For sale? (True or False)</h3>
        <input
          className="inputnft"
          value={for_sale}
          onChange={(e) => setFor_Sale(e.target.value)}
        />
        <h3 className="inputtext">List Price</h3>
        <input
          className="inputnft"
          value={saleprice}
          onChange={(e) => setSalePrice(e.target.value)}
        />
        <h3 className="inputtext">Description*</h3>
        <input
          className="inputnft"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br />
        <button className="inputtext" type="submit">submit</button>
      <div className="filedrop">
        <FilePond
          className="filedrop"
          files={files}
          onupdatefiles={handleUpdateFiles}
          allowMultiple={false}
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        </div>
      </form>
    </div>
  );
};
export default NewNft;
