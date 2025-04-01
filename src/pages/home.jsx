import { BriefcaseBusiness, MapPin, SquareParking } from "lucide-react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[700px] flex bg-amber-400">
          <article className="max-w-[585px] m-auto text-white text-center uppercase p-7 bg-[#27697ca3]">
            <h1 className="text-[40px] font-bold">Bureaux à Rueil Malmaison</h1>
            <p className="text-[18px] font-medium py-5">
              Location de bureaux à destination des entreprises
            </p>
            <a href="#" className="border py-3 px-4">
              Découvez nos bureaux à louer
            </a>
          </article>
        </section>
        <section>
          <article>
            <p>Rueil Malmaison</p>
            <h2>Location de Bureaux Professionnels</h2>
            <div>
              <hr />
              <div>
                <p>
                  Foncière Pagerie Malmaison est une entreprise de location de
                  bureaux professionnels située 16 avenue des Chateaupieds 92500
                  RUEIL-MALMAISON. Nos bureaux sont conçus pour répondre aux
                  besoins des entreprises modernes et offrir un environnement de
                  travail confortable et stimulant pour les professionnels. Avec
                  un design épuré et une attention portée aux détails, nos
                  locaux sont équipés pour répondre à vos exigences. Nous sommes
                  convaincus que nos bureaux sont l’endroit idéal pour les
                  entreprises ambitieuses et nous invitons tous les
                  professionnels à venir visiter nos locaux pour découvrir
                  l’expérience Foncière Pagerie Malmaison.
                </p>
                <a href="#">En savoir plus sur rueil Malmaison</a>
              </div>
            </div>
          </article>
          {/* Faire défiler les images */}
          <img src="" alt="" />
        </section>
        <section>
          <div>
            <BriefcaseBusiness />
            <p>32 Bureaux loués</p>
          </div>
          <div>
            <MapPin />
            <address>16 avenue des Chateaupieds</address>
            <address>92500 RUEIL MALMAISON</address>
          </div>
          <div>
            <SquareParking />
            <p>Parking à proximité</p>
          </div>
        </section>
        <section>
          <div></div>
          <article>
            <p>Bureaux à Meaux</p>
            <h2>Location de Bureaux Professionnels</h2>
            <p>
              Découvrez cette opportunité unique au sein d’un immeuble moderne
              polyvalent, qui combine à la fois des espaces de bureaux et des
              logements. Idéalement situé en face de la cité administrative, cet
              emplacement stratégique vous assure une visibilité optimale pour
              votre entreprise.
            </p>
            <p>
              Les bureaux, situés aux 1er et 2ème étages et accessibles par un
              ascenseur, offrent un environnement de travail agréable avec une
              abondance de lumière naturelle et des installations pratiques. De
              plus, des terrasses sont disponibles pour vous permettre de vous
              détendre ou d’échanger en plein air.
            </p>
            <p>
              Nous vous proposons des surfaces flexibles de 800 m² et 200 m²,
              parfaitement adaptées aux besoins de divers projets
              professionnels. Pour obtenir plus d’informations ou organiser une
              visite, n’hésitez pas à nous contacter. C’est une opportunité à ne
              pas manquer !
            </p>
            <a href="#">En savoir plus sur les bureaux de Meaux</a>
          </article>
        </section>
        <section>
          <p>Nos bureaux à louer</p>
          <h2>Rueil Malmaison et Meaux</h2>
          {/* Faire un carousselle */}
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <a href="#">Voir tous les bureaux</a>
        </section>
        <section>
          <p>Nous contacter</p>
          <h2>Pour une question ou une visite</h2>
          <form action="">
            <div>
              <input type="text" name="name" id="name" />
              <input type="text" name="prenom" id="prenom" />
            </div>
            <input type="text" name="" id="" />
            {/* Etc. voir ui.shadcn.com */}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
// react-dom_client.js?v=d6d80d49:12121 An empty string ("") was passed to the src attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string.