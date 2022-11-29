/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "../assets/all.min.css"
import "../assets/bootstrap.min.css"
import "../assets/templatemo-style.css"
import Contact from "../molekul/contact"
import Fusce from "../molekul/Fusce"
import Gallery from "../molekul/gallery"
import Intro from "../molekul/intro"
import Linking from "../molekul/linking"
import Logo from "../molekul/logo"
import Our_place from "../molekul/our_place"
import Outro from "../molekul/outro"
export default function Homepage() {
    return(
  <>
    {/* Linking stylesheet and stylefont */}
    <Linking/>
    {/* /.columns-bg */}
    <div className="columns-bg">
    {/* Logo & Intro */}
    <Logo/>
    {/* Intro */}
    <Intro/>
    {/* Our Place */}
    <Our_place/>
    {/* Fusce, Section 4 */}
    <Fusce/>
    {/* Beautiful Rollovers */}
    <Gallery/>
    {/* Contact */}
    <Contact/>
    {/* Outro */}
    <Outro/>
    </div>
  </>

    )
}