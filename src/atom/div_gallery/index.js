/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Image_Gallery1 from "./image_gallery/index1";
import Image_Gallery2 from "./image_gallery/index2";
import Image_Gallery3 from "./image_gallery/index3";
import Image_Gallery4 from "./image_gallery/index4";
import Text_Gallery from "./text_gallery";
import Paragraph_Gallery from "./text_gallery/index1";
import HeaderText_Gallery from "./text_gallery/index2";

/* eslint-disable jsx-a11y/img-redundant-alt */
export default function Div_Gallery() {
    return (
        <>
      <div className="container-fluid">
        <div className="row">
              <HeaderText_Gallery/>
          <div className="col-12">
            <div className="grid">
              <figure className="effect-duke mb-3">
              <Image_Gallery1/>
              <Text_Gallery/>
              </figure>
              <figure className="effect-duke">
              <Image_Gallery2/>
              <Text_Gallery/>
              </figure>
              <figure className="effect-duke mb-3">
              <Image_Gallery3/>
              <Text_Gallery/>
              </figure>
              <figure className="effect-duke">
              <Image_Gallery4/> 
              <Text_Gallery/>
              </figure>
            </div>
          </div>
              <Paragraph_Gallery/>
        </div>
      </div>
        </>
    )}