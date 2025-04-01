import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import SubTitle from "../../components/SubTitle/SubTitle";
import Paragraph from "../../components/Paragraph/Paragraph";
import TextBolder from "../../components/TextBolder/TextBolder";
import {
  ContentWrapper,
  TextContainer,
  Gallery,
  ListItem,
  List,
} from "./style";

import image1 from "../../assets/Images/1_hr.jpg";
import image2 from "../../assets/Images/2_hr.jpg";
import image3 from "../../assets/Images/3_hr.jpg";
import image4 from "../../assets/Images/4_hr.jpg";
import image5 from "../../assets/Images/5_hr.jpg";
import image6 from "../../assets/Images/6_hr.jpg";

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
  {
    original: image5,
    thumbnail: image5,
  },
  {
    original: image6,
    thumbnail: image6,
  },
];

const Investment = () => {
  return (
    <ContainerWidth>
      <TextWithChildrenComponent
        title="O inwestycji"
        subtitle="Spokój Natury i Bliskość Miasta"
        text="Vela Park to kameralna inwestycja zlokalizowana w Żukczynie, gmina Pruszcz Gdański, przy ulicy Nad Potokiem. To miejsce stworzone dla tych, którzy cenią ciszę, bliskość natury oraz komfort nowoczesnego budownictwa. Dzięki dogodnej lokalizacji mieszkańcy mogą cieszyć się zarówno urokami spokojnej okolicy, jak i szybkim dojazdem do Gdańska czy Pruszcza Gdańskiego."
      >
        <ContentWrapper>
          <TextContainer>
            <SubTitle>Funkcjonalność i Nowoczesny Standard</SubTitle>
            <div>
              <Paragraph>
                <TextBolder>
                  W ramach inwestycji powstaną dwa nowoczesne domy:
                </TextBolder>
              </Paragraph>
              <List>
                <ListItem>
                  <Paragraph>
                    Dom dwulokalowy – każda część o powierzchni{" "}
                    <TextBolder>120 m²</TextBolder> z przestronnym garażem i
                    funkcjonalnym układem pomieszczeń.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Dom wolnostojący – o powierzchni{" "}
                    <TextBolder>183 m²</TextBolder>, oferujący maksymalną
                    przestrzeń i prywatność.
                  </Paragraph>
                </ListItem>
              </List>
            </div>
            <div>
              <Paragraph>
                Domy w Vela Park spełniają wysokie standardy energooszczędności.
                Zamiast tradycyjnego ogrzewania gazowego zastosowaliśmy pompę
                ciepła, co zapewnia niższe koszty eksploatacji oraz większą
                troskę o środowisko.
              </Paragraph>
            </div>
            <div>
              <Paragraph>
                <TextBolder>Standard wykończenia:</TextBolder>
              </Paragraph>
              <List>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Energooszczędne rozwiązania</TextBolder> – pompa
                    ciepła, ogrzewanie podłogowe
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Duże przeszklenia</TextBolder> zapewniające
                    doskonałe doświetlenie wnętrz
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Wysokiej jakości stolarka okienna z roletami elektrycznymi
                  </Paragraph>
                </ListItem>
              </List>
            </div>
          </TextContainer>
          <Gallery>
            <ImageGallery
              showPlayButton={false}
              showNav={false}
              showBullets={false}
              items={images}
            />
          </Gallery>
        </ContentWrapper>

        <p>TABELA Z DOMAMI, CENAMI, WIZKAMI DO POBRANIA</p>
      </TextWithChildrenComponent>
    </ContainerWidth>
  );
};

export default Investment;
