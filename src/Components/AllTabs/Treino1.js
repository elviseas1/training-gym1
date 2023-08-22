import React from 'react';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const Treino1 = () => {
  const data = [
    {title: "Supino reto", serie: 4, repeticao: "10/10/8/8", video: 'https://www.youtube.com/watch?v=qIxaTwB_Rso&t=2s'},
    {title: "Crucifixo Inclinado", serie: 4, repeticao: "10/10/8/8", video: 'https://www.youtube.com/watch?v=psAspeInTLc'},
    {title: "Crossover", serie: 4, repeticao: "10/10/8/8", video: 'https://www.youtube.com/watch?v=occichNfEZU'},
    {title: "Voador", serie: 4, repeticao: "10/10/8/8", video: 'https://www.youtube.com/watch?v=nBFeb89nYwk'},
    {title: "Triceps pulley", serie: 4, repeticao: "10/10/8/8", video: 'https://www.youtube.com/watch?v=nC-US9vOHz8'},
    {title: "Triceps Corda", serie: 4, repeticao: "10/10/8/8", video: 'https://www.youtube.com/watch?v=5vPGH1uTtbs'},
    {title: "Triceps Inverso", serie: 3, repeticao: "12", video: 'https://www.youtube.com/watch?v=clIgM9l-tbw'},
    {title: "Desenvolvimento", serie: 4, repeticao: "10/10/8/8", video: 'https://www.youtube.com/watch?v=H71_wShmUPw'},

];


const playVideo = (movie) => {
  
    console.log('O vídeo está fechado. Clique no botão "Abrir Vídeo".');
    window.open(movie, '_blank');
};
  return (
    <div className="Treino2">
      <div>
        <p>Treino A</p>
      </div>
      
      <div>
      <Accordion  >
            {data.map((item, index) => (
                <AccordionItem key={index}>
                    {({open}) => (
                        <>
                            <AccordionHeader className="accordion">
                                <span>{item.title}</span>
                                
                            </AccordionHeader>

                            <AccordionBody className="accordionBody">
                                <div>
                                  <div className="accordion-body">Serie: {item.serie}</div>
                                  <div className="accordion-body">Repetições: {item.repeticao}</div>
                                  <div className="accordion-body">
                                    <button className="accordion-body-button" onClick={() => playVideo(item.video)}>Abrir Vídeo em Nova Aba</button>
                                  </div>
                                </div>
                            </AccordionBody>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
        </div>
    </div>
  );
};
export default Treino1;