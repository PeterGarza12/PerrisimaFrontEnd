import { CardImg } from "reactstrap";
import portada from './../../Res/portada.jpg';

export default function AboutUs(){
  return(
      <div className="mainPage d-flex flex-column">
          <CardImg
              alt="Card image cap"
              src={portada}
              style={{
                  width: "100%",
                  height: "100%",
              }}
          />

          <div className="text-center col-sm-12">
            15 años de experiencia en aplicación de uñas acrílicas makeup artist y lash lover
          </div>
      </div>
  );
}