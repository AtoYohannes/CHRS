import React from "react";
import ImageUploader from "react-images-upload";

const PicturesAdd = () => {
  const onDrop = (picture) => {
    this.setState({});
  };
  return (
    <div>
      <ImageUploader
        label="Max file size: 2mb, accepted: jpg png"
        withIcon={true}
        withPreview={true}
        buttonText="Choose Your Hotel Pictures"
        onChange={onDrop}
        imgExtension={[".jpg", ".png"]}
        maxFileSize={2242880}
      />
    </div>
  );
};
export default PicturesAdd;
