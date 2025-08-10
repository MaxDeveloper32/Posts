import Image from "next/image";
import "./preview-welcome.css";

const PreviewWelcome = () => {
  return (
    <div className="preview-welcome">
      <div className="preview-welcome__description">
        <h1 className="preview-welcome__title">
          100 posts to pass the time and just read ༼ つ ◕_◕ ༽つ
        </h1>

        <p className="preview-welcome__paragraph">
          Relax while reading! Read without delving into it. or maybe by delving
          into it. everything you need is a phone, tablet, PC, TV. Yes, whatever
          you want, the main thing is to be able to do it and have fun.
        </p>
      </div>

      <div className="preview-welcome__image-wrapper">
        <Image
          src="/preview-image.jpg"
          className="preview-welcome__image"
          alt="Welcome preview"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default PreviewWelcome;
