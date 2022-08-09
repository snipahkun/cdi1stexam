import "./styles.css";
import { ImageViewer } from "react-image-viewer-dv";
import img from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";

export default function App() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>

      <div className="Gallery">
        <div className="photoholder">
          <ImageViewer>
            <img src={img} alt="samplephoto" />
          </ImageViewer>
        </div>
        <div className="photoholder">
          <ImageViewer>
            <img src={img2} alt="samplephoto" />
          </ImageViewer>
        </div>
      </div>
    </div>
  );
}
