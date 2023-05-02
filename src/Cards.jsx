import React from "react";

function Cards(data) {
  return (
    <>
      <img src={data.imgSrc} alt="myPic" className="card_img" />
      <div className="card_info">
        <span className="card_category"> {data.imgInfo}</span>
        <h3 className="card_title"> {data.title} </h3>

        <a href="" target="_black">
          <button className="watchnow_button">{data.title}</button>
        </a>
      </div>

      {/* <h1>Hi Test</h1> */}
    </>
  );
}

export default Cards;
