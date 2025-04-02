import { BriefcaseBusiness, MapPin, SquareParking } from "lucide-react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[700px] flex bg-[url(/img/section1-background.png)] bg-center bg-no-repeat bg-cover bg-fixed">
          <article className="max-w-[585px] m-auto text-white text-center uppercase pt-6 pb-10 sm:p-7 bg-[#27697ca3]">
            <h1 className="text-[30px] sm:text-[40px] font-bold">
              Bureaux à Rueil Malmaison
            </h1>
            <p className="text-[15px] sm:text-[18px] font-medium py-5">
              Location de bureaux à destination des entreprises
            </p>
            <a href="#" className="border py-3 px-4 text-[14px] sm:text-[16px]">
              Découvez nos bureaux à louer
            </a>
          </article>
        </section>
        <section className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-3 py-20 sm:p-10">
          <article>
            <div className="sm:m-[-25px]">
              <h2 className="text-[#27697C] text-2xl font-medium mt-16">
                Rueil Malmaison
              </h2>
              <h3 className="text-3xl font-bold uppercase">
                Location de Bureaux professionnels
              </h3>
            </div>
            <div className="flex items-center mt-18">
              <hr className="w-30 h-1 bg-[#27697C]" />
              <p className="text-[16px] leading-9 text-lg font-normal">
                Foncière Pagerie Malmaison est une entreprise de location de
                bureaux professionnels située 16 avenue des Chateaupieds 92500
                RUEIL-MALMAISON. Nos bureaux sont conçus pour répondre aux
                besoins des entreprises modernes et offrir un environnement de
                travail confortable et stimulant pour les professionnels. Avec
                un design épuré et une attention portée aux détails, nos locaux
                sont équipés pour répondre à vos exigences. Nous sommes
                convaincus que nos bureaux sont l’endroit idéal pour les
                entreprises ambitieuses et nous invitons tous les professionnels
                à venir visiter nos locaux pour découvrir l’expérience Foncière
                Pagerie Malmaison.
              </p>
            </div>
            <div className="sm:pl-12">
              <a
                href="#"
                className="mt-6 inline-block bg-[#27697C] text-center sm:text-start text-white py-3 px-6 text-lg rounded-sm hover:bg-white hover:text-[#27697C] border-2 border-[#27697C] transition-all duration-300"
              >
                En savoir plus sur Rueil Malmaison
              </a>
            </div>
          </article>
          {/* Image pour faire le slide d'image :
              https://fonciere-pagerie-malmaison.com/wp-content/uploads/2023/04/IMG_0653-scaled.jpeg

              https://fonciere-pagerie-malmaison.com/wp-content/uploads/2023/04/IMG_5114-scaled.jpeg

              https://fonciere-pagerie-malmaison.com/wp-content/uploads/2023/08/IMG_6137.jpg

              https://fonciere-pagerie-malmaison.com/wp-content/uploads/2023/04/IMG_5146-scaled.jpeg

              https://fonciere-pagerie-malmaison.com/wp-content/uploads/2023/04/IMG_5121-scaled.jpeg

              https://fonciere-pagerie-malmaison.com/wp-content/uploads/2023/04/IMG_5156-scaled.jpeg 
          */}
          <img
            src="https://fonciere-pagerie-malmaison.com/wp-content/uploads/2023/04/IMG_0653-scaled.jpeg"
            alt="Salle à manger"
            className="w-full h-[80%] mt-10"
          />
        </section>
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-18 px-3 py-20 sm:p-16">
          <div className="text-center items-center">
            <div className="justify-items-center">
              <BriefcaseBusiness size="20%" color="#27697C" />
            </div>
            <p className="pt-1">32 Bureaux loués</p>
          </div>
          <div className="text-center items-center">
            <div className="justify-items-center">
              <MapPin size="20%" color="#27697C" />
            </div>
            <address className="pt-1">16 avenue des Chateaupieds</address>
            <address className="pt-1">92500 RUEIL MALMAISON</address>
          </div>
          <div className="text-center items-center">
            <div className="justify-items-center">
              <SquareParking size="20%" color="#27697C" />
            </div>
            <p className="pt-1">Parking à proximité</p>
          </div>
        </section>
        <section className="bg-[#27697C] text-white px-3 py-20 sm:p-16">
          <article className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-18">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src="img/section3-img1.jpg"
                alt="Illustration"
                className="object-cover w-full h-[80%] sm:col-span-2"
              />
              <img
                src="img/section3-img2.jpg"
                alt="Illustration"
                className="object-cover w-full h-[80%]"
              />
              <img
                src="img/section3-img3.jpg"
                alt="Illustration"
                className="object-cover w-full h-[80%]"
              />
              <img
                src="img/section3-img4.jpg"
                alt="Illustration"
                className="object-cover w-full h-[80%]"
              />
              <img
                src="img/section3-img5.jpg"
                alt="Illustration"
                className="object-cover w-full h-[80%]"
              />
            </div>
            <div>
              <h2 className="text-2xl">Bureaux à Meaux</h2>
              <h3 className="text-3xl mt-4">
                Location de bureaux professionnels
              </h3>
              <p className="mt-6 text-lg">
                Découvrez cette opportunité unique au sein d’un immeuble moderne
                polyvalent, qui combine à la fois des espaces de bureaux et des
                logements. Idéalement situé en face de la cité administrative,
                cet emplacement stratégique vous assure une visibilité optimale
                pour votre entreprise.
              </p>
              <p className="mt-4 text-lg">
                Les bureaux, situés aux 1er et 2ème étages et accessibles par un
                ascenseur, offrent un environnement de travail agréable avec une
                abondance de lumière naturelle et des installations pratiques.
                De plus, des terrasses sont disponibles pour vous permettre de
                vous détendre ou d’échanger en plein air.
              </p>
              <p className="mt-4 text-lg">
                Nous vous proposons des surfaces flexibles de 800 m² et 200 m²,
                parfaitement adaptées aux besoins de divers projets
                professionnels. Pour obtenir plus d’informations ou organiser
                une visite, n’hésitez pas à nous contacter. C’est une
                opportunité à ne pas manquer !
              </p>
              <a
                href="#"
                className="mt-6 inline-block bg-white text-[#27697C] text-center sm:text-start py-3 px-6 text-lg rounded-sm hover:bg-[#27697C] hover:text-white hover:border transition-all duration-300"
              >
                En savoir plus sur les bureaux de Meaux
              </a>
            </div>
          </article>
        </section>
        <section className="max-w-6xl mx-auto text-center px-3 py-20 sm:p-16">
          <p className="text-[#27697C] text-[20px] smtext-2xl font-semibold">
            Nos bureaux à louer
          </p>
          <h2 className="text-[22px] sm:text-3xl font-bold mt-4">
            Rueil Malmaison et Meaux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12">
            <div>
              <img
                src="img/section4-img1.jpg"
                alt="Illustration"
                className="w-full h-auto"
              />
              <p className="mt-4 text-lg">Bureaux 116+117 26.5m²</p>
            </div>
            <div>
              <img
                src="img/section4-img2.jpg"
                alt="Illustration"
                className="w-full h-auto"
              />
              <p className="mt-4 text-lg">Lot 112 : 67 m²</p>
            </div>
            <div>
              <img
                src="img/section4-img3.jpg"
                alt="Illustration"
                className="w-full h-auto"
              />
              <p className="mt-4 text-lg">Lot C : 184 m²</p>
            </div>
          </div>
          <a
            href="#"
            className="mt-6 inline-block bg-[#27697C] text-white py-3 px-6 text-lg rounded-sm hover:bg-white hover:text-[#27697C] hover:border transition-all duration-300"
          >
            Voir tous les bureaux
          </a>
        </section>
        <section
          id="section-5"
          className="bg-[#859399] text-white px-3 py-20 sm:p-16"
        >
          <div className="max-w-[700px] m-auto">
            <h2 className="max-w-4xl m-auto text-[20px] font-semibold pt-6">
              Nous contacter
            </h2>
            <h3 className="max-w-screen-xl mx-auto text-3xl font-bold mb-12">
              Pour une question ou une visite
            </h3>
            <form
              action=""
              className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Votre Nom"
                className="min-h-[30px] w-auto p-2 border border-[#27697C] rounded bg-white placeholder:text-gray-500"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Votre Prenom"
                className="min-h-[30px] w-auto p-2 border border-[#27697C] rounded bg-white placeholder:text-gray-500"
              />
              <input
                type="text"
                name=""
                id="entreprise"
                placeholder="Votre Entreprise"
                className="min-h-[30px] p-2 border border-[#27697C] rounded sm:col-span-2 bg-white placeholder:text-gray-500"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Votre E-mail"
                className="min-h-[30px] p-2 border border-[#27697C] rounded bg-white placeholder:text-gray-500"
              />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Votre Telephone"
                className="min-h-[30px] p-2 border border-[#27697C] rounded bg-white placeholder:text-gray-500"
              />
              <textarea
                name=""
                id="textarea"
                placeholder="Message"
                rows="10"
                className="min-h-[30px] p-2 border border-[#27697C] rounded sm:col-span-2 bg-white placeholder:text-gray-500 "
              ></textarea>

              <label htmlFor="scales" className="sm:col-span-2 text-sm">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  className="mr-[12px]"
                />
                En remplissant ce formulaire, je consens à ce que les
                informations que j'ai fournies soient envoyées par e-mail
                exclusivement à Foncière Pagerie Malmaison, destinataire unique,
                dans le but d'être contacté au sujet de ma demande. Je suis
                conscient(e) que j'ai le droit de modifier, d'accéder et de
                supprimer mes informations personnelles.
              </label>
            </form>

            <a
              href="#"
              className="mt-6 inline-block bg-[#27697C] text-white py-3 px-6 text-lg rounded-sm hover:bg-white hover:text-[#27697C] hover:border transition-all duration-300"
            >
              Envoyer
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
