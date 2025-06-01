import blogImage from "../../public/images/blogImage.png";

export default function VideoModal({handleClose}) {

    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, harum?</p>
                <img className="md-img" src={blogImage.src} alt="" />
            </div>
            <style jsx> {`
            .modal {display: block;
            position: fixed;
            padding-top: 100px;
            top: 0;
            left: 0;
            z-index: 99;
            background:  #a6a6a6;
            width: 100%;
            height: 100%;
            

            }
            .modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 8px;
  width: 350px;
  height: auto;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.md-img {
width: 100%;
}
            `}</style>
        </div>
    );
}