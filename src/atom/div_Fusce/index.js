/* eslint-disable react/jsx-pascal-case */
import Image_Fuse from "./image_Fuse";
import Text_Fuse from "./text_Fuse";

export default function Div_Fuse() {
    return (
<>
    <div className="container-fluid">
    <div className="row flex-column-reverse flex-lg-row">
        <Text_Fuse/>
    <div className="col-md-12 col-lg-6 tm-section-image-container tm-img-right-container">
        <Image_Fuse/>
    </div>
    </div>
    </div>
</>
    )}