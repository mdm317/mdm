import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import img1 from "../../public/den.png";

export default function LottiePlayer({
  renderer,
  num,
  lottieInformation,
}: {
  renderer: "svg" | "canvas";
  num?: number;
  lottieInformation: any;
}) {
  const ref = useRef(null);
  const [visibleAsset, setVisibleAsset] = useState(false);
  const [visibleLayers, setVisibleLayers] = useState(false);
  const [visibleTextLayers, setVisibleTextLayers] = useState(false);
  const [lottiePlayerObj, setLottiePlayerObj] = useState<null | AnimationItem>(
    null
  );
  const [hiddenlayer, setHiddenlayer] = useState(
    [...new Array(30)].map(() => false)
  );
  const [li, setLi] = useState(lottieInformation);
  const handelHidden = (layerNum: number) => {
    hiddenlayer[layerNum] = !hiddenlayer[layerNum];
    setHiddenlayer([...hiddenlayer]);
    remakelottie();
  };
  const remakelottie = () => {
    const newLayers = (lottieInformation.layers as Array<any>).filter(
      (_, i) => hiddenlayer[i] !== true
    );
    setLi({
      ...lottieInformation,
      layers: newLayers,
    });
  };
  const handleChangeAsset = () => {
    li.assets[0].p = img1;
    setLi({ ...li });
  };
  useEffect(() => {
    if (ref.current) {
      if (lottiePlayerObj) {
        lottiePlayerObj.destroy();
      }
      // lottie.destroy();
      const lottieAnimation = lottie.loadAnimation({
        container: ref.current, // the dom element
        renderer: renderer,
        loop: true,
        autoplay: true,
        animationData: li,
      });
      lottieAnimation.setSpeed(1);
      // lottieAnimation.goToAndStop(100, true);
      setLottiePlayerObj(lottieAnimation);

      // lottieAnimation.setSpeed(5);
    }
  }, [li]);
  useEffect(() => {
    remakelottie();
  }, []);
  // const changeLayer = (id:number, text:string)=>{
  //   lottieInformation.layers[id].
  // }
  return (
    <>
      {visibleAsset &&
        (lottieInformation.assets as Array<any>)
          .filter((_, i) => i < 3)
          .map((asset, i) => (
            <div key={i}>
              <div>
                {/* <span> id {asset.id}</span> */}
                <button
                  onClick={() => {
                    asset.p = "https://picsum.photos/200";
                    remakelottie();
                  }}
                >
                  chage asset image
                </button>
                <button
                  onClick={() => {
                    console.log({ asset });
                  }}
                >
                  goto console
                </button>
                <img style={{ width: 100, height: 100 }} src={asset.p} />
              </div>
            </div>
          ))}
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "black",
        }}
      >
        <div ref={ref}></div>
      </div>
      <button onClick={handleChangeAsset}>change asset</button>
      <button
        onClick={() => {
          setVisibleAsset(!visibleAsset);
        }}
      >
        show asset
      </button>
      <button
        onClick={() => {
          setVisibleLayers(!visibleLayers);
        }}
      >
        show layers
      </button>
      <button
        onClick={() => {
          setVisibleTextLayers(!visibleTextLayers);
        }}
      >
        show text Layers
      </button>
      <button
        onClick={() => {
          lottiePlayerObj?.goToAndStop(50, true);
        }}
      >
        goto frame
      </button>
      <h3>name</h3>

      {visibleLayers &&
        (lottieInformation.layers as Array<any>).map((layer, i) => (
          <div key={i}>
            <div>
              <span> {layer.nm}</span>
              <button
                onClick={() => {
                  handelHidden(i);
                }}
              >
                {hiddenlayer[i] ? "보이기" : "숨기기"}
              </button>
              <button
                onClick={() => {
                  console.log({ layer });
                }}
              >
                goto console
              </button>
            </div>
          </div>
        ))}
      {visibleTextLayers &&
        (lottieInformation.layers as Array<any>).map((layer, i) => {
          if (layer.ty !== 5) return;
          return (
            <div key={i}>
              <div>
                <span> {layer.nm}</span>
                <input id={i.toString()}></input>
                <button
                  onClick={() => {
                    const inp = document.getElementById(`${i}`);
                    // @ts-ignore
                    const v = inp.value;

                    console.log(v);
                    // @ts-ignore
                    if (layer.t) {
                      layer.t.d.k[0].s.t = v;
                    }
                    // @ts-ignore
                    remakelottie();
                  }}
                >
                  click
                </button>
                <button
                  onClick={() => {
                    console.log({ layer });
                  }}
                >
                  goto console
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}
