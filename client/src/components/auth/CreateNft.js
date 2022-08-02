import "../../Css/shiftleft.css";
import NewNft from "./ImageUpload/NewNft";

const CreateNft = () => {
  return (
    <div className="shiftleft">
      <div className="uploadart">
      <h1>Upload Art</h1>
      </div>
      <div>
        <NewNft />
      </div>
    </div>
  );
};

export default CreateNft;
